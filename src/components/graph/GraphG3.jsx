import React, { useState, useEffect } from 'react';
import { fetchRTData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './OverallGraph.module.css';

const OverallGraph = ({ data: { Reading } }) => {
  const [realtimeData, setRTData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setRTData(await fetchRTData());
    }
    const interval = setInterval(() => {
      fetchAPI()
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const lineGraph = (
    realtimeData.length
      ?   (
        <Line
          data={{
            labels: realtimeData.map(({ RecordTime }) => RecordTime),
            datasets: [{
              data: realtimeData.map(({ Reading }) => Reading),
              label: "Reading from Sensor",
              borderColor: 'red',
              fill: false,
              borderWidth: '1',
              lineTension: '0',
            }],
          }}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 50,
                }
              }],
              xAxes: [{
                type: 'time',

                time: {
                  unit: 'day',
                },
                ticks: {
                  maxTicksLimit: 24,
                },
              }]
            },
            animation: false,
          }}
      />) : null
  );

  console.log(Reading);
  return (
    <div className={styles.container}>
      {lineGraph}
    </div>
  )
}

export default OverallGraph;