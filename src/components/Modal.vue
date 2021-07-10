<template>
  <div class="modal-backdrop isHidden">
    <div class="modal">
      <div class="modal-header">
        {{ modalText.headerText }}
      </div>
      <br />
      <div class="modal-body">
        {{ modalText.bodyText }}
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
  components: {
  },
  props: {
    modalText: {
      bodyText: {
        type: String,
        default: "body text",
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
  width: 586px;
  height: 324px;
  padding: 10px;
  box-sizing: content-box;
}

.modal-header {
}
.modal-body {
  margin: 100px 52px 40px 52px;
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
}
</style>