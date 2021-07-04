<template>
  <div id="outer-container">
    <div class="outer-nav">
      <div class="go-to-page">
        <span class="btn">
          <div>رفتن به سایت اگاه</div>
        </span>
      </div>
      <nav class="inner-nav">
        <div id="item1">تماس با ما</div>
        <div id="item2">پنل مشتریان</div>
        <div id="item3">آگاه اکسپرس</div>
        <div id="item4">باشگاه مشتریان</div>
        <router-link tag="div" to="/login">
          <a> نوبت دهی </a>
        </router-link>
      </nav>

      <div class="logo">
        <img src="../assets/img/logo.svg" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
}
.go-to-page {
  text-align: center;
  flex-grow: 1;
}

.inner-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
  flex-grow: 1;
}
.logo {
  flex-grow: 1;
  text-align: center;
}
.btn {
  display: inline-block;
  width: 190px;
  height: 56px;
  border: grey solid 1px;
  background-color: white;
  border-color: rgb(216, 216, 216);
}
.btn > div {
  margin-top: 15px;
}
</style>