<template>
    <div class="header">
        <el-row>
            <!--Logo area-->
            <el-col :xs="12" :sm="5" :md="5" :lg="5">
                <div class="logo">
                    <span class="logo_suffix">客服支撑系统</span>
                </div>
            </el-col>
            <!--call area-->
            <el-col :xs="12" :sm="14" :md="14" :lg="14">
                <div class="head-call">
                    <div class="head-call-all">
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-tonghuabaochi-copy"></i></div>
                            <p>保持</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-shezhi-gerenzhongxin"></i></div>
                            <p>求助</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-oc-transfer"></i></div>
                            <p>转接</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-aixin"></i></div>
                            <p>满意度</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-icon_chuyuanxiaojie"></i></div>
                            <p>电话小结</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-geren"></i></div>
                            <p>话后就绪</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-kehuzhengmang"></i></div>
                            <p>话后示忙</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-yuding"></i></div>
                            <p>小休</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-bohao"></i></div>
                            <p>拨号</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-guadianhua"></i></div>
                            <p>挂机</p>
                        </div>
                        <div class="item-icon">
                            <div class="icon-circle"><i class="iconfont icon-gongfeidianhuaanzhuo"></i></div>
                            <p>回拨提醒</p>
                        </div>
                        <div class="item-icon">
                            <el-dropdown trigger="click" menu-align="start">
                              <span class="el-dropdown-link">
                                <i style="color: #ffffff;" class="el-icon-caret-bottom el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>三方通话</el-dropdown-item>
                                <el-dropdown-item>应答</el-dropdown-item>
                                <el-dropdown-item>静音</el-dropdown-item>
                                <el-dropdown-item>启动夜铃</el-dropdown-item>
                                <el-dropdown-item>高级选项</el-dropdown-item>
                                <el-dropdown-item>黑名单</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                     </div>
                </div>
            </el-col>
            <!--myself area-->
            <el-col :xs="12" :sm="5" :md="5" :lg="5">
                <div class="head-myself">
                    <div class="head-myself-top">
                        <div class="myself-item-all">
                            <div class="myself-item"><i class="iconfont icon-people"></i></div>
                            <div class="myself-item"><i class="iconfont icon-message"></i></div>
                            <div class="myself-item"><i class="iconfont icon-iconfontjilufuzhi"></i></div>
                            <div class="myself-item"><i class="iconfont icon-tongji"></i></div>
                            <div class="myself-item"><i class="iconfont icon-pingjiajilu"></i></div>
                            <div class="myself-item"><i class="iconfont icon-icon"></i></div>
                        </div>
                    </div>
                    <div class="head-myself-bottom">
                        <div class="myself-bottom-item">
                            <div class="item-circle"></div><span>就绪</span>
                        </div>
                        <div class="myself-bottom-item">
                            <div class="item-circle"></div><span>忙</span>
                        </div>
                        <div class="myself-bottom-item">
                            <div class="item-circle"></div><span>话后</span>
                        </div>
                        <div class="myself-bottom-time">
                            <p>|  通话时间 <span>129</span> 秒</p>
                        </div>

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
</script>
<style scoped>
    .header {
        width: 100%;
        height: 60px!important;
        font-size: 14px;
        background-color:#2489D2;
        z-index:1000;
        overflow:hidden;
    }
    .header .logo{
        cursor:pointer;
        font-size: 14px;
        line-height: 60px;
    }
    .head-call{
        width: 100%;
    }
    .head-call-all{
        color: #ffffff;
        display: table;
        margin: 0 auto 0 auto;
    }
    .head-call-all .item-icon{
        display:table-cell;
        text-align: center;
        width: 60px;
        height: 60px;
        cursor: pointer;
        color: #fffffff;
    }
    .head-call-all .item-icon i{
        font-size: 18px;
    }
    .head-call-all .item-icon .icon-circle{
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 4px auto;
        border: 1px solid #ffffff;
        border-radius: 50%;
    }
    .head-call-all .item-icon p{
        font-size: 13px;
        margin-top: 4px;
    }
    .logo_suffix{
        color:#ffffff;
        font-size: 18px;
        margin-left: 20px;
    }
    .head-myself-top{
        width: 100%;
        height: 30px;
    }
    .head-myself-bottom{
        width: 100%;
        height: 30px;
    }
    .myself-item-all{
        color: #ffffff;
        display: table;
        float: right;
        margin-right: 5px;
    }
    .myself-item{
        display:table-cell;
        text-align: center;
        width: 34px;
        line-height: 26px;
        height: 26px;
        cursor: pointer;
        color: #fffffff;
    }
    .head-myself-bottom{
        width: 245px;
        height: 24px;
        line-height: 24px;
        border-radius: 24px;
        background: #ffffff;
        float: right;
        margin-right: 10px;

    }
    .myself-bottom-item{
        height: 24px;
        float: left;
        margin-left: 10px;
        line-height: 26px;
        font-size: 13px;
    }
    .item-circle{
        width: 8px;
        height: 8px;
        float: left;
        margin-right: 3px;
        margin-top: 8px;
        border-radius: 50%;
        background: #13CE66;
    }
    .myself-bottom-time{
        width: auto;
        height: 24px;
        color: #99A9BF;
        line-height: 26px;
        margin-left: 5px;
        font-size: 13px;
        float: left;
    }
    .myself-bottom-time span{
        color: #FF4949;
        font-size: 16px;
        line-height: 20px;
    }
</style>
