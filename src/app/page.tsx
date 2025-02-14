import Image from "next/image";
import Demo from "../../public/dmeo.png";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="p-4 bg-gradient-to-bl from-teal-900 via-[#5DC9A8] to-teal-400 bg-[#5DC9A8]  min-h-screen ">
      <div className="flex max-md:flex-col gap-8 min-h-screen justify-center items-center">
        <div className="min-w-[360px] relative">
          <Image src={Demo} className="relative" alt="Demo Expenses Tracker" />
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
          <div className="flex gap-x-4">
            <LoginLink className="bg-black text-white py-2 px-4 rounded-lg font-medium">
              Login
            </LoginLink>
            <RegisterLink className="bg-black/50 text-white py-2 px-4 rounded-lg font-medium">
              Register
            </RegisterLink>
          </div>
        </div>
      </div>
    </main>
  );
}
