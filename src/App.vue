<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list density="compact" nav>
          <router-link v-if="currentUser" class="nav-link" to="/judge">
            <v-list-item
              prepend-icon="mdi-form-select"
              title="Submit Judge"
              value="sumit"
            ></v-list-item>
          </router-link>
          <router-link v-if="currentUser" class="nav-link" to="/adj">
            <v-list-item
              prepend-icon="mdi-form-select"
              title="Submit Adjudicator"
              value="sumitAdj"
            ></v-list-item>
          </router-link>
          <router-link v-if="currentUser" class="nav-link" to="/results">
            <v-list-item
              prepend-icon="mdi-table"
              title="Results"
              value="results"
            ></v-list-item>
          </router-link>
          <router-link v-if="!currentUser" class="nav-link" to="/">
            <v-list-item
              prepend-icon="mdi-account"
              title="Login"
              value="login"
            ></v-list-item>
          </router-link>
          <v-list-item
            v-if="currentUser"
            prepend-icon="mdi-account"
            title="Logout"
            value="logout"
            @click="logout"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scoreStore } from "@/stores/scores";
import { mapState } from "pinia";

export default defineComponent({
  name: "CRMD",
  setup() {
    const store = scoreStore();
    return { store };
  },
  computed: {
    ...mapState(scoreStore, ["currentUser"]),
  },
  methods: {
    logout() {
      this.store.clearUser();
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: black;
}
</style>
