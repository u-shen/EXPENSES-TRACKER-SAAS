import Image from "next/image";
import Demo from "../../public/demo.png";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
        <div className="container mx-auto flex max-md:flex-col gap-8 min-h-screen justify-center items-center">
          <div className="max-w-[800px] relative">
            <Image
              src={Demo}
              className="rounded-md"
              alt="Demo Expenses Tracker"
              width={700}
              height={472}
            />
          </div>
          <div className="desc text-xl max-md:text-[16px] flex flex-col gap-4">
            <h1 className="text-5xl max-md:text-xl font-semibold my-6 max-w-[500px]">
              Track your <span className="font-extrabold">expenses</span> with
              ease
            </h1>
            <p className="text-2xl max-md:text-lg font-medium max-w-[600px]">
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
    </>
  );
}
