import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"

const HomePage = () => {
    const navigate = useNavigate()

const [details, setDetails] = useState(
  {
    name : "",
    roomId : ""
  }
);


const handleChange = (e) => {
    
      const { name, value } = e.target;
      setDetails((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

const handleJoin = useCallback(() => {
    navigate(`/room/${details.roomId}/${details.name}`);
}, [navigate,details.roomId,details.name])

  return (
    <div>
       
       <div className="login-container">

        
        <div className='wapper'> 
        <h1> &#10086; Meet Yeah &#10086; </h1>
        <div className="input-box">
            <input  type="text" 
            placeholder='Enter your name'
            value = {details.name}
            onChange={handleChange}
            required
            name='name'
            />
    </div>

    <div className="input-box">
            <input type="text"
            name = "roomId"
            value = {details.roomId}
            onChange={handleChange}
            required 
            placeholder='Enter the room ID'
            /> 
  </div>

          <button onClick={handleJoin} type='submit'>Join</button>

        </div>
     </div>

    </div>
  )
}

export default HomePage
