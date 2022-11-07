import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Error from "./Error";

import useCountryCurrency from "../Hooks/useCountryCurrency";
import useCryptoCurrency from "../Hooks/useCryptoCurrency";

import requestCryptoCoins from "../Helper/cryptoCoins";
import listCountryCoins from "../Helper/countryCoins";

const Header = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 500;
  font-size: 50px;
  margin-top: 10px;
  &::after {
    content: "";
    width: 190px;
    height: 6px;
    background-color: #69a4fb;
    display: block;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #69a4fb;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  transition: background-color 0.3s ease;
  border-radius: 10px;
  :hover {
    background-color: #fbae56;
    cursor: pointer;
  }
`;

function Form({setState}) {

  const [listCryptoCoins, saveListCryptoCoins] = useState([]);
  const [error, updateError] = useState(false);

  useEffect(() => {
    requestCryptoCoins(saveListCryptoCoins);
  }, []);

  const [countryState, CountrySelect] = useCountryCurrency("", listCountryCoins);

  const [cryptoState, CryptoSelect] = useCryptoCurrency("", listCryptoCoins);

  const handleClick = (e) => {
    e.preventDefault();

    if (countryState === "" || cryptoState === "") {
      updateError(true);
      return;
    }

    updateError(false);
    setState({
      country:countryState,
      crypto:cryptoState
    })
  };

  return (
    <div>
      <Header>Quote criptocurrency inmediately</Header>
      <form>
        {error ? <Error message={"Select both fields"}/> : null}
        <CountrySelect />
        <CryptoSelect />
        <Button onClick={handleClick} type="submit">
          Quote
        </Button>
      </form>
    </div>
  );
}

export default Form;
