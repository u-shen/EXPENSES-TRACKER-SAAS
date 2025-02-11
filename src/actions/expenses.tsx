"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function addExpenses(formData: FormData) {
  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")) as number,
    },
  });
  revalidatePath("/dashboard");
}

export async function deleteExpenses(id: string) {
  await prisma.expense.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard");
}
