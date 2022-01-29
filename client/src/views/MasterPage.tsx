import { Menu } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Link, Outlet } from 'react-router-dom';
import { AuthGuard } from '../components/auth/AuthGuard';

export const MasterPage = () => {
  return (
    <AuthGuard>
      <Layout>
        <Sider breakpoint='lg' collapsedWidth='0'>
          <Menu theme='dark'>
            <Menu.Item key='1'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/about'>About</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/demos/demo'>Demo</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </AuthGuard>
  );
};
