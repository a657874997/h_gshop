<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(foodTypes,index) in foodTypesArr" :key="index">
            <a class="link_to_food" href="javascript:" v-for="(item, index) in foodTypes" :key="index">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import {mapState} from 'vuex'

  export default {
    mounted() {
      this.$store.dispatch('getFoodTypes')
      //创建一个swiper实例对象，实现轮播
      new Swiper('.swiper-container', {
          loop: true, //循环轮播
          //如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
      })
    },
    computed: {
      ...mapState(['address', 'foodTypes']),
      /*
      * 根据foodTypes一维数组生成一个二维数组
      * 小数组中的元素个数最大为8
      * */
      foodTypesArr () {
        console.log(this)
        const {foodTypes} = this
        console.log(foodTypes)
        //准备一个空的二维数组
        const arr = []
        let minArr = []
        //遍历foodTypes
        foodTypes.forEach(c=> {
          minArr.push(c)
          if (minArr.length===8) {
            minArr = []
          }
          if (min.length===0) {
            arr.push(minArr)
          }
        })
        console.log(arr)
        return arr
      }
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
