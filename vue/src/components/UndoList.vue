<template>
    <div class="undolist">
        <div class="title">
            正在进行
            <span data-test="count" class="count">
                {{list.length}}
            </span>
        </div>
        <ul class="list">
            <li
                class="item"
                data-test="list-item"
                @click="()=>changeStatus(index)"
                v-for="(item,index) in list"
                :key="index">
                <input v-if="item.status === 'input'"
                        data-test="input" :value="item.value"
                        @blur="handleInputBlur"
                        @change="(e) => handleInputChange(e.target.value,index)"
                />
                <span v-else>{{item.value}}</span>
                <span
                    class="delete"
                    data-test="delete-button"
                    @click="()=>{handleDelete(index)}"
                >--</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    },
    handleInputChange (value, index) {
      this.$emit('change', {
        value,
        index
      })
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .undolist{
        width:600px;
        margin: 0 auto;
    }
    .title{
        line-height :30px;
        font-size:24px;
        margin:10 0;
        font-weight :bold;
    }
    .count{
        margin-top:5px;
        float:right;
        display :block;
        width:20px;
        height:20px;
        line-height :20px;
        text-align:center;
        background :#e6e6e6;
        border-radius:10px;
        font-size:12px;
        color:#000;
    }
    .item{
        line-height :32px;
        font-size :14px;
        background :#fff;
        border-radius :3px;
        border-left:5px solid #639a9a;
        margin-bottom :10px;
        text-indent :10px;
    }
    .list{
        list-style-type :none;
    }
    .delete{
        margin-top:5px;
        float:right;
        margin-right :10px;
        display :block;
        width:20px;
        height:20px;
        line-height :20px;
        text-align:center;
        background :#e6e6e6;
        border-radius:10px;
        font-size:12px;
        color:#000;
        text-indent :0px;
        cursor :pointer;
    }
</style>
