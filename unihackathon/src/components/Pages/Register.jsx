import React from 'react'
import '../Pages/Register.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'



function Register() {

    const [studentModal, setStudentModal] = useState(false);

    const [teacherModal, setTeacherModal] = useState(false);

    const toggleStudent = () => {
        setStudentModal(!studentModal)
    }

    const toggleTeacher = () => {
        setTeacherModal(!teacherModal)
    }


 
  return (
  
    <div className='body'>

        <Link to='/'><h1 className='registerh1'>PixelLearn</h1></Link>
        <div className="registration-container">
            
           
        <h2>Registruj se kao: </h2>
        <div className="button-container">
        <button className="registration-button" onClick={toggleStudent}> Student</button>
        <img src="" alt="" />
        <button className="registration-button"  onClick={toggleTeacher}>Učitelj</button></div>
        </div>
 

        {studentModal && (
                <div className="studentRegister">
        
            
            <form>
        <div>
          <label htmlFor="fullName">Ime </label>
          <input
            type="text"
            id="fullName"
            // value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="skola">Skola </label>
          <input
            type="text"
            id="skola"
            // value={skola}
            // onChange={(e) => setSkola(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Sifra </label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="razred">Razred </label>
          <input
            type="number"
            id="razred"
            max={4}
            min={1}
            // value={razred}
            // onChange={(e) => razred(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register </button>
      </form>
        </div>
)} 
   
            
{teacherModal && (
    <div className="studentRegister">
<form>
<div>
<label htmlFor="fullName">Ime </label>
<input
type="text"
id="fullName"
// value={fullName}
// onChange={(e) => setFullName(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="skola">Skola </label>
<input
type="text"
id="skola"
// value={email};
// onChange={(e) => setSkola(e.target.value)};
required
/>
</div>
<div>
<label htmlFor="password">Sifraa </label>
<input
type="password"
id="password"
// value={password};
// onChange={(e) => setPassword(e.target.value)};
required
/>
</div>
<div>
<label htmlFor="razred">Razred </label>
<input
type="number"
id="razred"
max={4}
min={1}
// value={razred};
// onChange={(e) => setRazred(e.target.value)};
required
/>
</div>
<button type="submit">Register </button>
</form>
</div>
)} 

</div>
  );
}
export default Register