import React from "react";
import "../css/App.css";

function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <div>Book</div>
              <div>Search booking</div>
              <div>List booking</div>
              {/* <AddAppointments
          formDisplay={this.state.formDisplay}
          toggleForm={this.toggleForm}
          addAppointment={this.addAppointment}
        />
        <SearchAppointments
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          changeOrder={this.changeOrder}
          searchApts={this.searchApts}
        />
        <ListAppointments
          appointments={filteredApts}
          deleteAppointment={this.deleteAppointment}
          updateInfo={this.updateInfo}
        /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
