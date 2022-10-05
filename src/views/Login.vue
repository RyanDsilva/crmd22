<template>
  <div>
    <v-form class="login-form-crmd">
      <v-text-field
        v-model="email"
        type="email"
        :rules="emailRules"
        label="E-mail"
        required
        validate-on-blur
      >
      </v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :rules="passRules"
        label="Password"
        required
        validate-on-blur
      >
      </v-text-field>
      <div class="action-btn">
        <v-btn class="my-4" @click="login"> Login </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { auth } from "../firebase";
import { scoreStore } from "@/stores/scores";

export default defineComponent({
  name: "login",
  setup() {
    const scoreStoreObj = scoreStore();
    return scoreStoreObj;
  },
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v: any) => !!v || "E-mail is required",
        (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passRules: [(v: any) => !!v || "Password is required"],
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.setLogin(user);
          this.$router.push("/judge");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>

<style scoped>
.login-form-crmd {
  width: 75%;
  margin: 2em auto;
}

.action-btn {
  margin: 0 auto;
  text-align: center;
}
</style>
