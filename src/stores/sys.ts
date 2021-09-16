import { defineStore } from 'pinia'

export const useSysStore = defineStore({
  id: 'sys',
  state() {
    return {
      sidebarOpen: true,
      notificationOpen: false,
      profileOpen: false,
    }
  },
  getters: {
    getSidebarOpen(): boolean {
      return this.sidebarOpen
    },
    getNotificationOpen(): boolean {
      return this.notificationOpen
    },
    getProfileOpen(): boolean {
      return this.profileOpen
    },
  },
  actions: {
    toggleSidebarOpen() {
      this.sidebarOpen = !this.sidebarOpen
    },
    toggleNotificationOpen() {
      this.notificationOpen = !this.notificationOpen
    },
    toggleProfileOpen() {
      this.profileOpen = !this.profileOpen
    },
  },
})
