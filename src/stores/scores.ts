import { defineStore } from 'pinia'
import { auth, scores } from '../firebase';

interface Score {
  dnum: number,
  prop: string,
  opp: string,
  pscore: number,
  oscore: number,
}

export const scoreStore = defineStore('scores', {
  state: () => ({
    scores: [] as Score[],
    currentUser: null,
  }),
  getters: {
    getScores(state): any {
      return state.scores
    },
  },
  actions: {
    setLogin(user: any) {
      this.currentUser = user
    },
    setScores(scores: any) {
      this.scores = scores
    },
    clearUser() {
      this.currentUser = null
    },
  },
})

auth.onAuthStateChanged(user => {
  const store = scoreStore()
  if (user) {
    store.setLogin(user)
    scores
      .orderBy('dnum', 'desc')
      .onSnapshot((doc) => {
        let scoresList: any[] = [];
        doc.forEach(d => {
          let score = d.data()
          scoresList.push(score)
        });
      });
  }
})
