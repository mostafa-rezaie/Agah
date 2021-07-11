import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";
import Confirm from "./components/confirmation/Confirm.vue";
import Result from "./components/result/Result.vue";
import Appointment from "./components/appointment/Appointment.vue";
import CitySearchBar from "./components/appointment/city/CitySearchBar.vue";
import CheckAppointment from "./components/appointment/checkAppointment/CheckAppointment";
import ChooseBranch from "./components/appointment/choose-branch/ChooseBranch.vue";
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
      { path: "city", component: CitySearchBar },
      { path: "choose-branch", component: ChooseBranch },
      { path: "choose-day", component: ChooseDay },
      { path: "summary", component: Summary },
    ],
  },
];
