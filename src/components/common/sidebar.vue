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
                <el-col class="assets-search-type">
                    <el-col :span="6"><div class="assets-search-type-item active"><span class="">同客户</span></div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item"><span class="active">同合同</span></div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item"><span class="">身份证</span></div></el-col>
                    <el-col :span="6"><div class="assets-search-type-item more"><span class="">更多查询</span></div></el-col>
                </el-col>
                <el-col class="assets-locator-table">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <thead>
                        <tr>
                          <th width="14">状态</th>
                          <th width="26">产品类别</th>
                          <th width="50">号码</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in tableData">
                          <th width="14">{{item.date}}</th>
                          <th width="26">{{item.name}}</th>
                          <th width="42"><span>{{item.address}}</span><i class="iconfont icon-zeng02"></i></th>
                        </tr>
                      </tbody>
                    </table>
                </el-col>
            </el-row>
        </div>

        <div class="tool-cabinet">
            <el-col :span="24">
                <div class="assets-locator-head">
                    <span>工具箱</span>
                    <el-button @click="show = !show" class="sidebar-button" size="small">更多</el-button>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="tool-cabinet-box">
                    <div class="tool-cabinet-item" v-for="item in toolData">
                        <i class="iconfont" v-bind:class="item.icon"></i>
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </el-col>
            <transition name="slide-fade">
                <div v-if="show" class="tool-cabinet-choose">
                <el-col :span="24" class="head"><span>工具箱</span><i @click="show = !show" class="el-icon-close"></i></el-col>
                 <el-col class="tool-cabinet-choose-box">
                    <el-col :span="24" style="padding-left: 10px;" v-for="item in toolDataAll" :key="item.index">
                        <p class="tool-head">{{item.title}}</p>
                        <div class="tool-cabinet-choose-item" v-for="item in item.toolBox">
                            <i class="iconfont" v-bind:class="item.icon"></i>
                            <p>{{item.title}}</p>
                        </div>
                    </el-col>
                </el-col>
                </div>
              </transition>
        </div>
    </div>
</template>

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
        font-size: 13px;
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
        color: #777777;
    }
    .person-message-text{
        color: #D3D3D3;
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
        color: #D3D3D3;
        font-size: 14px;
        outline:none;
        padding-left: 10px;
        float: left;
    }
    .sidebar-search-input::-webkit-input-placeholder {color: #D3D3D3;}
    .sidebar-search-input::-moz-placeholder {color: #D3D3D3;} /* firefox 19+ */
    .sidebar-search-input:-ms-input-placeholder {color: #D3D3D3;} /* ie */
    .sidebar-search-input:-moz-placeholder {color: #D3D3D3;}
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
        height: 36px;
        line-height: 36px;
        font-size: 13px;
        color: #D3D3D3;
    }
    .assets-search-type .more{
        text-align: right;
        color: #4286B2;
    }
    .assets-search-type-item{
        text-align: center;
        padding: 2px;
        border-radius: 5px;
    }
    .assets-search-type-item span{
        cursor: pointer;
    }
    .assets-search-type-item .active{
        background: #426587;
        padding: 5px;
        border-radius: 4px;
    }
    .assets-locator-table{
        width: 100%;
        background: #262626;
    }
    table{
        color: #D3D3D3;
        font-size: 13px;
        font-weight: 30 !important;
        position: relative;
    }
    table thead{
        height: 30px;
        text-align: left;
        font-weight: 100 !important;
        line-height: 30px;
        padding-left: 14px;
    }
    table thead, tbody tr {
        display:table;
        width:100%;
        text-align: left;
        table-layout:fixed;
    }
    table tbody {
        border-top: 2px solid #333333;
        padding-left: 14px;
        display:block;
        height: 100px;
        overflow-y:scroll;
    }
    table tbody .iconfont{
        margin-left: 5px;
        margin-top: 1px;
        font-size: 21px;
        float: left;
    }
    table tbody span{
        float: left;
    }
    table tbody tr{
        height: 24px;
        line-height: 24px;
    }
    table tbody tr:hover{
        background: #373C48;
    }
    ::-webkit-scrollbar
    {
        width: 6px;
        height: 16px;
        position: fixed;
        background-color: #4C4D51;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        background-color: #262626;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    .tool-cabinet{
        position: relative;
        padding: 10px;
    }
    .tool-cabinet-box{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tool-cabinet-item{
        flex: none;
        height: 60px;
        width: 76px;
        padding-top: 10px;
        text-align: center;
        margin-top: 4px;
        background: #262626;
        font-size: 13px;
        font-weight: 100;
    }
    .tool-cabinet-item i{
        font-size: 22px;
    }
    .tool-cabinet-item p{
        margin-top: 5px;
    }
    .tool-cabinet-choose{
        min-width: 415px;
        height: 460px;
        background: #31343C;
        position: absolute;
        left: 100%;
        margin-left: 6px;
        top: -220px;
        z-index: 100;
    }
    .tool-cabinet-choose-box{
        height: 426px;
        overflow: auto;
    }
    .tool-cabinet-choose .head{
        height: 34px;
        line-height: 34px;
        border-bottom: 2px solid #262626;
    }
    .tool-cabinet-choose .head span{
        margin-left: 15px;
        font-size: 14px;
    }
    .tool-cabinet-choose .head i{
        float: right;
        margin-right: 15px;
        margin-top: 10px;
        font-size: 12px;
    }
    .tool-cabinet-choose .tool-head{
        height: 34px;
        line-height: 34px;
        font-size: 13px;
        color: #4286B2;
    }
    .tool-cabinet-choose-item{
        height: 60px;
        width: 76px;
        float: left;
        padding-top: 10px;
        margin-right: 2px;
        margin-top: 2px;
        text-align: center;
        background: #262626;
        font-size: 13px;
    }
    .tool-cabinet-choose-item i{
        font-size: 22px;
    }
    .tool-cabinet-choose-item p{
        margin-top: 5px;
    }
    /*定义自定义功能滑动*/
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
      transform: translateX(10px);
      opacity: 0;
    }
</style>
<script>
  export default {
    data() {
      return {
        show: '',
        tableData: [{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        },{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        },{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }],
        toolData: [{
          title: '销售品',
          icon: 'icon-zhizhang0201'
        },{
          title: '子产品&属性',
          icon: 'icon-caidan'
        },{
          title: 'CRM工单',
          icon: 'icon-iconfontdaojiaofangxing'
        },{
          title: '客户信息',
          icon: 'icon-kehuxinxi_intouch'
        },{
          title: '短信引导',
          icon: 'icon-duanxin'
        },{
          title: '计算器',
          icon: 'icon-15'
        }
        ],
        toolDataAll: [{
            title: "位置查询",
            toolBox: [{
                title: '区域性故障',
                icon: 'icon-guzhangguanli'
            },{
                title: '选址查询',
                icon: 'icon-qiyexuanzhi'
            },{
                title: '营业厅查询',
                icon: 'icon-yingyetingjiaofei--'
             },{
                title: 'wifi热点查询',
                icon: 'icon-wifi'
             }]
            },{
            title: "信息查询",
            toolBox: [{
                title: '销售品',
                icon: 'icon-zhizhang0201'
            },{
                title: '子产品&属性',
                icon: 'icon-caidan'
            },{
                title: 'CRM工单',
                icon: 'icon-iconfontdaojiaofangxing'
             },{
                title: '客户信息',
                icon: 'icon-kehuxinxi_intouch'
             },{
                title: '靓号查询',
                icon: 'icon-iconfontdaojiaofangxing'
             }]
            },{
            title: "引导受理",
            toolBox: [{
                title: '短信引导',
                icon: 'icon-duanxin'
            },{
                title: '提醒定制',
                icon: 'icon-dingzhi'
            },{
                title: '密码服务',
                icon: 'icon-yaochi'
             },{
                title: '传真',
                icon: 'icon-dayinji'
             }]
            },{
            title: "其他",
            toolBox: [{
                title: '计算器',
                icon: 'icon-kehuxinxi_intouch'
            },{
                title: '坐席秘书',
                icon: 'icon-xiaomishu'
            },{
                title: '外部系统',
                icon: 'icon-waibuzhandianshezhi'
             }]
            }
        ]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
