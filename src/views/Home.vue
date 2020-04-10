<template lang="">
  <div>
    <el-table
      :data="data"
      :span-method="objectSpanMethod"
      row-style="height:50px"
      border
      style="width:100%; margin-top: 10px">
      <el-table-column v-for="(item ,index ) in keys " :key="index"
        :prop="item"
        :label="item"
        width="120"
        >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
const data = require("./data");
export default {
  name: "home",
  data() {
    return {
      data: Array,
      keys: Array
    };
  },
  created() {
    this.data = data.data;
    this.keys = Object.keys(data.data[0]);
  },
  methods: {
    flitterData(data) {
      let spanOneArr = [],
        spanTwoArr = [],
        spanThreeArr = [],
        concatOne = 0,
        concatTwo = 0,
        concatThree = 0;
      data.forEach((item, index) => {
        if (index === 0) {
          spanOneArr.push(1);
          spanTwoArr.push(1);
          spanThreeArr.push(1);
        } else {
          if (item["课程"] === data[index - 1]["课程"]) {
            spanOneArr[concatOne] += 1;
            spanOneArr.push(0);
          } else {
            spanOneArr.push(1);
            concatOne = index;
          }
          if (item["2级指标"] === data[index - 1]["2级指标"]) {
            //第二列需合并相同内容的判断条件
            spanTwoArr[concatTwo] += 1;
            spanTwoArr.push(0);
          } else {
            spanTwoArr.push(1);
            concatTwo = index;
          }
          if (item["1级指标"] === data[index - 1]["1级指标"]) {
            //第三列需合并相同内容的判断条件
            spanThreeArr[concatThree] += 1;
            spanThreeArr.push(0);
          } else {
            spanThreeArr.push(1);
            concatThree = index;
          }
          if (item["一级指标得星数"] === data[index - 1]["一级指标得星数"]) {
            //第三列需合并相同内容的判断条件
            spanThreeArr[concatThree] += 1;
            spanThreeArr.push(0);
          } else {
            spanThreeArr.push(1);
            concatThree = index;
          }
          if (item["权重"] === data[index - 1]["权重"]) {
            //第三列需合并相同内容的判断条件
            spanThreeArr[concatThree] += 1;
            spanThreeArr.push(0);
          } else {
            spanThreeArr.push(1);
            concatThree = index;
          }
          if (
            item["课程得星数（加权后）"] ===
            data[index - 1]["课程得星数（加权后）"]
          ) {
            //第三列需合并相同内容的判断条件
            spanThreeArr[concatThree] += 1;
            spanThreeArr.push(0);
          } else {
            spanThreeArr.push(1);
            concatThree = index;
          }
          if (item["课程得分"] === data[index - 1]["课程得分"]) {
            //第三列需合并相同内容的判断条件
            spanThreeArr[concatThree] += 1;
            spanThreeArr.push(0);
          } else {
            spanThreeArr.push(1);
            concatThree = index;
          }
        }
      });
      return {
        one: spanOneArr,
        two: spanTwoArr,
        three: spanThreeArr
      };
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 1) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 2) {
        const _row = this.flitterData(this.data).two[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 7) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 8) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 9) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex == 10) {
        const _row = this.flitterData(this.data).one[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    }
  }
};
</script>
<style lang="stylus"></style>
