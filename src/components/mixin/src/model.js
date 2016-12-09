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
    }
}