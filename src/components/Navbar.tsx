import React, { useState } from 'react';
import { Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getItem } from '../utils/sessionStorage';
import { configData, menuNames } from '../utils/configs';

const menusInitial = [menuNames.signIn, menuNames.signUp];
const menusForLoggedIn = [menuNames.dash, menuNames.profile, menuNames.signOut];

const Navbar = (): JSX.Element => {
  const { Title } = Typography;
  const [accessData, setAccessData] = useState(
    getItem(configData.accessTokenKeyName)
  );

  const renderMenus = () => {
    const isLoggedIn = _.isEmpty(accessData);
    let menus = [...menusInitial];
    if (!isLoggedIn) {
      menus = [...menusForLoggedIn];
    }
    return menus.map((menu) => (
      <Menu.Item key={menus.indexOf(menu)}>
        <Link to={`/${menu}`}>{menu.toUpperCase()}</Link>
      </Menu.Item>
    ));
  };

  return (
    <>
      <Title className="logo">Foody Recipe App</Title>
      <Menu mode="horizontal" style={{ float: 'right' }}>
        {renderMenus()}
      </Menu>
    </>
  );
};

export default Navbar;
