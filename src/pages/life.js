import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import githubPng from '../asset/img/github-logo.png';
import yikmPng from '../asset/img/yikm.png';

function Life() {

  const { Link } = Typography;

  const [data] = useState([
    {
      key: 'help-life',
      href: '#help-life',
      title: '生活',
      subData: [{
        imgSrc: 'https://www.artic.edu/dist/images/favicon-16.png',
        linkSrc: 'https://www.artic.edu/collection',
        title: '世界-艺术品-欣赏',
      }, {
        imgSrc: 'https://cook.aiurs.co/assets/images/favicon.png',
        linkSrc: 'https://cook.aiurs.co/',
        githubSrc: 'https://github.com/Anduin2017/HowToCook',
        title: '程序员做饭指南',
      }, {
        imgSrc: 'https://zh.wikihow.com/favicon_round.ico',
        linkSrc: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5',
        title: '解决各种生活问题',
      }]
    }, {
      key: 'Work is not all',
      href: '#Work is not all',
      title: 'Work is not all',
      subData: [{
        imgSrc: 'https://avatars2.githubusercontent.com/u/48942249?s=60&v=4',
        linkSrc: 'https://996.icu/#/zh_CN',
        githubSrc: 'https://github.com/996icu/996.ICU',
        title: '996 ICU',
      }]
    }, {
      key: 'game',
      href: '#game',
      title: '音乐&游戏',
      subData: [{
        imgSrc: yikmPng,
        linkSrc: 'https://www.yikm.net/',
        title: '小霸王其乐无穷',
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

export default Life;