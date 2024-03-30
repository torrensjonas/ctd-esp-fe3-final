import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContextGlobal();
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setDentista(res.data);
      })
  }, [id]);

  return (
    <div className={`Detail ${state.theme}`}>
      <h1>Detail Dentist</h1>
      {dentista ? (
        <div className="dentist">
          <h2>{dentista.name}</h2>
          <p>Email: {dentista.email}</p>
          <p>Teléfono: {dentista.phone}</p>
          <p>Sitio web: {dentista.website}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default Detail