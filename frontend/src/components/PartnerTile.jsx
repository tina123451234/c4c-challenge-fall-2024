import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
  const Partner = ({ partner, deletePartner }) => {
  return (
    <div className="partner-tile">
      <img className="partnerLogo" src='' />
      <hr />
      <div className="partnerDescr">
        <h2> {partner.name} </h2>
        <img className ="partner-thumbnail" src={partner.logo} />
        <p className="partner-info">{partner.description}</p>
        <p>{partner.active ? 'Active' : 'Not Active'}</p>
        <button onClick={() => deletePartner(partner.name)}>Delete</button>
      </div>
    </div>
    )
  };
}  

export default PartnerTile;