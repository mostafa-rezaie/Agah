<template>
  <div class="card-wrapper" @click="clickHandler" :class="getWrapperClass">
    <div class="row inner-container" :class="getClass">
      <div class="col-2 icon">
        <img
          :src="
            iconIsSet == true
              ? require('../../../assets/img/checked.svg')
              : require('../../../assets/img/circle-unchecked.svg')
          "
          alt=""
        />
      </div>
      <div class="col-10 text-box-wrapper">
        <div class="title">{{ title }}</div>
        <br />
        <div class="subtitle">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
    containerMd: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: false,
    },
    iconIsSet: {
      type: Boolean,
      default: false,
    },
    wrapperClassDay: {
      type: Boolean,
      default: false,
    },
    wrapperClassBranch: {
      type: Boolean,
      default: false,
    },
    innerContainerBranch:{
      type : Boolean,
      default : false
    },
    innerContainerDay:{
      type: Boolean,
      default :false
    }

  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      return {
        active: this.active,
        containerMd: this.containerMd,
        innerContainerBranch : this.innerContainerBranch,
        innerContainerDay : this.innerContainerDay
      };
    },
    getWrapperClass() {
      return {
        wrapperClassDay: this.wrapperClassDay,
        wrapperClassBranch : this.wrapperClassBranch
      };
    },
  },
  methods: {
    clickHandler() {
      console.log("hey");
      this.$emit("clicked", true);
    },
  },
};
</script>
<style scoped>
.inner-container {
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 820px;
  border: solid #f8f9fa 2px;
}

.icon {
  text-align: center;
}

.subtitle {
  font-size: 18px;
  box-sizing: content-box;
  font-weight: 300;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
  user-select: none;
}

.title {
  font-size: 24px;
  user-select: none;
  font-weight: 600;
  display: inline-block;
}

.card-wrapper {
  margin-bottom: 24px;
  display: inline-block;
  /* width: 40%; */
}

.active {
  background-color: #d0dfff;
  border: solid #0a5bff 2px;
  box-sizing: content-box;
}

.containerMd {
  width: 526px;
  height: 120px;
  padding: 10px;
}
@media screen and (max-width:1400px) {
  .wrapperClassDay {
    width: 45%;
  }
  .innerContainerDay {
    width: 100%;
  }
}
@media screen and (max-width:1200px) {
  .wrapperClassBranch {
    width: 100%;
  }
  .innerContainerBranch {
    width: 730px;
  }
  
}
@media screen and (max-width: 1050px) {
  .innerContainerBranch {
    width: 95%;
  }
}
@media screen and (max-width: 500px) {
  .title {
    font-size: 14px;
  }
  .subtitle {
    font-size: 12px;
  }
  .text-box-wrapper {
    padding-right: 5px;
  }
  .wrapperClassBranch {
    margin-bottom: 15px;
  }
  
}
@media screen and (max-width:700px) {
  .innerContainerDay{
    width: 95%;
    height: 82px;
  }
  .wrapperClassDay{
    width: 95%;
    margin-right:4% ;
    margin-bottom: 10px;
  }
 
}
@media screen and (max-width:500px) {
  .innerContainerDay{
    height: 38px;
  }
  
}

</style>