import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

//import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { link } from "fs";

type Props = {
  activeCourse: {imageSrc: string; title: string};
  hearts: number;
  points: number;
};

export const UserProgress = ({ 
    activeCourse,
    points,
    hearts, 
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
    <Link href="/courses">
        <Button variant="ghost">
            <Image
                src={activeCourse.imageSrc}
                alt={activeCourse.title}
                className="rounded-md border"
                width={32}
                height={32}
            />
        </Button>
    </Link>
    <Link href="/how to play">
        <Button variant="ghost" className="text-orange-500">
            <Image src="/points.svg" height={28} width={28} alt="Points" 
            className="mr-2" />
            {points}
        </Button>
    </Link>
    <Link href="/how to play">
        <Button variant="ghost" className="text-orange-500">
            <Image src="/hearts.svg" height={22} width={22} alt="hearts" 
            className="mr-2" />
            {hearts}
        </Button>
    </Link>
    </div>
  );
}; 