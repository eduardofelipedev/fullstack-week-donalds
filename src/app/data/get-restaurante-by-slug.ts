import { db } from "@/lib/prisma";

export async function GetRestauranteBySlug(slug: string) {
  const restaurant = await db.restaurant.findFirst({
    where: {
      slug: slug,
    },
    include: {
      menuCategory: { include: { Product: true } },
    },
  });

  return restaurant;
}
