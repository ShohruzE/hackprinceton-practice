import { useState, useEffect } from 'react'
import './App.css'

import ResponseAPI from './services/ResponseAPI.js';
import Card from './components/Card';

function App() {

  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [tries, setTries] = useState(3);

  /*
  useEffect(() => {
    getMessages();
  }, [message])
  */

  const getMessages = async () => {
    try {
      const data = await ResponseAPI.getResponse(value);
      setMessage(data);
    }
    catch (error) {
      throw error;
    }
    console.log(message);
    setValue("");
  }

  useEffect(() => {
    const submit = document.getElementById("submit");
    if (tries === 0) {
      submit.disabled = true;
    }
    else {
      submit.disabled = false;
    }
  }, [tries])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setTries(tries => tries - 1);
    getMessages();
  }

/*   useEffect(() => {
    const fetchMessage = async () => {
      const response = await ResponseAPI.getResponse();
      setMessage(response.choices[0].message);
    }
    fetchMessage();
  }, [message]) */

  console.log(value);

  return (
    <>
      <div className="App">

        <div className="container">
          <form onClick={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="submit-container">
              <button id="submit" type="submit">Send</button>
              <p>{tries} free tries remaining</p>
            </div>
          </form>

          <Card content={message} />
        </div>

      </div>
    </>
  )
}

export default App
