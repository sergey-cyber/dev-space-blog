import { AppHeader } from "@/ui/widgets/app-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev space",
  description: "Spaace for developers",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AppHeader />
      <section className="container pt-6">{children}</section>
    </main>
  );
}
