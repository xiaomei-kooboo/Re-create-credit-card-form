<template>
  <div id="app">
    <div class="cardapp" >          
            <div class="reco_card" ref="overshow">
                <!-- 正面 -->
                <div class="over_rever" ref="fanzhuan">
                    <div class="reco_card_img"></div>    
                    <div class="reco_card_num" ref="numcolor">{{ todonum }}</div>                          
                    <div class="reco_card_name" ref="namecolor">{{ todoname }}</div>    
                    <div class="reco_card_valid" ref="valcolor">
                        <div class="reco_card_desc">vaild thru</div>
                        <div class="reco_card_date">{{ tododate }}</div>
                    </div>
                </div>
                <!-- 反面 -->
                <div class="rever_show" ref="fanshow">
                        <div class="revercard"></div>
                        <div class="reverimg"></div>
                        <div class="revercvc">{{ todocvc }}</div>
                </div>
            </div>       
            <!-- 表单 -->
            <form class="sub_form">
                <div class="form-outnum">
                   <input type="text" class="sub_num" 
                   @input="showpoint" 
                   placeholder="Card Number" ref="myel" 
                   maxlength="16" @click="handleinput">  

                   <p>E.g.: 49..., 51..., 36..., 37...</p>
                </div>
                <div class="form-outnum">
                    <input type="text" class="sub_name" placeholder="Name" 
                    ref="myname" @input="showname" @click="nameinput">
                </div>
                <div class="from_outdate">
                    <div><input type="text" class="sub_da_left" placeholder="Vaild Thru"  
                                maxlength="4"  ref="myva" @input="showva" @click="valinput"></div>
                    <div><input type="text" class="sub_da_right" placeholder="CVC" 
                                maxlength="4" ref="mycvc" @input="showcvc" @click="overturn"></div>                    
                </div>
                <div class="from_pay">
                    <input type="button"  @click="payshow" >
                    <p>PAY</p>
                </div>   
            </form>
            <!-- 点击PAY后出现 -->
            <div  class="dis_todo" ref="mypay" v-show="todo">
                <ul >
                        <li>number: {{ todonum }}</li>
                        <li>name: {{ todoname }}</li>
                        <li>expiry: {{ tododate }}</li>
                        <li>cvc: {{ todocvc }}</li>
                        <li >issuer:</li>
                    </ul>
            </div> 
        </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          todo: false,
          todonum:'••••  ••••  ••••  ••••',
          todoname:'YOUR NAME HERE',
          tododate:'••/••',
          todocvc:''
      }
    },
    methods: {
        payshow(todo) {
          this.todo = !this.todo       
              },
        showpoint(e){
              this.$refs.myel.value= e.target.value.replace(/[^\d]/g,'');
              this.todonum = this.$refs.myel.value;
              var outval = this.todonum.toString();
              // console.log(outval)
                var symbol = "";
                    for(var i = 0;i < 16-outval.length; i++){
                            symbol+="•"
                    }
                        
                this.todonum =(outval+symbol).replace(/(\s)/g,'').replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'')
                
                },
        showname(){
             this.todoname = this.$refs.myname.value;
            },
        showva(e){
            this.$refs.myva.value= e.target.value.replace(/[^\d]/g,'');
            var mydate = this.$refs.myva.value;
            var todostr = mydate.replace(/(\d{2})/g,'$1/').toString();
            this.tododate= todostr.substring(0,todostr.length-1);
            },
        showcvc(e){
            this.$refs.mycvc.value= e.target.value.replace(/[^\d]/g,'');
             this.todocvc = this.$refs.mycvc.value;
            },
        handleinput(){
            this.$refs.namecolor.style.color = "#CCC";
            this.$refs.numcolor.style.color = "white";
            this.$refs.valcolor.style.color = "#CCC";
            this.$refs.overshow.style.transform='rotateY(0deg)'
            this.$refs.fanzhuan.style.display='block'
            this.$refs.fanshow.style.display='none'
           },
        nameinput(){
           this.$refs.namecolor.style.color = "white";
            this.$refs.numcolor.style.color = "#CCC";
            this.$refs.valcolor.style.color = "#CCC";
            this.$refs.overshow.style.transform='rotateY(0deg)'
            this.$refs.fanzhuan.style.display='block'
            this.$refs.fanshow.style.display='none'
                },
        valinput(){
             this.$refs.namecolor.style.color = "#CCC";
             this.$refs.numcolor.style.color = "#CCC";
             this.$refs.valcolor.style.color = "white";
             this.$refs.overshow.style.transform='rotateY(0deg)'
            this.$refs.fanzhuan.style.display='block'
            this.$refs.fanshow.style.display='none'
                },
        overturn(){
                this.$refs.overshow.style.transform='rotateY(-180deg)'
                this.$refs.fanzhuan.style.display='none'
                this.$refs.fanshow.style.display='block'
            }
     },           
}
</script>

<style>
.cardapp{
    width: 41%;
    /* background-color: rebeccapurple; */
    /* border:1px solid black; */
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
}
.reco_card{
    width: 290px;
    height: 180px;    
    /* border: 1px solid red; */
    margin: 0 auto;
    perspective: 500px;
    transition: all 2s ease 0s;
}
.reco_card{transform: rotateY(0deg);}


.over_rever{
    width: 290px;
    height: 180px;
    background-color: #999;
    border-radius: 14px;
    display:block;
}
.rever_show{
    width: 290px;
    height: 180px;
    border-radius: 14px;
    background-color: #999;
    display: none;
}
.revercard{
    width: 290px;
    height: 40px;
    background-color: black;
    position: absolute;
    top:18px;
}
.reverimg{
    width: 220px;
    height: 30px;
    background-image: url(../assets/line.jpg);
    position: absolute;
    top: 40%;
    left: 20%;
}
.revercvc{
    width: 100px;
    height: 30px;
    /* background-color: aqua; */
    position: absolute;
    top: 40%;
    left: 20%;
}


.reco_card_img{
    width: 40px;
    height: 25px;
    background-image: url(../assets/xiazai.svg);
    background-size: contain;
    background-repeat: no-repeat;
    float: left;
    margin: 20px 0 0 30px;
}
.reco_card_num{
    width: 300px;
    height: 30px;
    float: left;
     margin: 30px 0 0 30px;
     font-size: 22px;
     color: #CCCCCC;
}
.reco_card_name{
    width: 174px;
    height: 17px;
    /* border: 1px solid violet; */
    float: left;
    margin: 25px 0 0 30px;
   color: #CCCCCC;
   font-size: 14px;
}
.reco_card_valid{
    width: 60px;
    height: 30px;
    /* border: 1px saddlebrown; */
    float: right;
    margin: 5px 25px 0 0;
    color: #CCCCCC;
    font-size: 13px;
}
.reco_card_date{
    font-size: 17px;
}
.sub_form{
    /* height: 450px; */
    padding-left: 70px;
    /* border: 1px solid; */
}
.form-outnum p{
   font-size: 13px;   
   margin-top: 4px;        
}
.form-outnum input{
    width: 390px;
    height: 35px;
    border: 1px solid #d9d9d9;
    color: #8e8e96;
    margin-top: 30px;
    font-size: 16px;
    padding-left: 10px;
    border-radius: 5px
}
.form-outnum .sub_name{
    margin-top: 15px;
}
.from_outdate input{
    width: 174px;
    height: 35px;
    border: 1px solid #d9d9d9;
    color: #8e8e96;
    margin-top: 20px;
    float: left;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 10px;
}
.sub_da_right{
    margin-left: 30px;
}
.from_pay input{
    width: 400px;
    height: 35px;
    background-color: #007bff;
    margin-top: 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid  #007bff;
    color: white;
}
.from_pay:hover input{
    background-color: #0069D9;
}
.from_pay p{
    width: 50px;
    height: 20px;
    /* float: left; */
    margin: -7% 0 0 38%;
    font-size: 16px;
    color: white;
}
.dis_todo li{
    width: 300px;
    height: 20px;
    margin: 10px auto;
}
.dis_todo ul li{
list-style: none;
}
</style>
