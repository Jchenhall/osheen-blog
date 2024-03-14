"use client";
import React, { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    //POST request to /api/addBlogSubscription
    await fetch("/api/addSubscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit}>
      <div className="flex flex-row justify-center items-center w-full">
        <h4 className="text-nowrap pr-2 opacity-50">
          Do not miss out on the next blog
        </h4>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <input
            type="email"
            className="border-2 border-border rounded-md p-2 w-full"
            placeholder="Email address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <Button type="submit" variant={"secondary"}>
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
