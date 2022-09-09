import React from "react";
import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <section className={classes.page404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 mx-auto text-center">
              <div className={classes.fourzerofourbg}>
                <h1 className="text-center ">404</h1>
              </div>

              <div className={classes.contantbox404}>
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <button className={classes.link404}>
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
