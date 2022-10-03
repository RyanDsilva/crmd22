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

export default defineComponent({
  name: 'CRMD',
})
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: black;
}
</style>
