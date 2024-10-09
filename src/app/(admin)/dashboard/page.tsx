import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { prismaClient } from "@/lib/prisma";
import { endOfDay, startOfDay } from "date-fns";
import {
  CircleDollarSign,
  DollarSign,
  Landmark,
  Package,
  PackageIcon,
  PlusIcon,
  ShoppingBasket,
} from "lucide-react";

const DashboardPage = async () => {
  const orders = await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  const ordersConfirmed = await prismaClient.order.findMany({
    where: {
      status: "PAYMENT_CONFIRMED",
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  const products = await prismaClient.product.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  const categories = await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });

  const totalReceipt = ordersConfirmed.reduce((acc, orderConfirmed) => {
    const orderTotal = orderConfirmed.orderProducts.reduce(
      (orderAcc, orderProduct) => {
        const productPrice = Number(orderProduct.product.basePrice);
        const productTotal = productPrice * orderProduct.quantity;

        return orderAcc + productTotal;
      },
      0,
    );

    return acc + orderTotal;
  }, 0);

  const now = new Date();
  const startOfToday = startOfDay(now);
  const endOfToday = endOfDay(now);

  const ordersToday = await prismaClient.order.findMany({
    where: {
      status: "PAYMENT_CONFIRMED",
      createdAt: {
        gte: startOfToday,  // Greater than or equal to the start of today
        lte: endOfToday,    // Less than or equal to the end of today
      },
    },
    include: {
      orderProducts: {
        include: {
          product: true, // Includes product details like basePrice
        },
      },
    },
  });

  const totalReceiptToday = ordersToday.reduce((acc, order) => {
    const orderTotal = order.orderProducts.reduce((orderAcc, orderProduct) => {
      const productPrice = Number(orderProduct.product.basePrice);
      const productTotal = productPrice * orderProduct.quantity;
  
      return orderAcc + productTotal;
    }, 0);
  
    return acc + orderTotal;
  }, 0);

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <PackageIcon size={18} />
        Dashboard
      </Badge>

      <div className="flex w-full items-center justify-between gap-3">
        <div
          className="flex w-1/2 flex-col rounded-md  p-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(54,57,60,1) 0%, rgba(54,57,60,1) 35%, rgba(54,57,60,0.6) 100%);",
          }}
        >
          <div className="flex gap-1">
            <Landmark />
            <h1 className="text-lg">Total de receita</h1>
          </div>
          <h1 className="text-3xl font-bold">R$ {totalReceipt.toFixed(2)}</h1>
        </div>

        <div
          className="flex w-1/2 flex-col rounded-md p-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(54,57,60,1) 0%, rgba(54,57,60,1) 35%, rgba(54,57,60,0.6) 100%);",
          }}
        >
          <div className="flex gap-1">
            <DollarSign />
            <h1 className="text-lg">Receita Hoje</h1>
          </div>
          <h1 className="text-3xl font-bold">R$ {totalReceiptToday.toFixed(2)}</h1>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <Card className="flex w-[20%] justify-center gap-2">
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <CircleDollarSign className="text-primary" />
              <h3 className="text-3xl font-bold">{ordersConfirmed.length}</h3>
            </div>
            <h2 className="text-lg">Total de Vendas</h2>
          </CardHeader>
        </Card>

        <Card className="flex w-[20%] justify-center">
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <ShoppingBasket className="text-primary" />
              <h3 className="text-3xl font-bold">{orders.length}</h3>
            </div>
            <h2 className="text-lg">Total de Pedidos</h2>
          </CardHeader>
        </Card>

        <Card className="flex w-[20%] items-center justify-center">
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <Package className="text-primary" />
              <h3 className="text-3xl font-bold">{products.length}</h3>
            </div>
            <h2 className="text-lg">Produtos</h2>
          </CardHeader>
        </Card>

        <Card className="flex w-[20%] justify-center">
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <CircleDollarSign className="text-primary" />
              <h3 className="text-3xl font-bold">{categories.length}</h3>
            </div>
            <h2 className="text-lg">Categorias</h2>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
