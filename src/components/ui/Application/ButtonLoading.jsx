import React from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "../button";
import { cn } from "@/lib/utils";
const ButtonLoading = ({ type, text, className, loading, onClick }) => {
  return (
    <Button
      type={type}
      size="sm"
      disabled={loading}
      onClick={onClick}
      className={cn("", className)}
    >
      {loading && <Loader2Icon className="animate-spin" />}

      {text}
    </Button>
  );
};

export default ButtonLoading;
