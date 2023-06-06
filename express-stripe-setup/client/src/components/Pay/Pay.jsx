import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

// PUBLISH KEY
const KEY = "pk_test_51LVqroEVdPIrp1KSs2BQ7wwznOgBXtGwVQzIsPQ8QOZTu6KpJ9CqJ5HKS7hmEfNzRCccVKP5sf14uikUPy5YlT8p00yJu5VYlQ";

export default function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/checkout/payment`,
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate('/success')
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest()
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        {stripeToken ? (<span>Proccessing, Please wait...</span>) : (
      <StripeCheckout
        name="Tsvetomir's shop"
        image="https://img.freepik.com/premium-vector/gradient-payment-logo-design_269830-899.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay now
        </button>
      </StripeCheckout>
        )}
    </div>
  );
}
