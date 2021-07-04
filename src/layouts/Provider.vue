<template>
    <div>
        <component :is='layout'>
            <slot></slot>
        </component>
    </div>
</template>
<script>
export default {
props:{
    layout:String
}
}
</script>