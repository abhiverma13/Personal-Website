import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Home";
  }, []);

  return (
    <div className="gif">
      <p className="title">I am <b>Abhi Verma</b>.</p>
      <p className="subtitle">An aspiring Computer Engineer.</p>
    </div>
  );
}
 
export default Home;