import React from "react";

const DevForm = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">join the HIVE</h1>
            </div>
        </div>
        <form className="form-row">
            <div className="col-md-6">
                <label for="exampleFormControlInput1">First Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Last Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
        </form>
        <form className="form-row">
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Phone Number:</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="999-999-9999" />
            </div>
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Email Address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        </form>
        <form className="form-row">
            <div className="col-md-6">
                <label for="exampleFormControlInput1">GitHub URL</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="URL Address" />
            </div>
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Personal Image</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image Source" />
            </div>
        </form>
        <div className="row">
        <div className="col-md-12 text-center">
        <button type="button" class="btn btn-primary signupbutton">join the hive!</button>
        </div>
        </div>
    </div>
        
);

export default DevForm;
