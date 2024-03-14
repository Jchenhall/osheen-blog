"use client";

import React, { useEffect, useState } from "react";
import Container from "../../Container";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import MenuButton from "../menu-button/MenuButton";

type Props = {};

export const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About me",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className={
        "fixed top-0 left-0 right-0 block py-3 px-4 border-b z-[1] bg-background/90 backdrop-filter-blur overflow-y-hidden"
      }
    >
      <Container>
        <div className="px-6 lg:px-8 flex h-12 sm:h-14 md:h-16 items-center justify-between w-full">
          <div className="flex space-x-2">
            <MenuButton />
            <Link href="/">
              <div className="flex lg:flex-row gap-5">
                <Image
                  src={"/logo2.png"}
                  alt=""
                  width={55}
                  height={45}
                  className="object-cover rounded-md"
                />
                <div className="lg:flex flex-col justify-start items-start  hidden">
                  <h1 className="lg:text-2xl text-center font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                    Osheen M. Chenhall
                  </h1>
                  <h4 className="text-sm font-bold opacity-60 ">
                    Letting my curiosity wander unleashed
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <nav className=" flex items-center  space-x-4  md:space-x-8 lg:space-x-10 text-lg">
            {routes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="hidden sm:block"
              >
                {route.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className=" rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 hidden dark:block   transition-all  " />
              <Moon className="h-6 w-6 block dark:hidden transition-all " />
            </Button>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
