import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageRoutes from './routes';
import { GlobalStyle } from './assets/styles/global';

const App: React.FC = () => (
    <>  
        <Router>
            <GlobalStyle />
            <PageRoutes />
        </Router>
    </>
);

export default App;