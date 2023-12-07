import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../asset/img/logo.png';
import IconFont from '../components/icon';

function TopLayout() {

  const navigate = useNavigate();
  const location = useLocation();

  const [currentMenu, setCurrentMenu] = useState('study');

  useEffect(() => {
    setCurrentMenu(location.pathname.replace('/', ''));
    if (window.scrollY > 0 && window.scrollTo) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      }); 
    }
  }, [location]);

  const handleClickMenu = (e) => {
    setCurrentMenu(e);
    navigate('/' + e);
  }

  return (
    <div className='top-div'>
      <a href="https://github.com/zzugbb" target="_blank" rel="noreferrer" style={{position:'fixed', right: 0, top:0, zIndex: 9999}}>
        <img decoding="async" width="149" height="149" 
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" 
          alt="Fork me on GitHub" loading="lazy" data-recalc-dims="1"/>
      </a>
      <div className='top-div-main'>
        <div className='logo-div'>
          <img src={logo} alt="logo" style={{height:60,margin:2}}/>
        </div>
        <ul className='top-ul'>
          <li onClick={() => handleClickMenu('study')} className={currentMenu === 'study' ? 'current-li' : ''}>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-study1"></IconFont>学习资源</span>
          </li>
          <li onClick={() => handleClickMenu('tool')} className={currentMenu === 'tool' ? 'current-li' : ''}>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-tools1"></IconFont>工具网站</span>
          </li>
          <li onClick={() => handleClickMenu('deploy')} className={currentMenu === 'deploy' ? 'current-li' : ''}>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-liuchengbushu"></IconFont>搭建部署</span>
          </li>
          <li onClick={() => handleClickMenu('life')} className={currentMenu === 'life' ? 'current-li' : ''}>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-shenghuoyule"></IconFont>生活娱乐</span>
          </li>
          {/* <li>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-qita"></IconFont>乱七八糟</span>
          </li> */}
          <li onClick={() => handleClickMenu('about')} className={currentMenu === 'about' ? 'current-li' : ''}>
            <span><IconFont style={{fontSize:'20px',marginRight:'6px'}} type="icon-guanyu1"></IconFont>关于本站</span>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default TopLayout;