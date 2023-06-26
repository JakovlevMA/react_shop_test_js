import React, {useState} from 'react';
import '../index.css'
import { FaShoppingBasket } from 'react-icons/fa';

const Header = () => {
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

                        </div>
                    )}
            </div>
        </header>
    );
};

export default Header;