import React, { useState, useEffect } from "react";
import BottomsData from '../data/bottoms.json'; // ✅ JSON 파일 가져오기


const Bottoms = () => {
    return (
        <div className="page Bottoms">
          <h1>상의</h1>
          <div className="product-grid">
            {BottomsData.map(item => (
              <div key={item.id} className="product-card">
                <img src={require(`../img/${item.imageUrl.split('/').pop()}`)} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Bottoms