"use server";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

//Add Expense
export async function addExpenses(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (formData.get("description") === "") return null;
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
