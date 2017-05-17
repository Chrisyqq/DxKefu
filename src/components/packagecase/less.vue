<template>
    <div class="package-case-state">
        asdnaso
        <div class="state-item" v-for="item in kind" v-bind:class="item.type">
            <div class="item-sun">
                <div class="header">
                    <span class="title">{{item.title}}</span>
                    <div class="small-title" v-if="item.title !== '工单'">( <span>{{item.sun.length}}</span> )</div>
                    <div class="small-title-right" v-else>近一个月的<span>{{item.sun.length}}</span>单</div>
                    <div class="turn-button" v-if="item.sun.length>1">
                        <i class="iconfont icon-zuo" @click="changingOver(item.sun.length,'left',$event)"></i><i class="iconfont icon-you" @click="changingOver(item.sun.length,'right',$event)"></i>
                    </div>
                </div>
                <div class="text">
                    <div class="text-sun-all" num="1">
                        <div class="text-sun" v-for="item in item.sun">
                            <p class="title">{{item.smallTitle}}</p>
                            <p class="text-area">{{item.text}}</p>
                            <div class="button">
                                <el-button v-for="(item,index) in item.button" size="small" :key="index">{{item}}</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return{

            }
        },
        props: ['kind'],
        methods: {
            changingOver: function (num,dir,event) {
                var nowNum = event.target.parentNode.parentNode.parentNode.lastChild.firstChild.getAttribute('num');
                if(dir =='right'){
                    if(nowNum<num){
                        var oldMove = event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left;
                        if(oldMove.substring(0,oldMove.length-1)==''){
                            var newMove = oldMove.substring(0,oldMove.length-1) - 100;
                        }else{
                            var newMove = parseInt(oldMove.substring(0,oldMove.length-1)) - 100;
                        }
                        event.target.parentNode.parentNode.parentNode.lastChild.firstChild.setAttribute('num',nowNum + 1);
                        event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left=newMove + "%";
                    }
                }else{
                    if(nowNum>1){
                        var oldMove = event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left;
                        var newMove = parseInt(oldMove.substring(0,oldMove.length-1)) + 100;
                        event.target.parentNode.parentNode.parentNode.lastChild.firstChild.setAttribute('num',num-1);
                        event.target.parentNode.parentNode.parentNode.lastChild.firstChild.style.left= newMove + "%";
                    }
                }
            }
        }
    }
</script>
<style>
    .package-case-state{
        display: -webkit-flex;
        display: flex;
        flex-direction: column ;
        flex-wrap: wrap;
        height: 100%;
        background: #ffffff;
        padding-right: 12px;
    }
    .state-item{
        width: auto;
        margin-top: 10px;
        margin-left: 10px;
        float: left;
        height: 170px !important;
        border-radius: 5px;
    }
    .item-sun .header{
        height: 36px;
        line-height: 36px;
    }
    .warn .item-sun{
        border: 1px solid #FFEBEB;
    }
    .warn .item-sun .header{
        background: #FFEBEB;
    }
    .normal .item-sun{
        border: 1px solid #E3F3FF;
    }
    .normal .item-sun .header{
        background: #E3F3FF;
    }
    .item-sun .header .title{
        float: left;
        color: #333333;
        margin-left: 10px;
        font-weight: bold;
    }
    .item-sun .header .small-title-right{
        font-size: 13px;
        float: right;
        margin-right: 24px;
        color: #666666;
    }
    .item-sun .header .small-title-right span{
        color: #F71818;
    }
    .item-sun .header .small-title{
        font-size: 14px;
        float: left;
        color: #333333;
        margin-left: 10px;
    }
    .item-sun .header .small-title span{
        color: #F71818;
    }
    .item-sun{
        width: 100%;
        height: 100%;
        float: left;
        border-radius: 5px;
        overflow: hidden;
    }
    .turn-button{
        float: right;
    }
    .turn-button i{
        margin-right: 5px;
        color: #999999;
        cursor: pointer;
    }
    .item-sun .text{
        width: 100%;
        height: 100%;
        float: left;
        position: relative;
    }
    .item-sun .text .text-sun-all{
        position: absolute;
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: row;
        transition: all 0.2s ease;
        left: 0;
    }
    .text .text-sun-all .text-sun{
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        float: left;
    }
    .warn .text-sun .title{
        color: #F71818;

    }
    .text-sun .title{
        color: #F71818;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .text-sun .text-area{
        color: #333333;
        font-size: 13px;
        line-height: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .text-sun .button{
        font-size: 16px;
        margin-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .text-sun button{
        background: #63ADE3;
        color: #ffffff;
    }
</style>