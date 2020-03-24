<template>
  <div class="about">
    我是about
    <div style="display:flex;flex-direction:column">
      测试element组件
      <div style="margin-top:30px">
        <el-select v-model="value" placeholder="请选择" style="width：250px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </div>

      <div style="margin-top:50px">
        <el-button @click="getData">获取</el-button>
      </div>
    </div>
  </div>
</template>



<script>
import { httpGet, httpPost } from "@/api";

export default {
  data() {
    return {
      value: "",
      options: [
        {
          value: 1,
          label: "11"
        },
        {
          value: 2,
          label: "22"
        },
        {
          value: 3,
          label: "33"
        },
        {
          value: 4,
          label: "44"
        }
      ]
    };
  },
  methods: {
    getData: async function(val) {
      let res = await httpGet("测试axios");
    }
  }
};
</script>

<style>
</style>
