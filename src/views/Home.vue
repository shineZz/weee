<template>
  <div class="home">
    <template v-for="(item,index) in initText">
      <div :key="index">{{item}}</div>
    </template>

    <el-button type="primary" @click="clickConsole">添加</el-button>

    <el-card style="margin-top:50px">
      <template v-for="(item,index) in text">
        <div :key="index">{{item}}</div>
      </template>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      initText: ["我是home", "测试elementui组件", "测试vuex"]
    };
  },
  computed: {
    ...mapGetters(["text"])
    // ...mapState([])
  },
  methods: {
    ...mapActions(["actionsConsole"]),
    clickConsole() {
      // console.log(this.text, "text");
      this.actionsConsole(`我是添加的text ${this.text.length}`);
    }
  }
};
</script>
