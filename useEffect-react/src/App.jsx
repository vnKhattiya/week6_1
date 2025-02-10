import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item => {
        setData(item.products);
        console.log(item.products);
      });
  }, [])
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="d-flex row justify-content-center gap-4">
      {
        data.map( i => {
          return(
            <div className="card" style={{ width: '18rem' }}>
            <img src={i.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>{i.price} USD</h6>
                <h5 className="card-title">{i.title}</h5>
                <p className="card-text">{i.description}</p>
                <a href="#" className="btn btn-primary">buy</a>
            </div>
        </div>
          )
        }
        )
      }
      </div>
      </div>
    </div>
  )
}

export default App