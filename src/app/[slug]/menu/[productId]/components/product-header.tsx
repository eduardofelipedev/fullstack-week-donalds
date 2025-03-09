"use client";
import { Button } from "@/components/ui/button";
import type { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
  const router = useRouter();
  function HandleBack() {
    router.back();
  }
  return (
    <div className="relative h-[300px] w-full">
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute top-4 left-4 z-50 rounded-full"
        onClick={HandleBack}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute top-4 right-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
}
