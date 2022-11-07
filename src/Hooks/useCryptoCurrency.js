import { useState } from "react";

import styled from "@emotion/styled";
const Label = styled.label`
  width: 100%;
  display: block;
  font-family: "Bebas Neue", cursive;
  color: white;
  font-weight: 30px;
  font-size: 30px;
  margin-top:20px;
`;
const TagSelect = styled.select`
  -webkit-appearance: none;
  display: block;
  width: 100%;
  font-size: 18px;
  font-family: "Bebas Neue", cursive;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
`;

const useCryptoCurrency = (initialState,options) => {

  const [cryptoState, updateState] = useState(initialState);

  const cryptoSelect = () => (
    <div>
      <Label>Choose your CryptoCurrency</Label>
      <TagSelect onChange={(e) => updateState(e.target.value)} value={cryptoState}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </TagSelect>
    </div>
  );

  return [cryptoState,cryptoSelect];
};

export default useCryptoCurrency;
