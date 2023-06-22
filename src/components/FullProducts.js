import React, {Component} from 'react';
import Item from "./Item";
import '../index.css'

export class FullProducts extends Component {
    render () {
        return (
            <main>
                {this.props.products.map(el => (
                    <Item products={el} />
                ))}
            </main>
        );
    }
}

export default FullProducts;