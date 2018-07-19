<template>
  <div class="top-card">
    <!-- FirstCardShow -->
    <transition name="showfront" >
      <div class="rotate-front" v-show="!theFrontCard" >
        <div class="card-img" ></div>    
        <div class="card-num" 
            :class="{active: focusCardNum}">
            {{ pointNum }}
        </div>                          
        <div class="card-name" :class="{active: focusCardName}">{{ firstName }}</div>    
        <div class="card-vaild" :class="{active: theOutVaild}">
            <div class="card-thru">vaild thru</div>
            <div class="card-date">{{ expiryDate }}</div>
        </div>
      </div>
    </transition>
    <!-- BackCardShow -->
    <transition name="showback">
        <div class="rotate-back" v-show="theFrontCard">
                <div class="back-card"></div>
                <div class="back-img"></div>
                <div class="back-cvc">{{ digitCvc }}</div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    pointNum : {
      type : String,
      value : '•••• •••• •••• ••••'
    },
    firstName : {
      type : String,
      value : 'YOUR NAME HERE'
    },
    expiryDate : {
      type : String,
      value : '••/••'
    },
    digitCvc : {
      type : String,
      value : ''
    },
    theFrontCard : {
      type : Boolean,
      value : false
    },
    focusCardNum : {
      type : Boolean,
      value : false
    },
    focusCardName : {
      type : Boolean,
      value : false
    },
    theOutVaild : {
      type : Boolean,
      value : false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top-card
    width 290px
    height 180px   
    margin 0 auto
    perspective 1000px
.rotate-front, .rotate-back
    width 290px
    height 180px
    background-color #999
    border-radius 14px
    transition-timing-function: linear
.rotate-back
    position absolute
    top 0
.showfront-enter-active
    transition: all .3s .3s
.showfront-leave-active
    transition: all .3s 
.showfront-enter,.showfront-leave-active
    transform: rotateY(90deg)
.showback-enter-active
    transition: all .3s .3s
.showback-leave-active
    transition: all .3s
.showback-enter,.showback-leave-active
    transform: rotateY(-90deg)
.back-card
    width 290px
    height 40px
    background-color black
    position absolute
    top 18px
.back-img
    width 220px
    height 30px
    background-image url(../assets/line.jpg)
    position absolute
    top 40%
    right  20%
.back-cvc
    width 100px
    height 30px
    position absolute
    top 40%
    right  20%
.card-img
    width 40px
    height 25px
    background-image url(../assets/xiazai.svg)
    background-size contain
    background-repeat no-repeat
    float left
    margin 20px 0 0 30px
.card-num
    width 300px
    height 30px
    float:left
    margin 30px 0 0 30px
    font-size 22px
    color #CCCCCC
.card-name
    width 174px
    height 17px
    float left
    margin 25px 0 0 30px
    color #CCCCCC
    font-size 14px
.card-vaild
    width 60px
    height 30px
    float right
    margin 5px 25px 0 0
    color #CCCCCC
    font-size 13px
.card-date
    font-size 17px
.active
      color:#fff
</style>
