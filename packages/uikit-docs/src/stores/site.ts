import {defineStore} from 'pinia'

export const useSiteStore = defineStore('site', {
    state: () => {
        return {
            isLoggedIn: false,
            darkMode: false,
            username: "Kelvin",
            avatarUrl:  "https://gravatar.com/avatar/be975d7956a4527ffcb2e4d6c0908684?s=400&d=identicon&r=x"
        }
    },
    actions: {
        login() {
            this.isLoggedIn = true
        },
        logout() {
            this.isLoggedIn = false
        },
        switchTheme(dark: boolean) {
            this.darkMode = dark
        }
    }
})