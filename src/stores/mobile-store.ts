import { create } from "zustand";

interface MobileState {
  isMobile: boolean | undefined;
  setIsMobile: (isMobile: boolean | undefined) => void;
}

export const useMobileStore = create<MobileState>((set) => ({
  isMobile: undefined,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

// Convenience hook
export const useIsMobile = () => useMobileStore((state) => state.isMobile);
