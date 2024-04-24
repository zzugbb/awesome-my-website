import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import rapPng from '../asset/img/rap-logo.png';
import githubPng from '../asset/img/github-logo.png';
import cnblogPng from '../asset/img/cnblog.ico';
import jianshu from '../asset/img/jianshu.ico';

function Tool() {

  const { Link } = Typography;

  const [data] = useState([
    {
      key: 'front-github',
      href: '#front-github',
      title: 'Github收集',
      subData: [{
        imgSrc: 'https://avatars.githubusercontent.com/u/16218728?s=48&v=4',
        linkSrc: 'https://github.com/caiyongji/emoji-list',
        title: 'Github表情列表',
      }, {
        imgSrc: 'https://camo.githubusercontent.com/9ad8cfe3215fff758ea74784f86ef0de25b6acfbd6a4fab19d9a13ff47b05843/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e7572616768617a72612f696d6167652f75706c6f61642f76313539343930383234322f6c6f676f5f636373776d652e737667',
        linkSrc: 'https://github.com/anuraghazra/github-readme-stats',
        title: 'Readme Stats 装饰',
      }, {
        imgSrc: 'https://shields.io/img/favicon.ico',
        linkSrc: 'https://shields.io/',
        githubSrc: 'https://github.com/badges/shields',
        title: 'Github徽章 shields',
      }, {
        imgSrc: 'https://forthebadge.com/images/mark.svg',
        linkSrc: 'https://forthebadge.com/',
        githubSrc: 'https://github.com/forthebadge/for-the-badge',
        title: 'Github徽章 Badge',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.blog/2008-12-19-github-ribbons/',
        title: 'Fork me 彩带',
      }, {
        imgSrc: 'https://tholman.com/favicon.ico',
        linkSrc: 'https://tholman.com/github-corners/',
        githubSrc: 'https://github.com/tholman/github-corners',
        title: 'Fork me 角标',
      }, {
        imgSrc: 'https://gissue.github.io/img/logo.png',
        linkSrc: 'https://gissue.github.io/',
        githubSrc: 'https://github.com/gissue/gissue.github.io',
        title: 'Github Issues 下载',
      }, {
        imgSrc: 'https://www.toptal.com/developers/gitignore/img/lightning.svg',
        linkSrc: 'https://www.toptal.com/developers/gitignore/',
        githubSrc: 'https://github.com/toptal/gitignore.io',
        title: 'gitignore 文件生成',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/6821244?s=48&v=4',
        linkSrc: 'https://ghchart.rshah.org/',
        githubSrc: 'https://github.com/2016rshah/githubchart-api',
        title: 'Github 贡献图 API',
      }, {
        imgSrc: 'https://repobeats.axiom.co/favicon-32x32.png',
        linkSrc: 'https://repobeats.axiom.co/',
        title: 'Github Readme 图表',
      }, {
        imgSrc: 'https://devhubapp.com/static/logo.png',
        linkSrc: 'https://devhubapp.com/',
        title: 'Github客户端',
      }, {
        imgSrc: 'https://wangchujiang.com/awesome-mac/logo.svg',
        linkSrc: 'https://wangchujiang.com/awesome-mac/',
        githubSrc: 'https://github.com/jaywcjlove/awesome-mac',
        title: 'Mac 软件收集',
      }, {
        imgSrc: 'https://drawcall.github.io/clock-shop/favicon.ico',
        linkSrc: 'https://github.com/drawcall/clock-shop',
        title: '各种各样钟表',
      }, {
        imgSrc: rapPng,
        linkSrc: 'https://github.com/thx/rap2-delos',
        title: '接口管理工具RAP',
      }, {
        imgSrc: 'https://codecrafters.io/favicon.ico',
        linkSrc: 'https://codecrafters.io/',
        githubSrc: 'https://github.com/codecrafters-io/build-your-own-x',
        title: 'build-x 任何技术',
      }, {
        imgSrc: 'https://100px.net/logo.png',
        linkSrc: 'https://100px.net/',
        githubSrc: 'https://github.com/buuing/lucky-canvas',
        title: '各种各样抽奖插件',
      }]
    }, {
      key: 'front-Vscode&chrome',
      href: '#front-Vscode&chrome',
      title: 'Vscode&Chrome',
      subData: [{
        imgSrc: 'https://raw.githubusercontent.com/LeetCode-OpenSource/vscode-leetcode/master/resources/LeetCode.png',
        linkSrc: 'https://github.com/LeetCode-OpenSource/vscode-leetcode',
        title: 'Vscode-LeetCode',
      }, {
        imgSrc: 'https://raw.githubusercontent.com/zhaoolee/ChromeAppHeroes/master/README/9ac21b8aea054eb48fc404fd429638bf.jpeg',
        linkSrc: 'https://github.com/zhaoolee/ChromeAppHeroes/tree/master',
        title: 'Chrome插件英雄榜',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7225992011723538490',
        title: '教你写Chrome插件',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/14891797?s=48&v=4',
        linkSrc: 'https://github.com/fhefh2015/Fast-GitHub',
        title: 'Github下载加速插件',
      }]
    }, {
      key: 'front-preview',
      href: '#front-preview',
      title: '简历&面试&求职',
      subData: [{
        imgSrc: 'https://raw.githubusercontent.com/salomonelli/best-resume-ever/master/src/assets/logo.png',
        linkSrc: 'https://salomonelli.github.io/best-resume-ever/#/',
        githubSrc: 'https://github.com/salomonelli/best-resume-ever',
        title: 'vue项目简历模板',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/8636020?s=48&v=4',
        linkSrc: 'https://github.com/youngyangyang04/Markdown-Resume-Template',
        title: '简历模板-简单明了',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/7380510?s=48&v=4',
        linkSrc: 'https://github.com/geekcompany/ResumeSample',
        title: '程序员简历模板系列',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/20625845?s=48&v=4',
        linkSrc: 'https://nzbin.github.io/resume-boilerplate/',
        githubSrc: 'https://github.com/nzbin/resume-boilerplate',
        title: '前端简历模板',
      }, {
        imgSrc: 'https://static.developers.pub/8a71a71bc1ae403cbeb5b8e6230cb016.ico',
        linkSrc: 'https://www.developers.pub/resume',
        title: '开发者客栈-简历模板',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7016593221815910408',
        title: '前端八股文',
      }, {
        imgSrc: 'https://static.zhihu.com/heifetz/favicon.ico',
        linkSrc: 'https://zhuanlan.zhihu.com/p/84876191',
        title: '函数对象原型链继承',
        des: "从面向对象设计角度，全面解读——JS中的函数与对象、Object与Function、以及原型链与继承",
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/6844904200917221389',
        title: '66条JavaScript面试点',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/6844904115428917255',
        title: '中级前端面试秘籍',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7269952188927017015',
        title: 'post发两次请求?',
      }, {
        imgSrc: 'https://codetop.cc/logo.jpg',
        linkSrc: 'https://codetop.cc/home',
        title: 'CodeTop大厂题库',
      }, {
        imgSrc: 'https://q.shanyue.tech/favicon.ico',
        linkSrc: 'https://q.shanyue.tech/',
        title: '大厂面试每日一题',
      }, {
        imgSrc: 'https://lucifer.ren/favicon.ico',
        linkSrc: 'https://lucifer.ren/fe-interview/#/',
        githubSrc: 'https://github.com/azl397985856/fe-interview',
        title: '大前端面试宝典',
      }, {
        imgSrc: 'https://fe.padding.me/_media//favicon-32x32.png',
        linkSrc: 'https://fe.padding.me/#/',
        githubSrc: 'https://github.com/paddingme/Front-end-Web-Development-Interview-Question',
        title: '前端面试题',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/68626059?s=48&v=4',
        linkSrc: 'https://i-want-offer.github.io/FE-Essay/',
        githubSrc: 'https://github.com/i-want-offer/FE-Essay',
        title: '前端知识及面试题',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/37846378?s=48&v=4',
        linkSrc: 'https://github.com/ltadpoles/web-document',
        title: '前端学习历程-笔记',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/31833528?s=48&v=4',
        linkSrc: 'http://www.h-camel.com/index.html',
        githubSrc: 'https://github.com/haizlin/fe-interview',
        title: '前端面试每日 3+1',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/1035487?s=48&v=4',
        linkSrc: 'https://github.com/yifeikong/reverse-interview-zh',
        title: '面试反问面试官',
      }, {
        imgSrc: 'https://static.nowcoder.com/fe/file/images/nowpick/web/www-favicon.ico',
        linkSrc: 'https://www.nowcoder.com/ta/front-end-interview?query=&asc=true&order=&page=1',
        title: '前端面试经典题合集',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/programboyboy/Garbage-company',
        title: '求职避坑',
      }]
    }, {
      key: 'front-image-icon',
      href: '#front-image-icon',
      title: '图片&ICON',
      subData: [{
        imgSrc: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/840babff8c7009ac167142cb459dfe8d.svg',
        linkSrc: 'https://www.shopify.com/zh/tools/logo-maker',
        title: '免费logo制作',
      }, {
        imgSrc: 'https://static.mybrandnewlogo.com/images/favicon.ico',
        linkSrc: 'https://mybrandnewlogo.com/',
        title: 'logo生成',
      }, {
        imgSrc: 'https://www.remove.bg/favicon.ico',
        linkSrc: 'https://www.remove.bg/zh',
        title: '在线抠图背景消除',
      }, {
        imgSrc: 'https://www.unscreen.com/favicon-32x32.png',
        linkSrc: 'https://www.unscreen.com/',
        title: 'GIF抠图背景消除',
      }, {
        imgSrc: 'https://www.iloveimg.com/img/favicons-img/favicon-16x16.png',
        linkSrc: 'https://www.iloveimg.com/zh-cn',
        title: '图像文件在线编辑',
      }, {
        imgSrc: 'https://jwenjian.github.io/gradex/favicon.ico',
        linkSrc: 'https://jwenjian.github.io/gradex/',
        githubSrc: 'https://github.com/jwenjian/gradex',
        title: '图片->渐变色背景图',
      }, {
        imgSrc: 'https://icon.wuruihong.com/wrh/favicon-32x32.png',
        linkSrc: 'https://icon.wuruihong.com/',
        title: '图标工场-所有应用',
        githubSrc: 'https://github.com/zhanghuanchong/icon-workshop',
        des: '移动应用图标/启动图生成工具，一键生成所有尺寸的应用图标/启动图',
      }, {
        imgSrc: 'https://glowtxt.com/favicon-32.png',
        linkSrc: 'https://glowtxt.com/',
        title: '艺术字png&gif生成',
      }, {
        imgSrc: 'https://blog.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
        linkSrc: 'https://blog.hubspot.com/website/top-free-online-font-generators',
        title: '17个免费字体生成器',
      }, {
        imgSrc: 'https://www.qt86.com/favicon.ico',
        linkSrc: 'https://www.qt86.com/',
        title: '艺术字生成转换',
      }, {
        imgSrc: 'https://make.girls.moe/favicon.ico',
        linkSrc: 'https://make.girls.moe/#/',
        title: '二次元头像图片生成',
      }, {
        imgSrc: 'https://www.codepng.app/favicon.ico',
        linkSrc: 'https://www.codepng.app/',
        title: '代码图片codeToPng',
      }, {
        imgSrc: 'https://simpleicons.org/images/favicon.ico',
        linkSrc: 'https://simpleicons.org/',
        title: 'simple icons',
      }, {
        imgSrc: 'https://ikonate.com/favicon.png',
        linkSrc: 'https://ikonate.com/#content',
        title: 'SVG icons',
      }, {
        imgSrc: 'https://uploads-ssl.webflow.com/61d88cbe2069b94855d468db/61e0b3a79136f17068330c7c_Fav-32.png',
        linkSrc: 'https://usepastel.com/blog/33-beautiful-free-icon-sets',
        title: '33个免费的图标网站',
      }, {
        imgSrc: 'https://squoosh.app/c/favicon-c9cf50ef.ico',
        linkSrc: 'https://squoosh.app/',
        title: '图片压缩转换-隐私',
      }]  
    }, {
      key: 'front-templates-site',
      href: '#front-templates-site',
      title: '开发模板&灵感',
      subData: [{
        imgSrc: 'https://cdn.dribbble.com/assets/favicon-585500d983ec4736f92c6ec337609b2c9ffd160296dc93182f5c6e55c39cb569.ico',
        linkSrc: 'https://dribbble.com/',
        title: '网站模板-3D图片',
        des: "Discover the world’s top designers & creatives",
      }, {
        imgSrc: 'https://html5up.net/assets/icons/favicon.ico',
        linkSrc: 'https://html5up.net/',
        title: '响应式H5网站模板',
        des: "适配各种屏幕的H5和CSS3网站模板, 完全免费",
      }, {
        imgSrc: 'https://pic.netbian.com/favicon.ico',
        linkSrc: 'https://pic.netbian.com/4kbeijing/index_2.html',
        title: '4K背景壁纸-高清',
      },  {
        imgSrc: 'https://uigradients.com/static/images/favicon-32x32.png',
        linkSrc: 'https://uigradients.com/#Mini',
        title: '渐变色-Design Code',
        githubSrc: 'https://github.com/Ghosh/uiGradients',
      }]
    }, {
      key: 'front-tool-site',
      href: '#front-tool-site',
      title: '在线工具网站',
      subData: [{
        imgSrc: 'https://tool.oschina.net/img/favicon.ico',
        linkSrc: 'https://tool.oschina.net/encode?type=4',
        title: '在线编码转换',
      }, {
        imgSrc: 'https://tool.oschina.net/img/favicon.ico',
        linkSrc: 'https://tool.oschina.net/encrypt?type=2',
        title: '在线加密解密',
      }, {
        imgSrc: 'https://static.base64.guru/img/favicon.ico',
        linkSrc: 'https://base64.guru/converter/encode/hex',
        title: 'Hex to Base64',
      }, {
        imgSrc: 'https://screendump.techulus.com/favicon.ico',
        linkSrc: 'https://screendump.techulus.com/',
        title: '输入网址生成截图',
      }, {
        imgSrc: 'https://www.p2hp.com/favicon.ico',
        linkSrc: 'https://www.p2hp.com/screenrecord.html',
        title: '在线屏幕录制&下载',
      }, {
        imgSrc: 'https://www.p2hp.com/favicon.ico',
        linkSrc: 'https://screenrecord.43z.one/',
        title: '屏幕录制&下载EN',
      }, {
        imgSrc: 'https://tool.p2hp.com/tools/images/icon.png',
        linkSrc: 'https://tool.p2hp.com/',
        title: '程序员在线工具箱',
      }, {
        imgSrc: 'https://www.toolfk.com/tools/images/icon.png',
        linkSrc: 'https://www.toolfk.com/',
        title: '工具人在线工具箱',
      }, {
        imgSrc: 'https://cloudconvert.com/images/logo_flat_32.png',
        linkSrc: 'https://cloudconvert.com/',
        title: 'File Convert',
        des: "各种各样格式的文件转换, 文档, 图片 等等"
      }, {
        imgSrc: 'https://cn.office-converter.com/Online-Converter/OnlineConvert32.png',
        linkSrc: 'https://cn.office-converter.com/',
        title: '文件转换器',
        des: "在线转换器 - 转换视频, 音乐, 图像, PDF"
      }, {
        imgSrc: 'https://www.bejson.com/favicon.ico',
        linkSrc: 'https://www.bejson.com/jsonviewernew/',
        title: 'JSON在线查看编辑',
      }]
    }, {
      key: 'front-regex',
      href: '#front-regex',
      title: '正则表达',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md',
        title: '大陆手机号',
      }, {
        imgSrc: 'https://any-rule.vercel.app/favicon.ico',
        linkSrc: 'https://any-rule.vercel.app/',
        githubSrc: 'https://github.com/any86/any-rule',
        title: '常用正则大全',
      }, {
        imgSrc: 'https://regexper.com/favicon.ico',
        linkSrc: 'https://regexper.com/',
        title: 'JS风格正则解析',
      }]
    }, {
      key: 'front-video-music',
      href: '#front-video-music',
      title: '音频视频',
      subData: [{
        imgSrc: 'https://howlerjs.com/assets/images/favicon.ico',
        linkSrc: 'https://howlerjs.com/',
        githubSrc: 'https://github.com/goldfire/howler.js',
        title: '网页音频解码',
      }, {
        imgSrc: 'https://smashinghub.com/wp-content/themes/smashing_hub/favicon.ico',
        linkSrc: 'https://smashinghub.com/10-best-html5-audio-players.htm',
        title: 'H5 Audio Player 精选',
        des: '10 Best HTML5 Audio Players',
      }, {
        imgSrc: 'https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        linkSrc: 'https://www.npmjs.com/package/react-flv-player',
        title: 'react-flv-player',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/u012961419/article/details/120491439',
        title: '实时视频(hls http-flv)',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7038549057177911327',
        title: '前端视频监控直播',
      }]
    }, {
      key: 'front-template',
      href: '#front-template',
      title: '渲染模板',
      subData: [{
        imgSrc: 'https://avatars.githubusercontent.com/u/1791748?s=48&v=4',
        linkSrc: 'https://aui.github.io/art-template/zh-cn/index.html',
        githubSrc: 'https://github.com/aui/art-template',
        title: 'art-template',
      }, {
        imgSrc: 'https://nunjucks.bootcss.com/img/favicon.png',
        linkSrc: 'https://nunjucks.bootcss.com/',
        title: 'Nunjucks',
      }, {
        imgSrc: 'https://avatars.githubusercontent.com/u/757?s=48&v=4',
        linkSrc: 'https://ejs.bootcss.com/',
        githubSrc: 'https://github.com/mde/ejs',
        title: 'EJS',
      }, {
        imgSrc: 'https://handlebarsjs.com/images/favicon.png',
        linkSrc: 'https://handlebarsjs.com/zh/',
        title: 'Handlebars',
      }]
    }, {
      key: 'front-online-edit',
      href: '#front-online-edit',
      title: '编辑器&在线编辑&数学公式',
      subData: [{
        imgSrc: 'https://dillinger.io/apple-touch-icon.png',
        linkSrc: 'https://dillinger.io/',
        title: 'Online Md Editor',
        des: 'Online Markdown Editor-PREVIEW, EXPORT HTML&PDF, SAVE, IMPORT',
      }, {
        imgSrc: 'https://codesandbox.io/favicon.ico',
        linkSrc: 'https://codesandbox.io/',
        title: 'CodeSandbox 云开发',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/Tirisfal/p/5548424.html',
        title: 'CKeditor 配置使用',
      }, {
        imgSrc: 'https://mathjax-chinese-doc.readthedocs.io/favicon.ico',
        linkSrc: 'https://mathjax-chinese-doc.readthedocs.io/en/latest/index.html',
        title: 'MathJax 中文文档',
        des: '用来显示网络上的数学公式的JavaScript引擎'
      }, {
        imgSrc: 'https://static.segmentfault.com/main_site_next/71562539/touch-icon.png',
        linkSrc: 'https://segmentfault.com/a/1190000008317350',
        title: 'MathJax 的配置笔记',
      }, {
        imgSrc: 'https://static.segmentfault.com/main_site_next/71562539/touch-icon.png',
        linkSrc: 'https://segmentfault.com/a/1190000003822609',
        title: 'MathJax 瘦身记',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/linyuxilu/article/details/78584321',
        title: '解决MathJax加载慢',
      },{
        imgSrc: 'http://mathquill.com/favicon.ico',
        linkSrc: 'http://mathquill.com/',
        title: 'MathQuill',
        des: 'Easily type math in your webapp'
      }]
    }, {
      key: 'front-page-setting',
      href: '#front-page-setting',
      title: '页面可视化搭建配置',
      subData: [{
        imgSrc: 'https://static.segmentfault.com/main_site_next/71562539/touch-icon.png',
        linkSrc: 'https://segmentfault.com/a/1190000014963740',
        githubSrc: 'https://github.com/CntChen/cntchen.github.io/issues/15',
        title: '页面可视化搭建工具',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/8bb5a1bdeae2',
        title: '可配置前端页面方案',
      }, {
        imgSrc: 'https://awps-assets.meituan.net/mit/blog/v20190629/asset/icon/favicon.ico?v=Whistle&t=20181017-1r',
        linkSrc: 'https://tech.meituan.com/2017/03/09/waimai-lego.html',
        title: '美团可视化界面组装',
      }, {
        imgSrc: 'https://static001.infoq.cn/static/infoq/www/img/share-default-5tgbiuhgfefgujjhg.png',
        linkSrc: 'https://www.infoq.cn/article/A4610ba*mtsd2Jr5leHV',
        title: '高扩展在线网页制作',
      }]
    }, {
      key: 'front-same-website',
      href: '#front-same-website',
      title: '同类网站',
      subData: [{
        imgSrc: 'https://no.buging.cn/img/logo.ico',
        linkSrc: 'https://no.buging.cn/',
        title: 'Web前端导航',
      }, {
        imgSrc: 'https://web-abin.github.io/abinWeb/favicon.ico',
        linkSrc: 'https://web-abin.github.io/abinWeb/',
        title: '前端助手',
      }, {
        imgSrc: 'https://fe-nav.netlify.app/favicon.ico',
        linkSrc: 'https://fe-nav.netlify.app/nav/',
        title: '前端导航 | 茂茂物语',
      }, {
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/7242127432203173948',
        title: '个人网站 | 设计感想',
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

export default Tool;