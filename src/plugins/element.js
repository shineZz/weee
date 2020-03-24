import Vue from 'vue'
import { Button,Select,Option,Card } from 'element-ui'

let elementArr=[Button,Select,Option,Card]
elementArr.forEach(key => {
    Vue.use(key)
  })