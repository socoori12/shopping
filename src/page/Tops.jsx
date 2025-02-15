// src/pages/Tops.jsx
import React, { useState, useEffect } from "react";
import topsData from '../data/tops.json'; // ✅ JSON 파일 가져오기

function Tops() {
    // const [topsData, setTopsData] = useState([]);

    // useEffect(() => {
    //   fetch("/data/tops.json") // ✅ public 폴더 내 JSON 파일 불러오기
    //     .then(response => response.json())
    //     .then(data => setTopsData(data))
    //     .catch(error => console.error("데이터를 불러오는 중 오류 발생:", error));
    // }, []);
    
  return (
    <div className="page tops">
      <h1>상의</h1>
      <div className="product-grid">
        {topsData.map(item => (
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

export default Tops;
