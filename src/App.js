import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import AuditList from "./components/audit-list.component";
import EditAudit from "./components/edit-audit.component";
import CreateAudit from "./components/create-audit.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={AuditList} />
        <Route path="/edit/:id" exact component={EditAudit} />
        <Route path="/create" exact component={CreateAudit} />
        <Route path="/user" exact component={CreateUser} />

      </div>

    </Router>

  );
}

export default App;
