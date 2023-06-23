import React, {Component} from 'react';
import '../index.css'
import AddToCart from "./AddToCart";

export class Item extends Component {
    render () {
        return (
            <div className='product'>
                <div className='card_product' key={this.props.products.id}>
                    <img src={this.props.products.image} alt="картинка футболки" className='img_product'/>
                    <h3 className='title_product'>{this.props.products.title}</h3>
                    <p className='price_product'>{this.props.products.price}</p>
                    <AddToCart/>
                </div>

            </div>

        );
    }
}

export default Item;