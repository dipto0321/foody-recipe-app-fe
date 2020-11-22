import React, { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Typography } from 'antd';

import { menuNames } from '../configs/common';

import '../styles/Navbar.less';

const menusInitial = [menuNames.signIn, menuNames.signUp];
const menusForLoggedIn = [menuNames.dash, menuNames.profile, menuNames.signOut];

const Navbar = (): JSX.Element => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.entities.auth.isAuthenticated
  );
  const { Title } = Typography;
  const [menus, setMenus] = useState([...menusInitial]);

  useEffect(() => {
    if (isAuthenticated) {
      setMenus([...menusForLoggedIn]);
    }
  }, [isAuthenticated]);

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
        {menus.map((menu) => (
          <Menu.Item key={menus.indexOf(menu)}>
            <Link to={`/${menu}`}>{menu.toUpperCase()}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
