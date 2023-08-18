import { defineStore } from 'pinia'
export const useSearchStore = defineStore('search', () => {
    let searchInput = ref('');


    return { searchInput }
})