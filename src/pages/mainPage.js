import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

function MainPage() {

  const navigate = useNavigate();

  const handleClickToMenu = () => {
    navigate('/study');
  }

  return (
    <div>
      首页
      <Button onClick={handleClickToMenu}>菜单</Button>
    </div>
  );
}

export default MainPage;