// import React, { useContext, useEffect,useState } from "react";
// import { createContext } from "react";

// const Crypto=createContext()
// const CryptoContext=({children})=>{
//     const [currency,setcurrency]=useState("IND");
//     const [symbol,setsymbol]=useState("₹");
//     useEffect(()=>{
//         if(currency === "IND") setsymbol("₹");
//         else if(currency === "USD") setsymbol("$");
//     },[currency]);  
//     return (
//         <Crypto.Provider 
//         value={{currency,symbol,setcurrency}}>
//         {children}
//         </Crypto.Provider>
//     );
// };

// export default CryptoContext;

// export const CryptoState =()=>{
//     return useContext(Crypto);
// }
import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("IND");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "IND") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
