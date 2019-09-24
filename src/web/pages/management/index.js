import React from 'react';
import ReactDOM from 'react-dom';
import '../../common/css/global.scss';
import {BrowserRouter} from 'react-router-dom';
import Routers from './router';
import * as serviceWorker from '../../../serviceWorker';

const mountNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Routers />
    </BrowserRouter>,
    mountNode
);

serviceWorker.unregister();
