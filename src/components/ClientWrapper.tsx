"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMobileStore } from "@/stores/mobile-store";
import { usePageStore } from "@/stores/page-store";

// Import navbar and footer components
import AdminNavbar from "./custom/desktop/AdminNavbar";
import AdminFooter from "./custom/desktop/AdminFooter";
import Navbar from "./custom/desktop/Navbar";
import Footer from "./custom/desktop/Footer";
import MobileAdminNavbar from "./custom/mobile/MobileAdminNavbar";
import MobileAdminFooter from "./custom/mobile/MobileAdminFooter";
import MobileNavbar from "./custom/mobile/MobileNavbar";
import MobileFooter from "./custom/mobile/MobileFooter";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const setIsMobile = useMobileStore((state) => state.setIsMobile);
  const setIsAdminPage = usePageStore((state) => state.setIsAdminPage);

  const isAdmin = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  useEffect(() => {
    setIsAdminPage(isAdmin);
  }, [isAdmin, setIsAdminPage]);

  // Select appropriate navbar and footer based on admin/mobile state
  let NavbarComponent, FooterComponent;

  if (isAdmin) {
    NavbarComponent = isMobile ? MobileAdminNavbar : AdminNavbar;
    FooterComponent = isMobile ? MobileAdminFooter : AdminFooter;
  } else {
    NavbarComponent = isMobile ? MobileNavbar : Navbar;
    FooterComponent = isMobile ? MobileFooter : Footer;
  }

  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
}
