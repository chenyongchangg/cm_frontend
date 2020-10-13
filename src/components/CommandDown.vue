<template>
  <div style="margin-top: 15px;" >
    <el-input placeholder="请输入内容，命令下发后要等待一段时间才能查询到最新信息哦" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="单表" value="1"></el-option>
        <el-option label="采集器(慎用)" value="2"></el-option>
      </el-select>
      <el-button  v-loading="loading" slot="append" icon="el-icon-download" @click="commandSend">命令下发</el-button>
      <el-button  v-loading="loading1" slot="append" icon="el-icon-warning" @click="clearQuery">清空查询</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'CommandDown',
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: '',
      loading: false,
      loading1: false
    }
  },
  methods: {
    async clearQuery(){
      this.loading1 = true
      let a =  (await this.$http.get('/integrationTest/clearQuery')).data.msg
      this.loading1 = false
    },
    async commandSend(){

      if(this.select == 1){
        let a
        this.loading = true
        a =  (await this.$http.get('/integrationTest/singleCommandSend?meterNumber=' + this.input3)).data.msg
        this.loading = false
        this.$message.warning(a)
        this.input3 = ''
      }
      else if(this.select == 2){
        let a
        this.loading = true
        a =  (await this.$http.get('/integrationTest/multipleCommandSend?collectorId=' + this.input3)).data.msg
        this.loading = false
        this.$message.warning(a)
        this.input3 = ''
      }
      else{
        this.$message.warning('请选择查询类型')
      }
    }

  }
}
</script>

<style>
.el-select  {
  width: 130px;
}
.input-with-select  {
  background-color: #fff;
}
</style>
