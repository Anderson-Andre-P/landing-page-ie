import Footer from "@/components/ui/footer";
import About from "./about/page";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
