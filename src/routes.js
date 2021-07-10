import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";
import Confirm from "./components/confirmation/Confirm.vue";
import Result from "./components/result/Result.vue";
import Appointment from "./components/appointment/Appointment.vue";
import City from "./components/appointment/city/City.vue";
import CheckAppointment from "./components/appointment/checkAppointment/CheckAppointment";

export const routes = [
  { path: "", component: Home },
  { path: "/login", component: Login },
  { path: "/confirm", component: Confirm },
  { path: "/result", component: Result },
  {
    path: "/appointment",
    component: Appointment,
    children: [
      { path: "city", component: City },
      { path: "/", component: CheckAppointment },
    ],
  },
];
