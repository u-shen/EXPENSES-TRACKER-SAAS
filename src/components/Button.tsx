"use client";
import { deleteExpenses } from "@/actions/expenses";
export default function Button({ id }: { id: number }) {
  return (
    <button
      onClick={() => deleteExpenses(id)}
      className="bg-red-600 hover:bg-red-800 font-bold px-1 text-white"
    >
      X
    </button>
  );
}
