<template>
  <div>
    <div class="text-box">
      <div class="title">عرفان محمدی گرامی</div>
      <div class="subTitle">
        برای انتخاب شعبه یکی از گزینه های زیر را انتخاب کنید
      </div>
    </div>
    <div class="btn-container">
      <div class="btn-gps">
        <router-link to="/nearest-branch">
          <app-button
            label="یافتن نزدیک ترین شعبه"
            sizeMd
            active
            iconIsSet
            :icon="iconSrc"
          ></app-button>
        </router-link>
      </div>
      <div class="btn-search">
        <router-link to="appointment/branch">
          <app-button label="جستجوی شعب" sizeMd empty> </app-button>
        </router-link>
      </div>
    </div>
    <div v-if="getState">
      <div class="text-box has-appointment">
        <div class="title">عرفان محمدی عزیز برای شما یک نوبت فعال است</div>
      </div>
      <div class="btn-container">
        <app-button label="پیگیری نوبت" active></app-button>
      </div>
    </div>
    <app-modal
      :modalText="{
        headerText: '',
        bodyText:
          'عرفان محمدی عزیز یک نوبت برای شما فعال است.در صورت افزودن نوبت جدبد نوبت قبلی شما حذف میشود',
        footerText: '',
      }"
    ></app-modal>
  </div>
</template>


<script>
import Button from "../../Button.vue";
import Modal from "../../Modal.vue";

export default {
  components: {
    appButton: Button,
    appModal: Modal,
  },
  data() {
    return {
      state: 1,
      // 0 has no appointment
      // 1 has appointment
      iconSrc: require("../../../assets/img/gpsIcon.svg"),
    };
  },
  computed: {
    getState() {
      if (this.state == 1) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.btn-search,
.btn-gps {
  display: inline-block;
}
.btn-search {
  margin-right: 30px;
}
.btn-container {
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
}
.text-box {
  direction: rtl;
  margin: 50px 20px 50px 0px;
}
.title {
  font-size: 20px;
  font-weight: 800;
}
.subTitle {
  margin-right: 18px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 100;
}
.has-appointment {
  margin-top: 130px;
  font-weight: 500;
}
.has-appointment > .title {
  font-weight: 300;
}
</style>