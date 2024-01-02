import React, { useState } from 'react';

const DonationForm = ({ addDonation }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [donationType, setDonationType] = useState('');
  const [dateDonated, setDateDonated] = useState('');
  const [address, setAddress] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'gender') {
      setGender(value);
    } else if (name === 'donationType') {
      setDonationType(value);
    } else if (name === 'dateDonated') {
      setDateDonated(value);
    } else if (name === 'address') {
      setAddress(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() &&
      gender.trim() &&
      donationType.trim() &&
      dateDonated.trim() &&
      address.trim()
    ) {
      const donation = {
        name,
        gender,
        donationType,
        dateDonated,
        address,
      };
      addDonation(donation);
      setName('');
      setGender('');
      setDonationType('');
      setDateDonated('');
      setAddress('');
    }
  };

  return (
    <div className="donation-form">
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="donation-input"
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleInputChange}
        />
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleInputChange}
            />
            Female
          </label>
        </div>
        <select
          className="donation-input"
          name="donationType"
          value={donationType}
          onChange={handleInputChange}
        >
          <option value= "">Select donation type</option>
          <option value="school supplies">School Supplies</option>
          <option value="cash">Cash</option>
          <option value="clothes">Clothes</option>
          <option value="clothes">Food</option>
         
        </select>
        <input
          className="donation-input"
          type="text"
          name="dateDonated"
          placeholder="Enter date donated"
          value={dateDonated}
          onChange={handleInputChange}
        />
        <input
          className="donation-input"
          type="text"
          name="address"
          placeholder="Enter address"
          value={address}
          onChange={handleInputChange}
        />
        <button className="add-donation-btn" type="submit">
          Add Donation
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
