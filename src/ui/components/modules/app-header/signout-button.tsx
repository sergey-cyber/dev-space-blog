"use client";

import { DropdownMenuItem } from "@/ui/shadcn/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { logOut } from "@/server-actions/auth/actions";

export function SignOut() {
  return (
    <DropdownMenuItem onClick={async () => await logOut()}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Выйти</span>
    </DropdownMenuItem>
  );
}
