import React from 'react';
import { Route,Switch } from 'react-router';
import ErrorPage from '../components/404Page';
import AddCarPage from '../components/AddCarPage';
import AnnouncementsPage from '../components/AnouncementsPage';
import ComplainPage from '../components/ComplainPage';
import FeedBackPage from '../components/FeedbackPage';
import Header from '../components/Header';
import OrderPage from '../components/OrderPage';
import ProductPage from '../components/ProductPage';


const AppRouter = () => (
    <div>
        <Header/>
        <Switch>
            <Route path="/" component = {ProductPage} exact = {true}/>
            <Route path = "/addCar" component = {AddCarPage}/>
            <Route path = "/orders" component = {OrderPage} />
            <Route path = "/complains" component = {ComplainPage} /> 
            <Route path = "/announcements" component = {AnnouncementsPage} />
            <Route path = "/feedbacks" component = {FeedBackPage}/>
            <Route component = {ErrorPage}/>
        </Switch>
    </div>
);

export default AppRouter;