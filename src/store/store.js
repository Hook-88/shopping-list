import { create } from 'zustand'

export const useStore = create((set) => ({
    confirmDialogObj: null,
    updateConfirmDialogObj: (newObj) => set({ confirmDialogObj: newObj }),

    listFilters: [],
    clearFilters: () => set({ listFilters: [] }),
    addFilter: filterString => set(state => {
        if (!state.listFilters.includes(filterString)) {
            return {
                listFilters: [...state.listFilters, filterString]
            }
        }

        return { listFilters: state.listFilters }
    }),
    removeFilter: filterString => set(state => {
        if (state.listFilters.includes(filterString)) {
            return {
                listFilters: state.listFilters.filter(filter => filter !== filterString)
            }
        }

        return { listFilters: state.listFilters }
    }),

    banner: null,
    setBannerText: textString => set(state => ({ banner: {...state.banner, bannerText: textString}})),
    clearBanner: () => set({ banner: null })


    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))

