import React from 'react';

import Header from './../../Header';
import Label from './../../Label';
import Input from './../../Input';
import ButtonSubmit from './../../Button/Submit';

class FormShopping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopping: {
        dateShopping: '',
        establishment: '',
        purchaseAmount: ''
      }
    };
  }

  handlerInputChange = (e) => {
    let shoppingState = this.state.shopping;
    shoppingState[e.target.id] = e.target.value;

    this.setState({
      shopping: shoppingState
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let shoppingState = this.state.shopping;
    let storage = window.localStorage;
    let listShopping = JSON.parse(storage.getItem('shopping')) || []; 

    listShopping.push(shoppingState);
    storage.setItem('shopping', JSON.stringify(listShopping));

    shoppingState.dateShopping = '';
    shoppingState.establishment = '';
    shoppingState.purchaseAmount = '';

    this.setState({
      shopping: shoppingState
    });

    window.location.reload();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <Header text="Cadastrar Compra" />

        <Label text="Data da Compra" />
        <Input id="dateShopping" type="date" placeholder="Digite a data" onChange={this.handlerInputChange} />

        <Label text="Estabelecimento" />
        <Input id="establishment" type="text" placeholder="Digite o estabelecimento" onChange={this.handlerInputChange}/>

        <Label text="Valor da compra" />
        <Input id="purchaseAmount" type="text" placeholder="Digite o valor da compra" onChange={this.handlerInputChange} />

        <ButtonSubmit text="Cadastrar Compra" />
      </form>
    );
  }
}

export default FormShopping;
