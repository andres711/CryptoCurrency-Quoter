import axios from "axios";

const requestCryptoCoins = async (saveData)=>{

    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    const request = await axios.get(url);

    saveData(request.data.Data)
}

export default requestCryptoCoins;

