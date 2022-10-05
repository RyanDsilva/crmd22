<template>
  <div class="main-form">
    <h6 class="text-h6">Judges Scores</h6>
    <br />
    <v-form ref="scoreForm" v-model="valid" lazy-validation>
      <v-text-field
        v-model="dnum"
        :rules="dNumRules"
        label="Debate Number"
        required
      ></v-text-field>
      <v-tabs v-model="tab" background-color="primary">
        <v-tab value="prop">Proposition</v-tab>
        <v-tab value="opp">Opposition</v-tab>
      </v-tabs>
      <br />
      <v-window class="main-content" v-model="tab">
        <v-window-item value="prop">
          <!-- Form Begin -->
          <v-text-field
            v-model="prop"
            :counter="5"
            :rules="nameRules"
            label="Team Code"
            required
          ></v-text-field>
          <v-tabs v-model="propSpeaker" background-color="primary">
            <v-tab value="1">Speaker 1</v-tab>
            <v-tab value="2">Speaker 2</v-tab>
          </v-tabs>
          <v-window v-model="propSpeaker">
            <v-window-item value="1">
              <br />
              <h6 class="text-h6">Judge 1</h6>
              <br />
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organization and Clarity Of Points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge1.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis:Use of Facts/Statistics"
                required
              ></v-text-field>
              <h6 class="text-h6">Judge 2</h6>
              <br />
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organization and Clarity Of Points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker1.judge2.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <!-- <h6 class="text-h6">Judge 3</h6>
              <br>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f1" :counter="1" :rules="scoreRules"
                label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f2" :counter="1" :rules="scoreRules"
                label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f3" :counter="1" :rules="scoreRules"
                label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f4" :counter="1" :rules="scoreRules"
                label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f5" :counter="1" :rules="scoreRules"
                label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge3.f6" :counter="1" :rules="scoreRules"
                label="Rapport established with Partner" required></v-text-field> -->
            </v-window-item>
            <v-window-item value="2">
              <br />
              <h6 class="text-h6">Judge 1</h6>
              <br />
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organization and Clarity Of Points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge1.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <h6 class="text-h6">Judge 2</h6>
              <br />
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organization and Clarity Of Points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="pScoreObj.speaker2.judge2.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <!-- <h6 class="text-h6">Judge 3</h6> -->
              <!-- <br>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f1" :counter="1" :rules="scoreRules"
                label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f2" :counter="1" :rules="scoreRules"
                label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f3" :counter="1" :rules="scoreRules"
                label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f4" :counter="1" :rules="scoreRules"
                label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f5" :counter="1" :rules="scoreRules"
                label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge3.f6" :counter="1" :rules="scoreRules"
                label="Rapport established with Partner" required></v-text-field> -->
            </v-window-item>
          </v-window>
          <!-- Form End -->
        </v-window-item>
        <v-window-item value="opp">
          <!-- Form Begin -->
          <v-text-field
            v-model="opp"
            :counter="5"
            :rules="nameRules"
            label="Team Code"
            required
          ></v-text-field>
          <v-tabs v-model="oppSpeaker" background-color="primary">
            <v-tab value="1">Speaker 1</v-tab>
            <v-tab value="2">Speaker 2</v-tab>
          </v-tabs>
          <v-window v-model="oppSpeaker">
            <v-window-item value="1">
              <br />
              <h6 class="text-h6">Judge 1</h6>
              <br />
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organisation and Clarity of points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge1.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <h6 class="text-h6">Judge 2</h6>
              <br />
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organisation and Clarity of points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker1.judge2.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <!-- <h6 class="text-h6">Judge 3</h6>
              <br>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f1" :counter="1" :rules="scoreRules"
                label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f2" :counter="1" :rules="scoreRules"
                label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f3" :counter="1" :rules="scoreRules"
                label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f4" :counter="1" :rules="scoreRules"
                label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f5" :counter="1" :rules="scoreRules"
                label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge3.f6" :counter="1" :rules="scoreRules"
                label="Rapport established with Partner" required></v-text-field> -->
            </v-window-item>
            <v-window-item value="2">
              <br />
              <h6 class="text-h6">Judge 1</h6>
              <br />
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organisation and Clarity of points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge1.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <h6 class="text-h6">Judge 2</h6>
              <br />
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f1"
                :counter="1"
                :rules="scoreRules"
                label="Diction and Confidence"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f2"
                :counter="1"
                :rules="scoreRules"
                label="Organisation and Clarity of points"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f3"
                :counter="1"
                :rules="scoreRules"
                label="Engagement with the Opposition"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f4"
                :counter="1"
                :rules="scoreRules"
                label="Coordination with partner"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f5"
                :counter="1"
                :rules="scoreRules"
                label="Use of Rebuttal and Cross-Examination"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                v-model="oScoreObj.speaker2.judge2.f6"
                :counter="1"
                :rules="scoreRules"
                label="Analysis: Use of Facts/Statistics"
                required
              ></v-text-field>
              <!-- <h6 class="text-h6">Judge 3</h6>
              <br>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f1" :counter="1" :rules="scoreRules"
                label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f2" :counter="1" :rules="scoreRules"
                label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f3" :counter="1" :rules="scoreRules"
                label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f4" :counter="1" :rules="scoreRules"
                label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f5" :counter="1" :rules="scoreRules"
                label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge3.f6" :counter="1" :rules="scoreRules"
                label="Rapport established with Partner" required></v-text-field> -->
            </v-window-item>
          </v-window>
          <!-- Form End -->
        </v-window-item>
      </v-window>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 px-16"
        @click="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { calc } from "../functions/private";
import { scoreStore } from "@/stores/scores";
import { mapState } from "pinia";
import { scores as db } from "../firebase";

export default defineComponent({
  name: "submit_scores",
  data: () => ({
    valid: true,
    tab: null,
    propSpeaker: null,
    oppSpeaker: null,
    dnum: "",
    prop: "",
    opp: "",
    pscore: "",
    pScoreObj: {
      speaker1: {
        judge1: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        judge2: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        // judge3: {
        //   f1: '',
        //   f2: '',
        //   f3: '',
        //   f4: '',
        //   f5: '',
        //   f6: '',
        // },
      },
      speaker2: {
        judge1: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        judge2: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        // judge3: {
        //   f1: '',
        //   f2: '',
        //   f3: '',
        //   f4: '',
        //   f5: '',
        //   f6: '',
        // },
      },
    },
    oScoreObj: {
      speaker1: {
        judge1: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        judge2: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        // judge3: {
        //   f1: '',
        //   f2: '',
        //   f3: '',
        //   f4: '',
        //   f5: '',
        //   f6: '',
        // },
      },
      speaker2: {
        judge1: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        judge2: {
          f1: "",
          f2: "",
          f3: "",
          f4: "",
          f5: "",
          f6: "",
        },
        // judge3: {
        //   f1: '',
        //   f2: '',
        //   f3: '',
        //   f4: '',
        //   f5: '',
        //   f6: '',
        // },
      },
    },
    oscore: "",
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
  }),
  computed: {
    ...mapState(scoreStore, ["currentUser", "scores"]),
  },
  methods: {
    submit() {
      this.calculate();
      db.add({
        dnum: this.dnum,
        prop: this.prop,
        opp: this.opp,
        pscore: this.pscore,
        oscore: this.oscore,
      })
        .then((ref) => {
          this.clear();
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clear() {},
    calculate() {
      this.pscore = calc(this.pScoreObj);
      this.oscore = calc(this.oScoreObj);
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
