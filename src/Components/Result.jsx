
import styled from "@emotion/styled";


const ContainerResult = styled.div`
  background-color: #69a4fb;
  display: block;
  width: 100%;
  border-radius: 10px;
  margin-top: 2rem;
  border: 2px solid black;
  text-align: start;
`;
const ParagraphResult = styled.p`
  padding: 0.3rem;
  color: #fff;
  font-family: "Bebas Neue", cursive;
  font-size: 18px;
`;


function Result({ result }) {
    
  if (Object.keys(result).length === 0) return null;
  
  return (
    <div>
      <ContainerResult className="resultado">
        <ParagraphResult className="precio">
          PRICE: <span>{result.PRICE}</span>
        </ParagraphResult>

        <ParagraphResult>
          PRICE OPEN DAY: <span>{result.OPENDAY}</span>{" "}
        </ParagraphResult>

        <ParagraphResult>
          PRICE HIGHDAY: <span>{result.HIGHDAY}</span>
        </ParagraphResult>

        <ParagraphResult>
          PRICE LOWDAY: <span>{result.LOWDAY}</span>
        </ParagraphResult>
      </ContainerResult>
    </div>
  );
}

export default Result;
