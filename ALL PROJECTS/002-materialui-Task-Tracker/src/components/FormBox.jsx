import {useState} from 'react'
import Header from './Header'
import InputText from './InputText'

const FormBox = () => {

    const [show, setShow] = useState(false);
    const [buton,setButon] = useState(true)

    // BUTTON CHANGE
    const handleButtonClick = () => {
        setShow(!show)
      }
    
      // INPUT TEXT VALUE
      const handleChangeInput = (e) => {
        console.log(e.target.value);
    }

    // BUTTON SUBMIT
    const onClickButtonInput = () => {
        setButon(buton)
       
    }

  return (
    <div>
        <Header handleButtonClick={handleButtonClick}/>
        {show && <InputText handleChangeInput={handleChangeInput} onClickButtonInput={onClickButtonInput}/>  }
        
    </div>
  )
}

export default FormBox