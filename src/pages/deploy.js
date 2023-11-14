import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography } from 'antd';
import githubPng from '../asset/img/github-logo.png';

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
        imgSrc: githubPng,
        linkSrc: 'https://github.com/gitalk/gitalk/blob/master/readme-cn.md',
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

export default Deploy;