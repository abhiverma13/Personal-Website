import { useEffect } from "react";

const ContactMe = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Contact Me";
  }, []);

  return (
    <div>ContactMe</div>
  );
}
 
export default ContactMe;