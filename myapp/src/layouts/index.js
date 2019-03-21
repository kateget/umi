import styles from './index.css';
// import reset from './reset.css';
import {Layout,Menu,Breadcrumb} from 'antd'
// import Home from '../pages/index/home.js'

const {Header,Content,Footer} = Layout

function BasicLayout(props) {
    const {children} = props
    return (
        <div className={styles.normal}>
            {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children } */}
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>,
        </div>
    );
}

export default BasicLayout;
