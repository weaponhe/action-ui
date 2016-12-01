let global = {
  popupOpenCount: 0,
  popupCloseCount: 0,
  modalArray: []
}
export default {
  data(){
    return {
      popupIndex: 0,
      modalIndex: 0,
      global
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    if (this.open) {
      console.log('%s %d', this.$options.name, this.popupIndex)
      this.popupIndex = ++this.global.popupOpenCount
      this.modal && this.global.modalArray.push(this.popupIndex)
    }
  },
  watch: {
    open(open){
      if (open) {
        this.popupIndex = ++this.global.popupOpenCount
        this.modal && this.global.modalArray.push(this.popupIndex)
      }
      else {
        this.global.popupCloseCount++
        this.modal && this.global.modalArray.splice(this.global.modalArray.indexOf(this.popupIndex), 1)
      }

      if (this.global.popupOpenCount === this.global.popupCloseCount) {
        this.global.popupOpenCount = this.global.popupCloseCount = 0
      }
    }
  },
  computed: {
    transparent(){
      return this.modal && this.popupIndex !== this.global.modalArray[this.global.modalArray.length - 1] ? 'transparent' : ''
    }
  }
}
