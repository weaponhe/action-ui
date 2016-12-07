module.exports = {
  data() {
    return {
      vModelValue: undefined
    }
  },
  props: {
    value: [Boolean, String, Number]
  },
  watch: {
    value(val) {
      this.vModelValue = val
    },
    vModelValue(val) {
      this.$emit('input', val)
    }
  }
}