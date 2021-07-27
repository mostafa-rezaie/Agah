<template>
  <div>
    <app-header></app-header>

    <app-jumbo
      title="سیستم نوبت دهی آگاه"
      subTitle="خدمات کارگزاری اگاه"
      jumboActiveClass="text-center"
      titleClass="title-center"
      subTitleClass="sub-title-center"
      jumboClass="jumbotron-lg"

    ></app-jumbo>

    <div class="custom-container ">
      <div class="row justify-content-xxl-center custom-row">
        <div class="card col-5 col-md-5 left-card pointer-active">
          <router-link tag="div" to="consultation" class="card-container">
              <app-card
                :text="{
                  title: 'مشاوره در سرمایه گذاری',
                  subtitle: 'دریافت مشاوره سرمایه گذاری اختصاصی',
                }"
                :iconSrc="require('../../assets/img/consulidation.svg')"
              ></app-card>
          </router-link>
        </div>
        <div class="card col-5 col-md-5 right-card pointer-active">
          <router-link tag="div" to="/login" class="card-container" >
              <app-card
                :text="{
                  title: 'احراز هویت',
                  subtitle: 'دریافت نوبت احراز هویت در شعب اگاه',
                }"
                :iconSrc="require('../../assets/img/authendicate.svg')"
              ></app-card>
          </router-link>
        </div>
      </div>
      <div class="row custom-row justify-content-xxl-center">
        <div class="card col-5 col-md-5 left-card pointer-active">
          <router-link tag="div" to="edit">
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
        <div class="card col-5 col-md-5 right-card pointer-active">
          <router-link tag="div" to="cooperation">
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
.custom-container {
  margin-top: 20px;
  width: 100%;
}
.custom-row {
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
}
.card {
  background-color: #ececec;
  direction: rtl;
  /* width: 536px; */
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
}
.card {
  padding-right: 0 !important ;
  padding-left: 0 !important ;
}
@media screen  and (min-width:1200px){
  .card{
    width: 536px;
  }
  
}
@media screen  and (max-width:1200px){
  .container{
    margin: 5px ;

  }
  .custom-row {
    width: 95%;
    justify-content: space-between
  }
  .left-card,.right-card{
    width: 46%;
  }
}
@media screen and (max-width:1000px) {
  .card-container > div{
    margin: 36px 3% 50px auto ;
    width: 100%;
  }
  .card-container {
    overflow: hidden;
  }
}
@media screen and (max-width:440px) {
  .card{
    width: 95%;
    margin: auto;
    height: 80px;
    margin-bottom: 16px;
  }
  .card-container > div{
    margin: 0 10px 0 0;
  }
  .row {
    flex-direction: column-reverse;
  }
  .custom-container div:nth-child(2){
    margin-top: 0;
  }
}



</style>
