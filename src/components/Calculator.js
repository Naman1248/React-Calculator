import React,{useState} from 'react'

const Calculator = () => {

    const [input, setInput] = useState('')
    
    const buttons = ["7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".","+","=", "C"];

    const handleClick = (res) => {
        
        
        if(res === "="){
            const result = eval(input);
            console.log(result);
            setInput(result);

        }else if(res === "C"){
            setInput('');
        }else{
            setInput(input + res);
        }

    }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      <div>
        <input type="text" value={input} readOnly />
        <div></div>
      </div>
      <div>
        {
            buttons.map((button) => (
                <button key={button} onClick={() => handleClick(button)}>
                    {button}
                </button>
            ))
        }
        
      </div>
    </div>
  )
}

export default Calculator;