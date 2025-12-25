import { create } from "zustand";

interface PageState {
  isAdminPage: boolean;
  setIsAdminPage: (isAdmin: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isAdminPage: false,
  setIsAdminPage: (isAdmin) => set({ isAdminPage: isAdmin }),
}));

// Convenience hook
export const useIsAdminPage = () => usePageStore((state) => state.isAdminPage);
