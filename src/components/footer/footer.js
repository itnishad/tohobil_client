import React from "react"

const Footer = ()=>{
    return(
        <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor: "#ECEFF1"}}
          >
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Links  --> */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Content --> */}
            <h6 className="text-uppercase fw-bold">Tohobil</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Bangladesh #1 fundraising platform for Food and Education
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Catefory</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-dark">Nonprofit</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Education</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Food</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Helthcare</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Social links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-dark">LinkedIn</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Twitter</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Facebook</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Instragram</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> Mirpur 6, Dhaka 1216</p>
            <p><i className="fas fa-envelope mr-3"></i>mdfaysalhassan@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +8801778071812</p>
            <p><i className="fas fa-print mr-3"></i> +8801515283972</p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2022 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/"
         >Reverse_Blade</a
        >
    </div>
    {/* <!-- Copyright --> */}
  </footer>
    )
}

  export default Footer