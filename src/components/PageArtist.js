import React from 'react';
import '../styles/PageArtist.css';

const PageArtist = ({ data }) => {
  return (
    <div>
      <h2>{data.artwork}</h2>
      <p>Artist: {data.artist}</p>
      <p>Description: {data.description}</p>
      {/* Ajoutez ici les autres éléments de la page */}
    </div>
  );
};

export default PageArtist;
