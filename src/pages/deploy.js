import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import githubPng from '../asset/img/github-logo.png';
import cnblogPng from '../asset/img/cnblog.ico'

function Deploy() {

  const { Link } = Typography;

  const [data] = useState([
    {
      key: 'Create-React-App-GitPages',
      href: '#Create-React-App-GitPages',
      title: 'Create React App 部署 GitPages',
      subData: [{
        imgSrc: 'https://create-react-app.bootcss.com/img/favicon/favicon.ico',
        linkSrc: 'https://create-react-app.bootcss.com/docs/deployment#github-pages',
        title: 'React deployment',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/gitname/react-gh-pages',
        title: 'react-gh-pages',
      }, {
        imgSrc: 'https://busuanzi.ibruce.info/images/garlic.png',
        linkSrc: 'https://busuanzi.ibruce.info/',
        title: '不蒜子网页计数器',
      }]
    }, {
      key: 'hexo',
      href: '#hexo',
      title: 'hexo',
      subData: [{
        imgSrc: 'https://hexo.io/icon/favicon-32x32.png',
        linkSrc: 'https://hexo.io/zh-cn/',
        title: 'Hexo 博客框架',
      }, {
        imgSrc: 'https://gitalk.github.io/favicon.ico',
        linkSrc: 'https://gitalk.github.io/',
        githubSrc: 'https://github.com/gitalk/gitalk',
        title: 'Gitalk 评论插件',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/Fechin/hexo-theme-diaspora',
        title: 'theme-diaspora',
      }, {
        imgSrc: githubPng,
        linkSrc: 'https://github.com/dongyuanxin/theme-bmw',
        title: 'theme-bmw',
      }]
    }, {
      key: 'GitBook',
      href: '#GitBook',
      title: 'GitBook',
      subData: [{
        imgSrc: 'https://framerusercontent.com/images/XzggBVq5LteL2WchkrahlHZpgs.svg',
        linkSrc: 'https://www.gitbook.com/',
        title: 'GitBook',
      }, {
        imgSrc: 'https://www.chengweiyang.cn/gitbook/gitbook/images/favicon.ico',
        linkSrc: 'https://www.chengweiyang.cn/gitbook/gitbook.com/config/github.html',
        title: 'GitHub 集成 GitBook',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/SYT_Boss/article/details/84101775',
        title: 'GitBook 安装',
      }]
    }, {
      key: 'gitOperation',
      href: '#gitOperation',
      title: 'Git 相关',
      subData: [{
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/qq_39083004/article/details/81053953',
        title: 'Fork仓库更新最新',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/dddd6666qq/article/details/106763155',
        title: '更新Fork仓库代码',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/shenxiaolin/p/7896489.html',
        title: 'Git 修改用户名邮箱',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/skykingf/article/details/44078837',
        title: 'Git 删除空目录',
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

export default Deploy;