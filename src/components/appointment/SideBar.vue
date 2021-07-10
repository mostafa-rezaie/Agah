<template>
  <div class="side-bar">
    <div class="element-container">
        
        <app-side-element
        
        :text = "{
          title : 'قدم اول',
          subTitle : 'انتخاب شعبه'
        }"

       :iconSrc='require("../../assets/img/homeSideBar.svg")'
        ></app-side-element>
        <app-side-line
        deactive 
        ></app-side-line>
        <app-side-element
        subTitleDeactive
        
        :text = "{
          title : 'قدم دوم',
          subTitle : 'زمان مراجعه'
        }"
       :iconSrc='require("../../assets/img/icon-watch.svg")'
        
        
        ></app-side-element>
        <app-side-line></app-side-line>
        <app-side-element
        subTitleDeactive
        :text = "{
          title : 'قدم سوم',
          subTitle : 'تکمیل ثبت نام'
        }"
       :iconSrc='require("../../assets/img/icon-check.svg")'
        ></app-side-element>
        
    </div>
  </div>
</template>

<script>
import SideElement from "./SideElement.vue";
import SideLine from "./SideLine.vue";
export default {
    components :{
        appSideElement : SideElement,
        appSideLine : SideLine
    },
    computed: {
    },
    methods :{
      // _64bitSrc(src){
      //   // src = String(src)
      //   console.log(src)
      //   return require(src); 
      // }
    }
};
</script>

<style scoped>
*{
    direction: rtl;
}
.side-bar {
  height: 100%; 
  width: 289px; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  right: 0;
  background-color: #111; 
  overflow-x: hidden;
  padding-top: 0px;
}

.element-container {
    margin-right: 44px;
    margin-top: 122px;
}
.line {
    height: 100px;
    width: 5px;
    background-color: blue;
    margin-right: 48px;
}
</style>