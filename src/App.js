import React, { useState } from 'react';
import DonationForm from './components/DonationForm';
import DonationList from './components/DonationList';
import './App.css';


const App = () => {
  const [donations, setDonations] = useState([]);

  const addDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  const updateDonation = (index, updatedDonation) => {
    setDonations((prevDonations) => {
      const newDonations = [...prevDonations];
      newDonations[index] = updatedDonation;
      return newDonations;
    });
  };

  const deleteDonation = (index) => {
    setDonations((prevDonations) => {
      const newDonations = [...prevDonations];
      newDonations.splice(index, 1);
      return newDonations;
    });
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Donation Management System</h1>
        <DonationForm addDonation={addDonation} />
        <DonationList
          donations={donations}
          updateDonation={updateDonation}
          deleteDonation={deleteDonation}
        />
      </div>
    </div>
  );
};

export default App;
