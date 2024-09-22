import { postsRoute } from "@/routes/post/posts-route";
import { buttonVariants } from "@/ui/shadcn/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/shadcn/ui/card";
import { Orbit, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container">
      <Card>
        <CardHeader className="gap-y-6">
          <div className="flex gap-x-2 justify-center text-7xl font-bold">
            <span>DEV</span>
            <span>
              <Orbit className="size-16" />
            </span>
            <span>SPACE</span>
          </div>
          <p className="text-gray-500 text-xl text-center">
            Пространство для разработчиков
          </p>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link
            href={postsRoute.getPath()}
            className={buttonVariants({ variant: "default" })}
          >
            К публикациям
            <MoveRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
