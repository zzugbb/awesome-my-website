import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import rapPng from '../asset/img/rap-logo.png';
import githubPng from '../asset/img/github-logo.png';

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
        imgSrc: 'https://www.remove.bg/favicon.ico',
        linkSrc: 'https://www.remove.bg/zh',
        title: '在线抠图背景消除',
      }, {
        imgSrc: 'https://glowtxt.com/favicon-32.png',
        linkSrc: 'https://glowtxt.com/',
        title: '艺术字png&gif生成',
      }, {
        imgSrc: 'https://blog.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
        linkSrc: 'https://blog.hubspot.com/website/top-free-online-font-generators',
        title: '17个免费字体生成器',
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