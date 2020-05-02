<template>
  <div class="text-area">
    <div v-draggable="draggableValue" style="position: absolute;"> 
      This is a test. {{posX}}, {{posY}}
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
export default {
  name: "MessageArea",
  props: {},
  directives:{
    Draggable,
  },
  data: function() {
    return {
      message: "",
      draggableValue: { }
    };
  },
  mounted() {
            this.draggableValue.onPositionChange = this.onPosChanged;
        },
  methods: {
    sendMessage() {
      const msg = this.message.replace(/\n/g,'')
      this.$emit("send-message", msg);
      this.message = "";
    },
    onPosChanged: function(pos) {
                console.log("left corner", pos.x);
                console.log("top corner", pos.y);
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
