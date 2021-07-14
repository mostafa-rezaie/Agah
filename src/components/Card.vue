<template>
  <div>
    
    <div class="img-container">
      <img :src="iconSrc" alt="icon" class="card-icon" />
    </div>
    <div class="card-text">
      <div class="title">
        {{ text.title }}
      </div>
      <div class="subtitle">
        {{ text.subtitle }}
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    iconSrc: {
      type: String,
      default: " ",
    },
    text: {
      title: {
        type: String,
        default: "title",
      },
      subtitle: {
        type: String,
        default: "subtitle",
      },
    },
  },
};
</script>
<style scoped>

 img {
  width: 29px;
  height: 51px;
  margin-top: 11px;
  margin-bottom: 8.7px;
}
.card-icon {
  flex-grow: 1;
  padding-left: 32px;
  width: 42px;
  height: 53px;
}
.card-text {
  flex-grow: 4;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
.subtitle {
  font-size: 18px;
  font-weight: lighter;
  width: 400px;
  margin: 20px 0 0 0;
}

</style>