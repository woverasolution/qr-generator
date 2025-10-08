import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "rounded-full mt-3"
        )}
      >
        <Home /> Home
      </Link>
    </div>
  );
};

export default HomeButton;
