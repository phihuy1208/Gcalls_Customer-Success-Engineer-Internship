import Button from "./Button"
import PhoneBtn from "./PhoneBtn"

function Calling({numberPhone, onCancel, status }) {

    return (
        <div className="calling">
            <input className="phone-number" type="text" readOnly name="text" value={numberPhone}/>
            <p className="status" >{status}</p>
            <div className="button">
                <Button icon = "fa-solid fa-camera" onClick={ (e) => { e.target.classList.toggle("active") }}/>
                <Button icon = "fa-solid fa-pause" onClick={ (e) => { e.target.classList.toggle("active") }}/>
                <Button icon = "fa-brands fa-bluetooth-b" onClick={ (e) => { e.target.classList.toggle("active") }}/>
                <Button icon = "fa-solid fa-volume-high" onClick={ (e) => { e.target.classList.toggle("active") }}/>
                <Button icon = "fa-solid fa-microphone-slash" onClick={ (e) => { e.target.classList.toggle("active") }}/>
                <Button icon = "fa-solid fa-keyboard" onClick={ (e) => { e.target.classList.toggle("active") }}/>
            </div>  
            <PhoneBtn cancel onClick={onCancel}/>
        </div>
    )
}

export default Calling

// {/* <FontAwesomeIcon icon="fa-solid fa-volume-xmark" /> */}