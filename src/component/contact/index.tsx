import React from "react";
import "./index.css";
interface Heroprop {}

const Contact: React.FC<Heroprop> = (props) => {
  const {} = props;
  return (
    <>
      <div className="container2" id="contact">
        <h1>Contact</h1>
        <br />
        <br />
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <br />
        <p className="Adress">
          Catering Service, 42nd Living St, 43043 New York, NY
        </p>
        <br />
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <br />
        <form action="" target="_blank">
          <input
            className="input p"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="input p"
            type="number"
            name=""
            id=""
            placeholder="How many people"
          />
          <input className="input p" type="datetime-local" name="" id="" />
          <input
            className="input p"
            type="text"
            name=""
            id=""
            placeholder="Messge / special riquierment"
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};
export default Contact;
