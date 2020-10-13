<template>
  <div>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>可视化</el-breadcrumb-item>
    <el-breadcrumb-item>报表导入</el-breadcrumb-item>
  </el-breadcrumb>
  <el-upload
    class="upload-demo"
    name="file"
    action="http://106.13.94.235:10001/meterImport"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb，不可包含重复数据。</div>
  </el-upload>
  </div>
</template>

<script>
export default {
  name: 'ExcelImport.vue',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>

</style>
