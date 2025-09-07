"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import logo from "../../../../../public/images/logo-black.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod/v3";
import { signInSchema } from "@/lib/zodSchema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ButtonLoading from "@/components/ui/Application/ButtonLoading";
const LoginPage = () => {
  const formSchema = signInSchema.pick({
    email: true,
    password: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const hadldLogin = async (values) => {
    console.log(values);
  };

  return (
    <Card className="w-[450px]">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="logo"
            className="max-w-[150px]"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Login Into Account</h1>
          <p>Login into your account by filling out the form below.</p>
        </div>
        <div className=" mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(hadldLogin)}
              className="space-y-8"
            >
              <div className=" mb-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" mb-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <ButtonLoading
                  type="submit"
                  text="login"
                  className="w-full"
                ></ButtonLoading>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
