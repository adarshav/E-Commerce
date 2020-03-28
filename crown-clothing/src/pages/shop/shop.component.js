//As the shop page changes according to the cases it should be class component
import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) =>  (
    <div className = 'shop-page'>
        <Route exact path = '/shop' component = {CollectionsOverview} />
    </div>
)

export default ShopPage;