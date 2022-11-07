import styled from "@emotion/styled";
import image from "../cryptomonedas.png";


const Image = styled.img`
max-width:100%;
`

function ComponentImage() {

    return ( 
        <Image src={image} alt="crypto"/>
     );
}

export default ComponentImage;