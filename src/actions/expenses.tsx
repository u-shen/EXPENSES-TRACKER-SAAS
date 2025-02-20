"use server";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Stripe from "stripe";

//Add Expense
export async function addExpenses(formData: FormData): Promise<void> {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (formData.get("description") === "") return;
  await prisma.expense.create({
    data: {
      amount: Number(formData.get("amount")) as number,
      description: formData.get("description") as string,
      author: {
        create: {
          email: user.email as string,
          name: user.id as string,
        },
      },
    },
  });
  revalidatePath("/dashboard");
}

// Delete Expense
export async function deleteExpenses(id: string) {
  await prisma.expense.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard");
}

// Delete All Expenses
export async function deleteMany() {
  await prisma.expense.deleteMany();
  await prisma.user.deleteMany();
  revalidatePath("/dashboard");
}

// Stripe Payment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function generateStripe() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const session = await stripe.checkout.sessions.create({
    customer_email: user.email!,
    line_items: [
      {
        price: "price_1QtjpjKnn2hAjQoPzZnJ3lY4",
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "https://expenses-tracker-saas.vercel.app/dashboard",
    cancel_url: "https://expenses-tracker-saas.vercel.app",
  });
  return redirect(session.url!);
}
