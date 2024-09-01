"use client";

import { DropdownMenuItem } from "@/ui/shared/shadcn/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <DropdownMenuItem onClick={async () => console.log("Logout")}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Выйти</span>
    </DropdownMenuItem>
  );
}
