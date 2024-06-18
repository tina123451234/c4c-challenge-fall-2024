import React, { useState } from 'react';
import ReactDOM from "react-dom/client"

function AddPartnerForm (){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const partnerName = event.target.partnerName;
      const partnerDesc = event.target.partnerDesc;
      const partnerLogo = even.target.partnerLogo;
      setInputs(values => ({...partnerDesc, [partnerName]: partnerDesc, partnerLogo}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Partner Name:
      <input 
        type="text" 
        name="partnerName" 
        value={inputs.partnerName || ""} 
        onChange={handleChange}
      />
      <br/>
      </label>
      <label>Partner Description:
        <input 
          type="text" 
          name="partnerDesc" 
          value={inputs.partnerDesc || ""} 
          onChange={handleChange}
        />
        <br/>

        </label>
        <label>Partner Logo:
      <input 
        type="text" 
        name="partnerLogo" 
        value={inputs.partnerLogo || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>
            Active?
            <input
              type="checkbox"
              name="activity"
              checked={inputs.activity}
              onChange={handleChange}
            />
          </label>
          <br />          
          <br />
        <input type="submit" />
        </form>
    )
}

export default AddPartnerForm;
