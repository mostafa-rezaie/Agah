<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="card col-5 left-card">
        <div class="card-container">
          <img
            src="../assets/img/consulidation.svg"
            alt="hey"
            class="card-icon"
          />
          <div class="card-text">
            <h1>مشاوره در سرمایه گذاری</h1>
            <h3>دریافت مشاوره سرمایه گذاری اختصاصی</h3>
          </div>
        </div>
      </div>
      <div class="card col-5 right-card pointer-active">
        <router-link tag="div" to="/login">
          <div class="card-container">
            <img
              src="../assets/img/authendicate.svg"
              alt="hey"
              class="card-icon"
            />
            <div class="card-text">
              <h1>احراز هویت</h1>
              <h3>دریافت نوبت احراز هویت در شعب اگاه</h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row row-pure justify-content-md-center">
      <div class="card col-5 left-card">
        <div class="card-container">
          <img src="../assets/img/checking.svg" alt="hey" class="card-icon" />
          <div class="card-text">
            <h1>پیگیری نوبت</h1>
            <h3>ویرایش یا حذف نوبت در سیستم</h3>
          </div>
        </div>
      </div>
      <div class="card col-5 right-card">
        <div class="card-container">
          <img src="../assets/img/appoinment.svg" alt="hey" class="card-icon" />
          <div class="card-text">
            <h1>درخواست ملاقات</h1>
            <h3>درخواست ملاقات برای همکاری ...</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
.card-container {
  display: flex;
  height: 71px;
  width: 358px;
  margin: 39px 35px 50px 143px;
}
.card-container > img {
  width: 29px;
  height: 51px;
  margin-top: 11px;
  margin-bottom: 8.7px;
}
.card-icon {
  flex-grow: 1;
  padding-left: 32px;
  width: 42px;
  height: 53px;
}
.card-text {
  flex-grow: 4;
}
.row {
  justify-content: space-around;
}
h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
h3 {
  font-size: 18px;
  font-weight: lighter;
  margin: 20px 0 0 0;
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
</style>