import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakedb.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td.key === key); 
  return (
        <div className='container text-center'>
         <div className="card mb-3" style={{maxWidth:'540px',margin:'auto'}}>
            <div className="row g-0">
            <div className="col-md-12">
              <img src={ExactIteam[0]?.img} style={{width:'100%'}} className="img-fluid rounded-start" alt="..."/>
              <div className="card-body text-start">
                <h5 className="card-title">{ExactIteam[0]?.title}</h5>
                <p className="card-text">{ExactIteam[0]?.paragraph}</p>
                <h5>Cost: {ExactIteam[0]?.price}</h5>
                <h5>Worker: {ExactIteam[0]?.worker}</h5>
              </div>
            </div>
      </div>
    </div>
  </div>
    );
};

export default ServiceDetails;