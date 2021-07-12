<template>
  <div>
    <div class="wrapper">
      <div class="choose-branch-wrapper">
        <div class="col-10 text-box-branch">
          <div class="title-wrapper">
            <div class="title-text">
              شعبه موردنظر برای احراز هویت انتخاب کنید
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="cards">
            <app-branch-card

                v-for="(branch, index) in branches"
                :key="index"
                :title="branch.title"
                :subtitle=branch.subtitle
                :active="index == activatedCardIndex"
                :iconIsSet="index == activatedCardIndex "
                @clicked="clickHandler(index)"
            >

            </app-branch-card>


          </div>

          <!-- <img src="../../../assets/img/checked.svg" alt=""> -->
        </div>
      </div>

      <div class="btn-box">
        <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            :icon="goBackIconSrc"
        ></app-button>

        <app-button label="مرحله بعدی"></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../Button.vue";
import BranchCard from "./BranchCard";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),
      checkIconState: 0,
      branches: [
        {
          title: "دفترمرکزی",
          subtitle: "خیابان نلسون ماندلا (آفریقا) بالاتر از میرداماد، بن بست پیروز، پلاک 13، طبقه همکف",
        },
        {
          title: "تهران (اندرزگو)",
          subtitle: "بلوار اندرزگو، بعد از سلیمی جنوبی پلاک 52 ساختمان سام اندرزگو طبقه دوم",
        },
        {
          title: "تهران (سعادت آباد)",
          subtitle: "تهران، سعادت آباد، بلوار دریا، روبه روی پارک دلاوران، طبقه فوقانی جین وست",
        },
      ],
      activatedCardIndex: 1
    };
  },
  computed: {},
  methods: {
    clickHandler(index) {
      console.log('hey from parent')
      this.activatedCardIndex = index
    }

  },
  components: {
    appButton: Button,
    appBranchCard: BranchCard,
  },
};
</script>

<style scoped>
.cards {
  margin-top: 49px;
}

.title-text {
  font-size: 24px;
  display: inline-block;
}

.vertical-line {
  margin-right: 10px;
  height: 2px;
  width: 390px;
  margin-bottom: 4px;
  display: inline-block;
  background-color: #e6e6e6;
}

.choose-branch-wrapper {
  direction: rtl;
  height: 489px;
  width: 1112px;
  margin: 20px;
}

.wrapper {
  direction: rtl;
}

.search-bar-city {
  margin: 20px;
  border: solid;
}

.text-box-branch {
  direction: rtl;
  /* border: solid; */
}

.btn-box {
  direction: rtl;
}
</style>