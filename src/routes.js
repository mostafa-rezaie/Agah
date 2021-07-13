import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";
import Confirm from "./components/confirmation/Confirm.vue";
import Result from "./components/result/Result.vue";
import Appointment from "./components/appointment/Appointment.vue";
import CheckAppointment from "./components/appointment/checkAppointment/CheckAppointment";
import Branch from "./components/appointment/branch/Branch";
import Accept from "./components/appointment/accept/Accept";

import ChooseDay from "./components/appointment/choose-day/ChooseDay.vue";
import Summary from "./components/appointment/summary/Summary.vue";
import Consultation from "./components/consultation/Consultation.vue";
import Cooperation from "./components/cooperation/Cooperation.vue";
import Edit from "./components/edit/Edit.vue";

import NearestBranch from './components/appointment/checkAppointment/NearestBranch'
import NotFound from './components/notFound/NotFound.vue'

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
      { path: "accept", component: Accept },
     
    ],
  },
  { path: "/nearest-branch", component: NearestBranch },
  { path: "/consultation", component: Consultation },
  { path: "/cooperation", component: Cooperation },
  { path: "/edit", component: Edit },
  { path: "*", component: NotFound },
  

];
