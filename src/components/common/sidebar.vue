<template>
    <div class="sidebar">
        <div class="person-message">
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">呼入号码</div></el-col>
              <el-col :span="12"><div class="person-message-text">133 9878 9998</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">业务号码</div></el-col>
              <el-col :span="12"><div class="person-message-text blue"><input placeholder="请输入号码" class="person-message-input"><i style="margin-left: 5px;" class="iconfont icon-zeng02"></i></div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">关联宽带</div></el-col>
              <el-col :span="12"><div class="person-message-text">18023230467</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">号码地市</div></el-col>
              <el-col :span="12"><div class="person-message-text">杭州市 (桐庐市)</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">号码类型</div></el-col>
              <el-col :span="12"><div class="person-message-text">(现行)移动电话</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">用户姓名</div></el-col>
              <el-col :span="12"><div class="person-message-text">浙江电信杭州分公司</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">小户名</div></el-col>
              <el-col :span="12"><div class="person-message-text">罗斯福(4星)</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">证件类型</div></el-col>
              <el-col :span="12"><div class="person-message-text">330288199203313231</div></el-col>
            </el-row>
            <el-row :gutter="20" class="person-message-item">
              <el-col :span="8"><div class="person-message-title">实名状态</div></el-col>
              <el-col :span="2"><div class="person-message-text">是</div></el-col>
              <el-col :span="8"><div class="person-message-title">一证五号</div></el-col>
              <el-col :span="2"><div class="person-message-text">5</div></el-col>
            </el-row>
        </div>

        <div class="assets-locator">
            <el-row>
              <el-col :span="24">
                  <div class="assets-locator-head">
                      <span>资产定位</span>
                      <el-button class="sidebar-button" size="small">身份认证</el-button>
                  </div>
              </el-col>
              <el-col :span="24" class="sidebar-search">
                  <input class="sidebar-search-input" placeholder="请输入内容">
                  <button class="sidebar-search-button"><i class="el-icon-search"></i></button>
              </el-col>
              <el-row class="assets-search-type">
                    <el-col :span="6"><div class="assets-search-type-item">同客户</div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item">同客户</div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item">同客户</div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item">同客户</div></el-col>
              </el-row>
            </el-row>
        </div>

        <div class="assets-locator">
            <el-row>
              <el-col :span="24" class="assets-locator-head">
              </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 20%;
        left: 0;
        top: 60px;
        bottom:0;
        background: #31343C !important;
    }
    .person-message{
        margin-top: 10px;
    }
    .person-message-item{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 200;
    }
    .person-message-item .icon-zeng02{
        font-size: 30px;
        position: absolute;
        right: 15%;
        top: -2px;
        color: #E37C22;
    }
    .person-message-title{
        text-align: right;
    }
    .person-message-text{
        color: #ffffff;
    }
    .person-message-input{
        background: #31343C !important;
        border: none;
        width: 80%;
        height: 28px;
        color: #2489D2;
        font-size: 16px;
        outline:none;
    }
    .person-message-input::-webkit-input-placeholder {color: #2489D2;}
    .person-message-input::-moz-placeholder {color: #2489D2;} /* firefox 19+ */
    .person-message-input:-ms-input-placeholder {color: #2489D2;} /* ie */
    .person-message-input:-moz-placeholder {color: #2489D2;}
    .assets-locator{
        padding: 10px;
    }
    .assets-locator-head{
        border-top: 2px solid #282B2F;
        margin-top: 10px;
        height: 46px;
        line-height: 46px;
    }
    .assets-locator-head span{
        font-size: 15px;
        color: #4286B2;
    }
    .sidebar-button{
        float: right;
        margin-top: 10px;
        background: #31343C;
        color: #4286B2;
        border: 1px solid #4286B2;
    }
    .sidebar-search{
        margin-top: 5px;
    }
    .sidebar-search-input{
        background: #262626 !important;
        border: none;
        width: 80%;
        height: 30px;
        line-height: 30px;
        color: #ffffff;
        font-size: 14px;
        outline:none;
        padding-left: 10px;
        float: left;
    }
    .sidebar-search-input::-webkit-input-placeholder {color: #ffffff;}
    .sidebar-search-input::-moz-placeholder {color: #ffffff;} /* firefox 19+ */
    .sidebar-search-input:-ms-input-placeholder {color: #ffffff;} /* ie */
    .sidebar-search-input:-moz-placeholder {color: #ffffff;}
    .sidebar-search-button{
        width: 20%;
        margin-left: -10px;
        cursor: pointer;
        height: 30px;
        background: #3D5D79;
        border: none;
        color: #ffffff;
        outline:none;
    }
    .sidebar-search-button i{
        font-size: 16px;
    }
    .assets-search-type{

    }
</style>
