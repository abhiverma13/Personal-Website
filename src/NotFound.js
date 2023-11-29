import { useEffect } from "react";
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = "ERROR - NOT FOUND";
  }, []);

  return (
    <div className="container">
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
 
export default NotFound;