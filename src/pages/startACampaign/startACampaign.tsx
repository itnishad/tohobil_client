import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Editor } from "@tinymce/tinymce-react";
import {createCampaign} from '../../services/campaign.service'
import Alert from 'react-bootstrap/Alert';

const StartACampaign = () => {

    const [campaign, setCampaign] = useState({
        title:"",
        subtitle:"",
        content:"",
        goalAmount:"",
        deadline:"",
        category:"Nonprofit"
    });

    const [errorHandel, seterrorHandel] = useState(0);

    const [file, setFile] = useState('');

    const handleChangeEditor = (event: any)=>{
       setCampaign({
        ...campaign,
        content:event
       })
    }

    const handleChangeFile = (event: any)=>{
      setFile(event.target.files[0]);
    }

    const handleChange = (event:any) =>{
        setCampaign({
            ...campaign,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event:any)=>{
        event.preventDefault();
        
        const formdata = new FormData();
        let postData = JSON.stringify(campaign);
        formdata.append('data', postData);
        formdata.append('file', file);


        try {
          const response = await createCampaign(formdata);
          seterrorHandel(response.status)
          // const response = await axios.post('https://httpbin.org/anything', formdata)
          console.log(response)
        } catch (error:any) {
          // console.log(error.response.status);
          seterrorHandel(error.response.status)
        }

        
    }

  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-7 bg-light p-5 custom-campaign">

        {errorHandel === 500 ?  <Alert  variant="danger" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert unsuccessfully
          </Alert> : null}
        {errorHandel === 201 ?  <Alert  variant="success" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert Successfully
          </Alert> : null}


          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Campaign Title</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="title"
                value={campaign.title}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Campaign Subtitle</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="subtitle"
                value={campaign.subtitle}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </Form.Group>

            {/* <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Content</Form.Label>
                          <Form.Control 
                          as="textarea"
                          size="lg" 
                          rows={3} 
                          placeholder="Campaign Discription ...."/>
                      </Form.Group> */}
              <Form.Group className="mb-4">
              <Form.Label className="mb-3">Campaign Details</Form.Label>
                  <Editor
                      value={campaign.content}
                      init={{
                      height: 500,
                      menubar: false,
                      }}
                      onEditorChange={handleChangeEditor}
                  />
            </Form.Group>

              {<div dangerouslySetInnerHTML={{ __html: campaign.content}} />}

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Funding Goal Amount</Form.Label>
              <Form.Control 
              type="number" 
              size="lg"
              name="goalAmount"
              value={campaign.goalAmount}
              onChange={handleChange}
              placeholder="200 TK" 
              required/>
              
            </Form.Group>

            <Form.Group className="mb-4" >
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                size="lg"
                name="deadline"
                data-date ="" 
                data-date-format="DD MMMM YYYY"
                onChange={handleChange}
                placeholder="Deadline"
                required
              />
            </Form.Group>


            <Form.Label className="mb-2E">Category</Form.Label>
            <Form.Select 
            className="mb-4" 
            size="lg" 
            aria-label="Default select example"
            name="category"
            value={campaign.category}
            onChange={handleChange} 
            required>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Education">Education</option>
              <option value="Food">Food</option>
              <option value="Helthcare">Helthcare</option>
              <option value="Environment">Environment</option>
            </Form.Select>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label className="mb-2">Upload Image</Form.Label>
              <Form.Control 
              type="file"
              name="file"
              accept=".jpg"
              onChange={handleChangeFile}
              size="lg"
              required/>
            </Form.Group>

            <input
              className="btn btn-success btn-lg mt-3"
              type="submit"
              value="Publish Campaign"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartACampaign;
