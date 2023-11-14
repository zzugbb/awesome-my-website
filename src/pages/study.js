import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import mockPng from '../asset/img/mock-logo.png';
import githubPng from '../asset/img/github-logo.png';
import uikitPng from '../asset/img/uikit-logo.png';
import es6Png from '../asset/img/es6-logo.png';

function Study() {

  const { Link } = Typography;

  const [data] = useState([
    {
      key: '1',
      href: '#front-base',
      title: '前端基础&值得收藏',
      subData: [{
        imgSrc: 'https://hellogithub.com/favicon/apple-icon-57x57.png',
        linkSrc: 'https://github.com/521xueweihan/HelloGitHub',
        title: 'HelloGitHub',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/jobbole/awesome-programming-books',
        title: '经典编程书籍大全',
      }, {
        imgSrc: uikitPng,
        linkSrc: 'https://github.com/jaywcjlove/awesome-uikit',
        title: 'JS框架, Web组件库',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://web.qianguyihao.com/',
        title: '千古前端图文教程',
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
        title: 'ES6 入门教程',
      }]
    }, {
      key: '4',
      href: '#front-css',
      title: 'CSS',
      subData: [{
        imgSrc: 'https://csscoco.com/inspiration/logo2.png',
        linkSrc: 'https://csscoco.com/inspiration/#/',
        title: 'CSS灵感',
      }]
    }, {
      key: '5',
      href: '#front-react',
      title: 'React',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/adam-golab/react-developer-roadmap',
        title: 'React 学习路线',
      }]
    }, {
      key: '6',
      href: '#front-react-native',
      title: 'React Native',
      subData: []
    }, {
      key: '7',
      href: '#front-vue',
      title: 'Vue',
      subData: [{
        imgSrc: githubPng,
        linkSrc: 'https://github.com/bailicangdu/vue2-elm',
        title: 'DEMO-Vue2 elm',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/uncleLian/vue2-echo',
        title: 'DEMO-Vue2-echo',
      }]
    }, {
      key: '8',
      href: '#front-3D',
      title: '3D',
      subData: [{
        imgSrc: 'https://threejs.org/files/favicon.ico',
        linkSrc: 'https://threejs.org/',
        title: 'Three.js',
      }, {
        imgSrc: 'https://giojs.org/assets/images/logoTitle.ico',
        linkSrc: 'https://giojs.org/index_zh.html',
        title: 'Gio.js 地球可视化',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://bestvist.github.io/axial3d/demo/',
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
        linkSrc: 'https://github.com/agalwood/Motrix',
        title: 'Demo-Motrix 下载',
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


export default Study;