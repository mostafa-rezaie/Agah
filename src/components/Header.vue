<template>
  <div id="outer-container" :class="getClass">
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
        <div id="item4">نوبت دهی</div>
      </nav>

      <div class="logo">
        <router-link to="/">
        <img src="../assets/img/logo.svg" alt="logo" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props :{
    navOffset70 : {
      type : Boolean,
      default : false
    }
  },
  computed: {
    getClass (){
      return{
        navOffset70 : this.navOffset70
        }
        
    }
  },
};
</script>

<style scoped>
.outer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width:100%;
  left: 0;
  /* this is part is extra  */
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

.navOffset70{
  width: 85%;
  left: 0;
}
</style>