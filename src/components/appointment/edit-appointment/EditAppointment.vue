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
          <router-link to="edit-time" tag="div">
            <button>
              <div class="btn-text">
                <img
                  src="../../../assets/img/edit-pencil.svg"
                  alt="edit-pencil"
                />
                <div class="text">ویرایش نوبت</div>
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <app-modal
      v-if="delRequest"
      :modalText="{
        subtitleBodyText: 'در صورت حذف نوبت امکان بازگشت نوبت وجود ندارد',
        bodyText: 'از حذف نوبت خود اطمینان دارید؟',
        footerText: '',
      }"
    >
      <template v-slot:icon>
        <div class="close-icon">
          <img src="../../../assets/img/close-icon.svg" alt="close icon" />
        </div>
      </template>
      <div class="btn-box">
        <div class="close-btn">
          <app-button
            @clicked="toggleDelRequest"
            style="border: solid 2px grey; margin-right: 5px"
            simple
            label="انصراف و بستن"
          ></app-button>
        </div>
        <div class="delete-btn">
          <router-link to="/">
            <app-button
              style="border: solid 2px red; margin-right: 10px; color: red"
              simple
              label="بله حذف شود "
            ></app-button>
          </router-link>
        </div>
      </div>
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
      console.log("clicked");
      this.delRequest = true;
    },
    toggleDelRequest() {
      console.log("hey");
      this.delRequest = false;
    },
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
.btn-text {
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin: auto;
}
@media screen and (max-width: 600px) {
  .subtitle {
    font-size: 14px;
    font-weight: 300;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  .top-subtitle {
    margin-right: 0;
    line-height: normal;
    font-size: 14px;
    font-weight: 300;
  }
  .top-text-container {
    display: none;
  }
  .summary-text-container {
    margin-top: 0;
  }
  .wrapper {
    height: 58vh;
    width: 92%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 4px;
  }
  .btn-box {
    width: 100%;
  }
  .delete-btn-container > button {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
  }
  .edit-btn-container > div > button {
    font-weight: bold;
    font-size: 14px;
    width: 100%;
  }
  .delete-btn-container {
    width: 36%;
  }
  .edit-btn-container {
    width: 58%;
  }
  .btn-text {
    max-width: 120px;
  }
  .container-box {
    overflow: hidden;
  }
  .close-icon > img {
    width: 67px;
    height: 47;
  }
  .btn-box{
    width: 100%;
    /* margin: auto; */
    margin-left: 4px;
  }
  .close-btn , .delete-btn{
    width: 48%;
  }
  .close-btn > button{
    margin-right: 0 !important;
  }
  .delete-btn > a > button{
    margin-right: 0 !important;
  }
  
}
@media screen and (max-width: 350px) {
  .btn-text {
    width: 70%;
  }
}
</style>