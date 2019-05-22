import React from 'react';
import {format} from 'date-fns';
const ru = require ('date-fns/locale/ru');

const Main = ({data}) => {
  const today = format (new Date (), 'dddd', {locale: ru});
  const {monday} = data;
  console.log (monday[0]);
  return (
    <section className="app">
      <h1 style={{textTransform: 'uppercase'}}> {today} </h1>
      <ul>
        {/* <li>{monday[0].excesiceName}</li> */}
        {monday.map ((item, index) => {
          return (
            <li key={index} style={{fontSize: 15, padding: 5}}>
              <p># {index + 1}</p>
              <p>
                {item.excesiceName}
              </p>
              <p>
                Повторения: {item.excesiceReiterations}
              </p>
              <p>
                Подходы: {item.excesiceRepeats}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Main;
