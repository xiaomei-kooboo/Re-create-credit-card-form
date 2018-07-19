<template>
    <div id="app">
        <div class="max-container" >          
            <top-card   :theFrontCard = "theFrontCard"
                        :focusCardNum = "focusCardNum"
                        :pointNum = "pointNum"
                        :focusCardName = "focusCardName"
                        :theOutVaild = "theOutVaild"
                        :firstName = "firstName"
                        :expiryDate = "expiryDate"
                        :digitCvc = "digitCvc"
            ></top-card>
            <!-- The form content -->
            <form class="form-control">
                <div class="form-out">
                    <input type="text" class="form-out-num" 
                            @input="showSyncNum" 
                            oninput="this.value = this.value.replace(/[^\d]/g,'').replace(/(\d{4})/g,'$1 ')"
                            placeholder="Card Number"
                            maxlength="19" 
                            @focus="focusCardNum = !focusCardNum" 
                            @blur="focusCardNum = !focusCardNum" required>  
                    <p>E.g.: 49..., 51..., 36..., 37...</p>
                </div>
                <div class="form-out">
                    <input type="text" class="form-out-name" 
                            placeholder="Name" 
                            @input="outSyncName" 
                            @focus="focusCardName = !focusCardName" 
                            @blur="focusCardName = !focusCardName" required>
                </div>
                <div class="form-out-date">               
                    <div>
                        <input type="text" class="out-date-left" 
                                placeholder="Vaild Thru"  
                                maxlength="5"  
                                @input="outSyncVaild" 
                                oninput="this.value = this.value.replace(/[^\d]/g,'').replace(/(\d{2})(?=\d)/g,'$1/')"
                                @focus="theOutVaild = !theOutVaild" 
                                @blur="theOutVaild = !theOutVaild" required>
                    </div>
                    <div>
                        <input type="text" class="out-cvc-right" 
                                placeholder="CVC" 
                                maxlength="4"  
                                @input="outSyncCvc" 
                                oninput="this.value = this.value.replace(/[^\d]/g,'')"
                                @focus="theFrontCard = !theFrontCard" 
                                @blur="theFrontCard = !theFrontCard" required>
                    </div>                    
                </div>                
                <div class="pay-btn">
                    <input type="submit"  @click="toggleContent" value="PAY">
                </div>   
            </form>
            <!-- Click PAY -->
            <div  class="hide-content" v-if="togglePay">
                <ul >
                    <li>number: {{ pointNum }}</li>
                    <li>name: {{ firstName }}</li>
                    <li>expiry: {{ expiryDate }}</li>
                    <li>cvc: {{ digitCvc }}</li>
                    <li >issuer:</li>
                </ul>
            </div>                    
        </div>
    </div>
</template>

<script>
import MatchCard from '@/components/MatchCard'
import topcard from "@/components/TopCard"
import {repalcepoint} from "../common/common"
export default {
    data () {
        return {         
            pointNum:'•••• •••• •••• ••••',
            firstName:'YOUR NAME HERE',
            expiryDate:'••/••',
            digitCvc:'',
            togglePay: false,
            theFrontCard:false,
            focusCardNum:false,
            focusCardName:false,
            theOutVaild:false,
        }
    },
    components : {
        'top-card' : topcard,
        'match-card': MatchCard
    },
    methods: {      
        showSyncNum(e){
            this.pointNum = repalcepoint(this.pointNum,e.target.value)
        },
        outSyncName(e){
            this.firstName = e.target.value;
        },                      
        outSyncVaild(e){
            this.expiryDate = e.target.value;
        },          
        outSyncCvc(e){
            this.digitCvc = e.target.value;
        },                         
        toggleContent() {
            if(this.pointNum.length <16){
                    this.togglePay = false
                }else if(this.digitCvc.length < 4) {
                    this.togglePay = false
                } else {
                    this.togglePay = true                
                }      
            }   
        }, 
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.max-container
    width 100%
    margin-top: 30px
    margin 0 auto
    margin-top 30px
    position relative
.form-control
    width 390px
    margin 20px auto
.form-out p
   font-size 13px
   margin-top 4px
.form-out input
    width 100%
    height 35px
    border  1px solid #d9d9d9
    color #8e8e96
    margin-top 15px
    font-size 16px
    padding-left 10px
    border-radius 5px
    margin 0 auto
.form-out-num, .form-out-name
    margin-top 15px
.form-out-date
    width 402px
.form-out-date input
    width 174px
    height 35px
    border 1px solid #d9d9d9
    color #8e8e96
    margin-top 20px
    float left
    font-size 16px
    border-radius 5px
    padding-left 10px
.out-cvc-right
    margin-left 30px
.pay-btn input
    width 400px
    height 35px
    background-color #007bff
    margin-top 20px
    font-size 16px
    border-radius 5px
    border 1px solid  #007bff
    color white
.pay-btn:hover input
    background-color #0069D9
.pay-btn p
    width 50px
    height 20px
    margin -7% 0 0 38%
    font-size 16px
    color white 
    line-height 20px
    text-align center
.hide-content li
    width 300px
    height 20px
    margin 10px auto
    font-family monospace
    font-size 17px
    list-style none
.format-prompt
    position absolute
    top 59%
    left 40%
.vaild-newsite
    top 90%
    left 35%
.cvc-newsite
    top 90%
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

.slide-enter-active,
.slide-leave-active
    transition: all .3s
.slide-enter
    transform: translate3d(-100%, -80%, 0)
.slide-leave-active
    transform: translate3d(0, 0, 0)
</style>