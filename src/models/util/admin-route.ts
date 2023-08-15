import { authService } from "@/services/auth.service";
import { UserType } from "../auth/user-type.model";

export function adminRoute(to: any, from: any, next: any){
  const userInfo = authService.getLocalAuthUser();
  const isAdmin = userInfo?.userType === UserType.Admin
  if(isAdmin){
    next()
  }else{
    next({ name: "not-allowed" });
  }
}