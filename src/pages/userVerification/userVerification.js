import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import { UserVerifiRequest } from "../../services/admin.service";
import { useLocation } from "react-router-dom";

const UserVerification = () => {
  const [userValidation, setUserValidation] = useState({
    campaignId:null,
    name:"",
    email:"",
    address:"",
    phone:"",
    documentType:"NID",
    country:"Bangladesh",
    city:"",
    description:""
  });
  const [files, setFiles] = useState({
    photograph: null,
    documentFile: null,
    workImg: null
  });
  const [errorHandel, seterrorHandel] = useState(0);

  const location = useLocation();

  useEffect(()=>{
    setUserValidation({
      ...userValidation,
      campaignId: location.state._id,
      name:location.state.user.name,
      email:location.state.user.email
    });
  },[]);

  const handleChange = (event)=>{
    setUserValidation({...userValidation,[event.target.name]: event.target.value})
  }

  const handleChangeFile = (event)=>{
    setFiles({
      ...files,
      [event.target.name] : event.target.files
    });
  }
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const formdata = new FormData();
    let postData = JSON.stringify(userValidation);

    formdata.append('data', postData);

    formdata.append('photograph', files['photograph'][0]);

    formdata.append('documentFile', files['documentFile'][0]);

    for(let i=0; i<files['workImg'].length; i++){
      const file = files['workImg'][i]
      formdata.append('workImg', file);
    }

    try {
      const response = await UserVerifiRequest(formdata);
      seterrorHandel(response.status);

    } catch (error) {
      seterrorHandel(error.response.status)
    }

  }

  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-9 bg-light p-5 custom-campaign">
          
        {errorHandel === 500 ?  <Alert  variant="danger" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert unsuccessfully
          </Alert> : null}
        {errorHandel === 201 ?  <Alert  variant="success" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert Successfully
          </Alert> : null}

          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="name">
              <Form.Label>Contact details</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter Your name"
                value={userValidation.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={userValidation.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="address">
              <Form.Control
                type="address"
                name="address"
                placeholder="Enter Your Current Address"
                value={userValidation.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="phone">
              <Form.Control
                type="phone"
                name="phone"
                placeholder="Enter Your Phone number"
                value={userValidation.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="mb-2">
                Add Your Recent Photograph
              </Form.Label>
              <Form.Control
                type="file"
                name="photograph"
                accept=".jpg"
                size="lg"
                onChange={handleChangeFile}
                required
              />
            </Form.Group>

            <Form.Label className="mb-2E">Document Type</Form.Label>
            <Form.Select
              className="mb-4"
              size="lg"
              aria-label="Default select example"
              name="category"
              value={userValidation.documentType}
              onChange={handleChange}
              required
            >
              <option value="NID">National Identification Card</option>
              <option value="Passport">Passport</option>
              <option value="Birth-Certificate">Birth Certificate</option>
              <option value="Driver's-license">Driver's license</option>
            </Form.Select>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label className="mb-2">Add Document</Form.Label>
              <Form.Control
                type="file"
                name="documentFile"
                accept=".jpg"
                size="lg"
                onChange={handleChangeFile}
                required
              />
            </Form.Group>

            <Form.Label className="mb-2E">Country</Form.Label>
            <Form.Select
              className="mb-4"
              size="lg"
              aria-label="Default select example"
              name="category"
              onChange={handleChange}
              value={userValidation.country}
              required
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan ">Pakistan</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Maldives">Maldives</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Nepal">Nepal</option>
              <option value="Sri-Lanka">Sri-Lanka</option>
            </Form.Select>

            <Form.Group className="mb-4" controlId="city">
              <Form.Label className="mb-2E">City</Form.Label>
              <Form.Control
                type="city"
                name="city"
                value={userValidation.city}
                onChange={handleChange}
                placeholder="Your current City"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="description">
              <Form.Label>Describe Yourself</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={userValidation.description}
                onChange={handleChange}
                placeholder="Brief about Yourself"
              />
              <Form.Text className="text-muted">
                A brief about yourself highlighting your cause, your previous
                work related to social or humanitarian cause, and how you want
                to utilize the money (to be raised). Please be as specific as
                possible, for example, please mention the geographical area you
                want to work in or the special community you want to raise fund
                for.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="workImg" className="mb-4">
              <Form.Label className="mb-2">Add 3 photos of your previous work</Form.Label>
              <Form.Control
                 type="file"
                 name="workImg"
                 accept=".jpg"
                 size="lg"
                 onChange={handleChangeFile}
                required
                multiple
              />
            </Form.Group>

            <input
              className="btn btn-success btn-lg mt-3 px-5 py-3 col-12 "
              type="submit"
              value="Send Request"
              
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserVerification;
