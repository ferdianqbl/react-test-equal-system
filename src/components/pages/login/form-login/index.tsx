"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { saveToken } from "@/lib/token";
import { login } from "@/services/login";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const FormLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);

  const submitHandler = async (e: any) => {
    setSubmitting(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await login(email, password);
    if (res.error) {
      setSubmitting(false);
      return toast({
        variant: "destructive",
        title: "Error",
        description: res.message,
      });
    }

    saveToken(res);
    setSubmitting(false);
    router.push("/");
  };

  return (
    <form
      className="flex items-center flex-col gap-4 w-full container"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col w-full items-center gap-2">
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Password" name="password" type="password" />
      </div>
      <Button
        variant={"outline"}
        className="w-full"
        type="submit"
        disabled={submitting}
      >
        <LoaderIcon
          className={`w-5 h-5 animate-spin ${submitting ? "block" : "hidden"}`}
        />
        <span className={submitting ? "hidden" : "block"}>Login</span>
      </Button>
    </form>
  );
};

export default FormLogin;
