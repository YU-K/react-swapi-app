import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../components/swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import "./app.css";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />

            <RandomPlanet />

            <PeoplePage />

            <PlanetsPage />

            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
