import React, {Component} from 'react';
import '../index.css'

export class AddToCart extends Component {
    render () {
        return (
            <div>
                <button className='btn_add_card'>+</button>
            </div>
        );
    }
}

export default AddToCart;