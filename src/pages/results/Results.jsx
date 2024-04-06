import React from 'react';
import './index.scss';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const Results = () => {
  const data = {
    labels: ['Missing Words', 'Extra Words'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [1, 1],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className='container1'>
      <div className='header'>
        <h1>Conversion complete :</h1>
      </div>
      <h1 className='title'>Converted Text:</h1>
      <p>
        the still smell of old bearnings it takes heat to bring out the order a
        cold storage find with himTales of pastor are my favourite its just for
        food is the hard cross him
      </p>
      <div className='header'>
        <h1>Similarity...</h1>
      </div>
      <h1 className='title'>Uploaded Text:</h1>
      <p>
        the still smell of old bearnings it takes heat to bring out the order a
        cold storage find with himTales of pastor are my favourite its just for
        food is the hard cross him
      </p>
      <div className='header1'>
        <h1 style={{ fontSize: '1.3rem' }}>0.9235</h1>
      </div>
      <h1 className='title'>Missing words:</h1>
      <p>steal</p>
      <h1 className='title'>Extra words:</h1>
      <p>cross</p>
      <h1 className='title'>Pie Chart:</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '30%', height: '30%' }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default Results;
