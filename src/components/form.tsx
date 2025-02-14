import { addExpenses } from "@/actions/expenses";

export default function Form() {
  return (
    <form
      action={addExpenses}
      className="text-black max-md:text-sm flex border-4 my-2 bg-white flex-col gap-2 rounded-md shadow-md shadow-black"
    >
      <input
        className="p-4 max-md:p-2 border-b rounded focus:outline-none"
        placeholder="description"
        type="text"
        name="description"
      />
      <input
        className="p-4 max-md:p-2 rounded focus:outline-none"
        placeholder="amount"
        type="number"
        name="amount"
      />
      <button className="text-white bg-teal-600 rounded-md hover:bg-teal-900 focus:outline-none p-4 max-md:p-2">
        Add expense
      </button>
    </form>
  );
}
