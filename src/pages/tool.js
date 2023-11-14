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
        imgSrc: githubPng,
        linkSrc: 'https://github.com/caiyongji/emoji-list',
        title: 'Github表情列表',
      }, {
        imgSrc: 'https://devhubapp.com/static/logo.png',
        linkSrc: 'https://devhubapp.com/',
        title: 'Github客户端',
      }, {
        imgSrc: 'https://wangchujiang.com/awesome-mac/logo.svg',
        linkSrc: 'https://github.com/jaywcjlove/awesome-mac',
        title: 'Mac 软件收集',
      }, {
        imgSrc: 'https://drawcall.github.io/clock-shop/favicon.ico',
        linkSrc: 'https://github.com/drawcall/clock-shop',
        title: '各种各样钟表',
      }, {
        imgSrc: rapPng,
        linkSrc: 'https://github.com/thx/rap2-delos',
        title: '接口管理工具RAP',
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
      }]
    }, {
      key: 'front-preview',
      href: '#front-preview',
      title: '简历&面试相关',
      subData: [{
        imgSrc: 'https://raw.githubusercontent.com/salomonelli/best-resume-ever/master/src/assets/logo.png',
        linkSrc: 'https://github.com/salomonelli/best-resume-ever',
        title: 'vue项目简历模板',
      }, {
        imgSrc: 'https://fe.padding.me/_media//favicon-32x32.png',
        linkSrc: 'https://github.com/paddingme/Front-end-Web-Development-Interview-Question',
        title: '前端面试题',
      }]
    }, {
      key: 'front-regex',
      href: '#front-regex',
      title: '正则表达',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md',
        title: '大陆手机号',
      }]
    }, {
      key: 'front-video-music',
      href: '#front-video-music',
      title: '音频视频',
      subData: [{
        imgSrc: 'https://howlerjs.com/assets/images/favicon.ico',
        linkSrc: 'https://howlerjs.com/',
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
                            <Link href={childrenItem.linkSrc} target="_blank">{childrenItem.title}</Link>
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