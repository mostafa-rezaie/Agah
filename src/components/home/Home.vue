<template>
  <div>
    <app-header></app-header>

    <app-jumbo
      title="سیستم نوبت دهی آگاه"
      subTitle="خدمات کارگزاری اگاه"
      jumboActiveClass="text-center"
      titleClass="title-center"
      subTitleClass="sub-title-center"
    ></app-jumbo>

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card col-5 left-card pointer-active">
          <router-link tag="div" to="#">
            <div class="card-container">
              <app-card
                :text="{
                  title: 'مشاوره در سرمایه گذاری',
                  subtitle: 'دریافت مشاوره سرمایه گذاری اختصاصی',
                }"
                :iconSrc="require('../../assets/img/consulidation.svg')"
              ></app-card>
            </div>
          </router-link>
        </div>
        <div class="card col-5 right-card pointer-active">
          <router-link tag="div" to="/login">
            <div class="card-container">
              <app-card
                :text="{
                  title: 'احراز هویت',
                  subtitle: 'دریافت نوبت احراز هویت در شعب اگاه',
                }"
                :iconSrc="require('../../assets/img/authendicate.svg')"
              ></app-card>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row row-pure justify-content-md-center">
        <div class="card col-5 left-card pointer-active">
          <router-link tag="div" to="#">
            <div class="card-container">
              <app-card
                :text="{
                  title: 'پیگیری نوبت',
                  subtitle: 'ویرایش یا حذف نوبت در سیستم',
                }"
                :iconSrc="require('../../assets/img/checking.svg')"
              ></app-card>
            </div>
          </router-link>
        </div>
        <div class="card col-5 right-card pointer-active">
          <router-link tag="div" to="#">
            <div class="card-container">
              <app-card
                :text="{
                  title: 'درخواست ملاقات',
                  subtitle: 'درخواست ملاقات برای همکاری ...',
                }"
                :iconSrc="require('../../assets/img/appoinment.svg')"
              ></app-card>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import Card from "../Card.vue";
import Header from "../Header.vue";

export default {
  components: {
    appJumbo: Jumbotron,
    appCard: Card,
    appHeader: Header,
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.row-pure {
  margin-top: 20px;
}
.card {
  background-color: #ececec;
  direction: rtl;
  width: 536px;
}
.card-container > div {
  display: flex;
  height: 71px;
  width: 358px;
  margin: 39px 35px 50px 143px;
}
.row {
  justify-content: space-around;
}
.left-card {
  margin-right: 12px;
}
.right-card {
  margin-left: 12px;
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
</style>
