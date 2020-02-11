// this is a preview collection component when the user clicks on shop and he should get a preview of collections which are all  having 
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collectionPreview.styles.scss';

//functional component
const CollectionPreview = ({title, items}) => (
    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items.filter((item, index) => index < 4) //this is to display only four from the collection
                    .map(({id, ...otherItemProps})=> (
                    <CollectionItem key = {id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)
export default CollectionPreview;