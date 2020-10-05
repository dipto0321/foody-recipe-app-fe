import React, { useState } from 'react';
import { Menu, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { getItem } from '../utils/sessionStorage';
import { configData, menuNames } from '../utils/configs';

const menusInitial = [menuNames.signIn, menuNames.signUp];
const menusForLoggedIn = [menuNames.dash, menuNames.profile, menuNames.signOut];

const Navbar = (): JSX.Element => {
  const location = useLocation();
  const { Title } = Typography;
  const [accessData] = useState(getItem(configData.accessTokenKeyName));
  const [menus, setMenus] = useState([...menusInitial]);

  const renderMenus = () => {
    const isLoggedIn = _.isEmpty(accessData);
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
      <Title className="logo">Foody Recipe App</Title>
      <Menu
        mode="horizontal"
        selectedKeys={[
          menus.indexOf(location.pathname.replace('/', '')).toString(),
        ]}
        style={{ float: 'right' }}
      >
        {renderMenus()}
      </Menu>
    </>
  );
};

export default Navbar;
