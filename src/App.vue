<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from "@/util/NavigationBar.vue"
</script>

<template>  
<NavigationBar/>
  <RouterView :key="$route.fullPath"/>
</template>
<style scoped></style>

