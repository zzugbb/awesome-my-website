import React, { } from 'react';
import HelloImg from '../asset/img/HelloImg.gif';
import { Image, Divider } from 'antd';
import logo from '../asset/img/logo3.png';
import 'gitalk/dist/gitalk.css'
import GitalkComponent from "gitalk/dist/gitalk-component";

function About() {

  return (
    <div className='main-div'>
      <div className='main-div-left' style={{textAlign:'center'}}>
        <Image  
          width={280} 
          src={logo} 
          align="center" 
          alt="awesome-my-website"
          preview={false}
        />
        <h2 style={{margin: '10px 0'}}>awesome-my-website</h2>
        <Divider></Divider>
        <p style={{lineHeight: '28px', color:'#666'}}>Learning, Work, Entertainment, Life, My Star, Catch all in one draft.</p>
      </div>
      <div className='main-div-right' style={{textAlign: 'center', background:'#fff', paddingTop:'80px',marginLeft:'40px'}}>
        <Image 
          src={HelloImg}
          preview={false}
        />
        <p style={{marginTop:'50px'}}>
          <img alt="language" src="https://img.shields.io/badge/language-react-red" style={{marginRight:'10px'}}/>
          <img alt="heart" src="https://img.shields.io/badge/BUILT_WITH_%E2%9D%A4%EF%B8%8F%20-0087ed" style={{marginRight:'10px'}}/>
          <a href='https://github.com/zzugbb' target="_blank" rel="noreferrer">
            <img alt="github" src="https://img.shields.io/badge/Catch_Me-Github-%23FC6D26?logo=github"/>
          </a>
        </p>
        <div style={{margin:'50px'}}>
          <GitalkComponent options={{
            clientID: "your clientID",
            clientSecret: "your clientSecret",
            repo: 'awesome-my-website',
            owner: 'zzugbb',
            admin: ['zzugbb'],
            id: 'awesome-my-website-about'
          }} />
        </div>
      </div>
    </div>
  );
}

export default About;