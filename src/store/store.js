import { create } from 'zustand'

const useStore = create((set) => ({
    modalObj: null,
    updateModalObj: newObj => set({ modalObj: newObj }),

    modalObjAddItem: null,
    updateModalObjAddItem: newObj => set({ modalObjAddItem: newObj }),

    banner: null,
    updateBanner: bannertekst => set({ banner: bannertekst })


    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))

export { useStore }
