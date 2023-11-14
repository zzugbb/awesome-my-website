import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography } from 'antd';
import mockPng from '../asset/img/mock-logo.png';

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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
        linkSrc: 'https://github.com/jobbole/awesome-programming-books',
        title: '经典编程书籍大全',
      }, {
        imgSrc: 'data:image/png;base64,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',
        linkSrc: 'https://github.com/jaywcjlove/awesome-uikit',
        title: 'JS框架，Web组件库',
      }, {
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
        linkSrc: 'https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md',
        title: 'JS-算法',
      }, {
        imgSrc: 'https://es6.ruanyifeng.com/favicon.ico',
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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
        linkSrc: 'https://github.com/bailicangdu/vue2-elm',
        title: 'DEMO-Vue2 elm',
      }, {
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
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
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
        linkSrc: 'https://github.com/imageslr/weapp-library',
        title: 'DEMO-借书平台',
      }, {
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
        linkSrc: 'https://github.com/nslogx/Gitter',
        title: 'DEMO-GitHub小程序',
      }, {
        imgSrc: 'https://github.githubassets.com/favicons/favicon.svg',
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
                <Card size="small" title={item.title} id={item.href.replace('#','')}>
                  <Space size={[16, 16]} wrap>
                    {
                      item.subData.map((childrenItem)=>{
                        return (
                          <div className='main-div-right-item' id={childrenItem.linkSrc}>
                            <img src={childrenItem.imgSrc} alt={childrenItem.title}></img>
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