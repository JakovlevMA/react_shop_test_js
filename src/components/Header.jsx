import React, {useState} from 'react';
import '../index.css'
import { FaShoppingBasket } from 'react-icons/fa';
import Orders from "./Orders";

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Orders key={el.id} orders={el}/>
            ))}
            <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
        </div>
    )
}
const nothingOrders = () => {
    return (
        <div>
            <h2>Товаров нет</h2>
        </div>
    )
}

const Header = (props) => {
    let [showOrder, setShowOrder] = useState(false)
    return (
        <header>
            <div className='nav'>
                <span className='logotype'>Name shop</span>
                <ul className='navigations'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>My profile</li>
                    <li>Reviews</li>
                </ul>
                <FaShoppingBasket className={`btn_cart`} onClick={() => setShowOrder(showOrder = !showOrder)}/>
                    {showOrder && (
                        <div className='modal_cart_orders'>
                            {props.orders.length > 0 ?
                            showOrders(props) : nothingOrders()}
                        </div>
                    )}
            </div>
        </header>
    );
};

export default Header;