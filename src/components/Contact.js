import { useState } from "react"
import * as React from "react"
const Contact = () => {
  const [data, setData] = useState("")
  return (
    <div>
      <div class="contact-banner">
        <div class="container">
          <div class="search_bar">
            <div class="d-flex city-search-box">
              <img class="img-fluid" src="images/enter_city_icon.png" alt="" />
              <input
                type="text"
                placeholder="Enter City Name"
                class="search_input"
              />
            </div>
            <div class="d-flex search-business-box position-relative">
              <img class="img-fluid" src="images/search_companies.png" alt="" />
              <input
                type="text"
                placeholder="Search and Claim a Business"
                class="search_input"
              />
            </div>
            <input
              class="search_button"
              type="submit"
              value="Search Companies"
            />
          </div>
        </div>
      </div>
      <div class="contact-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-12">
              <form
                onSub
                mit={event => {
                  event.preventDefault()
                  const form = event.target
                  const formData = new FormData(form)
                  const formRowdata = Object.fromEntries(formData.entries())
                  setData(formRowdata)
                  // console.log(data);
                }}
              >
                <h3 class="section-block-heading">Contact Us</h3>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="contact-textbox form-control"
                        type="text"
                        id=""
                        placeholder="Your Name"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <input
                        class="contact-textbox form-control"
                        type="email"
                        id=""
                        placeholder="Your Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group number-col">
                      <input
                        class="contact-textbox form-control"
                        type="text"
                        id=""
                        placeholder="Phone number"
                        name="number"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="contact-textarea form-control"
                        id=""
                        placeholder="Your Name"
                        name="text"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="form-group">
                      <button class="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-lg-4 col-md-5 col-12">
              <div class="contact-detail-area">
                <div class="contact-row d-flex">
                  <div class="contact-icon">
                    <img alt="" src="images/phone.png" />
                  </div>
                  <div class="contact-text">Phone - +61 412 345 678</div>
                </div>
                <div class="contact-row d-flex">
                  <div class="contact-icon">
                    <img alt="" src="images/website.png" />
                  </div>
                  <div class="contact-text website">www.hereiswhatilike.au</div>
                  ;
                </div>
                <div class="contact-row d-flex">
                  <div class="contact-icon">
                    <img alt="" src="images/location.png" />
                  </div>
                  <div class="contact-text">
                    Washington Square, New York, NY 10012, United States
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{data.name}</th>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.text}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contact
