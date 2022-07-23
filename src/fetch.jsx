import React from 'react'
import { useState, useEffect } from 'react'

function useJsonFetch(url, opts = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url, opts);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const json = await response.json();
          setData(json);
          setError(null);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url, opts]);
  
    return [data, loading, error];
  }

function Get({ url, title }) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <div>{title}</div>
      {loading && <div>Загрузка...</div>}
      {error && <div>Ошибка:{error} </div>}
      {data && <div>Успех: {data.status}</div>}
    </div>
  );
}

export default Get