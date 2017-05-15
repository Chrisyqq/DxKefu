<template>
    <div class="package">
        <el-row>
            <el-col :span="11"><div class="grid-content package-left">
                <el-col :span="11"><div class="grid-content">
                    <div class="head-sculpture">
                        <img src="../../../static/img/xiaokui.jpeg">
                        <div class="turn-button">
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
                    <div class="grid-content">
                        <div class="big-Windmill">
                            <div class="block"></div>
                            <div class="small-Windmill one">价值</div>
                        </div>
                        <div class="big-Windmill">
                            <div class="small-Windmill two">预警</div>
                        </div>
                        <div class="big-Windmill">
                            <div class="small-Windmill three">粘性</div>
                        </div>
                        <div class="big-Windmill">
                            <div class="small-Windmill four"><span>个性化</span></div>
                        </div>
                    </div>
                </el-col>
            </div></el-col>
            <el-col :span="13"><div class="grid-content package-right">asa</div></el-col>
        </el-row>
    </div>
</template>
<script>
</script>
<style scoped>
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
    .turn-button:hover{
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
    .turn-button:hover .one{
        left: 50%;
        width: 3px;
        height: 10px;
        top: 2px;
        margin-left: -3px;
    }
    .turn-button:hover .two{
        left: 50%;
        width: 3px;
        height: 10px;
        bottom: 0;
        margin-left: 0;
    }
    .turn-button:hover .three{
        left: 50%;
        top: 8px;
        margin-left: -6px;
        width: 3px;
        height: 10px;
    }
    .turn-button:hover .four{
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
    .turn-button:hover .one:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: 0;
        top: 0;
        background: #4BAEED;
    }
    .turn-button:hover .two:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        right: 0;
        top: 0;
        background: #9EB9EA;
    }
    .turn-button:hover .three:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #75D86E;
    }
    .turn-button:hover .four:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -7px;
        top: 0;
        background: #EC7C84;
    }
    .big-Windmill{
        width: 50%;
        height: 50%;
        float: left;
        position: relative;
        
    }
    .big-Windmill .small-Windmill{
        position: absolute;
        overflow: hidden;
        color: #ffffff;
        text-align: center;
        z-index: 10;
    }
    .big-Windmill .small-Windmill span{
        z-index: 10;
    }
    .big-Windmill .one{
        width: 30px;
        height: 100%;
        right: 0;
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
        bottom: 0;
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
        top: 0;
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
</style>
