"use client";

import * as React from "react";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerOverlay,
} from "@/components/custom/DrawerWithoutHandle";
import { cn } from "@/lib/utils";

interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MobileNavbarDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  navigationItems: NavigationItem[];
  title?: string;
  showFooter?: boolean;
  footerText?: string;
  className?: string;
}

export default function MobileNavbarDrawer({
  isOpen,
  onOpenChange,
  navigationItems,
  showFooter = true,
  footerText = "Powered by Next.js",
  className,
}: MobileNavbarDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange} direction="bottom">
      <DrawerOverlay className="backdrop-blur-[2px] bg-black/25"/>
      <DrawerContent
        className={cn("border-none border-transparent", className)}
      >
        <DrawerHeader className="border-foreground mx-4 flex flex-row items-center justify-between border-b px-0 py-3">
          <DrawerTitle className="text-2xl font-bold">
            <span className="text-primary">Path</span>
            <span className="text-secondary">era</span>
          </DrawerTitle>
          <DrawerClose asChild>
            <button
              className="hover:bg-muted flex items-center justify-center rounded-md transition-colors"
              aria-label="Close navigation menu"
            >
              <FaXmark className="h-6 w-6" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex flex-col pt-3">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="hover:bg-muted group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors"
                onClick={() => onOpenChange(false)}
              >
                <IconComponent className="group-hover:text-primary h-5 w-5 transition-colors" />
                <span className="group-hover:text-primary font-medium transition-colors">
                  {item.label}
                </span>
              </Link>
            );
          })}

          {showFooter && (
            <div className="w-full px-4 pt-3">
              <p className="border-foreground border-t py-3 text-center text-xs">
                {footerText}
              </p>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
