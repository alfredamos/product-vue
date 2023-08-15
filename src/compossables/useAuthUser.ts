import { AuthApiResponse } from "@/models/auth/auth-api-response.model";
import { authService, userSubInitial } from "@/services/auth.service";
import { Subscription, map } from "rxjs";
import { onMounted, onBeforeUnmount, ref } from "vue";

export function useAuthUser() {
  let subs: Subscription;

  const authUser = ref<AuthApiResponse>(userSubInitial);
  onMounted(() => {
    subs = authService.authUser$
      .pipe(
        map((authApiRes: AuthApiResponse) => {
          authUser.value = authApiRes;
        })
      )
      .subscribe();
  });

  onBeforeUnmount(() => {
    subs.unsubscribe();
  });

  return { authUser };
}
