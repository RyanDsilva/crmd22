<template>
  <div class="results">
    <v-tabs v-model="tab" background-color="primary">
      <v-tab value="judges">Judges</v-tab>
      <v-tab value="adj">Adjudicators</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="judges">
        <v-table class="p-4" fixed-header>
          <thead>
            <tr>
              <th>Debate No.</th>
              <th>Proposition</th>
              <th>PScore</th>
              <th>Opposition</th>
              <th>OScore</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="x in scores" :key="x.dnum">
              <td class="text-xs-center">{{ x.dnum }}</td>
              <td class="text-xs-center">{{ x.prop }}</td>
              <td class="text-xs-center">{{ x.pscore }}</td>
              <td class="text-xs-center">{{ x.opp }}</td>
              <td class="text-xs-center">{{ x.oscore }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="adj">
        <v-table class="p-4" fixed-header>
          <thead>
            <tr>
              <th>Debate No.</th>
              <th>Adjudicator Code</th>
              <th>Proposition</th>
              <th>Opposition</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="x in scoresAdj" :key="x.dnum">
              <td class="text-xs-center">{{ x.dnum }}</td>
              <td class="text-xs-center">{{ x.adj }}</td>
              <td class="text-xs-center">{{ x.prop }}</td>
              <td class="text-xs-center">{{ x.opp }}</td>
              <td class="text-xs-center">{{ x.score }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia'
import { scoreStore } from '@/stores/scores'
import { scores as db, scoresAdj as dbA } from '../firebase';

export default defineComponent({
  name: 'results',
  setup() {
    const store = scoreStore()
      db
        .orderBy('dnum', 'desc')
        .onSnapshot((doc) => {
          let _scoresList: any[] = [];
          doc.forEach(d => {
            let score = d.data()
            _scoresList.push(score)
          });
          store.setScores(_scoresList)
        });
      dbA
        .orderBy('dnum', 'desc')
        .onSnapshot((doc) => {
          let _scoresList: any[] = [];
          doc.forEach(d => {
            let score = d.data()
            _scoresList.push(score)
          });
          store.setScoresAdj(_scoresList)
        });
    return { store }
  },
  data() {
    return {
      tab: null,
    }
  },
  computed: {
    ...mapState(scoreStore, ['currentUser', 'scores', 'scoresAdj']),
  },
})
</script>

<style scoped>
.results {
  padding: 1.5rem 1.5rem;
}
</style>
