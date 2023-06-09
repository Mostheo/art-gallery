import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Artists.css';

const Artists = () => {
  const names = [
    'Else Alfelt',
    'Geneviève Asse',
    'Marcel Barbeau',
    'Britt Bass',
    'Pierre Bonnard',
    'Cecily Brown',
    'Gabriela Carrillo',
    'Bernard Cohen',
    'Alex Colville',
    'Marcia Hafif',
    'Keith Haring',
    'Edward Hopper',
    'Bice Lazzari',
    'Carl Moll',
    'Hiroshi Nagai',
    'Ludwig Mies van der Rohe',
    'Tony Smith',
    'Victor Steinbrueck',
    'Anne Truitt',
  ];

/* Génération de nom */
const generateCodeCopy = (names) => {
    return names.map((name, index) => {
      const urlFriendlyName = name.replace(/\s+/g, '-').toLowerCase();
      
      return (
        <li key={index} className="dib mr2">
          <Link to={`/artist/${urlFriendlyName}`} className="f4 f2-ns b db pa2 link dim mid-gray">
            {name}
          </Link>
        </li>
      );
    });
  };
  
    return (
      <ul className="list pa3 pa5-ns">
        {generateCodeCopy(names)}
      </ul>
    );
  };
  
  export default Artists;