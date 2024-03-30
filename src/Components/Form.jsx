import { useState } from "react";

const Form = () => {
  const [formContact, setFormContact] = useState({
    fullName: "",
    email: "",
    error: "",
    successMessage: "",
  });

  const handleChange = (e) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nameRegex = /^.{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formContact.fullName) || !emailRegex.test(formContact.email)) {
      setFormContact({ ...formContact, error: "Por favor verifique su información nuevamente", successMessage: ""});
    } else {
      console.log(formContact);
      setFormContact({
        fullName: "",
        email: "",
        error: "",
        successMessage: `Gracias ${formContact.fullName}, te contactaremos cuanto antes vía email`,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formContact.fullName}
          onChange={handleChange}
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formContact.email}
          onChange={handleChange}
        />
        {formContact.error && <p>{formContact.error}</p>}
        {formContact.successMessage && <p>{formContact.successMessage}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;