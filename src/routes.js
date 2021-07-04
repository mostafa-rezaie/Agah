import Home from "./components/Home.vue";
import Login from "./components/login/Login.vue";

export const routes = [
  { path: "", component: Home },
  {
    path: "/login",
    component: Login,
    
  },
];
