<template>
    <div class="package-case">
        <vLess v-if="kinds.length>0" v-bind:kind="kinds"></vLess>
    </div>
</template>
<script>
    import vMore from '../packagecase/more.vue'
    import vLess from '../packagecase/less.vue'
    import vNone from '../packagecase/none.vue'
    export default {
        data () {
            return {
                isActive: false,
                personHidden: false,
                bigWindmill: true,
                grade: 4,
                kinds: [
                    {
                        type: 'warn',
                        title: '预警',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            },
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            mouseOver: function () {
                this.personHidden=true;
                this.bigWindmill=false;
                this.isActive=true;
            },
            mouseLeaver: function () {
                this.personHidden=false;
                this.bigWindmill=true;
                this.isActive=false;
            }
        },
        components:{
            vMore,vLess,vNone
        }
    }
</script>
<style scoped>
    .package-case{
        width: 75%;
        margin-left: -10px;
        margin-top: 10px;
        height: 550px;
        float: left;
    }

</style>
