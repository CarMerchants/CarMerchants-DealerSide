import React from 'react';
import { HashRouter } from 'react-router-dom';
import FeatureSpecsFormRouter from './forms/FeaturesSpecsForm/FeaturesSpecsFormRouter';

const Feature_specs = () => (
    <div>
        <HashRouter>
            <FeatureSpecsFormRouter />
        </HashRouter>
    </div>
);

export default Feature_specs;