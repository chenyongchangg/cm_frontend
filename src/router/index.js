import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import CommandDown from "../components/CommandDown";
import ExcelImport from "../components/ExcelImport";
import DataQuery from "../components/DataQuery";
import OnlineDevice from "../components/OnlineDevice";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/excelImport',
          name: 'ExcelImport',
          component: ExcelImport
        },
        {
          path: '/dataQuery',
          name: 'DataQuery',
          component: DataQuery
        },
        {
          path: '/commandDown',
          name: 'CommandDown',
          component: CommandDown
        },
        {
          path: '/onlineDevice',
          name: 'OnlineDevice',
          component: OnlineDevice
        }
      ]
    },

  ]
})
