import React from "react";

export default function Success() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          padding: "40px",
          backgroundColor: "green",
          color: "white",
          fontSize: "3rem",
          width: "20%",
          borderRadius: 50,
          fontWeight: 700,
        }}
      >
        Success
      </h1>
      .<h3>Your order is not being prepared. Thank you for choosing us!</h3>
    </div>
  );
}
