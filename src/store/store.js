import { create } from 'zustand'

export const useUIStore = create(set => ({
    onAddItem: false,
    setOnAddItem: value => set(() => ({ onAddItem: value })),
    toggleOnAddItem: () => set(state => ({ onAddItem: !state.onAddItem })),

}))
