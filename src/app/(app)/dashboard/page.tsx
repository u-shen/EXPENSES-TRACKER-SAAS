import Button from "@/components/Button";
import Form from "@/components/form";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dasboard() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const auth = await isAuthenticated();
  if (!auth) {
    redirect("/api/auth/login");
  }
  const expenses = await prisma.expense.findMany({
    where: {
      author: {
        email: user.email as string,
      },
    },
  });
  return (
    <div className="dashboard max-w-[761px] mx-auto max-sm:mx-4 text-white/50">
      <h2 className="text-4xl text-white max-md:text-xl rounded-md p-4 text-center">
        Dashboard
      </h2>
      {expenses.length == 0 ? (
        <Form />
      ) : (
        <ul className="items-start my-4 space-y-3">
          <li className="flex-1 rounded-md shadow border-2 sm:border-4 shadow-black bg-white p-1 flex flex-col max-md:text-sm">
            {expenses.map((item) => {
              return (
                <div
                  key={item.id}
                  className="list-border text-black flex items-center gap-2 p-2"
                >
                  <div>{item.description}</div>
                  <div className="ml-auto font-bold">{`$${item.amount}`}</div>
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
