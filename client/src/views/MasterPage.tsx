import { Menu } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Link, Outlet } from 'react-router-dom';

export const MasterPage = () => {
  return (
    <Layout>
      <Sider breakpoint='lg' collapsedWidth='0'>
        <Menu theme='dark'>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/about'>About</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
