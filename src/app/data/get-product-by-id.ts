import { db } from "@/lib/prisma";

export async function GetProductById(productId: string) {
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  });

  return product;
}
