import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../asset/img/logo.png';

function TopLayout() {

  const navigate = useNavigate();

  const [currentMenu, setCurrentMenu] = useState('study');

  const handleClickMenu = (e) => {
    setCurrentMenu(e);
    if (e === 'study') {
      navigate('/');
    } else {
      navigate('/' + e);
    }
  }

  return (
    <div className='top-div'>
      <div className='top-div-main'>
        <div className='logo-div'>
          <img src={logo} alt="logo" style={{height:60,margin:2}}/>
        </div>
        <ul className='top-ul'>
          <li onClick={() => handleClickMenu('study')} className={currentMenu === 'study' ? 'current-li' : ''}>
            <span>学习资源</span>
          </li>
          <li onClick={() => handleClickMenu('tool')} className={currentMenu === 'tool' ? 'current-li' : ''}>
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