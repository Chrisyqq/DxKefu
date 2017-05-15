<template>
    <div class="wrapper">
        <vHead></vHead>
        <vSidebar></vSidebar>

        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>
<style>
    .wrapper{
        height: 100%;
    }
</style>
<script>
    import vHead from './header.vue'
    import vSidebar from './sidebar.vue'
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
