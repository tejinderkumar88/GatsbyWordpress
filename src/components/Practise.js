import React, { useState, useEffect } from "react"


const Practise = () => {
  
  const [apidata, setApiData] = useState([])
  const [contentapidata, setContentApiData] = useState([])
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = index => {
    setToggleState(index)
  }
  const fetchData = async () => {
    const response = await fetch(
      "https://wordpress-321502-2654369.cloudwaysapps.com/wp-json/customapis/tabtitleswithicon"
    )
    const data1 = await response.json()
    const data = JSON.parse(data1)
    setApiData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetch(
      `https://wordpress-321502-2654369.cloudwaysapps.com/wp-json/customapis/tabcontents`
    )
      .then(response => response.json())
      .then(resultData => {
        const content_data = JSON.parse(resultData)
        setContentApiData(content_data)
      })
  }, [])

  return (
    <div>
      <div class="layout">
        <div class="container-fluid my-body">
          <div class="titles">
            <h1>CASES</h1>
            <p>
              <img src="./images/bag.png" />
              <span>THAT WE HANDLE</span>
            </p>
          </div>
          <div class="tab-container">
            <div class="tab">
              {apidata.map((data, key) => (
                <div class="tab-icon">
                  <div class="icon-image">
                    <img src={data.icon} />
                  </div>
                  <button
                    class={
                      toggleState === key ? " tablinks-active" : "tablinks"
                    }
                    // class="tablinks"
                    onClick={() => {
                      toggleTab(key)
                    }}
                  >
                    {data.heading}
                  </button>
                </div>
              ))}
            </div>
            {contentapidata.map((data, key) => (
              <div
                id="London"
                class={toggleState === key ? "tabcontent-active" : "tabcontent"}
              >
                <div class="content-headings">
                  <h3>{data.heading}</h3>
                  <div class="underLine"></div>
                  <p>{data.tagline}</p>
                </div>

                <div class="box">
                  <div>{data.content}</div>
                  <div>
                    <img class="my-image" src={data.photo} />
                  </div>
                </div>
                <div class="butons">
                  <a href="#">Learn More</a>
                  <a href="#">Free Evaluation</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practise
