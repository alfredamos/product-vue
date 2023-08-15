import { tap, type Observable, type Subscription, defer } from "rxjs";
import { onUnmounted, onMounted, type Ref } from "vue";

export function useSubscription<T>(source$: Observable<T>, data: Ref<T>) {
  let subs: Subscription;

  onMounted(() => {
    return (subs = source$
      .pipe(
        tap((dataApiRes) => {
          console.log("In useSubscription , data : ", dataApiRes);
        })
      )
      .subscribe((dataApiRes) => (data.value = dataApiRes)));
  });

  onUnmounted(() => {
    if (subs) subs.unsubscribe();
  });

  console.log("At point 2, subscription, data : ", data.value);

  return data;
}
