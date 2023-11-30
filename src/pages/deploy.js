import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography, Image } from 'antd';
import githubPng from '../asset/img/github-logo.png';
import cnblogPng from '../asset/img/cnblog.ico';
import LinuxPng from '../asset/img/linux.ico';
import jianshu from '../asset/img/jianshu.ico';

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
      }, {
        imgSrc: 'https://minimalanalytics.com/icons/icon-48x48.png',
        linkSrc: 'https://minimalanalytics.com/',
        title: '谷歌页面分析-简化版',
        des: 'Minimal Google Analytics Snippet',
        githubSrc: 'https://gist.github.com/DavidKuennen/443121e692175d6fc145e1efb0284ec9'
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
        imgSrc: 'https://easyhexo.com/favicon.png',
        linkSrc: 'https://easyhexo.com/',
        githubSrc: 'https://github.com/EasyHexo/Easy-Hexo',
        title: 'Easy Hexo 轻松入门',
        des: '一站式的 Hexo 教程, 轻松使用 Hexo 建站',
      }, {
        imgSrc: 'https://gitalk.github.io/favicon.ico',
        linkSrc: 'https://gitalk.github.io/',
        githubSrc: 'https://github.com/gitalk/gitalk',
        title: 'Gitalk 评论插件',
      }, {
        imgSrc: 'https://static.zhihu.com/heifetz/favicon.ico',
        linkSrc: 'https://zhuanlan.zhihu.com/p/260781932',
        title: '博客集成 Gitalk',
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
      key: 'linux-nginx-docker-k8s',
      href: '#linux-nginx-docker-k8s',
      title: 'Linux&Nginx&Docker&K8s',
      subData: [{
        imgSrc: 'https://www.explainshell.com/static/img/shell.png',
        linkSrc: 'https://www.explainshell.com/',
        title: 'Shell命令可视化解释',
      }, {
        imgSrc: 'https://wangchujiang.com/linux-command/img/favicon.ico',
        linkSrc: 'https://wangchujiang.com/linux-command/',
        githubSrc: 'https://github.com/jaywcjlove/linux-command',
        title: 'Linux命令搜索引擎',
      }, {
        imgSrc: LinuxPng,
        linkSrc: 'https://man.linuxde.net/',
        title: 'Linux命令大全',
      }, {
        imgSrc: 'https://www.digitalocean.com/_next/static/media/favicon.594d6067.ico',
        linkSrc: 'https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN',
        title: 'NGINX 配置生成',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/Anker/p/6056540.html',
        title: '正向代理与反向代理',
      }, {
        imgSrc: 'https://ruanyifeng.com/favicon.ico',
        linkSrc: 'https://ruanyifeng.com/blog/2018/02/docker-tutorial.html',
        title: 'Docker 入门-阮一峰',
      }]
    }, {
      key: 'openssl',
      href: '#openssl',
      title: 'Openssl&网络协议',
      subData: [{
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/hbiao68/article/details/100527417',
        title: 'nodeJs 执行系统命令',
      }, {
        imgSrc: jianshu,
        linkSrc: 'https://www.jianshu.com/p/f6608e77a4da',
        title: 'OpenSSL 生成',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/aixiaoxiaoyu/p/8650180.html',
        title: 'OpenSSL命令目录',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/as3luyuan123/article/details/16872101',
        title: 'OpenSSL命令-verify',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/shenlinken/p/9968274.html',
        title: 'OpenSSL看证书细节',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/rennaiqian/article/details/79599536',
        title: 'Node启https服务器',
      }, {
        imgSrc: 'https://www.php.cn/favicon.ico',
        linkSrc: 'https://www.php.cn/manual/view/35521.html',
        title: 'HTTP手册-CSP安全等',
      }, {
        imgSrc: 'https://www.gstatic.com/devrel-devsite/prod/va65162e8ce9aacc75e4d3c0cd6d166fc6ceaaf184fea0ff0eac1d9b62c0480be/web/images/favicon.png',
        linkSrc: 'https://web.dev/articles/csp?hl=zh-cn',
        title: '安全策略-Google',
      }, {
        imgSrc: cnblogPng,
        linkSrc: 'https://www.cnblogs.com/heyuqing/p/6215761.html',
        title: '前端安全-CSP',
      }, {
        imgSrc: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        linkSrc: 'https://blog.csdn.net/liudoyang/article/details/103783039',
        title: 'CSP-头缺失或不安全',
      }]
    }, {
      key: 'webpack-build',
      href: '#webpack-build',
      title: '打包 相关',
      subData: [{
        imgSrc: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
        linkSrc: 'https://juejin.cn/post/6970998019865083911',
        title: 'Gulp 回顾'
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