import React from 'react';

const DonationList = ({ donations, updateDonation, deleteDonation }) => {
  const handleUpdate = (index) => {
    updateDonation(index);
  };

  const handleDelete = (index) => {
    deleteDonation(index);
  };

  return (
    <div className="donation-list">
      <h2 className="donation-list__title">Donation List</h2>
      <ul className="donation-list__items">
        {donations.map((donation, index) => (
          <li key={index} className="donation-item">
            <div className="donation-info">
              <span className="donation-info__item">
                <strong>Name:</strong> {donation.name}
              </span>
              <span className="donation-info__item">
                <strong>Gender:</strong> {donation.gender}
              </span>
              <span className="donation-info__item">
                <strong>Type of Donation:</strong> {donation.donationType}
              </span>
              <span className="donation-info__item">
                <strong>Date Donated:</strong> {donation.dateDonated}
              </span>
              <span className="donation-info__item">
                <strong>Address:</strong> {donation.address}
              </span>
            </div>
            <div className="donation-actions">
              <button
                className="donation-actions__button update-button"
                onClick={() => handleUpdate(index)}
              >
                Update
              </button>
              <button
                className="donation-actions__button delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;
