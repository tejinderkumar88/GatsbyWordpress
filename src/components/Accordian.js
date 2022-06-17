import React, { useState, useEffect, useRef } from "react"

const Accordian = () => {
  const [accordianTabs, setAccordianTabs] = useState([])
  const [panelData, setPanelData] = useState([])
  const [toggle, setToggle] = useState(false)
  // const [heightEl, setHeightEl] = useState()
  const [toggleAcc, setToggleAcc] = useState(0)

  const refHeight = useRef(null)

  // useEffect(() => {
  //   console.log(refHeight.current)
  //   setHeightEl(`${refHeight.current.scrollHeight}px`)
  // }, [refHeight])

  const toggleState = key => {
    setToggleAcc(key)
    setToggle(!toggle)
  }
  // console.log(toggle)

  useEffect(() => {
    fetch(
      `https://wordpress-321502-2654369.cloudwaysapps.com/wp-json/customapis/tabtitleswithicon`
    )
      .then(response => response.json())
      .then(data => {
        const accTabsData = JSON.parse(data)
        setAccordianTabs(accTabsData)
      })
  }, [])
  // console.log(accordianTabs)

  useEffect(() => {
    fetch(
      `https://wordpress-321502-2654369.cloudwaysapps.com/wp-json/customapis/tabcontents`
    )
      .then(response => response.json())
      .then(data => {
        const accPanelData = JSON.parse(data)
        setPanelData(accPanelData)
      })
  }, [])
  // console.log(panelData)

  return (
    <div class="container-fluid my-body">
      {panelData.map((data, key) => (
        <div class="myAccordian">
          <div class="accordianTab">
            <div class="accordianImage">
              <img src={data.icon} />
            </div>

            <button class="accordion" onClick={() => toggleState(key)}>
              {data.heading}
            </button>
          </div>

          <div
            ref={refHeight}
            class={toggle == 1 && toggleAcc == key ? "panel animated" : "panel"}
          >
            <div class="content-headings">
              <h3>{data.heading}</h3>
              <div class="underLine"></div>
              <p>{data.tagline}</p>
            </div>
            <div class="box">
              <img class="my-image" src={data.photo} />
              <div class="text">{data.content}</div>
            </div>
            <div class="butons">
              <a href="#">Learn More</a>
              <a href="#">Free Evaluation</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordian
