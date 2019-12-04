import React from 'react';

export default function Balance() {
  let storage = window.localStorage;
  let balance = storage.getItem('income');

  return(
    <p>Seu saldo atual é de: R$ {balance}</p>
  );
}
