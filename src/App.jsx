import { useState } from 'react'
import './App.css'
import UseCryptoinfo from './Hooks/UseCryptoinfo';
import InputBox from './Components/InputBox';
import useCryptoInfo from './Hooks/UseCryptoinfo';

function App() {
  const [amount, setAmount] = useState("");       
const [crypto, setCrypto] = useState("btc");  
const [fiat, setFiat] = useState("usd");       
const [result, setResult] = useState("");       
  
const cryptoInfo = useCryptoInfo(crypto)

const options = Object.keys(cryptoInfo)

const convert = () =>{
  setResult(amount*(cryptoInfo[fiat]))

}

return (
    <>

   
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">

 
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
    
    <h1 className="text-3xl font-bold text-center text-gray-800">
      Crypto to Fiat converter
    </h1>

  
    <div className="bg-gray-100 p-4 rounded-lg">
      
       <InputBox 
    label="From"
    amount={amount}
    currencyDropdown={options}
    selectedCurrency={crypto}
    onCurrencyChange={(currency) => setCrypto(currency)}
    onAmountChange={(amount) => setAmount(amount)}
/>
    </div>

    
    <div className="bg-gray-100 p-4 rounded-lg">
       {/* Your second InputBox component will go here */}
       <InputBox 
    label="To"
    amount={result}
    currencyDropdown={options}
    selectedCurrency={fiat}
    onCurrencyChange={(currency) => setFiat(currency)}
/>
    </div>

<button 
    onClick={convert}
    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 mt-4"
>
    Convert {crypto.toUpperCase()} to {fiat.toUpperCase()}
</button>

  </div>

</div>
    </>
  )
}

export default App
