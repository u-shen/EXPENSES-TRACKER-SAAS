import Image from "next/image";
import Link from "next/link";
import Demo from "../../public/dmeo.png";

export default function Home() {
  return (
    <main className="p-4 bg-green-300 min-h-screen ">
      <div className="flex max-md:flex-col gap-4 min-h-screen justify-center items-center">
        <div className="h-50">
          <Image src={Demo} alt="Demo Expenses Tracker" />
        </div>
        <div className="desc flex flex-col gap-4 text-black">
          <h1 className="text-3xl">
            Track your <span className="font-extrabold">expenses</span> with
            ease
          </h1>
          <p>
            Use Expenses Tracker to easily keep track of your expenses. Get
            lifetime access for $99.
          </p>
          <Link href="/dashboard">
            <button className="p-2 bg-black/100 text-white rounded-md bg-blue-500">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
