import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/auth/LoginView.vue";
import LogoutView from "../views/auth/LogoutView.vue";
import ListProductView from "../views/products/ListProductView.vue";
import ListUserView from "../views/users/ListUserView.vue";
import ChangePasswordView from "../views/auth/ChangePasswordView.vue";
import EditProfileView from "../views/auth/EditProfileView.vue";
import SignupView from "../views/auth/SignupView.vue";
import NotAllowedView from "../views/auth/NotAllowedView.vue";
import MustLoginView from "../views/auth/MustLoginView.vue";
import CreateUserView from "../views/users/CreateUserView.vue";
import DeleteUserView from "../views/users/DeleteUserView.vue";
import DetailUserView from "../views/users/DetailUserView.vue";
import EditUserView from "../views/users/EditUserView.vue";
import HomeView from "../views/auth/HomeView.vue"
import CreateProductView from "@/views/products/CreateProductView.vue";
import DeleteProductView from "@/views/products/DeleteProductView.vue";
import DetailProductView from "@/views/products/DetailProductView.vue";
import EditProductView from "@/views/products/EditProductView.vue";
import { adminRoute } from "@/models/util/admin-route";
import { protectedRoute } from "@/models/util/protected-route";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/change-password",
      name: "change-password",
      beforeEnter: protectedRoute,
      component: ChangePasswordView,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      beforeEnter: protectedRoute,
      component: EditProfileView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },
    {
      path: "/must-login",
      name: "must-login",
      component: MustLoginView,
    },
    {
      path: "/not-allowed",
      name: "not-allowed",
      component: NotAllowedView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/products",
      name: "products",
      beforeEnter: protectedRoute,
      component: ListProductView,
    },
    {
      path: "/products/create",
      name: "create-product",
      beforeEnter: adminRoute,
      component: CreateProductView,
    },
    {
      path: "/products/delete/:id",
      name: "delete-product",
      beforeEnter: adminRoute,
      component: DeleteProductView,
    },
    {
      path: "/products/detail/:id",
      name: "detail-product",
      beforeEnter: protectedRoute,
      component: DetailProductView,
    },
    {
      path: "/products/edit/:id",
      name: "edit-product",
      beforeEnter: adminRoute,
      component: EditProductView,
    },

    {
      path: "/users",
      name: "users",
      beforeEnter: protectedRoute,
      component: ListUserView,
      children: [
        {
          path: "create",
          name: "create-user",
          beforeEnter: adminRoute,
          component: CreateUserView,
        },
        {
          path: "delete/:id",
          name: "delete-user",
          beforeEnter: adminRoute,
          component: DeleteUserView,
        },
        { path: "detail/:id", name: "detail-user", component: DetailUserView },
        { path: "edit/:id", name: "edit-user", component: EditUserView },
      ],
    },
  ],
});

export default router;
