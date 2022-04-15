import React from "react";
import "./App.css";
import TextField from '@material-ui/core/TextField';

export default function Mainpage() {
  return (
    <>
      <nav class="navbar">
        <img src="ww.jpeg" alt="Logo" width="60" height="60" />
        <div class="logo">Zetgo</div>
        <img src="menu.png" alt="Logo" width="40" height="40" />
      </nav>
      <br />
      <div class="zetgodes">
        Zetgo — amazing hostel for the free spirited traveler
      </div>
      <br />
      <div class="zetgobord"></div>
      <div class="zetgomat">
        Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
        nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
      </div>
      <br />
      <div class="card">
        <div class="form">
          <h3>Check In</h3>         
          <TextField
            class="icon"
            id="date"
            label=""
            type="date"
            InputLabelProps={{
              
            }}
          />
          <br/>
          <hr/>
          <br/>
          <h3>Check Out</h3>
          <TextField
            id="date"
            label=""
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <br/>
          <hr/>
          <br/>
          <h3>Guest</h3>
          <TextField
            id="number"
            label=""
            type="number"
            defaultValue="1"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <br/>
          <button class="button">
              Search
         </button>
          </div>
        </div>
        <div />
        
      ){"}"}
    </>
  );
}
