import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './icon.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="title">
        <h1>services provide to you by sce</h1>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="istore" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/store-2.png"></img>
          </div>
          <h1 className="services-header">sce store</h1>
          <div id="store"></div>
          <p className="services-description">Snacks, Beverages, Muffins, Frozen Dinners and CMPE lab supplies at your convience.</p>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="iprint" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/printer.png"></img>
          </div>
          <h1 className="services-header">printing</h1>
          <div id="print"></div>
          <p className="services-description">30 pages of printing for members every week. Resets every Sunday.</p>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="ilocker" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/locker.png"></img>
          </div>
          <h1 className="services-header">locker space</h1>
          <div id="locker"></div>
          <p className="services-description">Three members to a locker for $10/person.</p>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="ihardware" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/oscilloscope-1.jpg"></img>
          </div>
          <h1 className="services-header">hardware hacking station</h1>
          <div id="hardware"></div>
          <p className="services-description">Equipped with ESD benches, multimeters, soldering irons, fume fans, and power supplies.</p>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="imonitor" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/monitor.png"></img>
          </div>
          <h1 className="services-header">monitor</h1>
          <div id="monitor"></div>
          <p className="services-description">Almost every table in the room comes with a monitor for your laptop or any other project that requires a monitor.</p>
        </div>

        <div className="services">
          <div className="services-icons">
            <img id="ip3d" src="https://sce.engr.sjsu.edu/wp-content/uploads/2016/03/3DPrinter-1.png"></img>
          </div>
          <h1 className="services-header">3d printing</h1>
          <div id="p3d"></div>
          <p className="services-description">Working on a project requiring a custom part? Our 3D printing services are for you! Contact our 3D Printing Specialist Nicholas Papano at nicholas.papano@sjsu.edu about our ABS and PLA printing options.</p>
        </div>

      </div>
    );
  }
}

export default App;
