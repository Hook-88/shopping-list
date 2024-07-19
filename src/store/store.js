import { create } from 'zustand'

const useStore = create((set) => ({
    modalObj: null,
    updateModalObj: newObj => set({ modalObj: newObj }),

    modalObjAddItem: null,
    updateModalObjAddItem: newObj => set({ modalObjAddItem: newObj }),

    banner: null,
    updateBanner: bannertekst => set({ banner: bannertekst }),

    filters: [],
    addFilter: newFilter => set(state => {
        if (state.filters.includes(newFilter)) {
            return {
                filters: state.filters
            }
        }
        return {
            filters: [...state.filters, newFilter]
        }
    }),
    removeFilter: oldFilter => set(state => ({ filters: state.filters.filter(filter => filter !== oldFilter)})),
    clearFilters: () => set({ filters: [] })
    


    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))

export { useStore }

