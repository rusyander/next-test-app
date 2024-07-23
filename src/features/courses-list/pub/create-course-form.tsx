"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCourseAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { CreateListElementCommand } from "../model/types";
import { cn } from "@/shared/ui/utils";

const createCourseFormSchema = z.object({
  name: z.string().nonempty("Имя не должно быть пустым"),
  description: z.string().nonempty("Описание не должно быть пустым"),
});
// createCounseAction
export default function CreateCourseForm({
  revalidatePagePath,
  className,
}: {
  revalidatePagePath: string;
  className: string;
}) {
  const [isCreateCourses, startCreateCourses] = useTransition();

  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleCreateCourse = async (data: CreateListElementCommand) => {
    startCreateCourses(async () => {
      await createCourseAction(data, revalidatePagePath);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateCourse)}
        className={cn("space-y-8", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Описание" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <Button type="submit" disabled={isCreateCourses}>
            Добавить
          </Button>
        </FormItem>
      </form>
    </Form>
  );
}
