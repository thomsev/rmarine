import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Default styling for the DatePicker

// Import your CSS file directly
import "./bestilltime.css";

function BestillTime() {
  const [navn, setNavn] = useState("");
  const [adresse, setAdresse] = useState("");
  const [poststed, setPoststed] = useState("");
  const [postnr, setPostnr] = useState("");
  const [telefon, setTelefon] = useState("");
  const [epost, setEpost] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [image, setImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date()); // Use Date object for react-datepicker

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bestill-time-container">
      <h1 className="bestill-time-heading">Bestill Time</h1>
      <form onSubmit={handleSubmit} className="bestill-time-form">
        <div className="bestill-time-form-group">
          <label>
            Navn:
            <input
              type="text"
              value={navn}
              onChange={(e) => setNavn(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Adresse:
            <input
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Poststed:
            <input
              type="text"
              value={poststed}
              onChange={(e) => setPoststed(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Postnr:
            <input
              type="text"
              value={postnr}
              onChange={(e) => setPostnr(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Telefon:
            <input
              type="text"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Epost:
            <input
              type="text"
              value={epost}
              onChange={(e) => setEpost(e.target.value)}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Beskrivelse:
            <textarea
              value={beskrivelse}
              onChange={(e) => setBeskrivelse(e.target.value)}
              className="bestill-time-textarea"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Image:
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="bestill-time-input"
            />
          </label>
        </div>
        <div className="bestill-time-form-group">
          <label>
            Dato:
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bestill-time-datepicker"
            />
          </label>
        </div>
        <button type="submit" className="bestill-time-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BestillTime;
