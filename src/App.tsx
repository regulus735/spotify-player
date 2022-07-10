import React from 'react';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const code = new URLSearchParams(window.location.search).get('code')!;

const App: React.FC = () => {
   return code ? <Dashboard code={code} /> : <Login />;
};

export default App;
