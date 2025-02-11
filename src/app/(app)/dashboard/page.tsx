import Button from "@/components/Button";
import Form from "@/components/form";
import { prisma } from "@/lib/prisma";

export default async function Dasboard() {
  const expenses = await prisma.expense.findMany();
  const expenseCount = await prisma.expense.count();
  console.log(expenseCount);
  return (
    <div className="dashboard">
      <h2 className="text-4xl text-center uppercase">Dashboard</h2>
      {expenseCount == 0 ? (
        <Form />
      ) : (
        <ul className="my-4 space-y-3">
          <li className=" rounded-md shadow-md bg-white p-4 flex flex-col">
            {expenses.map((item) => {
              return (
                <div
                  key={item.id}
                  className="list-border flex items-center gap-2  p-2"
                >
                  <div>{item.description}</div>
                  <div className="ml-auto font-bold">{`${item.amount}$`}</div>
                  <Button id={item.id} />
                </div>
              );
            })}
          </li>
          <Form />
        </ul>
      )}
    </div>
  );
}
