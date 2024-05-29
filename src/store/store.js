import { create } from 'zustand'

export const useUIStore = create(set => ({
    showAddItem: false,
    toggleShowAddItem: () => set(state => ({ showAddItem: !state.showAddItem })),
}))
