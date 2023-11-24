import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import rapPng from '../asset/img/rap-logo.png';
import githubPng from '../asset/img/github-logo.png';
import cnblogPng from '../asset/img/cnblog.ico';

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
        title: ' 程序员简历模板系列',
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
        imgSrc: 'https://www.iloveimg.com/img/favicons-img/favicon-16x16.png',
        linkSrc: 'https://www.iloveimg.com/zh-cn',
        title: '图像文件在线编辑',
      }, {
        imgSrc: 'https://jwenjian.github.io/gradex/favicon.ico',
        linkSrc: 'https://jwenjian.github.io/gradex/',
        githubSrc: 'https://github.com/jwenjian/gradex',
        title: '图片->渐变色背景图',
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
        imgSrc: 'https://squoosh.app/c/favicon-c9cf50ef.ico',
        linkSrc: 'https://squoosh.app/',
        title: '图片压缩转换-隐私',
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