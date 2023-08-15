import { authService } from "@/services/auth.service";

export function protectedRoute(to: any, from: any, next: any){
  const userInfo = authService.getLocalAuthUser()
  const isLoggedIn = userInfo?.isLoggedIn
  if (isLoggedIn){
    next()
  }else{
    next({ name: "must-login" });
  }
}