"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { MenuCategory, Prisma, Restaurant } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { menuCategory: { include: { Product: true } } };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { Product: true };
}>;

export default function RestaurantCategories({
  restaurant,
}: RestaurantCategoriesProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoryWithProducts>(restaurant.menuCategory[0]);

  function HandleCategoryClick(category: MenuCategoryWithProducts) {
    setSelectedCategory(category);
  }
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl  bg-white ">
      <div className="p-5">
        <div className="flex items-center gap-3 ">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            height={45}
            width={45}
          />
          <div>
            <h2 className="font-semibold text-lg">{restaurant.name}</h2>
            <p className="text-xs opacity-55">{restaurant.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-green-500 mt-3">
          <ClockIcon size={12} />
          <p>Aberto</p>
        </div>
      </div>
      <ScrollArea className="w-full ">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant.menuCategory.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedCategory.id === category.id
                  ? "destructive"
                  : "secondary"
              }
              size="sm"
              className="rounded-full"
              onClick={() => HandleCategoryClick(category)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h3 className="px-5 font-semibold pt-2">
        {selectedCategory.name} ({selectedCategory.Product.length})
      </h3>
      <Products products={selectedCategory.Product} />
    </div>
  );
}
