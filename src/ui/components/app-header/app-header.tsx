import { ToggleThemeButton } from "./toggle-theme-button";
import Link from "next/link";
import { Button } from "@/ui/shadcn/ui/button";
import { Orbit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/shadcn/ui/avatar";
import { ProfileMenu } from "./profile-menu";
import { signinRoute } from "@/routes/auth/signin-route";
import { authService } from "@/service/auth/authService";

export async function AppHeader() {
  const user = await authService.getPrincipal();

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
          {!user ? (
            <Link href={signinRoute.getPath()}>
              <Button>Войти</Button>
            </Link>
          ) : (
            <ProfileMenu>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user.image || undefined} alt="avatar" />
                <AvatarFallback>
                  {user.name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </ProfileMenu>
          )}
        </div>
      </div>
    </header>
  );
}
