<template>
  <div>
    <app-header></app-header>

    <app-jumbo
        title="عرفان محمدی گرامی خوش آمدید"
        subTitle="شما 2 نوبت فعال دارید"
        jumboActiveClass="text-center"
        titleClass="title-center"
        subTitleClass="sub-title-center"
        jumbo-class="jumbotron-lg"
    ></app-jumbo>

    <div class="container" id="appointment-toggle">
      <div class="row appointment-status-wrapper">
        <div
            :class="{ active: getActiveClass }"
            class="col-2 active-appointment"
            @click="appointmentStatus = !appointmentStatus"
        >
          نوبت های فعال
        </div>
        <div
            class="col-2 inactive-appointment"
            :class="{ active: !getActiveClass }"
            @click="appointmentStatus = !appointmentStatus"
        >
          نوبت های غیر فعال
        </div>
      </div>
    </div>
    <!--      active appointment section-->
    <div class="container" v-if="appointmentStatus">
      <div class="card">
        <div class="card-container">
          <app-appointment-card
              linkSrc="appointment/edit-appointment"

          ></app-appointment-card>
        </div>
      </div>
    </div>

    <!-- deactive appointment section  -->

    <div class=" inactive-cards" v-if="!appointmentStatus">
      <div class="card-container grid-card-container">
        <app-appointment-card
            v-for="(appointment, index) in failedAppointments"
            :key="index"
            :status="appointment.status"
            :subtitleRightValueText="appointment.branch"
            :subtitleLeft="appointment.date"
            grid-class
            linkSrc="appointment/edit-appointment"
        ></app-appointment-card>
      </div>
    </div>
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
  margin-right: 258px;
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
  padding-right: 0 !important;
  padding-left: 0 !important;
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


.grid-card-container > div:nth-child(n+3) {
  margin-top: -160px;

}

.grid-card-container > div {
  background-color: #ececec;
  direction: rtl;
  width: 400px;
}

@media screen and (max-width: 1000px) {
  .active-appointment, .inactive-appointment {
    width: 25%;
  }

  .card {
    margin: auto;
  }

  .inactive-cards {
    width: 90%;
    margin: auto;
  }

  .card-container {
    width: 95%;
    margin: auto;
  }
}

@media screen and (max-width: 500px) {
  .card-container > .wrapper {
    width: 100%;
    height: 100%;
  }

}

@media screen and (max-width: 800px) {

  .container {
    padding-left: 0;
    padding-right: 0;
    width: 98% !important;
  }

}

@media screen and (max-width: 700px) {

  .active-appointment, .inactive-appointment {
    font-size: 14px;
    font-weight: 300;
    width: 40%;
    padding-right: 2% !important;
    padding-left: 2% !important;

  }

}

@media screen and (max-width: 600px) {
  .grid-card-container {
    grid-template-columns: 1fr;
  }

  .grid-card-container > div {
    grid-column: 1/span 1 !important;
  }

  .grid-card-container > div:nth-child(n+2) {
    margin-top: 10px;

  }
  #appointment-toggle{
    margin-bottom: 33px;
  }
}

@media screen and (max-width: 500px) {
  .card {
    width: 85%;
    height: 140px;
  }

}
</style>
