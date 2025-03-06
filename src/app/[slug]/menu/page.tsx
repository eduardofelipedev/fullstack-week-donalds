import { GetRestauranteBySlug } from "@/app/data/get-restaurante-by-slug";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface MenuRestaurantPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

export default async function RestaurantMenuPage({
  params,
  searchParams,
}: MenuRestaurantPageProps) {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  const restaurant = await GetRestauranteBySlug(slug);

  function ConsumptionMethodValid(consumptionMethod: string) {
    return ["DINE_IN", "TAKEWAY"].includes(consumptionMethod.toUpperCase());
  }
  if (!restaurant || !ConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
}
