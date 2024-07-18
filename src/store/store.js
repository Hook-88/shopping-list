import { create } from 'zustand'

const useStore = create((set) => ({
    modalObj: null,
    updateModalObj: newObj => set({ modalObj: newObj })


    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))

export { useStore }
