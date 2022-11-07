import styled from "@emotion/styled";

const ContainerError = styled.div`
width:100%;
display:block;
background-color:red;
color:white;
text-align:center;
padding:.8rem;
margin-bottom:1rem;
border-radius:10px;
font-size:20px;
`

function Error({message}) {

    return ( 
        <ContainerError>
            {message}
        </ContainerError>
     );
}

export default Error;