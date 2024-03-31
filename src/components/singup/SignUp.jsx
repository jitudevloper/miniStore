import React, { useState, useEffect } from 'react';
import './signUp.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    bYear: '',
    bMonth: '',
    bDay: '',
    country: '',
    picture: null,
    idBack: '',
    idFront: '',
    category: [],
    password: '',
  });
  const [errors, setErrors] = useState({})

  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const categories = ['MOBILE', 'vivo', 'I Phone', 'Mi'];
    setCategoryOptions(categories);
  }, []);

  const handleCategory = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    let updatedCategories = [...formData?.category];

    if (!updatedCategories.includes(value)) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter((category) => category !== value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedCategories
    }));

    // const validationError = {}

    // if (!formData.category.trim()) {
    //   validationError.category = "Category is required";
    // }
    // setErrors(validationError)

  };



  const handleChange = (e) => {
    // console.log(e)
    e.preventDefault();
    const { name, value, type } = e.target;
    const val = type === 'file' ? e.target.files[0] : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val
    }));

    const validationError = {}

    if (!formData.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = "Email is not a valid";
    }

    if (!formData.first_name.trim()) {
      validationError.first_name = "First Name is required";
    }
    if (!formData.last_name.trim()) {
      validationError.last_name = "Last Name is required";
    }

    if (!formData.gender.trim()) {
      validationError.gender = "Gender is required";
    }
    if (!formData.bYear.trim()) {
      validationError.bYear = "Birth Year is required";
    }
    if (!formData.bMonth.trim()) {
      validationError.bMonth = "Birth Month is required";
    }
    if (!formData.bDay.trim()) {
      validationError.bDay = "Birth Day is required";
    }
    if (!formData.country.trim()) {
      validationError.country = "Country is required";
    }
    if (!formData.idBack.trim()) {
      validationError.idBack = "Id Back is required";
    }
    if (!formData.idFront.trim()) {
      validationError.idFront = "ID FRONT is required";
    }


    if (!formData.password.trim()) {
      validationError.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationError.password = "Password should be at least 6 characters";
    }

    setErrors(validationError)
    if(Object.keys(validationError).length === 0) {
      // alert("Form Submitted Successfully")
    }
  };

  const handleFile = async (e) => {
    e.preventDefault()
    // console.log(e.target)
    const validationError = {}
    if (!formData.picture) {
      validationError.picture = "Please select a picture";
    }
    setErrors(validationError)
    
    try {
      const response = await axios.post(' http://18.209.67.211:5214/image',{
        imageUpload: e.target.files[0]
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setFormData((prevState) => ({
        ...prevState,
        picture: response?.data
      }));
      // setFormData({ ...formData, [e.target.name]: response?.data?.imageUrl })
      console.log(response,'img response');
      alert("Form Picture  Successfully");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to submit the Picture. Please try again later.");
    }
    
  }

  // console.log(formData, " ======after image= ")


  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData, "Api");
    try {
      const response = await axios.post(' http://3.90.31.196:2414/register ', {
        email: formData?.email,
        first_name: formData?.first_name,
        last_name: formData?.last_name,
        gender: formData?.gender,
        bYear: formData?.bYear,
        bMonth: formData?.bMonth,
        bDay: formData?.bDay,
        country: formData?.country,
        idBack: formData?.idBack,
        idFront: formData?.idFront,
        category: formData?.category,
        password: formData?.password,
        picture: formData?.picture
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // console.log(response);
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  console.log(formData, "from data")

  return (
    <>
      {/* onSubmit={handleSubmit} */}
      <form className="signup-form" >
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
          {errors?.email && <span className="error">{errors?.email}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <span className="error">{errors.first_name}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <span className="error">{errors.last_name}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Birth Year"
            name="bYear"
            value={formData.bYear}
            onChange={handleChange}
          />
          {errors.bYear && <span className="error">{errors.bYear}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Birth Month"
            name="bMonth"
            value={formData.bMonth}
            onChange={handleChange}
          />
          {errors.bMonth && <span className="error">{errors.bMonth}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Birth Day"
            name="bDay"
            value={formData.bDay}
            onChange={handleChange}
          />
          {errors.bDay && <span className="error">{errors.bDay}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="ID BACK"
            name="idBack"
            value={formData.idBack}
            onChange={handleChange}
          />
          {errors.idBack && <span className="error">{errors.idBack}</span>}
        </div>
         <div>
          <input
            type="text"
            placeholder="ID FRONT"
            name="idFront"
            value={formData.idFront}
            onChange={handleChange}
          />
          {errors.idFront && <span className="error">{errors.idFront}</span>}
        </div> 
        
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleCategory}
            multiple
          >
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div>
          <input
            type="file"
            name="picture"
            onChange={handleFile }
          />
          {errors.picture && <span className="error">{errors.picture}</span>}
        </div>

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
