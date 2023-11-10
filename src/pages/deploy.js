import React from 'react';
import { Anchor } from 'antd';
import { Card, Space, Typography } from 'antd';

function Deploy() {

  const { Link } = Typography;

  const handleClickAnchor = (e) => {
    e.preventDefault();
  }

  return (
    <div className='main-div'>
      <div className='main-div-left'>
        <Anchor
          onClick={handleClickAnchor}
          items={[{
            key: '1',
            href: '#Create-React-App-GitPages',
            title: 'Create React App 部署 GitPages',
          }]}
        />
      </div>
      <div className='main-div-right'>
        <Space direction="vertical" size="middle" style={{width:'100%'}}>
          <Card size="small" title="Create React App 部署 GitPages" id="Create-React-App-GitPages">
            <Space size={[16, 16]} wrap>
              <div className='main-div-right-item'>
                <img src="https://create-react-app.bootcss.com/img/favicon/favicon.ico"></img>
                <Link href="https://create-react-app.bootcss.com/docs/deployment#github-pages" target="_blank">React deployment</Link>
              </div>
              <div className='main-div-right-item'>
                <img src="https://github.githubassets.com/favicons/favicon.svg"></img>
                <Link href="https://github.com/gitname/react-gh-pages" target="_blank">react-gh-pages</Link>
              </div>
            </Space>
          </Card>
        </Space>
      </div> 
    </div>
  );
}


export default Deploy;