import { useState } from "react";
import styled from "@emotion/styled";
const Label = styled.label`
    width: 100%;
    display: block;
    font-family: "Bebas Neue", cursive;
    color: white;
    font-weight:30px;
    font-size: 30px;
  `;
  const TagSelect = styled.select`
    -webkit-appearance: none;
    display: block;
    width: 100%;
    font-size: 18px;
    font-family: "Bebas Neue", cursive;
    padding: 0.5rem;
    border-radius:10px;
    border:none;
  `;

const useCountryCurrency = (initialState, options) => {
  

  const [countryState, updateState] = useState(initialState);

  const CountrySelect = () => (
    <div>
      <Label>Choose your currency</Label>
      <TagSelect onChange={(e) => updateState(e.target.value)} value={countryState}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </TagSelect>
    </div>
  );

  return [countryState,CountrySelect];
};

export default useCountryCurrency;
