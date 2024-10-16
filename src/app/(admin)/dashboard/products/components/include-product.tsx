"use client";

import { useForm, Controller } from "react-hook-form";
import { nullable, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import { PackageIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import FetchCategories from "@/actions/fetch-categories";
import { Category } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Zod schema for validation
const productSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  productPrice: z
    .number()
    .positive("Preço deve ser positvo")
    .refine((value) => !isNaN(value), {
      message: "Insira um valor numérico válido para o preço",
    }),
});

const ProfileForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formattedPrice, setFormattedPrice] = useState("R$ 0,00");

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await FetchCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      productPrice: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log(values);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const numericValue = parseFloat(inputValue) / 100; // Transformar string em número com 2 casas decimais

    const formatted = `R$ ${numericValue.toFixed(2).replace(".", ",")}`; // Formata com 2 casas decimais
    setFormattedPrice(formatted);
    field.onChange(numericValue);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="">
          <PlusIcon size={18} />
          Adicionar produto
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full flex-col"
          >
            <SheetHeader>
              <div className="flex w-full flex-col gap-3">
                <Badge variant="heading">
                  <PackageIcon size={18} />
                  Dashboard
                </Badge>
              </div>
            </SheetHeader>
            <div className="flex flex-grow flex-col gap-3 overflow-auto px-2">
              <div className="mt-3 flex flex-col gap-2">
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Preço */}
              <div className="mt-3 flex flex-col gap-2">
              <FormField
                  control={form.control}
                  name="productPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preço</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={"R$ 0,00"}
                          value={formattedPrice}
                          onChange={(e) => handlePriceChange(e, field)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              
            </div>
            <SheetFooter className="mt-auto w-full">
              <Button type="submit" className="w-full">
                Adicionar produto
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileForm;
