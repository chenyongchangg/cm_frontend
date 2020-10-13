<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input  placeholder="请输入水表表号"  v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-download" @click="commandSend"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataQuery',
  data() {
    return {
      input3: '',
    }
  },
  methods: {
    async commandSend(){
      let a
      a =  (await this.$http.get('/integrationTest/singleQueryFromDb?meterAccount=' + this.input3)).data
      this.input3 = a
    }

  }
}
</script>

<style scoped>
.input-with-select{
  width: 50%;
}
</style>
