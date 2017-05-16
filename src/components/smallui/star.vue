<template>
    <div class="star">
        <i class="el-icon-star-on color" v-for="n in point"></i>
    </div>
</template>
<style>
    .star{
        float: left;
    }
    .color{
        color: #FFCC01;
        font-size: 16px;
        margin-right: 2px;

    }
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
