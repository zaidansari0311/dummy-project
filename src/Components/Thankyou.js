import React from "react";
import { Link } from "react-router-dom";
import ThankYou from "./thank.jpg";

const Thankyou = () => {
  return (
    <div
      style={{
        textAlign:"center",
        backgroundImage: `url(${ThankYou})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"100vh"
      }}
    >
      <Link style={{ color: "Black" }} as={Link} to="/">
         <h3>Login Now</h3>
      </Link>
    </div>
  );
};

export default Thankyou;
