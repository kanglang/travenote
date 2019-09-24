
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
// import Mengban from './mengban/Mengban';
import HeaderContent from './header/Header';
import FooterContent from './footer/Footer';

import Routers from './routerMap';
import Exception from './exception404/Exception404';
const { Content, } = Layout;
class App extends Component {
    render() {
        return (
            <Layout style={{ height: "100%", position: "relative" }}>
                <HeaderContent />
                <Content style={{ minHeight: "auto" }}>
                    <Switch>
                        {
                            Routers.map((item, index) => {
                                return <Route exact path={item.path} component={item.component} key={index} />
                            })
                        }
                        <Route component={Exception} />
                    </Switch>
                </Content>
                <FooterContent />
            </Layout>
        )
    }
}
export default App;