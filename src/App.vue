<template>
  <v-app>
    <v-app-bar inset="true" color="primary"
    density="compact">
        <v-btn icon @click="go_to_link('profile')">
          <v-icon>mdi-account-arrow-right-outline</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    go_to_link(name) {
      this.$router.push({name: name});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
