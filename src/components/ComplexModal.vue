<template>
  <div class="modal-backdrop" :class="getHiddenClass">
    <div class="modal">
      <div class="modal-header">
        <img :src="iconSrc" alt="header imgae" />
      </div>
      <br />
      <div class="modal-body">
        {{ modalText }}
      </div>
      <br />
      <div class="modal-footer">
        <router-link :to="buttonLink">
          <app-button :label="buttonText" active></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: {
    appButton: Button,
  },
  props: {
    modalText: {
      type: String,
      default: "modal body text",
    },
    isHidden: {
      type: Boolean,
      default: true,
    },
    iconSrc: {
      type: String,
      default: "icon address ",
    },
    buttonText: {
      type: String,
      default: "button text",
    },
    buttonLink : {
        type: String,
        default : '/'
    }
  },
  computed: {
    getHiddenClass() {
      return {
        isHidden: this.isHidden,
      };
    },
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  direction: rtl;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 804px;
  height: 500px;
  padding: 10px;
  box-sizing: content-box;
  align-items: center;
}

.modal-header {
  margin-top: 10px;
}
.modal-body {
  margin: 50px 20px 40px 20px;
  font-size: 24px;
  text-align: center;
}
.modal-footer {
}
.isHidden {
  display: none;
}
.continue,
.next-page {
  display: inline-block;
  margin-right: 10px;
}
.btn-container {
  margin-top: 50px;
}
</style>