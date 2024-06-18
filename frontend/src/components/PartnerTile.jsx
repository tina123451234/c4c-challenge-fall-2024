import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
  const Partner = ({ partner, deletePartner }) => {
  return (
    <div className="partnerTile">
      <img className="partnerLogo" src='' />
      <hr />
      <div className="partnerDescr">
        <h2> {partner.name} </h2>
        <img src={partner.logo} style={{ width: '100px', height: '100px' }} />
        <p>{partner.description}</p>
        <p>{partner.active ? 'Active' : 'Not Active'}</p>
        <button onClick={() => deletePartner(partner.name)}>Delete</button>
      </div>
    </div>
    )
  };
}  

export default PartnerTile;