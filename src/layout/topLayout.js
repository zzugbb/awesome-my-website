import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../asset/img/logo.png';
import IconFont from '../components/icon';

function TopLayout() {

  const navigate = useNavigate();
  const location = useLocation();

  const [currentMenu, setCurrentMenu] = useState('study');

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentMenu('study');
    } else {
      setCurrentMenu(location.pathname.replace('/', ''));
    }
  }, [location]);

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