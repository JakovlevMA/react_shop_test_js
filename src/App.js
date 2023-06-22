import './index.css'
import React from "react";
import FullProducts from './components/FullProducts'
import Header from "./components/Header";

class App extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      orders: [],
      currentItems: [],
      products: [{
        category: 'T-shorts',
        image: 'https://winpix.ru/content/images/preview/photo%20souvenirs/t-shirt/futbolka-muszh-black.jpg',
        price: 2.99,
        title: 'Прикольная футболка',
        id: 1,
        colour: 'Black',
        details: 'Данная футболка предназначена для сигма мужчин'
      }, {
        category: 'Shorts',
        image: 'https://basket-03.wb.ru/vol314/part31429/31429521/images/big/1.jpg',
        price: 1.99,
        title: 'Прикольные шорты',
        id: 2,
        colour: 'Black',
        details: 'Данные шорты предназначены для сигма мужчин'
      }, {
        category: 'Jackets',
        image: 'https://files.gifts.ru/reviewer/tb/14/02898312_2_500.jpg',
        price: 25.99,
        title: 'Прикольная куртка',
        id: 3,
        colour: 'Black',
        details: 'Данная куртка предназначена для сигма мужчин'
      }]
    }
  }
  render () {
    return (
        <div>
          <Header/>
          <FullProducts products={this.state.products}/>
        </div>
    )
  }
}

export default App;
