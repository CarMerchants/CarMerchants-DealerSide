import React from 'react';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import AddCarFormRouter from './AddCarForm/AddCarFormrRouter';
import Header from './AddCarForm/Header';

const AddCarPage = () => (
    <div>
        <HashRouter>
            <AddCarFormRouter />
        </HashRouter>
    </div>
);

export default AddCarPage;