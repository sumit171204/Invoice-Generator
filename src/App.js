import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <InvoiceForm/>
        </Container>
        <footer className="mt-4 text-center">
          <p>Created in Team by Sumit & Khushbu.</p>
          <p>
            <a href="https://github.com/sumit171204/Invoice-Generator">GitHub</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
