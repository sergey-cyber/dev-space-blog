import { auth } from "@/auth";
import { User } from "@prisma/client";

export class AuthService {
  constructor() {}

  public async getPrincipal() {
    const session = await auth();
    return session?.user as User | undefined;
  }
}

export const authService = new AuthService();
