import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';
import { useMemo } from 'react';

const Home = () => {
  const { state } = useContextGlobal();
  const data = useMemo(() => state.data, [state.data]);

  return (
    <main className={`Home ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(dentist => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </main>
  );
}

export default Home