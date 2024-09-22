import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/ui/shadcn/ui/card";
import { Prisma } from "@prisma/client";
import { UserAvatar } from "../../shared/user-avatar";

interface Props {
  comment: Prisma.CommentGetPayload<{ include: { user: true } }>;
}

export async function Comment({ comment }: Props) {
  const formatter = new Intl.DateTimeFormat("ru", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="flex gap-x-4">
      <UserAvatar user={comment.user} />
      <Card className="w-full ">
        <CardHeader className="py-2">
          <CardDescription className="flex justify-between items-center flex-nowrap">
            <span className="text-sm font-bold">{comment.user.name}</span>
            <span>{formatter.format(new Date(comment.createdAt))}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>{comment.content}</CardContent>
      </Card>
    </div>
  );
}
