import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

export const GetInTouchSection = () => {
{
    /*
        add scheduling functionality to getInTouchItem1
    */
}
  let [formInfo, setFormInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const formSchema = Yup.object({
    first_name: Yup.string().required("Must include a first name."),
    last_name: Yup.string(),
    email: Yup.string()
      .email("invalid email format")
      .required("Must be a valid email"),
    message: Yup.string(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formSchema
        .validate(formInfo, { abortEarly: false })

        .then((result) => {
          console.log(result);
          emailjs.send(
            process.env.REACT_APP_TEST_SERVICE_ID,
            process.env.REACT_APP_TEST_CONSULTATION_TEMPLATE_ID,
            formInfo,
            process.env.REACT_APP_TEST_USER_ID
          );
          setFormInfo({
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          });
          toast.success("Thanks! We got your message!");
        });
    } catch (error) {
      console.log(error.inner);
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      // toast.error('Sorry, your message didn\'t go through. Please try again.');
    }
  };
  return (
    <section id="getInTouchSection">
      <div id="consultation">
        <div id="getInTouchItem1">
          <div >
            <h2>Get in Touch</h2>
          </div>
          <div>
            <p>Schedule your free phone consultation </p>
            <p>Consultations are usually done each Friday from 11am to 4pm EST. <br/>Each consultation lasts around 15 minutes.</p>
          </div>
        </div>
        <div id="getInTouchItem2">
            <h2>Let us setup your free consultation</h2>
          <form>
            <fieldset id="form">
              <div className="formFields nameFields">
                  <div className="nameFieldInputs">
                    <label>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="firstNameInput"
                        value={formInfo.first_name}
                        onChange={handleChange}
                      ></input>

                    {errors.first_name && (
                      <div className="error">{errors.first_name}</div>
                    )}
                  </div>
                  <div className="nameFieldInputs">
                    <label>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="lastNameInput"
                        value={formInfo.last_name}
                        onChange={handleChange}
                      ></input>
                  </div>
              </div>
              <div className="formFields">
                <label>Email *</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="emailInput"
                    value={formInfo.email}
                    size="43"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              {errors.email && <div className="error">{errors.email}</div>}
              <div className="formFields">
                <label>Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="messageInput"
                  autoCapitalize="on"
                  autoComplete="on"
                  autoCorrect="on"
                  spellCheck="true"
                  wrap="virtual"
                  rows="3"
                  cols="80"
                  value={formInfo.message}
                  onChange={handleChange}
                ></textarea>
              </div>
                <button id="consultationSubmitBtn" onClick={handleSubmit}>
                  Send
                </button>
            </fieldset>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};
