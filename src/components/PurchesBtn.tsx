"use Client";

import { generateStripe } from "@/actions/expenses";

export default function PurchesBtn() {
  return (
    <button
      onClick={generateStripe}
      className="bg-black text-white px-2 py-2 rounded-md"
    >
      Purchase
    </button>
  );
}
