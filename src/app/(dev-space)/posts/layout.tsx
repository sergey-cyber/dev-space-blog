import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev space posts",
  description: "Posts pages",
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="container">{children}</section>;
}
