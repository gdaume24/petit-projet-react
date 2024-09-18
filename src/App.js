import React from 'react';
import './App.css';
import PaymentStatus from './composants/PaymentStatus/PaymentStatus';
import CarteBleue from './composants/CarteBleue/CarteBleue';
import PaymentButton from './composants/PaymentButton/PaymentButton';

function App() {
  return (
    <div>
      <div className="payment-status">
        <PaymentStatus />
      </div>
      <div class="carte-bleue-div">
        <CarteBleue widthSize="1200px" />
      </div>
      <div class="payment-button">
        <PaymentButton />
      </div>
    </div>

  );
}

export default App;
