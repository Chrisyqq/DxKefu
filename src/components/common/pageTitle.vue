<template>
    <div class="pageTitle">
        <div class="title-item">
            <div @click="tagActive" v-bind:class="nowActive" class="title-item-tag active">首页</div>
        </div>
        <div class="nav-bar">
            <div class="example-item">
                <div class="item" v-for="item in examplePage">{{item.title}}</div>
            </div>
        </div>
        <div class="pageTitle-search">
            <div class="search">
                <input placeholder="知识库/插件搜索">
                <i class="el-icon-search"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                nowActive: "",
                examplePage: [
                    {title:'故障'},
                    {title:'财务'},
                    {title:'流量'},
                    {title:'营销'},
                    {title:'国漫'},
                    {title:'投诉'}
                ]
            }
        },
        props:['vtitle'],
        methods: {
            tagActive: function(){
                this.nowActive = "active"
            }
        }
    }
</script>
<style scoped>
    .pageTitle{
        clear:both;
        width: 100%;
        height: 40px;
        background: #5C5C5C;
    }
    .pageTitle .title-item{
        height: 40px;
        line-height: 40px;
        float: left;
    }
    .pageTitle-search{
        float: right;
        width: 320px;
        height: 30px;
        margin-top: 3px;
        position: relative;
        margin-right: 40px;
    }
    .pageTitle-search .search{
        padding: 3px;
    }
    .pageTitle-search .search input{
        width: 100%;
        height: 28px;
        border-radius: 5px;
        outline:none;
        border: none;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .pageTitle-search .search i{
        position: absolute;
        right: 10px;
        top: 9px;
        background: #ffffff;
    }
    ::-webkit-input-placeholder {color: #D3D3D3;}
    ::-moz-placeholder {color: #D3D3D3;} /* firefox 19+ */
    :-ms-input-placeholder {color: #D3D3D3;} /* ie */
    :-moz-placeholder {color: #D3D3D3;}
    .pageTitle .title-item .title-item-tag{
        width: 80px;
        height: 34px;
        background: #E8E8E9;
        margin-left: 16px;
        margin-top: 6px;
        float: left;
        text-align: center;
        color: #1B1B1B;
        font-weight: bold;
        position: relative;
        cursor: pointer;
    }
    .pageTitle .title-item .active:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: #4BAEED;
        animation: tagIndex 0.2s ease;
        -moz-animation: tagIndex 0.2s ease;	/* Firefox */
        -webkit-animation: tagIndex 0.2s ease;	/* Safari 和 Chrome */
        -o-animation: tagIndex 0.2s ease;	/* Opera */
    }
    @keyframes tagIndex
    {
    from {left: 50%;width:0;}
    to {left: 0;width:100%;}
    }

    @-moz-keyframes tagIndex /* Firefox */
    {
    from {left: 50%;width:0;}
    to {left: 0;width:100%;}
    }

    @-webkit-keyframes tagIndex /* Safari 和 Chrome */
    {
    from {left: 50%;width:0;}
    to {left: 0;width:100%;}
    }

    @-o-keyframes tagIndex /* Opera */
    {
    from {left: 50%;width:0;}
    to {left: 0;width:100%;}
    }
    .nav-bar{
        width: auto;
        height: 40px;
        float: right;
    }
    .example-item{
        display: table;
        height: 40px;
        float: right;
    }
    .example-item .item{
        display:table-cell;
        text-align: center;
        width: 60px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;
    }

</style>
