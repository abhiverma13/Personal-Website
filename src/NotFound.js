import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "ERROR - NOT FOUND";
  }, []);

  return (
    <div>NotFound</div>
  );
}
 
export default NotFound;