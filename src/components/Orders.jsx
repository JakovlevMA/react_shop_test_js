import React, {Component} from 'react';
import '../index.css'
export class Orders extends Component {
    render () {
        return (
            <div className='order'>
                <div className='card_order' key={this.props.orders.id}>
                    <img src={this.props.orders.image} alt="//" className='card_img_order'/>
                    <h3 className='title_order'>{this.props.orders.title}</h3>
                    <p className='price_order'>{this.props.orders.price}</p>
                </div>
            </div>
        );
    }
}

export default Orders;