import React from 'react';

let storage = window.localStorage;

let shoppings;

if(storage.getItem('shopping') === null) {
  shoppings = [];
} else {
  shoppings = storage.getItem('shopping');
  shoppings = JSON.parse(shoppings);
}

export default function TableShopping(props) {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Data da Compra</th>
            <th>Estabelecimento</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {shoppings.map((shopping, index) => (
          <tr>
            <td>{shopping.dateShopping}</td>
            <td>{shopping.establishment}</td>
            <td>{shopping.purchaseAmount}</td>
          </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
}
