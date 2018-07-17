<template>
  <div id="app">
    <div class="cardapp" >          
            <div class="reco_card">
                <!-- 正面 -->
            <transition name="showfront" >
                <div class="exhibit-front" v-show="!Thefrontcard" >
                    <div class="reco_card_img" ></div>    
                    <div class="reco_card_num" 
                         :class="{active: Theoutnum}"
                         ref="numcolor" 
                         v-mask="'#### #### #### #####'">
                         {{ todonum }}
                    </div>                          
                    <div class="reco_card_name" :class="{active: Theoutname}" >{{ todoname }}</div>    
                    <div class="reco_card_vaild" :class="{active: Theoutvaild}">
                        <div class="reco_card_desc">vaild thru</div>
                        <div class="reco_card_date" v-mask="'##/##'">{{ tododate }}</div>
                    </div>
                </div>
            </transition>
                <!-- 反面 -->
            <transition name="showback">
                <div class="exhibit-back" v-show="Thefrontcard">
                        <div class="revercard"></div>
                        <div class="reverimg"></div>
                        <div class="revercvc" v-mask="'##/##'">{{ todocvc }}</div>
                </div>
            </transition>
            </div>      

            <!-- 表单 -->
            <form class="sub_form">
                <div class="form-outnum">
                    <input type="text" class="sub_num" 
                            @input="showpoint" 
                            placeholder="Card Number"
                            maxlength="20" 
                            v-mask="'#### #### #### #####'"
                            @focus="Theoutnum = !Theoutnum" 
                            @blur="Theoutnum = !Theoutnum">  

                   <p>E.g.: 49..., 51..., 36..., 37...</p>
                </div>
                <div class="form-outnum">
                    <input  type="text" class="sub_name" 
                            placeholder="Name" 
                            @input="showname" 
                            @focus="Theoutname = !Theoutname" 
                            @blur="Theoutname = !Theoutname">
                </div>
                <div class="from_outdate">
                    <div>
                        <input type="text" class="sub_da_left" 
                                placeholder="Vaild Thru"  
                                maxlength="5"  
                                @input="showvaild" 
                                v-mask="'##/##'"
                                @focus="Theoutvaild = !Theoutvaild" 
                                @blur="Theoutvaild = !Theoutvaild">
                    </div>
                    <div>
                        <input type="text" class="sub_da_right" 
                                placeholder="CVC" 
                                maxlength="4"  
                                @input="showcvc" 
                                v-mask="'####'"
                                @focus="Thefrontcard = !Thefrontcard" 
                                @blur="Thefrontcard = !Thefrontcard">
                    </div>                    
                </div>                
                <div class="from_pay">
                    <input type="button"  @click="showhidecontent" >
                    <p>PAY</p>
                </div>   
            </form>
            <!-- 点击PAY后出现 -->
            <div  class="dis_todo" v-if="hidecontent">
                <ul >
                        <li>number: {{ todonum }}</li>
                        <li>name: {{ todoname }}</li>
                        <li>expiry: {{ tododate }}</li>
                        <li>cvc: {{ todocvc }}</li>
                        <li >issuer:</li>
                    </ul>
            </div>                    
            <div class="format-prompt" v-show="promptmsg">
                <div id="triangle" class="rectangle">请按照要求填写该字段</div>                 
            </div>
            <div class="format-prompt vaild-newsite" v-show="promptmsgvaild">
                <div id="triangle" class="rectangle">请按照要求填写该字段</div>                 
            </div>
            <div class="format-prompt cvc-newsite" v-show="promptmsgcvc">
                <div id="triangle" class="rectangle">请按照要求填写该字段</div>                 
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {         
            todonum:'•••• •••• •••• ••••',
            todoname:'YOUR NAME HERE',
            tododate:'••/••',
            todocvc:'',
            hidecontent: false,
            Thefrontcard:false,
            Theoutnum:false,
            Theoutname:false,
            Theoutvaild:false,
            promptmsg:false,
            promptmsgvaild:false,
            promptmsgcvc:false,
        }
    },
    // watch:{
    //     todonum:function(value){
    //         var addcolor = parseInt(value.substring(0,2))
    //         this.isTrue = true
    //         switch (addcolor) {
    //         case 49:
    //             this.bgColor = "linear-gradient(25deg, #0f509e, #1399cd)"
    //         break
    //         case 51:
    //             this.bgColor = "linear-gradient(25deg, #f37b26, #fdb731)"
    //         break
    //         case 36:
    //             this.bgColor = "linear-gradient(25deg, #fff, #eee)"
    //         break
    //         case 37:
    //             this.bgColor = "linear-gradient(25deg, #308c67, #a3f2cf)"
    //         break
    //         default:
    //             this.bgColor = "linear-gradient(25deg, #999, #999)"
    //         }        
    //     }
    // },
    methods: {
        showhidecontent() {
            console.log(this.todonum.length)
            console.log(this.tododate.length)
            console.log(this.todocvc.length)
            if(this.todonum.length < 20){
                this.promptmsg = !this.promptmsg
            }else if(this.tododate.length < 5) { 
                this.promptmsgvaild = true
            } else if(this.todocvc.length < 4) {
                this.promptmsgcvc = !this.promptmsgcvc
            } else {
                this.promptmsgcvc = false
                this.promptmsgvaild = false
                this.hidecontent = true
            }
        },
        showpoint(e){
                var addnum = e.target.value.split('')
                var total = this.todonum.split('')
                total.splice(0, addnum.length, e.target.value)
                this.todonum = total.join('')
                return this.todonum 
        },
        showname(e){this.todoname = e.target.value;},                      
        showvaild(e){this.tododate = e.target.value;},          
        showcvc(e){this.todocvc = e.target.value;}                         
     },         
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cardapp
    width 41%
    margin-top: 30px
    margin 0 auto
    margin-top 30px
    position relative
.reco_card
    width 290px
    height 180px   
    margin 0 auto
    perspective 1000px
.exhibit-front, .exhibit-back
    width 290px
    height 180px
    background-color #999
    border-radius 14px
    transition-timing-function: linear
.exhibit-back
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

.revercard
    width 290px
    height 40px
    background-color black
    position absolute
    top 18px
.reverimg
    width 220px
    height 30px
    background-image url(../assets/line.jpg)
    position absolute
    top 40%
    right  20%
.revercvc
    width 100px
    height 30px
    position absolute
    top 40%
    right  20%
.reco_card_img
    width 40px
    height 25px
    background-image url(../assets/xiazai.svg)
    background-size contain
    background-repeat no-repeat
    float left
    margin 20px 0 0 30px
.reco_card_num
    width 300px
    height 30px
    float:left
    margin 30px 0 0 30px
    font-size 22px
    color #CCCCCC
.reco_card_name
    width 174px
    height 17px
    float left
    margin 25px 0 0 30px
    color #CCCCCC
    font-size 14px
.reco_card_vaild
    width 60px
    height 30px
    float right
    margin 5px 25px 0 0
    color #CCCCCC
    font-size 13px
.reco_card_date
    font-size 17px
.active
      color:#fff
.sub_form
    padding-left 70px
.form-outnum p
   font-size 13px   
   margin-top 4px       
.form-outnum input
    width 390px
    height 35px
    border  1px solid #d9d9d9
    color #8e8e96
    margin-top 15px
    font-size 16px
    padding-left 10px
    border-radius 5px
.form-outnum, .sub_name
    margin-top 15px
.from_outdate input
    width 174px
    height 35px
    border 1px solid #d9d9d9
    color #8e8e96
    margin-top 20px
    float left
    font-size 16px
    border-radius 5px
    padding-left 10px
.sub_da_right
    margin-left 30px
.from_pay input
    width 400px
    height 35px
    background-color #007bff
    margin-top 20px
    font-size 16px
    border-radius 5px
    border 1px solid  #007bff
    color white
.from_pay:hover input
    background-color #0069D9
.from_pay p
    width 50px
    height 20px
    margin -7% 0 0 38%
    font-size 16px
    color white 
.dis_todo li
    width 300px
    height 20px
    margin 10px auto
    font-family monospace
    font-size 17px
    list-style none
.format-prompt
    position absolute
    top 58%
    left 20%
.vaild-newsite
    top 92%
    left 10%
.cvc-newsite
    top 92%
    left 52%
#triangle  
    width 230px   
    height 40px   
    position relative     
    border 1px #999999 solid  
    background-color #fff  
    border-radius 5px
    font-size 14px
    line-height 40px
    text-align center
    background-image url(../assets/3259.png)
    background-repeat no-repeat
    background-position-x 12px
    background-position-y 9px
#triangle:before   
    content: " "
    position: absolute
    top -27% 
    left 20px  
    width 0
    height 0  
    border-left 10px solid transparent   
    border-bottom 10px solid #999999  
    border-right 10px solid transparent  
.rectangle:after   
    content: " "  
    position absolute   
    top -22%   
    left 21px   
    width 0   
    height 0   
    border-left 9px solid transparent   
    border-bottom 9px solid #fff 
    border-right 9px solid transparent 

</style>