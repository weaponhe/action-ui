module.exports = {
  data: function ()
  {
    return {
      vModelValue: this.value
    }
  },
  props: ['value'],
  watch: {
    value: function (val)
    {
      this.vModelValue = val
    },
    vModelValue: function (val)
    {
      this.$emit('input', val)
    }
  },
  //这里解决vue2.0使用Virtual DOM 渲染Checkbox列表时是出现的bug
  beforeUpdate: function ()
  {
    this.vModelValue = this.value
  }
}