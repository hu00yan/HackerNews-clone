import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" render={() => <Navigate to="/top" />} exact={true} />
                    <Route 
                        path="/:type"
                        render={({ match }) => {
                            const { type } = match.params;
                            if (!['top', 'new', 'best'].includes(type)) {
                                return <Navigate to="/" />;
                            }
                            return <ShowStories type={type} />;
                        }} component={ShowStories} />
                    <Route component={PageNotFound} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;