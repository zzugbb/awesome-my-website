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
        imgSrc: 'https://gojs.net/favicon.ico',
        linkSrc: 'https://gojs.net/latest/index.html',
        githubSrc: 'https://github.com/NorthwoodsSoftware/GoJS',
        title: 'JS创建图片图表图形',
      }, {
        imgSrc: 'https://jsplumbtoolkit.com/img/favicon.ico',
        linkSrc: 'https://jsplumbtoolkit.com/',
        githubSrc: 'https://github.com/jsplumb/jsplumb',
        title: 'js-plumb视觉链接',
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
      }]
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
        githubSrc: 'https://github.com/mrdoob/three.js',
        title: 'Three.js',
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