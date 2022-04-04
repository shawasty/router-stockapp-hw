
import axios from 'axios'


let symbol ='BAC'

// pass symbol as an arguement to be able to destructure it in api
export async function stockData(symbol) {


    try {
        const response = await axios.get (`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_f20e5d1ecf4e4d2aae18433b526f545f`);

        const result = response.data
        console.log('result', result)
        return result
    }
    catch (err) {
        console.log(err);
    }
}
// stockData()
