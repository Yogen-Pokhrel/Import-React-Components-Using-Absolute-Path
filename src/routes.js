import React from 'react';

const Home = React.lazy(() => import('./views/Home/home'));
const Contact = React.lazy(() => import('./views/Contact/contact'));
const routes = [
    { path: '/',  exact: true, name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;