import { authService } from "@/services/auth.service";

export function protectedRoute(to: any, from: any, next: (name?: string) => void){
  const userInfo = authService.getLocalAuthUser()
  const isLoggedIn = userInfo?.isLoggedIn
  if (isLoggedIn){
    next()
  }else{
    next("/must-login");
  }
}