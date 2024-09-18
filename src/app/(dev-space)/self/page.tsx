import { personalInfoRoute } from "@/routes/self/self-route";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  return redirect(personalInfoRoute.getPath());
}
