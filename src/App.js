import './App.css';
import Keyboard from './Component/Keyboard';
import Calling from './Component/Calling';
import React, { useState } from 'react';
import JsSIP from 'jssip';

function App() {
  const [state, setState] = useState({state: "keyboard", session: undefined})
  const [numberPhone, setNumberPhone] = useState("")
  const [isRinging, setIsRingging] = useState("ringing...")
  const host = '2-test1.gcalls.vn'
  const port = '50061'
  const uri = `sip:${numberPhone}@${host}:${port}`
  var socket =  new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
  socket.via_transport = "AUTO"

  try {
      var phone = new JsSIP.UA(
          {
              authorization_user    : null,
              contact_uri           : null,
              display_name          : "Phi Huy",
              instance_id           : null,
              password              : "test1105",
              registrar_server      : null,
              session_timers        : false,
              sockets               : [ socket ],
              uri                   : "105@2-test1.gcalls.vn:50061",
              use_preloaded_route   : false
          });
  }
  catch (error) {
      console.log(
          {
              level   : 'error',
              title   : 'Wrong JsSIP.UA settings',
              message : error.message
          });
  }
  
  phone.on('connecting', () =>
  {
      console.log('UA "connecting" event');
      console.log(phone.configuration)
  });

  phone.on('connected', () =>
  {
      console.log('UA "connected" event');
  });

  phone.on('disconnected', () =>
  {
      console.log('UA "disconnected" event');
  });

  phone.on('registered', () =>
  {
      console.log('UA "registered" event');
  });

  phone.on('unregistered', () =>
  {
      console.log('UA "unregistered" event');

      if (phone.isConnected())
          console.log({ status: 'connected' });
      else
          console.log({ status: 'disconnected' });
  });

  phone.on('registrationFailed', (data) =>
  {
      console.log('UA "registrationFailed" event');

      if (phone.isConnected())
          console.log({ status: 'connected' });
      else
          console.log({ status: 'disconnected' });
  });

  phone.on('newRTCSession', (data) =>
  {

      if (data.originator === 'local')
          return;

      console.log('UA "newRTCSession" event');
  });

	phone.start();

  function handleCancel() {
    console.log("hihi")
    if (state.session) {
      state.session.terminate()
    }
  }
  function handleClickNumber(btn) {
    setNumberPhone(numberPhone + btn)
  }

  function handleClickClearBtn() {
    setNumberPhone(numberPhone.slice(0, -1))
}

  function handleClickPhone() {
    var session = phone.call(uri, 
    {
      pcConfig         : { iceServers: [] },
      mediaConstraints :
      {
        audio : true,
        video : false
      },
      rtcOfferConstraints :
      {
        offerToReceiveAudio : 1,
        offerToReceiveVideo : 1
      }
    })
    session.on('connecting', () =>
    {
      setIsRingging("Connecting")
      console.log('connecting')
    });

    session.on('progress', () =>
    {
      setIsRingging("Ringging...")
      setState({state: 'calling', session})
    });

    session.on('failed', (data) =>
    {
      setState({state: 'keyboard', session})
      setNumberPhone("")
      console.log('failed: ', data)
    });

    session.on('ended', () =>
    {
      setIsRingging("End")
      setState({state: 'keyboard', session})
      setNumberPhone("")
      console.log('ended')

    });

    session.on('accepted', () =>
    {
      setIsRingging("Calling")
      console.log('accepted')
    });
  }

  
  return (
    <React.Fragment>
          {state.state === 'keyboard' && 
            <div className="container">
              <Keyboard numberPhone = {numberPhone} onClickPhone = {handleClickPhone} onClickNumber = {handleClickNumber} onClickClearBtn = {handleClickClearBtn} />
            </div>}

          {state.state === 'calling' && 
            <div className="container liner-gradient">
              <Calling numberPhone = {numberPhone} onCancel = {handleCancel} status = {isRinging}/>
            </div>}
    </React.Fragment>
  )
}

export default App;