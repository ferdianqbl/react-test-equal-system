import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const FormLogin = () => {
  return (
    <form className="flex items-center flex-col gap-4 w-full container">
      <div className="flex flex-col w-full items-center gap-2">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </div>
      <Button variant={"outline"} className="w-full" type="button">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
