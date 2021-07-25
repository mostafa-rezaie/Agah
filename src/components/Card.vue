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
  min-width: 21px;
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
@media screen and (max-width:870px) {
  .card-icon{
    width: 60%;
  }
  .img-container {
    width: 13%;
  }
  .card-text{
    width: 85%;
  }
  .title , .subtitle {
    font-size: 16px;
  }
  .subtitle {
    margin-top: 5px;
    width:85%
  }
  .card-text{
    height: 60%;
    align-self: center;
  }
}
@media screen and (max-width:440px) {
  .title, .subtitle{
    font-size: 14px;
    width: 90%;
  }
  .card-icon{
    padding-left: 0;
  }
.img-container{
  width: 9%;
}
}

</style>