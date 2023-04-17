import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterValidation from './RegisterValidation'
import axios from 'axios'



function Register() {

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    birthdate: '',
    email: '',
    password: '',
    gender: '',
    height: '',
    weight: '',
  });
  
  const [errors, setErrors] = useState({})
  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}));
  };
    
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = RegisterValidation(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      axios.post('http://localhost:5000/register', values)
        .then(res => {
          navigate('/')
        })
        .catch(err => console.log(err))
    }
  }
  

  return (
      <div className='d-flex justify-content-center align-items-center'>
        <div className='border p-3 rounded w-25'>
          <form action='' onSubmit={handleSubmit}>
              <div className='mb-3'>
                  <label htmlFor='first_name'><strong>First Name: </strong></label>
                  <input type='text' name='first_name' id='first_name' placeholder='Enter First Name' className='form-control'
                  onChange={handleInput}/>
                  {errors.first_name && <span className='text-danger'>{errors.first_name}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='last_name'><strong>Last Name: </strong></label>
                  <input type='text' name='last_name' id='last_name' placeholder='Enter Last Name' className='form-control'
                  onChange={handleInput}/>
                  {errors.last_name && <span className='text-danger'>{errors.last_name}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='birthdate'><strong>Birthday: </strong></label>
                  <input type='date' name='birthdate' id='birthdate' placeholder='Enter Birthday' className='form-control'
                  onChange={handleInput}/>
                  {errors.birthdate && <span className='text-danger'>{errors.birthdate}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='email'><strong>Email: </strong></label>
                  <input type='email' name='email' id='email' placeholder='Enter Email' className='form-control'
                  onChange={handleInput}/>
                  {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='password'><strong>Password: </strong></label>
                  <input type='password' name='password' id='password' placeholder='Enter password' className='form-control'
                  onChange={handleInput}/>
                  {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='gender'><strong>Gender: </strong></label>
                  <select className='form-control' id='gender' name='gender' value={values.gender} onChange={handleInput}>
                    <option value=''>Select one</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    </select>
                  {errors.gender && <span className='text-danger'>{errors.gender}</span>}
                  </div>


              <div className='mb-3'>
                  <label htmlFor='height'><strong>Height: </strong></label>
                  <input type='number' name='height' id='height' placeholder='Enter Height in cm' className='form-control'
                  onChange={handleInput}/>
                  {errors.height && <span className='text-danger'>{errors.height}</span>}
              </div>

              <div className='mb-3'>
                  <label htmlFor='weight'><strong>Weight: </strong></label>
                  <input type='number' name='weight' id='weight' placeholder='Enter Weight in cm' className='form-control'
                  onChange={handleInput}/>
                  {errors.weight && <span className='text-danger'>{errors.weight}</span>}
              </div>

              <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Create Account</strong></button>
              <p className='mt-3'>Have an account already? <Link to='/' className='w-100 bg-light text-decoration-none'>Login</Link></p>
              
          </form>
        </div>
    </div>
    
  )
}

export default Register
