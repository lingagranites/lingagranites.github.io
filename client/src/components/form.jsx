import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const[username, setUsername] = useState('');
  const[number, setNumber] = useState(0);
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const [input, setInput] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  //   const errors = {};

  //   if (input.name === '') {
  //     errors.name = 'Name is required';
  //   }

  //    if (input.number=== '') {
  //     errors.name = 'Name is required';
  //   }
  
  //   if (input.email === '') {
  //     errors.email = 'Email is required';
  //   } 

  //   return errors;
  // };

  function handleSubmit(e){
    e.preventDefault();

      let data = {
        name : username,
        number : number,
        email : email,
        message : message
      } 

      axios.post('http://localhost:5000/insert', data, {
        headers : {
          "Content-Type" : "application/json"
        }
        
      }).then((res)=>{   
        console.log(res);        
        window.alert('Message sent successfully!');
        setUsername('');
        setNumber('');
        setEmail('');
        setMessage('')

      }).catch((err)=>{
        console.log(err);
        window.alert('Error occurs in sending Message...!!!');
      });

  }

  return (
    <div className="contact_main_div">
      <div className="contact_content_div">
        <div>
          <h1 className="head_text_contact">Contact</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_input_div">
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={input.setUsername} autoComplete="off" name="name" placeholder="Name" className="insideinput" />
          </div>
          <div className="form_input_div">
            <input type="number" onChange={(e)=>{setNumber(e.target.value)}} value={input.setNumber} autoComplete="off" name="number" placeholder="Number" className="insideinput"/>
          </div>
          <div className="form_input_div">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={input.setEmail} autoComplete="off" name="email" placeholder="Email" className="insideinput" />
          </div>
          <div className="form_input_div">
            <input type="text" onChange={(e)=>{setMessage(e.target.value)}} value={input.setMessage} autoComplete="off" name="message" placeholder="Message" className="insideinput"/>
          </div>
          <div className="form_input_div">
            <input type="submit" value="Submit" className="insideinput" style={{backgroundColor: "lightskyblue",cursor:"pointer"}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
