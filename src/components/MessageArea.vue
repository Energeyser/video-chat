<template>
  <div class="text-area">
    <div id="1" class="draggable" v-draggable="box1" style="position: absolute;"> 
      1
    </div>
    <div id="2" class="draggable" v-draggable="box2" style="position: absolute;"> 
      2
    </div>
    <div class="text-area__input">
      <textarea 
        name id 
        cols="30" 
        rows="10" 
        v-model="message" 
        @keyup.enter="sendMessage()">
      </textarea>
    </div>
    <div>
      <md-button class="md-primary" @click="sendMessage()">Send</md-button>
    </div>
  </div>
</template>


<script>
import { Draggable } from 'draggable-vue-directive'
import { STORE_ACTIONS } from "./../utils/config";
export default {
  name: "MessageArea",
  props: {},
  directives:{
    Draggable,
  },
  data: function() {
    return {
      message: "",
      distance:0,
      posBox1: {
        posX :0,
        posY :0
       },
      posBox2: { 
        posX:0 ,
        posY :0
      },
      box1:{},
      box2:{}
    };
  },
  mounted() {
             this.box1.onPositionChange = this.onPosChanged;
             this.box2.onPositionChange = this.onPosChanged;
        },
  methods: {
    sendMessage() {
      const msg = this.message.replace(/\n/g,'')
      this.$emit("send-message", msg);
      this.message = "";
    },
    onPosChanged: function(positionDiff, absolutePosition, event) {
      var targ;
      if (!event) event = window.event;
      if (event.target) targ = event.target;
      else if (event.srcElement) targ = event.srcElement;
      if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;
      //  this.posBox1.posX = absolutePosition.left
      //  this.posBox2.posY = absolutePosition.top
       console.log(targ.id)
       if(targ.id == 1){
          this.posBox1.posX = absolutePosition.left
          this.posBox1.posY = absolutePosition.top
       }else if(targ.id == 2){
          this.posBox2.posX = absolutePosition.left
          this.posBox2.posY = absolutePosition.top
       }
        this.distance = Math.sqrt(Math.pow(this.posBox2.posX - this.posBox1.posX, 2) + Math.pow(this.posBox2.posY - this.posBox1.posY,2));
        this.$store.dispatch(STORE_ACTIONS.distanceChanged,this.distance)
        console.log("distance = ", this.distance); 
        
      }

   }
};
</script>


<style lang="scss" scoped>
.text-area {
  width: 85%;
  margin: 0 auto;
  display: flex;
  max-width: 1300px;
  margin-top: 5px;

  .draggable{
   border: solid;
   width: 30px;
   height : 30px;
  }

  .draggable:hover{
    cursor:move;
  }


  &__input {
    width: 100%;
    & textarea {
      width: 100%;
      height: 45px;
      border-color: rgba(0, 0, 0, 0.12);
      font-size: 16px;
      padding: 1px 5px;
      font-family: monospace;
    }
  } 

  & .md-button.md-theme-default.md-primary {
    background: #3961a5;
    color: white;
  }
}
</style>
