import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Form from './components/form';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
