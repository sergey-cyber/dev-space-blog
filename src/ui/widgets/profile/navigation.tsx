"use client";

import { myPosts, personalInfoRoute } from "@/routes/self/self-route";
import { Button } from "@/ui/shared/shadcn/ui/button";
import { NotebookText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ProfileNavigation() {
  const pathname = usePathname();
  const navItems = [
    {
      path: personalInfoRoute.getPath(),
      label: "Личная информация",
      icon: <User />,
    },
    {
      path: myPosts.getPath(),
      label: "Мои публикации",
      icon: <NotebookText />,
    },
  ];

  return (
    <nav className="flex flex-col gap-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Button
            className={`flex justify-start text-base ${isActive ? "pointer-events-none" : ""} gap-2`}
            variant={isActive ? "outline" : "link"}
          >
            {item.icon}
            <Link href={item.path}>{item.label}</Link>
          </Button>
        );
      })}
    </nav>
  );
}
