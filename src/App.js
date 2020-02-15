import React from 'react';
import './styles/App.css'
import Header from './organisms/Header';
import Main from './organisms/Main';
import Footer from './organisms/Footer';
import Navigation from './molecules/Navigation'

class App extends React.Component {
 render() {
  return (
   <div className="app">
    <Navigation />
    <Header />
    <div className='line'></div>
    <Main />
    <Footer />
   </div >
  );
 }
}

export default App; 