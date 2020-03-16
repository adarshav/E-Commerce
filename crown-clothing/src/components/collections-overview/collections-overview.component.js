import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import selectShopData from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import CollectionPreview from '../previewCollection/collectionPreview.component';

const CollectionsOverview = ({ collections }) => (
    <div className = 'collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key = {id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(CollectionsOverview);