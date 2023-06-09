import React from 'react';
import '../styles/Body.css';
import List from './List';
import '../styles/List.css';
import Title from './Title';
import '../styles/Title.css';
import Footer from './Footer';
import '../styles/Footer.css';

const Body = () => {
  return (
    <main>
      <div>
        <Title />
      </div>
      <div className="bg">

      </div>
      <List />
      <Footer />
    </main>
  );
};

export default Body;