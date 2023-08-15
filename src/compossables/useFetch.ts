import { onMounted, ref, type Ref } from "vue";
import {dataService} from "../services/data.service"

export function useFetch<T>(url: string) {
  const resource = ref<T>(null!) as Ref<T>;
  onMounted(() => {
    dataService.getAll<T>(url)
      .then((resp) => {
        console.log("In use-fetch, resp : ", resp)
        resource.value  = resp;
      })
      .catch((err) => console.log("error : ", err.message));
  });

  return { resource };
}
