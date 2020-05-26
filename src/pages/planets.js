import React from "react"
// basic Layouts
import BasicLayout from "../components/layouts/BasicLayout"
// react bootstrap
import { Card } from "react-bootstrap"

function StarWarsPlanets(props) {
  const [planetData, setPlanetData] = React.useState([])

  React.useEffect(() => {
    fetchDataFromServer()
  }, [])

  function fetchDataFromServer() {
    fetch("https://swapi.dev/api/planets/")
      .then(res => res.json())
      .then(result => {
        setPlanetData(result.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <BasicLayout>
        <section className="hero-unit planets-bg">
          <div className="text-container">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h2>
                    Wanting something does not give you the right to have it.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              {planetData.map(item => {
                return (
                  <div
                    className="col-md-3 col-sm-4"
                    style={{ marginBottom: "10px" }}
                  >
                    <Card style={{ height: "100%" }}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Climate: {item.climate}
                        </Card.Subtitle>
                        <Card.Text>Terrian: {item.terrain}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </BasicLayout>
    </div>
  )
}
export default StarWarsPlanets
