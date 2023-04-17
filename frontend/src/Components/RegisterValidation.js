function RegisterValidation(values) {
    let errors = {};
  
    if (!values.first_name || values.first_name === '') {
      errors.first_name = 'First name is required';
    } else if (!/^[a-zA-Z]+$/i.test(values.first_name)) {
      errors.first_name = 'First name should only contain alphabets';
    }
  
    if (!values.last_name || values.last_name === '') {
      errors.last_name = 'Last name is required';
    } else if (!/^[a-zA-Z]+$/i.test(values.last_name)) {
      errors.last_name = 'Last name should only contain alphabets';
    }
  
    if (!values.birthdate) {
      errors.birthdate = 'Birthday is required';
    }
  
    if (!values.email || values.email === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
  
    // if (!values.password || values.password === '') {
    //     errors.password = 'Password is required';
    //   } else if (values.password.length < 6 && values.password !== '') {
    //     errors.password = 'Password should be at least 6 characters';
    //   } else {
    //     errors.password = '';
    //   }
    
      
    if (!values.gender) {
      errors.gender = 'Gender is required';
    }
  
    if (!values.height || values.height === '' || values.height <= 0) {
      errors.height = 'Height should be greater than 0';
    }
  
    if (!values.weight || values.weight === '' || values.weight <= 0) {
      errors.weight = 'Weight should be greater than 0';
    }
  
    return errors;
  }
  
  export default RegisterValidation;
  