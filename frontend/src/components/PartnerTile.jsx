import React, { useEffect, useState } from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
  const Partner = ({ partner, deletePartner }) => {
  return (
    <div className="partner-tile">
      <img className="partnerLogo" src={partner.thumbnailUrl} alt={`${partner.name} logo`} />
      <hr />
      <div className="partnerDescr">
        <h2> {partner.name} </h2>
=        <p className="partner-info">{partner.description}</p>
        <p>{partner.active ? 'Active' : 'Not Active'}</p>
        <button onClick={() => deletePartner(partner.name)}>Delete</button>
      </div>
    </div>
    )
  };
}  

function PartnerList() {
  const [partners, setPartners] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(data => setPartners(data))
  }, []);

  const deletePartner = (partnerName) => {
    fetch(`http://localhost:4000/delete-partner/${partnerName}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Partner deleted successfully') {
          setPartners(prevPartners => {
            const updatedPartners = { ...prevPartners };
          });
        }
      })
    };
}

export default PartnerTile;