<template>
    <div class="package-case">
        <vLess v-if="kinds.length>3" v-bind:kind="kinds"></vLess>
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
                    },
                    {
                        type: 'normal',
                        title: '财务',
                        sun: [
                            {
                                smallTitle: '欠费',
                                text: '该用户已欠费停机（欠费800.87元），可能来电查询帐务信息，请提醒缴费。紧急复机（享受星级权益复机3次）',
                                button: ['账单分析','账单分析']
                            }
                        ]
                    },
                    {
                        type: 'normal',
                        title: '营销',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    },
                    {
                        type: 'normal',
                        title: '故障',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    },
                    {
                        type: 'normal',
                        title: '工单',
                        sun: [
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
