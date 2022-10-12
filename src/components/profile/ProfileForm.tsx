import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useSWR from "swr";
import { getUserProfile, updateUserProfile } from "../../services/user.service";
import Alert from 'react-bootstrap/Alert';

const ProfileForm = () => {

  const { data, error } = useSWR(
    "http://localhost:4000/v1/user/profile",
    getUserProfile
  );
  
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    website: "",
    bio: "",
  });
  
  const [errorHandel, seterrorHandel] = useState(0);

  useEffect(() => {
    if(data){
        if(data.length>0){
          const userProfile = {
            username: data[0].user.name,
            email: data[0].user.email,
            firstName: data[0].firstName,
            lastName: data[0].lastName,
            website: data[0].website,
            bio:data[0].bio,
          };
          setProfile(userProfile)
        }
    }
  }, [data]);

  if (error) return <div>Error Occer</div>;

  if (!data) return <div>No Data In Database</div>;

  if (data.length <= 0) return <div>Empty Data</div>;

  const handleChange = (event: any) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event:any)=>{
    event.preventDefault();
    const response = await updateUserProfile(profile); 
    seterrorHandel(response.status)
  }

  return (
    <div className="container">
      <div className="row justify-content-start mt-4">
        <div className="col-lg-9 bg-light p-sm-5 p-3 custom-campaign">

        {errorHandel === 500 ?  <Alert  variant="danger" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert unsuccessfully
          </Alert> : null}
        {errorHandel === 200 ?  <Alert  variant="success" onClose={() => seterrorHandel(0)} dismissible>
        Campaign Insert Successfully
          </Alert> : null}

          <h3 className="mb-4"> My Information</h3>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-5">
              <Form.Group as={Col} controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={profile.username} disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={profile.email} disabled />
              </Form.Group>
            </Row>

            <Row className="mb-5">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-4" as={Col} controlId="webSite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={profile.website}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="bio"
                value={profile.bio}
                onChange={handleChange}
              />
            </Form.Group>

            <input
              className="btn btn-warning btn-lg mt-3 px-5 py-3 col-4"
              type="submit"
              value="Update Profile"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
