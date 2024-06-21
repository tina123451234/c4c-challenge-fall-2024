import React, { useState } from 'react';
import ReactDOM from "react-dom/client"

function AddPartnerForm() {
    const [inputs, setInputs] = useState({
        partnerName: "",
        partnerDesc: "",
        partnerLogo: "",
        activity: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setInputs(values => ({
            ...values,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
    } 

    return (
        <form class = "AddPartnerForm" onSubmit={handleSubmit}>
            <div class="submission-box-text-inputs">
            <label>
                Partner Name:
                <input 
                    type="text" 
                    name="partnerName" 
                    value={inputs.partnerName} 
                    onChange={handleChange}
                />
                <br/>
            </label>
            <label>
                Partner Description:
                <input 
                    type="text" 
                    name="partnerDesc" 
                    value={inputs.partnerDesc} 
                    onChange={handleChange}
                />
                <br/>
            </label>
            <label>
                Partner Logo:
                <input 
                    type="text" 
                    name="partnerLogo" 
                    value={inputs.partnerLogo} 
                    onChange={handleChange}
                />
                <br/>
            </label>
            <label>
                Active?
                <input
                    type="checkbox"
                    name="activity"
                    checked={inputs.activity}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br />          
            <input type="submit" class= "submission-box" />
        </form>
    )
}

export default AddPartnerForm;
