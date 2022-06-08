<template>
  <view>
    <u-button @click="click">打开</u-button>
  </view>
</template>

<script>
import { TestAC } from "@/api/TestAC";
export default {
  data() {
    return {};
  },
  methods: {
    click() {
      TestAC.instance
        .test({ a: 10 })
        .then((res) => {
          console.log("请求成功", res);
        })
        .catch((e) => {
          console.log("请求失败", e);
        });
    },
  },
};
</script>