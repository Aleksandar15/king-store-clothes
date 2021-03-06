  import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jgq1YBmZjuU8im1q0B5wYRKRF3RM9UVIXKnKPFU4OlzA4ki5N23lGugXuqI7tsbmSxOICE3OULPBFPvcbYmtueU00DqEnHB0j'

  const onToken = token => {
    axios ({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response =>{
      alert('Payment successful!')
    }).catch(error =>{
      console.log('Payment error: ', error)
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card!'
        );
    })
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name = 'KING Store Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/bcG.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;