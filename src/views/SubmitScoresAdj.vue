<template>
  <div class="main-form">
    <h6 class="text-h6">Adjudicator Scores</h6>
    <br />
    <v-form ref="scoreForm" v-model="valid" lazy-validation>
      <v-text-field v-model="dnum" :rules="dNumRules" label="Debate Number" required></v-text-field>
      <v-text-field v-model="adj" :rules="adjRules" label="Adjudicator Code" required></v-text-field>
      <v-tabs v-model="tab" background-color="primary">
        <v-tab value="prop">Proposition</v-tab>
        <v-tab value="opp">Opposition</v-tab>
      </v-tabs>
      <br>
      <v-window class="main-content" v-model="tab">
        <v-window-item value="prop">
          <v-text-field v-model="prop" :counter="5" :rules="nameRules" label="Team Code" required></v-text-field>
          <v-text-field type="number" v-model="pScoreObj.f1" :counter="1" :rules="scoreRules"
            label="Convincing Ability" required></v-text-field>
          <v-text-field type="number" v-model="pScoreObj.f2" :counter="1" :rules="scoreRules"
            label="Reasoning" required></v-text-field>
          <v-text-field type="number" v-model="pScoreObj.f3" :counter="1" :rules="scoreRules"
            label="Analysis" required></v-text-field>
        </v-window-item>
        <v-window-item value="opp">
          <v-text-field v-model="opp" :counter="5" :rules="nameRules" label="Team Code" required></v-text-field>
          <v-text-field type="number" v-model="oScoreObj.f1" :counter="1" :rules="scoreRules"
            label="Convincing Ability" required></v-text-field>
          <v-text-field type="number" v-model="oScoreObj.f2" :counter="1" :rules="scoreRules"
            label="Reasoning" required></v-text-field>
          <v-text-field type="number" v-model="oScoreObj.f3" :counter="1" :rules="scoreRules"
            label="Analysis" required></v-text-field>
        </v-window-item>
      </v-window>
      <v-btn :disabled="!valid" color="success" class="mr-4 px-16" @click="submit">
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { calcAdj } from "../functions/private";
import { scoreStore } from "@/stores/scores";
import { mapState } from "pinia";
import { scoresAdj as db } from "../firebase";

export default defineComponent({
  name: "submit_scores_adj",
  data: () => ({
    valid: true,
    tab: null,
    adj: "",
    dnum: "",
    prop: "",
    opp: "",
    score: "",
    pScoreObj: {
      f1: "",
      f2: "",
      f3: "",
    },
    oScoreObj: {
      f1: "",
      f2: "",
      f3: "",
    },
    nameRules: [
      (v: any) => !!v || "Team Code is required",
      (v: any) => (v && v.length === 5) || "Team Code must be 5 characters",
    ],
    scoreRules: [
      (v: any) => !!v || "Score is required",
      (v: any) => (v && v <= 4) || "Score must be less than or equal to 4",
    ],
    dNumRules: [
      (v: any) => !!v || "Debate Number is required",
      (v: any) => (v && v.length <= 3) || "Enter Valid Debate Number!",
    ],
    adjRules: [
      (v: any) => !!v || "Adjudicator Code is required",
      (v: any) => (v && v.length === 5) || "Enter Valid Adjudicator Code!",
    ],
  }),
  computed: {
    ...mapState(scoreStore, ["currentUser", "scores"]),
  },
  methods: {
    submit() {
      this.calculate();
      db.add({
        dnum: this.dnum,
        adj: this.adj,
        prop: this.prop,
        opp: this.opp,
        score: this.score,
      })
        .then((ref) => {
          this.clear();
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clear() { },
    calculate() {
      this.score = calcAdj(this.pScoreObj, this.oScoreObj);
    },
  },
  setup() {
    const scoreForm = ref(null);
    return {
      scoreForm,
    };
  },
});
</script>

<style scoped>
.main-form {
  padding: 1.5rem 4rem;
}

.main-content {
  width: 75%;
  min-width: 300px;
}
</style>
