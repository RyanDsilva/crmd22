<template>
  <div class="results">
    <v-table fixed-header>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia'
import { scoreStore } from '@/stores/scores'
import { scores as db } from '../firebase';

export default defineComponent({
  name: 'results',
  setup() {
    const store = scoreStore()
    if (store.currentUser) {
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
    }
    return { store }
  },
  computed: {
    ...mapState(scoreStore, ['currentUser', 'scores']),
  },
})
</script>

<style scoped>
.results {
  padding: 1.5rem 1.5rem;
}
</style>
