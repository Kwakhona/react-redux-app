import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';

const AppRouter = () =>  (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} exact={true} />
        </div>
    </BrowserRouter>
);

export default AppRouter;