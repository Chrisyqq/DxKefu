<template>
    <div class="package">
        <el-row>
            <el-col :span="11"><div class="grid-content package-left" @mouseleave="mouseLeaver">
                <el-col :span="11"><div class="grid-content">
                    <div class="head-sculpture" v-bind:class="{ active: isActive }">
                        <img src="../../../static/img/xiaokui.jpeg">
                        <div class="turn-button" @mouseover="mouseOver">
                            <div class="turn-button-circle">
                                <span class="sun one"></span>
                                <span class="sun two"></span>
                                <span class="sun three"></span>
                                <span class="sun four"></span>
                            </div>
                        </div>
                        <p class="p-big">小葵</p>
                        <p>男 28岁</p>
                    </div>
                </div></el-col>
                <el-col :span="13">
                    <div class="grid-content person-guide">
                        <div class="person-hidden" v-if="personHidden">
                            <p>操作指引</p>
                            <el-button size="mini" type="info">账单分析</el-button>
                            <div class="text-p">
                                <p>操作指引</p>
                                <div class="text">
                                    订购的流量包无法抵扣已超出的流量
                                </div>
                            </div>
                        </div>
                        <div v-if="bigWindmill" class="Windmill">
                            <div class="big-Windmill">
                                <div class="block-one">
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                </div>
                                <div class="small-Windmill one"><span>价值</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-two">
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                </div>
                                <div class="small-Windmill two"><span>预警</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-three">
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                </div>
                                <div class="small-Windmill three"><span>粘性</span></div>
                            </div>
                            <div class="big-Windmill">
                                <div class="block-four">
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                    <p>Arup高</p>
                                </div>
                                <div class="small-Windmill four"><span>个性化</span></div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </div></el-col>
            <el-col :span="13" class="package-right-all">
                <div class="grid-content package-right">
                    <div class="package-right-item small">
                        <div class="package-right-item-head">客户类型</div><span>个人用户</span>
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">呼入次数</div><span class="blue">2</span>日<span class="blue">2</span>月 <span class="blue">处理明细</span>
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">付费类型</div><span>预付费</span>
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">余额</div><span class="red">-800.81</span>元 (<span class="red">欠费</span>)
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">销售品</div>
                        <span class="font-big">(融) 公众有线宽带20M包两年1800元 </span>
                        <el-popover
                            ref="popover5"
                            placement="bottom"
                            width="160"
                            trigger="hover">
                        <p>这是一段内容这是一段内容确定删除吗？</p>
                        <div style="text-align: right; margin: 0">
                        </div>
                        </el-popover>

                        <i class="el-icon-information font-big icon-color" v-popover:popover5></i>

                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">星级</div><vStar v-bind:point="grade"></vStar><span class="orange">4星</span>
                    </div>
                    <div class="package-right-item small">
                        <div class="package-right-item-head">有效时间</div><span>2013.10.1 - 2022.9.30</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import vStar from '../smallui/star.vue'
    export default {
        data () {
            return {
                isActive: false,
                personHidden: false,
                bigWindmill: true,
                grade: 4
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
            vStar
        }
    }
</script>
<style scoped>
    .blue{
        color: #1D9BD9;
    }
    .red{
        color: #F71818;
    }
    .orange{
        color: #FF8000;
    }
    .icon-color{
        color: #CDCDCD;
    }
    .font-big{
        font-size: 16px;
    }
    .font-normal{
        font-weight: normal !important;
    }
    .package{
        width: 75%;
        height: 160px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: -10px;
        background: #ffffff;
        float: left;
        color: #666666;
    }
    .grid-content{
        width: auto;
        height: 160px;
        text-align: center;
    }
    .package-left{

    }
    .package-right{
        width: 100%;
        height: 160px;
        border-left: 2px solid #EFEFEF;
    }
    .head-sculpture{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        position: relative;
    }
    .head-sculpture img{
        width: 100%;
        border-radius: 50%;
    }
    .head-sculpture p{
        margin-top: 5px;
        font-size: 14px;
    }
    .head-sculpture .p-big{
        font-size: 18px;
        color: #2C90D5;
    }
    .turn-button{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #ffffff;
        position: absolute;
        left: 80px;
        top: 70px;
        margin-left: -10px;
        transition: all 0.2s ease 0.1s;
    }
    .turn-button-circle{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2px solid #EFEFEF;
        margin:  3px auto;
        position: relative;
    }
    .turn-button-circle .sun{
        position: absolute;
        width: 2px;
        height: 8px;
        overflow: hidden;
        transition: all 0.1s ease;
    }
    .active .turn-button{
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); /* Internet Explorer */
        -moz-transform:rotate(360deg); /* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg); /* Opera */
        cursor: pointer;
    }
    .turn-button .one{
        left: 50%;
        top: 3px;
        margin-left: -1px;
        /*transform:rotate(90deg);*/
        /*-ms-transform:rotate(90deg); !* Internet Explorer *!*/
        /*-moz-transform:rotate(90deg); !* Firefox *!*/
        /*-webkit-transform:rotate(90deg); !* Safari 和 Chrome *!*/
        /*-o-transform:rotate(90deg); !* Opera *!*/
    }
    .turn-button .two{
        left: 50%;
        top: 11px;
        margin-left: -1px;
        transform:rotate(180deg);
        -ms-transform:rotate(180deg); /* Internet Explorer */
        -moz-transform:rotate(180deg); /* Firefox */
        -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        -o-transform:rotate(180deg); /* Opera */
    }
    .turn-button .three{
        left: 50%;
        top: 7px;
        margin-left: -5px;
        transform:rotate(90deg);
        -ms-transform:rotate(90deg); /* Internet Explorer */
        -moz-transform:rotate(90deg); /* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg); /* Opera */
    }
    .turn-button .four{
        left: 50%;
        top: 7px;
        margin-left: 3px;
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg); /* Internet Explorer */
        -moz-transform:rotate(-90deg); /* Firefox */
        -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
        -o-transform:rotate(-90deg); /* Opera */
    }
    .active .turn-button .one{
        left: 50%;
        width: 3px;
        height: 10px;
        top: 2px;
        margin-left: -3px;
    }
    .active .turn-button .two{
        left: 50%;
        width: 3px;
        height: 10px;
        bottom: 0;
        margin-left: 0;
    }
    .active .turn-button .three{
        left: 50%;
        top: 8px;
        margin-left: -6px;
        width: 3px;
        height: 10px;
    }
    .active .turn-button .four{
        left: 50%;
        top: 5px;
        margin-left: 3px;
        width: 3px;
        height: 10px;
    }
    .turn-button .sun:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        left: 0;
        top: 0;
        background: #EFEFEF;
    }
    .active .turn-button .one:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: 0;
        top: 0;
        background: #4BAEED;
    }
    .active .turn-button .two:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        right: 0;
        top: 0;
        background: #9EB9EA;
    }
    .active .turn-button .three:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #75D86E;
    }
    .active .turn-button .four:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #EC7C84;
    }
    .person-guide{
        position: relative;
    }
    .person-hidden{
        width: 150px;
        position: absolute;
        left: 50%;
        margin-left: -80px;
        border-radius: 5px;
        background: #FAFDFF;
        opacity: 0.8;
        height: 100%;
        border: 1px solid #C8E1F6;
        text-align: left;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 13px;
        transition: all 0.2s ease;
    }

    .person-hidden p{
        line-height: 25px;
    }
    .text-p{
        width: auto;
        padding-left: 5px;
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
    .person-hidden .text{
        padding: 5px;
        background: #DAF4FD;
        border-radius: 4px;
    }
    .Windmill{
        transition: all 0.2s ease;
    }

    .big-Windmill{
        width: 50%;
        height: 80px;
        overflow: hidden;
        float: left;
        position: relative;
        display: table;
        border-radius: 5px;
    }
    .big-Windmill .small-Windmill{
        position: absolute;
        overflow: hidden;
        color: #ffffff;
        z-index: 10;
    }
    .big-Windmill .small-Windmill span{
        z-index: 10;
        font-size: 14px;
    }
    .big-Windmill .one{
        width: 30px;
        height: 100%;
        right: 0;
    }
    .big-Windmill .block-one{
        display: table-cell;
        vertical-align: middle;
        font-size: 13px;
        width: 80px;
        line-height: 18px;
    }
    .big-Windmill .one span{
        margin-top: 20px;
        margin-left: 10px;
        width: 10px;
        float: left;
    }
    .big-Windmill .one:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 0;
        top: 0px;
        background: #4BAEED;
        z-index: -1;
    }
    .big-Windmill .two{
        height: 30px;
        width: 100%;
        line-height: 30px;
        bottom: 0;
    }
    .big-Windmill .block-two{
        text-align: center;
        font-size: 13px;
        line-height: 18px;
        height: 80px;
    }
    .big-Windmill .two span{
        margin-left: 25px;
        float: left;
    }
    .big-Windmill .two:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 0;
        top: 0px;
        background: #EC7C84;
        z-index: -1;
    }
    .big-Windmill .three{
        height: 30px;
        width: 100%;
        line-height: 30px;
        top: 0;
    }
    .big-Windmill .block-three{
        padding-top: 30px;
        text-align: center;
        font-size: 13px;
        line-height: 18px;
    }
    .big-Windmill .three span{
        margin-right: 28px;
        float: right;
    }
    .big-Windmill .three:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        background: #75D86E;
        z-index: -1;
    }
    .big-Windmill .four{
        width: 30px;
        height: 100%;
        left: 0;
    }
    .big-Windmill .block-four{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 13px;
        padding-left: 15px;
        line-height: 18px;
    }
    .big-Windmill .four span{
        margin-top: 15px;
        margin-left: 5px;
        width: 10px;
        float: left;
    }
    .big-Windmill .four:before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        right: 0;
        top: 0;
        background: #9EB9EA;
        z-index: -1;
    }
    .package-right .small{
        min-width: 50%;
    }
    .package-right .big{
        width: 100%;
    }
    .package-right-item{
        height: 26px;
        line-height: 26px;
        float: left;
        text-align: left;
        color: #333333;
        font-size: 13px;
        font-weight: bolder;
    }
    .package-right-item-head{
        width: 76px;
        height: 30px;
        text-align: right;
        float: left;
        margin-right: 10px;
        color: #999999;
        font-size: 13px;
        font-weight: normal;
    }
</style>
