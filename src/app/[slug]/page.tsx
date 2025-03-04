import dineIn from "@/assets/dine_in.png";
import takeAway from "@/assets/take_away.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GetRestauranteBySlug } from "../data/get-restaurante-by-slug";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = await GetRestauranteBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-300 px-6 pt-24">
      <div className="flex flex-col items-center gap-2 bg-blue-600">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />

        <h2>{restaurant.name}</h2>
      </div>
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos a oferecer
          praticamente sabor em cada detalhe!
        </p>
      </div>

      <div className="grid grid-cols-2 pt-14 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <div className="relative h-[80px] w-[80px]">
              <Image
                src={dineIn}
                alt="Para comer aqui"
                fill
                className="object-contain"
              />
            </div>

            <Button className="rounded-full" variant="secondary" asChild>
              <Link
                href={`/${slug}/menu?consumptionMethod=${ConsumptionMethod.DINE_IN}`}
              >
                Para comer aqui
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <div className="relative h-[80px] w-[80px]">
              <Image
                src={takeAway}
                alt="Para levar"
                fill
                className="object-contain"
              />
            </div>

            <Button className="rounded-full" variant="secondary" asChild>
              <Link
                href={`/${slug}/menu?consumptionMethod=${ConsumptionMethod.TAKEWAY}`}
              >
                Para levar
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
