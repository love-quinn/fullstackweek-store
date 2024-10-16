"use server"

import { prismaClient } from "@/lib/prisma";

const FetchCategories = async () => {
  const categories = await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });

  return categories;
}
 
export default FetchCategories;