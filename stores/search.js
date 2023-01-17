export const useSearchStore = defineStore('search', {
  state: () => ({
    searchOpen: ref(false),
    fromPage: ref("/"),
    query: ref("")
  }),

  actions: {
    
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
    },

    openSearch() {
      this.searchOpen = true
    },

    closeSearch() {
      this.searchOpen = false
    },

    setFromPage(page) {
      this.fromPage = page
    }
  }

})