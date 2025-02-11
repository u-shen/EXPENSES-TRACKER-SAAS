import { addExpenses } from "@/actions/expenses";

export default function Form() {
  return (
    <form
      action={addExpenses}
      className="flex my-2 bg-white flex-col gap-2 rounded-md shadow-md"
    >
      <input
        className="p-4 border-b rounded focus:outline-none"
        placeholder="description"
        type="text"
        name="description"
      />
      <input
        className="p-2 rounded focus:outline-none"
        placeholder="amount"
        type="number"
        name="amount"
      />
      <button className="text-white bg-blue-600 rounded focus:outline-none py-2">
        Add expense
      </button>
    </form>
  );
}
