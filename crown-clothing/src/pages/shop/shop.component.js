//As the shop page changes according to the cases it should be class component
import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/previewCollection/collectionPreview.component'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
            // the huge js file has been cornered[put in a seperate file], because the main shop pagelooks hassle
        }
    }
    render() {
        const {collections} = this.state;
        return(
            <div className = 'shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default ShopPage;