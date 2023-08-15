import type { Observable, Subscription } from "rxjs";
import { ref, type Ref, onMounted, onBeforeUnmount } from 'vue';
import { useSubscription } from './useSubscription';

export function useObservable<T>(source$: Observable<T>, initialValue: T){
  const data = ref<T>(initialValue) as Ref<T>

  const resource = useSubscription<T>(source$, data) 

  console.log("In observable, user : ", resource.value)
  
  return resource
}