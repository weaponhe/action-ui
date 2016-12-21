module.exports = {
    data() {
        return {
            vModelValue: this.value
        }
    },
    props: ['value'],
    watch: {
        value(val) {
            this.vModelValue = val
        },
        vModelValue(val) {
            this.$emit('input', val)
        }
    },
    //这里解决vue2.0使用Virtual DOM 渲染Checkbox列表时是出现的bug
    beforeUpdate(){
        this.vModelValue = this.value
    }
}