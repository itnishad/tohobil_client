import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Editor } from "@tinymce/tinymce-react";
import {updateCampaign} from '../../services/campaign.service'
import Alert from 'react-bootstrap/Alert';
import { useLocation } from "react-router-dom";

const formatDate = (location:any)=>{
    let DD:string = "";
    let MM:string = "";

    const dateDadeline = new Date(location.state.deadline);
        const yyyy = dateDadeline.getFullYear();
        let mm = dateDadeline.getMonth() + 1;
        let dd = dateDadeline.getDate();
        dd < 10 ? DD =`0${dd}`: DD=`${dd}`;
        mm < 10 ? MM =`0${mm}`: MM=`${mm}`;
        let dateFormat = yyyy + '-' +  MM + '-' + DD;
        return  dateFormat;

}

const UpdateCampaign = () => {

    const [campaign, setCampaign] = useState({
        title:"",
        content:"",
        goalAmount:"",
        deadline:"",
        category:"Nonprofit"
    });

    const location:any = useLocation();
    // console.log(location)

    useEffect(()=>{
        const formattedToday = formatDate(location);
        const cmp:any = {
            title: location.state.title,
            content: location.state.content,
            goalAmount:location.state.goalAmount,
            deadline:formattedToday,
            category:location.state.category
        }
        setCampaign(cmp);
    },[location])
    

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
        let id = location.state._id
 
         try {
           const response = await updateCampaign(id,formdata);
           seterrorHandel(response.status)
          //  console.log(response)

         } catch (error:any) {
           // console.log(error.response.status);
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
        {errorHandel === 200 ?  <Alert  variant="success" onClose={() => seterrorHandel(0)} dismissible>
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
                defaultValue={campaign.deadline}
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
              size="lg"/>
            </Form.Group>

            <input
              className="btn btn-success btn-lg mt-3 px-5 py-3 col-12 "
              type="submit"
              value="Update Campaign"
            />
          </form>
        </div>
      </div>
    </div>
  )

// return(
//     <div>Hello World</div>
// )
}

export default UpdateCampaign