import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState("invisible");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    setVisibility("invisible");
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setVisibility("visible py-4");
  };

  return (
    <div className="p-4">
      <h1>Contact Page</h1>
      <form className="card card-bordered shadow-xl bg-base-300 px-4">
        <div className="form-control">
          <label className="label" for="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            className="input input-bordered"
            name="name"
            onChange={handleInputChange}
          />
          <label className="label" for="email">
            Email address:
          </label>
          <input
            type="email"
            value={email}
            className="input input-bordered"
            name="email"
            onChange={handleInputChange}
          />
          <label className="label" for="message">
            Message:
          </label>
          <textarea
            className="textarea textarea-bordered"
            value={message}
            rows="5"
            name="message"
            onChange={handleInputChange}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary py-2 px-4 mt-4"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <div className="">
            <p className={visibility}>Thank you for your input!</p>
          </div>
        </div>
      </form>
    </div>
  );
}
