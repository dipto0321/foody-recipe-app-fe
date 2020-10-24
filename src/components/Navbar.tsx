import React, { useState } from 'react';
import { Menu, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _ from 'lodash';

import { menuNames } from '../configs/common';

import '../styles/Navbar.less';

const menusInitial = [menuNames.signIn, menuNames.signUp];
const menusForLoggedIn = [menuNames.dash, menuNames.profile, menuNames.signOut];

const Navbar = (): JSX.Element => {
  const location = useLocation();
  const { Title } = Typography;
  const [menus, setMenus] = useState([...menusInitial]);

  const renderMenus = () => {
    const isLoggedIn = _.isEmpty({});
    if (!isLoggedIn) {
      setMenus([...menusForLoggedIn]);
    }
    return menus.map((menu) => (
      <Menu.Item key={menus.indexOf(menu)}>
        <Link to={`/${menu}`}>{menu.toUpperCase()}</Link>
      </Menu.Item>
    ));
  };

  return (
    <>
      <Title className="nav__logo">Foody</Title>
      <Menu
        className="nav__menu"
        mode="horizontal"
        selectedKeys={[
          menus.indexOf(location.pathname.replace('/', '')).toString(),
        ]}
      >
        {renderMenus()}
      </Menu>
    </>
  );
};

export default Navbar;
