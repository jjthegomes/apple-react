import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

//Import routes
import routes from "./routes/routes";

function App() {
  const isLogged = localStorage.getItem("logado") === "true";

  return (
    <Switch>
      {routes.map((rota) => {
        const exact = rota.exact === false ? false : true;
        if (rota.auth) {
          return (
            <Route
              {...rota}
              exact={exact}
              key={rota.path}
              component={isLogged ? rota.component : NoMatch}
            />
          );
        }
        return (
          <Route
            key={rota.path}
            exact={exact}
            path={rota.path}
            component={rota.component}
          />
        );
      })}
    </Switch>
  );
}

export default App;
