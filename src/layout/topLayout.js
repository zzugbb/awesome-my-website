import React from 'react';
import logo from '../asset/img/logo.png';

function TopLayout() {

  return (
    <div className='top-div'>
      <div className='top-div-main'>
        <div className='logo-div'>
          <img src={logo} alt="logo" style={{height:60,margin:2}}/>
        </div>
        <ul className='top-ul'>
          <li>
            <span>学习资源</span>
          </li>
          <li>
            <span>工具网站</span>
          </li>
          <li>
            <span>搭建部署</span>
          </li>
          <li>
            <span>生活娱乐</span>
          </li>
          <li>
            <span>乱七八糟</span>
          </li>
          <li>
            <span>关于我的</span>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default TopLayout;