<template>
    <div class="star">
        <i class="el-icon-star-on" v-for="n in point"></i>
    </div>
</template>
<style>
</style>
<script>
    export default {
        data () {
            return {

            }
        },
        props: ['point'],
        methods: {
            num: function () {
                return 1;
            }
        }
    }
</script>
