<template>
  <div class="multi-range-slider"></div>
</template>

<script>
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

export default {
  name: 'MultiRangeSlider',
  props: {
    values: {
      type: Array,
      required: true,
      validator: (values) => {
        if (values.length < 2) {
          console.warn('MultiRangeSlider: At least two values are required.')
          return false
        }
        return true
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    tooltips: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    connect() {
      // Détermine la valeur de la propriété "connect" en fonction du nombre de poignées
      const handleCount = this.values.length
      if (handleCount === 1) {
        return 'lower'
      } else if (handleCount === 2) {
        return true
      } else {
        const connectArray = []
        for (let i = 0; i < handleCount - 1; i++) {
          connectArray.push(true)
        }
        return connectArray
      }
    }
  },
  mounted() {
    this.createSlider()
  },
  beforeDestroy() {
    this.slider.destroy()
  },
  methods: {
    createSlider() {
      const options = {
        start: this.values,
        connect: this.connect,
        step: this.step,
        range: {
          min: this.min,
          max: this.max
        },
        tooltips: this.tooltips
      }
      this.slider = noUiSlider.create(this.$el, options)
      this.slider.on('update', this.emitChange)
    },
    emitChange() {
      const [min, max] = this.slider.get()
      this.$emit('change', [Number(min).toFixed(0), Number(max).toFixed(0)])
    }
  }
}
</script>

<style>
/* Optional styling */
.multi-range-slider.noUi-target {
 background: white;
 box-shadow: none;
 border: 1px solid #000;
 width: calc(100% - 20px);
}


.multi-range-slider .noUi-handle {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  top: -4px;
  border: 2px solid #000;
  background: white;
  box-shadow: none;
}

.multi-range-slider .noUi-handle::after,
.multi-range-slider .noUi-handle::before {
  content: none;
}

.multi-range-slider .noUi-handle {
  border-radius: 100%;
}

.multi-range-slider .noUi-connect {
  background: #000;
}
</style>
