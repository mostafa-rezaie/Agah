<template>
  <div>
    <app-header></app-header>

    <app-jumbo
      title="عرفان محمدی گرامی خوش آمدید"
      subTitle="شما 2 نوبت فعال دارید"
      jumboActiveClass="text-center"
      titleClass="title-center"
      subTitleClass="sub-title-center"
    ></app-jumbo>

    <div class="container">
      <div class="row appointment-status-wrapper">
        <div
          :class="{ active: getActiveClass }"
          class="col-2"
          @click="appointmentStatus = !appointmentStatus"
        >
          نوبت های فعال
        </div>
        <div
          class="col-2"
          :class="{ active: !getActiveClass }"
          @click="appointmentStatus = !appointmentStatus"
        >
          نوبت های غیر فعال
        </div>
      </div>
    </div>

    <div class="container" v-if="appointmentStatus">
      <div class="card">
        <div class="card-container">
          <app-appointment-card> </app-appointment-card>
        </div>
      </div>
    </div>

    <!-- deactive appointment section  -->

    <div class="container" v-if="!appointmentStatus">
        <div class="card-container grid-card-container">
          <app-appointment-card
            v-for="(appointment, index) in failedAppointments"
            :key="index"
            title="نوبت احراز هویت"
            :status="appointment.status"
            subtitleRightKeyText="شعبه : "
            :subtitleRightValueText="appointment.branch"
            :subtitleLeft="appointment.date"
            linkSrc="appointment/edit-appointment"
          ></app-appointment-card>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import Header from "../Header.vue";
import AppointmentCard from "../AppointmentCardi.vue";
export default {
  data() {
    return {
      appointmentStatus: {
        type: Boolean,
        default: false,
      },
      failedAppointments: [
        {
          branch: "شعبه تهران",
          date: "1399/09/09",
          status: "حذف شده",
        },
        {
          branch: "شعبه تهران",
          date: "1399/09/09",
          status: "ناموفق",
        },
        {
          branch: "شعبه تهران",
          date: "1399/09/09",
          status: "موفق",
        },
        {
          branch: "شعبه تهران",
          date: "1399/09/09",
          status: "عدم مراجعه",
        },
      ],
    };
  },
  computed: {
    getActiveClass() {
      return this.appointmentStatus;
    },
  },
  components: {
    appJumbo: Jumbotron,
    appHeader: Header,
    appAppointmentCard: AppointmentCard,
  },
};
</script>

<style scoped>
.container {
  direction: rtl;
  margin-top: 20px;
  margin-bottom: 50px;
}
.row {
  justify-content: center !important;
}
.appointment-status-wrapper > div {
  text-align: center;
  padding: 10px 0 10px 0;
  border-bottom: solid 2px rgb(199, 199, 199);
  cursor: pointer;
}
.active {
  color: #0a5bff;
  border-bottom: solid 2px #0a5bff !important;
}
.card {
  background-color: #ececec;
  direction: rtl;
  width: 400px;
  margin-right: 350px;
}

.card-container > div {
  height: 156px;
  width: 358px;
}
.pointer-active {
  cursor: pointer;
}

.card > div {
  height: 100%;
  overflow: auto;
}
.card {
  padding-right: 0 !important ;
  padding-left: 0 !important ;
}
.grid-card-container {
    width: 820px;
    height: 500px;
  /* margin-right: 200px;     */
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: [start] 5px [col1-start] auto [col1-end] 5px [col2-start] auto [col2-end] 5px [end];
}
.grid-card-container > div:nth-child(2n + 1) {
  grid-column-start: col1-start;
  grid-column-end: col1-end;
}
.grid-card-container > div:nth-child(2n) {
  grid-column-start: col2-start;
  grid-column-end: col2-end;
}
.grid-card-container > div:nth-child(n+3){
    margin-top: -160px;

}
.grid-card-container > div{
background-color: #ececec;
  direction: rtl;
  width: 400px;
}
</style>
