// https://umijs.org/config/
import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import webpackPlugin from './plugin.config';

const { winPath } = utils;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV, GA_KEY } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  analytics: GA_KEY ? { ga: GA_KEY } : false,
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Home',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'home',
              icon: 'home',
              path: '/home',
              component: './Home'
            },
            // {
            //   name: 'list.table-list',
            //   icon: 'table',
            //   path: '/list',
            //   component: './ListTableList',
            // },
            {
              name: 'goodAdmin',
              icon: 'table',
              path: '/goodAdmin',
              component: './GoodAdmin'
            },
            {
              name: 'changePrice',
              icon: 'table',
              path: '/chagePrice',
              component: './ChangePrice'
            },
            {
              name: 'tagAdmin',
              icon: 'table',
              path: '/tagAdmin',
              component: './TagManage',
            },
            {
              name: 'styleAdmin',
              icon: 'table',
              path: '/styleAdmin',
              component: './StyleManage',
            },
            {
              name: 'shopAdmin',
              icon: 'table',
              path: '/ShopAdmin',
              component: './ShopAdmin'
            },
            {
              name: 'routerAdmin',
              icon: 'table',
              path: '/routerAdmin',
              component: './RouterAdmin'
            },
            {
              name: 'userAdmin',
              icon: 'table',
              path: '/userAdmin',
              component: './UserAdmin',
            },
            {
              name: 'cycleJob',
              icon: 'table',
              path: '/cycleJob',
              component: './CycleJob',
            },
            {
              name: 'licenseAndBackup',
              icon: 'table',
              path: '/license_and_backup',
              component: './LicenseBackup',
            },
            {
              name: 'systemSetting',
              icon: 'table',
              path: '/systemSetting',
              component: './SystemSetting'
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  //proxy: proxy[REACT_APP_ENV || 'dev'],
  proxy:{
    '/server/api/': {
      target:  'http://47.107.139.6:8086', //'http://193.112.51.180:8086',
      changeOrigin: true,
      pathRewrite: { '^/server/api': '' }, // /server/api/currentUser -> /api/currentUser
    },
  },
  chainWebpack: webpackPlugin,
});
