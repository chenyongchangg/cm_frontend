<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="autoId"
      label="DbID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="onlineDevice"
      label="设备ID"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'OnlineDevice',
  data() {
    return {
      tableData: {}
    }
  },
  created() {
    this.$http.get('integrationTest/getOnlineDevice').then(res => {
      this.tableData = res.data
      console.log(this.tableData)
    })

    }
}
</script>

<style scoped>

</style>
