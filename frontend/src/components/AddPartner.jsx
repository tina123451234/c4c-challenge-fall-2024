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
        <input type="submit" />
        </form>
    )
}


export default AddPartnerForm;


<div class="AddPartnerForm">
            <h2 class="subheader">Add a Partner</h2>
            <form class="submission-box" id="partner-form">
                <div class="submission-box-text-inputs">
                    <input type="text" id="partner-name" name="partner-name" placeholder="partner name" size="100" required></input>
                    <br></br>
                    <input type="text" id="partner-logo-src" name="partner-logo-src" placeholder="partner logo source" size="100" required></input>
                    <br></br>
                    <textarea name="partner-desc" id="partner-desc" placeholder="partner description" maxlength="1200" rows="10" cols="100" form="partner-form" required></textarea>
                </div>
                <br></br>
                <input type="checkbox" id="activity" name="activity"></input>
                <label for="activity">active?</label>
                <br></br>
                <input type="submit" id="partner-submit" value="submit"></input>
            </form>
        </div>