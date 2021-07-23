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
                :subtitle=branch.address
                :active="index == activatedCardIndex"
                :iconIsSet="index == activatedCardIndex "
                @clicked="clickHandler(index,branch.id)"
            >

            </app-branch-card>


          </div>

          <!-- <img src="../../../assets/img/checked.svg" alt=""> -->
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import BranchCard from "./BranchCard";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
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
      activatedCardIndex: -1
    };
  },
  computed: {
    ...mapGetters({
      getBranches: "getChosenCityBranches",
    }),
  },
  methods: {
    ...mapMutations({
      setChosenBranch : 'setChosenBranchId'
    }),
    clickHandler(index,branchId) {
      console.log('hey from parent')
      this.setChosenBranch(branchId)
      this.activatedCardIndex = index
    },
    setBranches (){
      this.branches = this.getBranches
    }

  },
  components: {
    appBranchCard: BranchCard,
  },
  created (){
    this.setBranches ()
  }
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


</style>