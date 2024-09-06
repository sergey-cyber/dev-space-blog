import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/shared/shadcn/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { SignOut } from "./signout-button";
import { profileRoute } from "@/routes/profile/profile-route";

export function ProfileMenu(props: PropsWithChildren) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Link href={profileRoute.getPath()}>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Профиль
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
