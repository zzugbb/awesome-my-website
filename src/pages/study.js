import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import mockPng from '../asset/img/mock-logo.png';
import githubPng from '../asset/img/github-logo.png';
import uikitPng from '../asset/img/uikit-logo.png';
import es6Png from '../asset/img/es6-logo.png';
import cnblogPng from '../asset/img/cnblog.ico';
import webColorPng from '../asset/img/webColor.png';
import jianshu from '../asset/img/jianshu.ico';
import taodudu from '../asset/img/taodudu.ico';

function Study() {

  const { Link } = Typography;

  const [data] = useState([
    {
      key: '1',
      href: '#front-base',
      title: '前端基础&值得收藏',
      subData: [{
        imgSrc: 'https://responsively.app/favicon-32x32.png',
        linkSrc: 'https://responsively.app/',
        githubSrc: 'https://github.com/responsively-org/responsively-app',
        title: '响应式-开发工具',
        des: "响应式开发必备,各种屏幕同时开发",
      }, {
        imgSrc: 'https://hellogithub.com/favicon/apple-icon-57x57.png',
        linkSrc: 'https://hellogithub.com/',
        githubSrc: 'https://github.com/521xueweihan/HelloGitHub',
        title: 'HelloGitHub',
      }, {
        imgSrc: 'https://risingstars.js.org/favicon.ico',
        linkSrc: 'https://risingstars.js.org/2022/zh',
        title: 'JavaScript 明星项目',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/jobbole/awesome-programming-books',
        title: '经典编程书籍大全',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/33921398?s=48&v=4',
        linkSrc: 'https://github.com/ddzy/fe-necessary-book',
        title: '前端必读 pdf 集合',
      }, {
        imgSrc: uikitPng,
        linkSrc: 'https://wangchujiang.com/awesome-uikit/',
        githubSrc: 'https://github.com/jaywcjlove/awesome-uikit',
        title: 'JS框架,组件库,模板',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/8827896?s=48&v=4',
        linkSrc: 'https://web.qianguyihao.com/',
        githubSrc: 'https://github.com/qianguyihao/Web',
        title: '千古前端图文教程',
      }, {
        imgSrc: 'https://zh.javascript.info/img/favicon/favicon.png',
        linkSrc: 'https://zh.javascript.info/',
        githubSrc: 'https://github.com/javascript-tutorial/zh.javascript.info',
        title: '现代 JavaScript 教程',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/44827603?s=48&v=4',
        linkSrc: 'https://lib-pku.github.io/',
        githubSrc: 'https://github.com/lib-pku/libpku',
        title: '贵校课程民间整理',
      }, {
        imgSrc: 'https://reactchina.sxlcdn.com/uploads/default/optimized/2X/d/d63df37517ee7681c2fc2d881564d16e1f912453_2_32x32.png',
        linkSrc: 'http://react-china.org/t/300-react-nodejs/27165',
        title: '300集前后端视频',
        des: 'React, Nodejs'
      }]
    }, {
      key: '2',
      href: '#front-0fficial',
      title: '官方文档',
      subData: [{
        imgSrc: mockPng,
        linkSrc: 'http://mockjs.com/',
        title: 'Mock.js',
      }, {
        imgSrc: 'https://axios-http.com/assets/favicon.ico',
        linkSrc: 'https://axios-http.com/zh/docs/intro',
        title: 'Axios',
      }, {
        imgSrc: 'https://echarts.apache.org/zh/images/favicon.png',
        linkSrc: 'https://echarts.apache.org/zh/index.html',
        title: 'Echarts',
      }, {
        imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        linkSrc: 'https://ant-design.antgroup.com/index-cn',
        title: 'Ant Design',
      }, {
        imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/XPHxlVUyZBsQhXBPheZl.png',
        linkSrc: 'https://landing.ant.design/index-cn',
        title: 'Antd landing-首页',
      }, {
        imgSrc: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
        linkSrc: 'https://antv.antgroup.com/',
        title: 'AntV·让数据栩栩如生',
      }, {
        imgSrc: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        linkSrc: 'https://rn.mobile.ant.design/index-cn',
        title: 'AntD Mobile RN',
      }, {
        imgSrc: 'https://reactnativeelements.com/img/website/logo.png',
        linkSrc: 'https://reactnativeelements.com/',
        title: 'RN Elements',
        des: 'Cross Platform React Native UI toolkit',
      }, {
        imgSrc: 'https://reactnavigation.org/img/favicon.ico',
        linkSrc: 'https://reactnavigation.org/',
        title: 'React Navigation',
        des: 'Routing and navigation for Expo and React Native apps.',
      }, {
        imgSrc: 'https://formidable.com/open-source/victory/favicon/favicon.ico',
        linkSrc: 'https://formidable.com/open-source/victory/docs/native',
        title: 'victory-native',
      }]
    }, {
      key: '3',
      href: '#front-js',
      title: 'JavaScript',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md',
        title: 'JS-算法',
      }, {
        imgSrc: es6Png,
        linkSrc: 'https://es6.ruanyifeng.com/',
        githubSrc: 'https://github.com/ruanyf/es6tutorial',
        title: 'ES6 入门教程',
      }, {
        imgSrc: 'http://www.htmleaf.com/templets/default/images/ico/apple-touch-icon-72.png',
        linkSrc: 'http://www.htmleaf.com/',
        title: 'jQuery之家',
      }, {
        imgSrc: 'https://gojs.net/favicon.ico',
        linkSrc: 'https://gojs.net/latest/index.html',
        githubSrc: 'https://github.com/NorthwoodsSoftware/GoJS',
        title: 'GoJS-图片图表图形',
      }, {
        imgSrc: 'https://jsplumbtoolkit.com/img/favicon.ico',
        linkSrc: 'https://jsplumbtoolkit.com/',
        githubSrc: 'https://github.com/jsplumb/jsplumb',
        title: 'js-plumb视觉链接',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/16631306?s=48&v=4',
        linkSrc: 'https://wdd.js.org/jsplumb-chinese-tutorial/#/',
        githubSrc: 'https://github.com/wangduanduan/jsplumb-chinese-tutorial',
        title: 'js-plumb中文教程',
      }, {
        imgSrc: 'https://qishaoxuan.github.io/js_tricks/images/favicon.png',
        linkSrc: 'https://qishaoxuan.github.io/js_tricks/',
        githubSrc: 'https://github.com/QiShaoXuan/js_tricks',
        title: 'JS-tricks 常用函数',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/time__flies_/article/details/72177229',
        title: '弹出窗口拦截解决',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/sunshq/p/7922182.html',
        title: 'import和require区别',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/e5e490d47c42',
        title: '判断元素是否在屏幕',
      }, {
        imgSrc: 'https://www.jb51.net/favicon.ico',
        linkSrc: 'https://www.jb51.net/article/104047.htm',
        title: '判断dom是否在屏幕',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/xieyongbin/p/11274959.html',
        title: 'scrollTo,scrollBy兼容',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/shenjp/p/6958710.html',
        title: '获取浏览器内核版本',
      }]
    }, {
      key: '4',
      href: '#front-css',
      title: 'CSS',
      subData: [{
        imgSrc: 'https://csscoco.com/inspiration/logo2.png',
        linkSrc: 'https://csscoco.com/inspiration/#/',
        title: 'CSS灵感',
      }, {
        imgSrc: 'https://qishaoxuan.github.io/css_tricks/images/favicon.png',
        linkSrc: 'https://qishaoxuan.github.io/css_tricks/',
        title: 'CSS-tricks-常用样式',
        githubSrc: 'https://github.com/QiShaoXuan/css_tricks',
      }, {
        imgSrc: 'https://www.freesion.com/images/logo.jpg',
        linkSrc: 'https://www.freesion.com/article/57201475800/',
        title: 'CSS 小技巧标签TAG',
      }, {
        imgSrc: 'https://echeverra.cn/favicon.jpg',
        linkSrc: 'https://echeverra.cn/css-content',
        title: 'CSS中content的妙用',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/CyLee/p/10006065.html',
        title: 'Vue style 深度选择器',
      }, {
        imgSrc: 'http://caibaojian.com/favicon.ico',
        linkSrc: 'http://caibaojian.com/web-app-rem.html',
        title: 'rem如何实现自适应?',
      }, {
        imgSrc: 'https://www.php.cn/favicon.ico',
        linkSrc: 'https://www.php.cn/faq/390232.html',
        title: 'H5手机端页面缩放',
      }, {
        imgSrc: webColorPng,
        linkSrc: 'https://www.bootcss.com/p/websafecolors/',
        title: 'Web安全色',
      }]
    }, {
      key: '5',
      href: '#front-react',
      title: 'React',
      subData: [{
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7118937685653192735',
        title: 'Hooks 使用大全'
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/adam-golab/react-developer-roadmap',
        title: 'React 学习路线',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/bchao1/chart-race-react',
        title: '排序竞赛组件',
      }]
    }, {
      key: '6',
      href: '#front-react-native',
      title: 'React Native',
      subData: [{
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/18fd4b438958',
        title: 'RN常用三方组件库',
      }, {
        imgSrc: 'https://www.geekailab.com/img/favicon.ico',
        linkSrc: 'https://github.com/crazycodeboy/react-native-splash-screen',
        title: 'RN 启动页',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/14324374?s=48&v=4',
        linkSrc: 'https://github.com/reactnativecn/react-native-guide',
        title: 'RN 学习指南',
      }, {
        imgSrc: 'https://www.geekailab.com/img/favicon.ico',
        linkSrc: 'https://github.com/crazycodeboy/RNStudyNotes',
        title: 'RN 研究与实践',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/727c6057fc0a',
        title: 'RN 名称图标启动页',
      }, {
        imgSrc: taodudu,
        linkSrc: 'http://www.taodudu.cc/news/show-5281656.html?action=onClick',
        title: 'RN Android键盘遮挡',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/tsxblog/p/13026649.html',
        title: 'antd mobile图标异常',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/38bcca6a4031',
        title: 'RN 导航返回刷新',
        des: 'react navigation 导航自带返回按钮的返回刷新功能',
      }, {
        imgSrc: 'https://www.jb51.net/favicon.ico',
        linkSrc: 'https://www.jb51.net/article/220726.htm',
        title: 'RN 截图保存',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/weixin_38009285/article/details/128938645',
        title: 'RN 下载分享文件',
      }, {
        imgSrc: 'https://react-native-share.github.io/react-native-share/img/community.png',
        linkSrc: 'https://react-native-share.github.io/react-native-share/',
        githubSrc: 'https://github.com/react-native-share/react-native-share',
        title: 'React Native Share',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/qq934235475/article/details/114646848',
        title: 'RN 缓存清除',
        des: '【React-Native】couldn‘t find dso to load: libfbjni.so',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/studyWeb/p/13066224.html',
        title: 'RN 使用dva',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/sakura55520/article/details/109356277',
        title: 'RN 集成dva状态管理',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/fd41c3383978',
        title: 'dva-loading 插件',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/qq_33721382/article/details/108333691',
        title: 'RN 不信任的 HTTPS',
        des: 'React-Native, Android端解决无法访问不受信任HTTPS证书服务器的问题',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/qq_25462179/article/details/119885631',
        title: 'RN 信任管理器',
        des: 'Unable to extract the trust manager on Android10Platform',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/CHZKAL/article/details/106250966',
        title: 'RN 信任管理器',
        des: 'Unable to extract the trust manager on Android10Platform',
      }, {
        imgSrc: 'https://reactnative.dev/img/favicon.ico',
        linkSrc: 'https://reactnative.dev/docs/permissionsandroid',
        title: 'PermissionsAndroid',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/fnlingnzb-learner/p/7239614.html',
        title: 'And权限permission',
        des: 'Android权限操作之uses-permission详解'
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/4a93206a6025',
        title: '腾讯加固-二次签名',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/spy2000/article/details/121672812',
        title: '腾讯加固-二次签名',
        des: 'APK加固+重签名后, 在Android 12手机上解析错误, 无法安装的解决办法',
      }, {
        imgSrc: 'https://cloudcache.tencentcs.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png',
        linkSrc: 'https://cloud.tencent.com/developer/article/2061240',
        title: '腾讯加固zipalign对齐',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/happy6115/article/details/78732237/',
        title: 'Android完整性校验',
        des: 'Android客户端代码保护技术-完整性校验',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/8335303?s=48&v=4',
        linkSrc: 'https://github.com/shwenzhang/AndResGuard/blob/master/README.zh-cn.md',
        title: 'AndResGuard混淆',
        des: 'Android资源混淆工具使用说明',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/26186607?s=48&v=4',
        linkSrc: 'https://github.com/Leon406/AndResGuard',
        title: 'AndResGuard-fix'
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/6844903958176071687',
        title: 'AndResGuard使用'
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/946e3160ea35',
        title: 'AndResGuard瘦身',
        des: 'Android apk瘦身最佳实践(四)：采用AndResGuard进行资源混淆',
      }, {
        imgSrc: 'https://services.gradle.org/favicon.ico',
        linkSrc: 'https://services.gradle.org/distributions/',
        title: 'Gradle下载'
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/geeksongs/p/11241320.html',
        title: '更改 SDK, AVD的路径'
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/qq_19883981/article/details/108681723',
        title: '更改 .android 等位置',
        des: "修改androidstudio在c盘的默认储存位置【.android.gradle.AndroidStudio】"
      }]
    }, {
      key: '7',
      href: '#front-vue',
      title: 'Vue',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/simple-uploader/Uploader/blob/develop/README_zh-CN.md',
        title: 'simple-uploader',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md',
        title: 'vue-simple-uploader',
        des: 'vue-simple-uploader-官方文档',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/xiahj/p/15950975.html',
        title: 'vue-simple-uploader',
        des: 'vue-simple-uploader 常见问题整理'
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/20945955?v=4',
        linkSrc: 'https://www.cnblogs.com/xiahj/p/vue-simple-uploader.html',
        title: 'vue-simple-uploader',
        des: "基于vue-simple-uploader封装文件分片上传、秒传及断点续传的全局上传插件"
      }, {
        imgSrc: 'http://www.zzvips.com/favicon.ico',
        linkSrc: 'http://www.zzvips.com/article/222069.html',
        title: 'vue-simple-uploader',
        des: "基于vue-simple-uploader封装文件分片上传、秒传及断点续传的全局上传插件功能"
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/bailicangdu/vue2-elm',
        title: 'DEMO-Vue2 elm',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/uncleLian/vue2-echo',
        title: 'DEMO-Vue2-echo',
      }]
    }, {
      key: 'request',
      href: '#front-request',
      title: 'Axios&Request',
      subData: [{
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/6955610207036801031',
        title: 'Axios 取消重复请求'
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7034827130701611016',
        title: '完整过一遍 Axios'
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/7e60fc1be1b2',
        title: 'Promise.all race',
        des: '理解和使用Promise.all和Promise.race',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/3a1b07adfe9e',
        title: 'Axios 下载',
        des: 'Axios发送post请求下载文件',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/269a0bc7fa8a',
        title: 'Axios 预览PDF',
        des: '前端接收pdf文件流实现预览pdf文件',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/chaoyuehedy/p/9931146.html',
        title: 'Vue中Axios封装',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/31f52aade33d',
        title: 'Axios 在Vue项目封装',
      }]
    }, {
      key: '8',
      href: '#front-3D',
      title: '3D',
      subData: [{
        imgSrc: 'https://threejs.org/files/favicon.ico',
        linkSrc: 'https://threejs.org/',
        githubSrc: 'https://github.com/mrdoob/three.js',
        title: 'Three.js',
      }, {
        imgSrc: 'http://www.webgl3d.cn/img/favicon.ico',
        linkSrc: 'http://www.webgl3d.cn/',
        title: 'Three.js中文网',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/birdflyto206/article/details/52414405',
        title: 'Three加载和使用纹理',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/u014291990/article/details/103023440',
        title: 'CanvasTexture',
        des: 'Canvas画布作为Three.js纹理贴图(CanvasTexture)'
      }, {
        imgSrc: 'https://cloudcache.tencentcs.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png',
        linkSrc: 'https://cloud.tencent.com/developer/article/1665490',
        title: 'vue 中使用threejs',
      }, {
        imgSrc: 'https://giojs.org/assets/images/logoTitle.ico',
        linkSrc: 'https://giojs.org/index_zh.html',
        title: 'Gio.js 地球可视化',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://bestvist.github.io/axial3d/demo/',
        githubSrc: 'https://github.com/bestvist/axial3d',
        title: 'Axial3d 轴动效果',
      }]
    }, {
      key: 'front-Electron',
      href: '#front-Electron',
      title: 'Electron',
      subData: [{
        imgSrc: 'https://www.electronjs.org/zh/assets/img/favicon.ico',
        linkSrc: 'https://www.electronjs.org/zh/',
        title: 'Electron',
      }, {
        imgSrc: 'https://motrix.app/favicon.ico',
        linkSrc: 'https://motrix.app/zh-CN',
        githubSrc: 'https://github.com/agalwood/Motrix',
        title: '项目-Motrix 下载',
      }]
    }, {
      key: '9',
      href: '#front-Wechat',
      title: '微信小程序',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/imageslr/weapp-library',
        title: 'DEMO-借书平台',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/nslogx/Gitter',
        title: 'DEMO-GitHub小程序',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/RebeccaHanjw/weapp-wechat-zhihu',
        title: 'DEMO-知乎',
      }]
    }
  ])

  const handleClickAnchor = (e) => {
    e.preventDefault();
  }

  return (
    <div className='main-div'>
      <div className='main-div-left'>
        <Anchor
          onClick={handleClickAnchor}
          items={data}
        />
      </div>
      <div className='main-div-right'>
        <Space direction="vertical" size="middle" style={{width:'100%'}}>
          {
            data.map((item)=>{
              return (
                <Card size="small" title={item.title} id={item.href.replace('#','')} key={item.href}>
                  <Space size={[16, 16]} wrap>
                    {
                      item.subData.map((childrenItem)=>{
                        return (
                          <div className='main-div-right-item' key={childrenItem.linkSrc}>
                            <Image 
                              fallback={githubPng} 
                              src={childrenItem.imgSrc} 
                              alt={childrenItem.title} 
                              width={20} 
                              height={20}
                              preview={false}
                            />
                            <Link href={childrenItem.linkSrc} target="_blank" title={childrenItem.des}>{childrenItem.title}</Link>
                          </div>
                        )
                      })
                    }
                  </Space>
                </Card>
              )
            })
          }
        </Space>
      </div> 
    </div>
  );
}


export default Study;