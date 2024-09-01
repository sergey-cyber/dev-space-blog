import { ToggleThemeButton } from "./toggle-theme-button";
import Link from "next/link";
import { Button } from "@/ui/shared/shadcn/ui/button";
import { Orbit } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/ui/shared/shadcn/ui/avatar";
import { ProfileMenu } from "./profile-menu";

export async function AppHeader() {
  return (
    <header className="w-full border-b">
      <div className="container flex justify-between  h-14 items-center">
        <Link href={"/"} className="font-bold">
          <div className="flex gap-x-2">
            <span>DEV</span>
            <span>
              <Orbit />
            </span>
            <span>SPACE</span>
          </div>
        </Link>
        <div className="flex space-x-5">
          <ToggleThemeButton />
          <Link href={"/"}>
            <Button>Войти</Button>
          </Link>
          <ProfileMenu>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ProfileMenu>
        </div>
      </div>
    </header>
  );
}
