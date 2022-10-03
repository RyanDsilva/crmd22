<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list density="compact" nav>
          <router-link class="nav-link" to="/">
            <v-list-item prepend-icon="mdi-form-select" title="Submit" value="sumit"></v-list-item>
          </router-link>
          <router-link class="nav-link" to="/results">
            <v-list-item prepend-icon="mdi-table" title="Results" value="results"></v-list-item>
          </router-link>
            <v-list-item prepend-icon="mdi-account" title="Logout" value="logout" @click="logout"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { scoreStore } from '@/stores/scores'


export default defineComponent({
  name: 'CRMD',
  setup() {
    const store = scoreStore()
    return { store }
  },
  methods: {
    logout() {
      this.store.clearUser()
      this.$router.push('/')
    }
  },
})
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: black;
}
</style>
