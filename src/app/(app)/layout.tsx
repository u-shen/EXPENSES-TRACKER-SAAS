import Background from "@/components/background";
import Header from "@/components/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <div className="my-10 relative container mx-auto">{children}</div>
    </>
  );
}
