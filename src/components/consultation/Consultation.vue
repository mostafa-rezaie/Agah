<template>
    <div>
        <app-complex-modal
        :isHidden="false"
        :iconSrc="require('../../assets/img/error-404.svg')"
        modalText="قابلیت مشاوره سرمایه گذاری در آینده در دسترس قرار خواهند گرفت."
        buttonText="بازگشت به صفحه اصلی"
        ></app-complex-modal>
    </div>
</template>
<script>
import ComplexModal from '../ComplexModal.vue'
export default {
    components :{
        appComplexModal : ComplexModal,

    }
}
</script>
<style scoped>
    
</style>