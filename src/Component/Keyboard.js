import NumberBtn from './NumberBtn';
import PhoneBtn from './PhoneBtn';


function Keyboard( {numberPhone, onClickPhone ,onClickNumber, onClickClearBtn}) {
    return (
        <form className="keyboard" name="calc">
            <input className="phone-number" type="text" readOnly name="text" value={numberPhone}/>
            <div className="number">
                <NumberBtn number="1" onClick={() => onClickNumber("1")}/>
                <NumberBtn number="2" letters="abc" onClick={() => onClickNumber("2")} />
                <NumberBtn number="3" letters="def" onClick={() => onClickNumber("3")} />
                <NumberBtn number="4" letters="ghi" onClick={() => onClickNumber("4")}/>
                <NumberBtn number="5" letters="jkl" onClick={() => onClickNumber("5")}/>
                <NumberBtn number="6" letters="mno" onClick={() => onClickNumber("6")}/>
                <NumberBtn number="7" letters="pqrs" onClick={() => onClickNumber("7")}/>
                <NumberBtn number="8" letters="tuv" onClick={() => onClickNumber("8")}/>
                <NumberBtn number="9" letters="wxyz" onClick={() => onClickNumber("9")}/>
                <NumberBtn number="*" onClick={() => onClickNumber("*")}/>
                <NumberBtn number="0" letters="+" onClick={() => onClickNumber("0")}/>
                <NumberBtn number="#" onClick={() => onClickNumber("#")}/>
            </div>  
            <PhoneBtn call onClick={onClickPhone}/>
            {numberPhone!=="" &&<span className="btn clear" onClick={onClickClearBtn}><i className="fa-solid fa-delete-left"></i></span>}
        </form>
    )
  }

  export default Keyboard