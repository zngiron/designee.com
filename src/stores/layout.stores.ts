import { create } from 'zustand';

interface State {
  isMenuOpen: boolean;
}

interface Action {
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  onToggleMenu: () => void;
}

export const useLayoutStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  onOpenMenu: () =>
    set({
      isMenuOpen: true,
    }),
  onCloseMenu: () =>
    set({
      isMenuOpen: false,
    }),
  onToggleMenu: () =>
    set((state) => ({
      isMenuOpen: !state.isMenuOpen,
    })),
}));
