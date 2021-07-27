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
      <div class="hamburger-menu" v-if="hamburgerMenuShow">
        <div class="glass-background"></div>
        <div class="hamburger-menu-container">
          <div class="blank">
            <img
              src="../assets/img/humberger-close.svg"
              alt="close"
              class="close-icon"
              @click="toggleHamburgerMenu"
            />
          </div>
          <div class="hambur-nav-container">
            <nav class="humber-nav">
              <div id="item1">خانه</div>
              <div id="item2">باشگاه مشتریان</div>
              <div id="item5">آگاه اکسپرس</div>
              <div id="item4">پنل مشتریان</div>
              <div id="item3">تماس با ما</div>
              <div class="hamburger-btn-container">
                <button class="humberger-btn">اگاه اکسپرس</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="logo" class="icon" />
        </router-link>
        <div class="hamburger-icon">
          <img
            src="../assets/img/humberger-menu.svg"
            alt=""
            @click="toggleHamburgerMenu"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navOffset70: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hamburgerMenuShow: false,
    };
  },
  computed: {
    getClass() {
      return {
        navOffset70: this.navOffset70,
      };
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.hamburgerMenuShow = !this.hamburgerMenuShow;
    },
  },
};
</script>

<style scoped>
.outer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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

.navOffset70 {
  width: 85%;
  left: 0;
}
.glass-background{
  /* opacity: .5;
  background-color: grey;
  width: 100%;
z-index: 99;
  height: 100%; */

}
.hamburger-menu {
  position: fixed;
  z-index: 9999;
  /* display: none; */
  direction: rtl;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.514);
  z-index: 9999;
  height: 100%;
  overflow: hidden;
}
.hamburger-menu-container {
  width: 53%;
  height: 100vh;
}
.blank {
  background-color: #0a5bff;
  height: 30vh;
  opacity: 1;
}
.hamburger-icon {
  display: none;
}
.hambur-nav-container {
  background-color: white;
  height: 70vh;
}
.humber-nav {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding-top: 5px;
  height: 90%;
  justify-content: space-around;
}
.close-icon {
  margin-top: 20px;
  margin-right: 20px;
}
.humberger-btn {
  background-color: white;
  border: solid 2px rgba(128, 128, 128, 0.267);
  width: 100%;
  height: 52px;
}
@media screen and (max-width: 1000px) {
  .go-to-page,
  .inner-nav {
    display: none;
  }
  .outer-nav {
    display: inline;
  }
  .logo {
    text-align: left;
    margin-left: 20px;
  }
  .icon {
    width: 75px;
    height: 39px;
    margin-top: 14px;
    margin-bottom: 5px;
  }
  .hamburger-icon {
    display: inline-block;
    margin-right: 21px;
    align-self: center;
  }
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>