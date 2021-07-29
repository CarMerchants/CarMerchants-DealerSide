import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReportFormRouter from './forms/ReportFormComponents/ReportFormRouter';

const Report = () => (
    <div>
        <HashRouter>
            <ReportFormRouter />
        </HashRouter>
    </div>
);

export default Report;