import React from 'react'
import Get from './fetch';

function App() {
  return (
    <div>
      <Get url={`http://localhost:7070/data`} title={'Успешное получение данных - '} />
      <Get url={`http://localhost:7070/error`} title={'Получение 500 ошибки - '} />
      <Get url={`http://localhost:7070/loading`} title={'Индикатор загрузки - '} />
    </div>
  );
}

export default App;