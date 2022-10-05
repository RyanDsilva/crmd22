import { defineStore } from "pinia";
import { auth, scores, scoresAdj } from "../firebase";

interface Score {
  dnum: number;
  prop: string;
  opp: string;
  pscore: number;
  oscore: number;
}
interface ScoreAdj {
  dnum: number;
  adj: string;
  prop: string;
  opp: string;
  score: number;
}

export const scoreStore = defineStore("scores", {
  state: () => ({
    scores: [] as Score[],
    scoresAdj: [] as ScoreAdj[],
    currentUser: null,
  }),
  getters: {
    getScores(state): any {
      return state.scores;
    },
    getScoresAdj(state): any {
      return state.scoresAdj;
    },
  },
  actions: {
    setLogin(user: any) {
      this.currentUser = user;
    },
    setScores(scores: any) {
      this.scores = scores;
    },
    setScoresAdj(scores: any) {
      this.scoresAdj = scores;
    },
    clearUser() {
      this.currentUser = null;
    },
  },
});

auth.onAuthStateChanged((user) => {
  const store = scoreStore();
  if (user) {
    store.setLogin(user);
    scores.orderBy("dnum", "desc").onSnapshot((doc) => {
      let scoresList: any[] = [];
      doc.forEach((d) => {
        let score = d.data();
        scoresList.push(score);
      });
      store.setScores(scoresList);
    });
    scoresAdj.orderBy("dnum", "desc").onSnapshot((doc) => {
      let scoresList: any[] = [];
      doc.forEach((d) => {
        let score = d.data();
        scoresList.push(score);
      });
      store.setScoresAdj(scoresList);
    });
  }
});
