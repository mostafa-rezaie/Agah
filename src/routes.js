import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";
import Confirm from "./components/confirmation/Confirm.vue";
import Result from "./components/result/Result.vue";
import Appointment from "./components/appointment/Appointment.vue";
import CheckAppointment from "./components/appointment/checkAppointment/CheckAppointment";
import Branch from "./components/appointment/branch/Branch";

import ChooseDay from "./components/appointment/choose-day/ChooseDay.vue";
import Summary from "./components/appointment/summary/Summary.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/login", component: Login },
  { path: "/confirm", component: Confirm },
  { path: "/result", component: Result },
  {
    path: "/appointment",
    component: Appointment,
    children: [
      { path: "/", component: CheckAppointment },
      { path: "branch", component: Branch },
      { path: "choose-day", component: ChooseDay },
      { path: "summary", component: Summary },
    ],
  },
];
