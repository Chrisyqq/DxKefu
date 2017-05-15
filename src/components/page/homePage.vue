<template>
        <div class="home">
            <v-pageTitle></v-pageTitle>
            <div class="home-block">
                <vPackage></vPackage>
                <v-packageLine></v-packageLine>
                <v-packageCase></v-packageCase>
            </div>
        </div>
</template>
<style>
    .home{
        height: 100%;
    }
    .home-block{
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 10px;
        height: 100%;
    }
</style>
<script>
    import vPageTitle from '../common/pageTitle.vue';
    import vPackage from '../common/package.vue';
    import vPackageCase from '../common/packageCase.vue';
    import vPackageLine from '../common/packageLine.vue';
    export default {
        components:{
            vPageTitle,vPackage,vPackageLine,vPackageCase
        }
    }
</script>
