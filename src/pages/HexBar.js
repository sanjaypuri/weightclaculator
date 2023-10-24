import React from 'react';
import './HexBar.css';
import img from '../images/hexbar.png';

export default function HexBar() {
  return (
    <div className="page">
      <div className="img-form">
        <div className="img">
          <img src={img}/>
        </div>
        <div className="form">
          <div className="input-group">
            <label htmlFor="width">Width (A)</label>
            <input type="text" id="width" name="width" />
          </div>
          <div className="input-group">
            <label htmlFor="length">Length</label>
            <input type="text" id="length" name="length" />
          </div>
          <div className="input-group">
            <label htmlFor="pieces">Pieces</label>
            <input type="text" id="pieces" name="pieces" />
          </div>
          <div className="input-group">
            <label htmlFor="price">Kg Price</label>
            <input type="text" id="price" name="price" />
          </div>
          <div className="input-group">
            <button class="btn">Calculate</button>
          </div>
        </div>
      </div>
      <div className="result">Result</div>      
    </div>
  );
}
