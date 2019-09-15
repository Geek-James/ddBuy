<template>
  <div id="backToTop"
       @click="scrollToTop">
    <svg viewBox="0 0 88 88"
         class="icon toTopIcon">
      <g fill="none"
         fill-rule="evenodd">
        <circle cx="44"
                cy="44"
                r="43.5"
                stroke="#CCC"
                fill="#FFF"></circle>
        <rect width="28"
              height="3"
              x="30"
              y="27"
              fill="#AFAFAF"
              rx="1.5"></rect>
        <path fill="#AFAFAF"
              d="M42.5 38.056V63.75c0 .83.666 1.501 1.5 1.501.828 0 1.5-.668 1.5-1.5V37.428l6.942 6.942a1.499 1.499 0 1 0 2.121-2.122l-9.185-9.185-.002-.001-.002-.002a1.495 1.495 0 0 0-2.121 0l-.002.002-.002.001-9.185 9.185a1.499 1.499 0 1 0 2.122 2.122l6.314-6.315z"></path>
      </g>
    </svg>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    scrollToTop () {
      this.$emit('scrollToTop');
    }
  }
}
</script>

<style lang="less" scoped>
#backToTop {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
}
.toTopIcon {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
