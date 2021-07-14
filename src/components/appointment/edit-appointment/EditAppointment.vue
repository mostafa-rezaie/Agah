<template>
  <div>
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="top-text-container">
          <div class="title name">{{ name }} گرامی</div>
          <div class="top-subtitle">
            شما میتوانید فقط یکبار نوبت خود را ویرایش کنید
          </div>
        </div>
        <div class="summary-text-container">
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/location-address.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">شعبه مراجعه</div>
              <div class="subtitle">{{ branch }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/calender.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">روز مراجعه</div>
              <div class="subtitle">{{ day }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/watch.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">ساعت مراجعه</div>
              <div class="subtitle">{{ time }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-box">
        <div class="delete-btn-container">
          <button @click="deleteAppointment">حذف نوبت</button>
        </div>

        <!-- left button  -->
        <div class="edit-btn-container">
          <router-link to="edit-time">
            <button>ویرایش نوبت</button>
          </router-link>
        </div>
      </div>
    </div>
    <app-modal
      v-if="delRequest"
      :modalText="{bodyText : 'در صورت حذف نوبت امکان بازگشت نوبت وجود ندارد',
      headerText : 'از حذف نوبت خود اطمینان دارید؟',
      footerText : ''}"
    >
    <router-link to="/">
    <app-button style="border : solid 2px red"
    simple
    label="بله حذف شود "
    ></app-button>
    </router-link>
    <app-button 
    @clicked="toggleDelRequest"
    style="border : solid 2px grey ; margin-right : 10px"
    simple
    label="انصراف و بستن"
    ></app-button>
    
    </app-modal>
  </div>
</template>
<script>
import Modal from "../../Modal.vue";
import Button from "../../Button.vue";
export default {
  props: {},
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),

      name: "عرفان محمدی",
      day: "سه شنبه - ۲۷ شهریور",
      branch: "خیابان نلسون ماندلا باااااااا",
      time: "بین ۸ الی ۱۰ ",
      delRequest: false,
    };
  },
  methods: {
    deleteAppointment() {
      this.delRequest = true;
    },
    toggleDelRequest (){
      console.log('hey')
      this.delRequest = false
    }
  },
  components: {
    appModal: Modal,
    appButton: Button,
  },
};
</script>
<style scoped>
.option-container {
  display: flex;
  width: 700px;
  height: 100px;
  align-items: center;
  /*justify-content: space-around;*/
}

.text-container {
  margin-right: 20px;
  line-height: 40px;
}

.title {
  font-size: 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 34px;
  margin-top: 30px;
  direction: rtl;
  height: 720px;
  justify-content: space-between;
}

.name {
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  margin-right: 5px;
  font-weight: 300;
}

.top-text-container {
  line-height: 50px;
}

.top-subtitle {
  margin-right: 20px;
}

.summary-text-container {
  margin-top: 25px;
}

.btn-box {
  direction: rtl;
  display: flex;
  width: 525px;
  justify-content: space-between;
}

.edit-btn-container,
.edit-btn-container {
  display: inline-block;
}

button {
  width: 278px;
  height: 72px;
  background-color: white;
  font-size: 20px;
  border: none;
}
.delete-btn-container > button {
  width: 200px;
  color: grey;
  border: solid 2px rgb(206, 206, 206);
  display: inline-block;
}
.edit-btn-container button {
  border: solid 2px #0a5bff;
  color: #0a5bff;
}
</style>