<template>
  <div>
    <div class="text-container">
      <div class="title">شهر مورد نظر را انتخاب کنید</div>
      <div class="subtitle">شعبه مورد نظر خود را انتخاب یا جستجو کنید</div>
    </div>
    <div class="drop-down">
      <div class="drop-down-list">
        <div class="search-bar">
          <div id="search-icon-wrapper">
            <img src="../../../assets/img/icon-search.svg" alt="" />
          </div>
          <input
            class="city-seach-bar"
            name="city"
            id="city"
            placeholder="تهران"
          />
        </div>
        <a href="#">تهران</a>
        <a href="#">تهران</a>
        <a href="#">تهران</a>
        <a href="#">تهران</a>
        <a href="#">تهران</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.text-container {
  margin-right: 97px;
  direction: rtl;
  margin-top: 82px;
}
.title {
  margin-bottom: 21px;
  font-size: 24px;
  font-weight: bolder;
}
.subtitle {
  margin-right: 8px;
  font-size: 20px;
}

.drop-down {
  direction: rtl;
  margin-right: 97px;
  margin-top: 68px;
  min-width: 490px;
  overflow: auto;
}
.drop-down-list a {
  display: block;
  padding: 15px 15px 15px 0px;
  background-color: #f6f6f6;
  border-bottom: grey;
  text-decoration: none;
  color: black;
  border-top: none;
}
.drop-down-list{
  width: 460px;
  border: 2px solid #cccccc;
}
.search-bar input {
  padding: 15px 25px 15px 0px;
  background-color: #f6f6f6;
  border: none;
  margin-right: 40px;
  box-sizing: content-box;
  /* height: 100%; */
}
.search-bar > input :focus-visible{
  border: none;
}
.search-bar {
  background-color: #f6f6f6;
}
#search-icon-wrapper > img { 
display: block;
position: absolute;
margin: 10px 10px 0px 0px ;
}

.search-bar , .drop-down-list > a  {
  border-bottom: 1px solid #d1d1d1;
}
.drop-down-list > a{
  display: none;
}
</style>
