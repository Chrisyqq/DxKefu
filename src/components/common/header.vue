<template>
    <div class="header">
        <el-row>
            <!--Logo area-->
            <el-col :xs="12" :sm="12" :md="4" :lg="5">
                <div class="logo">
                    <span class="logo_suffix">客服支撑系统</span>
                </div>
            </el-col>
            <!--call area-->
            <el-col :xs="12" :sm="12" :md="8" :lg="14">
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
                            <el-dropdown trigger="click">
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
            <el-col :xs="12" :sm="12" :md="4" :lg="5">
                <div class="head-myself">
                    <div class="head-myself-top">
                    </div>
                    <div class="head-myself-bottom">
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
        height: 10px;
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
        line-height: 32px;
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
</style>
