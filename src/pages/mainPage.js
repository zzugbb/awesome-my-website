import React from 'react';
import { useNavigate } from "react-router-dom";
import { Image } from 'antd';
import aweGif from '../asset/img/awe.gif';
import anGif from '../asset/img/3d.gif';
import an2Gif from '../asset/img/3d2.gif'; 

function MainPage() {

  const navigate = useNavigate();

  const handleClickToMenu = () => {
    navigate('/study');
  }

  return (
    <div className='mainPageDiv'>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'100%'}}>
        <Image 
          src={aweGif} 
          preview={false}
        />
        <div style={{marginTop:30}}>
          <p style={{height:'30px',lineHeight:'30px',color:'#fff',fontSize:'22px',fontWeight:'bold',fontFamily:'fangsong'}}>一个在工作、生活、娱乐的某个阶段, 给过帮助或者使用或者参考的网站书签汇总. </p>
        </div>
        <div className="button-hand" style={{marginTop:70,position:'relative'}}>
          <button onClick={handleClickToMenu}>Click to enter!<div className="hands"></div></button>
          <div style={{position:'absolute', left: '250px', bottom: '-80px'}}>  
            <Image 
              style={{width:300}}
              src={an2Gif} 
              preview={false}
            />
          </div>
        </div>
      </div>
      <div style={{position:'absolute', right: 50, bottom: 50}}>
        <Image 
          style={{width:300}}
          src={anGif} 
          preview={false}
        />
      </div>
    </div>
  );
}

export default MainPage;