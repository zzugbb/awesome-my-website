import React, { useEffect, useState } from 'react';
import { Tag, FloatButton } from 'antd';
import {
  HomeOutlined,
  EyeOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


function FooterLayout() {

  const navigate = useNavigate();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      const startTime = 1699600494654;
      let nowTime = new Date().getTime();
      // 相隔时间总秒数
      let betweenTime = parseInt((nowTime - startTime) / 1000);
      setDay(Math.floor(betweenTime / 86400));
      setHour(Math.floor((betweenTime % 86400) / 3600));
      setMinute(Math.floor(((betweenTime % 86400) % 3600) / 60));
      setSecond(Math.floor(((betweenTime % 86400) % 3600) % 60));
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [])

  const handleClickHome = () => {
    navigate('/');
  }

  return (
    <div className='bottom-div'>
      <p>
        本站已运行<span style={{marginRight:'8px'}}></span>
        <Tag color="magenta">{day}</Tag>天<span style={{marginRight:'8px'}}></span>
        <Tag color="orange">{hour}</Tag>时<span style={{marginRight:'8px'}}></span>
        <Tag color="cyan">{minute}</Tag>分<span style={{marginRight:'8px'}}></span>
        <Tag color="blue">{second}</Tag>秒<span style={{marginRight:'8px'}}></span>
      </p>
      <p>
        <span id="busuanzi_container_site_pv"><EyeOutlined style={{color:'geekblue',marginRight:'5px'}}/>总浏览量&nbsp;
          <Tag color="geekblue"><span id="busuanzi_value_site_pv"></span></Tag>
        </span>
        <span style={{margin:'0 5px'}}></span>
        <span id="busuanzi_container_site_uv"><UserOutlined style={{color:'purple',marginRight:'5px'}}/>总访客数&nbsp;
          <Tag color="purple"><span id="busuanzi_value_site_uv"></span></Tag>
        </span>
      </p>
      <FloatButton.BackTop visibilityHeight={20} style={{bottom:'120px',right:'80px'}}/>
      <FloatButton shape="square" type="primary" style={{bottom:'120px',right: '24px'}} icon={<HomeOutlined />} onClick={handleClickHome}/>
    </div>
  );
}


export default FooterLayout;