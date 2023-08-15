import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCurrentUserId = defineStore("currentUserId", () => {
  const currentUserId = ref("")

  function setCurrentUserId(id: string){
    currentUserId.value = id
  }

  const getCurrentUserId = computed(() => currentUserId.value)

  return { currentUserId, setCurrentUserId, getCurrentUserId };
});
