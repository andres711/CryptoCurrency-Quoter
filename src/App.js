import styled from "@emotion/styled";
import { useState,useEffect} from "react";
import axios from "axios";

import ComponentImage from "./Components/Image";
import Form from "./Components/Form";
import Result from "./Components/Result";
import Spinner from "./Components/Spinner/Spinner.jsx";


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 80px;
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

function App() {
  const [state, setState] = useState({
    country: "",
    crypto: "",
  });
  const [result, updateResult] = useState({});
  const [loading,setLoading] = useState();

  const {country,crypto} = state;

  useEffect(() => {
    const quote = async () => {
      //evitar la ejecucion por primera vez
      if (country === "" || crypto === "") return;
      setLoading(true)
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${country}`;
      const result = await axios(url);
      const finalResult = result.data.DISPLAY[crypto][country];
      setTimeout(()=>{
        setLoading(false);
        updateResult(finalResult);
      },2000)
      
    };
    quote();
  }, [country, crypto]);

  const component = loading? <Spinner/> : <Result result={result}/>

  return (
    <Container>
      <div>
        <ComponentImage />
      </div>
      <div>
        <Form setState={setState} />
        {component}
      </div>
    </Container>
  );
}

export default App;
