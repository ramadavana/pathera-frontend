"use client";

import { useState } from "react";
import {
  FaBars,
  FaHouse,
  FaCircleInfo,
  FaRightToBracket,
  FaPenToSquare,
} from "react-icons/fa6";
import MobileNavbarDrawer from "@/components/custom/mobile/MobileNavbarDrawer";
import BaseInput from "../BaseInput";

export default function MobileNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: FaHouse,
    },
    {
      href: "/about",
      label: "About",
      icon: FaCircleInfo,
    },
    {
      href: "/login",
      label: "Login",
      icon: FaRightToBracket,
    },
    {
      href: "/register",
      label: "Register",
      icon: FaPenToSquare,
    },
  ];

  return (
    <>
      <div className="bg-primary flex w-full items-center justify-between px-4 py-2 gap-4">
        <BaseInput type="text" placeholder="Search..." className="text-foreground bg-background flex-1" />

        <button
          className="group flex aspect-square items-center justify-center"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open navigation menu"
        >
          <FaBars className="text-background group-hover:text-secondary aspect-square h-6 w-6 transition-colors" />
        </button>
      </div>

      <MobileNavbarDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        navigationItems={navigationItems}
      />
    </>
  );
}
