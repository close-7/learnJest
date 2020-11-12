<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        @keyup.enter="addTodoItem"
        data-test='header-input'
        placeholder="Add TodoItem"
        v-model="inputValue"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  props: {},
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .header{
    line-height: 60px;
    background: #666;
  }
  .header-content{
    width: 600px;
    margin:0 auto;
    color :#333;
    font-size :24px;
  }
  .header-input{
    float :right;
    width :360px;
    margin-top :16px;
    line-height :24px;
    outline :none;
    color:#333;
    text-indent :10px;
  }
</style>
