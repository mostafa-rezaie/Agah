<template>
  <div class="modal-backdrop">
    <!-- TODO delete isHidden class  -->
    <div class="modal">
      <div class="modal-header">
        {{ modalText.headerText }}
      </div>

      <br />
      <div class="modal-body">
        <slot name="icon"></slot>
        <br />
        <div class="modal-body-text">
          {{ modalText.bodyText }}
        </div>
      </div>
      <br />
      <div class="modal-body-subtitle">
        {{ modalText.subtitleBodyText }}
      </div>
      <br />

      <div class="modal-footer">
        {{ modalText.footerText }}
      </div>
      <div class="btn-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    modalText: {
      bodyText: {
        type: String,
        default: "body text",
      },
      subtitleBodyText: {
        type: String,
        default: "",
      },

      headerText: {
        type: String,
        default: "header text",
      },
      footerText: {
        type: String,
        default: "footer text",
      },
    },
    isHidden: {
      type: Boolean,
      default: true,
    },
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
  width: 650px;
  height: 400px;
  padding: 10px;
  box-sizing: content-box;
}

.modal-header {
}

.modal-body-subtitle {
  margin-right: 52px;
  margin-top: -10px;
  font-weight: 300;
}

.modal-body {
  margin: 25px 52px 40px 52px;
  font-size: 20px;
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
  text-align: center;
}
@media screen and (max-width: 700px) {
  .modal-backdrop {
    align-items: end;
  }
  .modal-header,
  .modal-body-subtitle,
  .modal-foote .modal-body,
  .modal-body-text,
  #text {
    font-size: 14px;
  }
}
@media screen and (max-width:600px) {
.modal-body , .modal-body-subtitle{
  margin-right: 4px;
}
  .modal{
    height: 300px;
  }
}
</style>