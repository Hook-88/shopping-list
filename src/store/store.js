import { create } from 'zustand'
import { useEffect } from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const useUIStore = create(set => ({
    onAddItem: false,
    setOnAddItem: value => set(() => ({ onAddItem: value })),
    toggleOnAddItem: () => set(state => ({ onAddItem: !state.onAddItem })),

}))

export const useShoppingListStore = create(set => ({
    shoppingList: [],
    getShoppingList: () => {
        const unsub = onSnapshot(doc(db, "shoppingList", "wA03LYangQz8a20aIKFV"), snapshot => {
            //sync up with local state
            set(() => ({shoppingList: snapshot.data().items}))
        })
        
        return unsub
    },
}))

