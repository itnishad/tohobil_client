import React from 'react'
import Form from 'react-bootstrap/Form';

const CountryFilter = (props: any) => {

    const handleChange = (event: any)=>{
        props.handleCountry(event.target.value);
    }
    
  return (
    <Form.Select 
            className="mb-4" 
            size="lg" 
            aria-label="Default select example"
            name="category"
            // value={campaign.category}
            onChange={handleChange} 
            required>
              <option value="All">All</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan ">Pakistan </option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Maldives">Maldives</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Nepal">Nepal</option>
              <option value="Sri-Lanka">Sri-Lanka</option>
            </Form.Select>
  )
}

export default CountryFilter;