import React, { useState } from 'react';
import '../styles/Works.css';

const Works = () => {
  const worksData = [
    {
      artist: 'Else Alfelt',
      artwork: 'Stromboli',
      description: 'oil on veneer, 150 x 114 cm',
      date:'1958',
      style:'Abstract',
      linkUrl:'https://awarewomenartists.com/artiste/else-alfelt/',
      photoUrl: 'https://awarewomenartists.com/wp-content/uploads/2022/06/else-alfelt-stromboli-1958-aware-women-artists-artistes-femmes.jpg'
    },
    {
      artist: 'Geneviève Asse',
      artwork: 'Horizon',
      description: 'Oil painting, 20 x 20 cm',
      date:'2007',
      style:'Abstract Minimalist',
      linkUrl:'https://awarewomenartists.com/artiste/genevieve-asse/',
      photoUrl: 'https://medias.gazette-drouot.com/prod/medias/mediatheque/28537.jpg'
    },
        {
      artist: 'Marcel Barbeau',
      artwork: 'Natashkouan',
      description: 'Oil painting, 182 x 213 cm',
      date:'1956',
      style:'Abstract Expressionism',
      linkUrl:'https://www.wikiart.org/fr/marcel-barbeau/natashkouan-1956',
      photoUrl:'https://uploads2.wikiart.org/images/marcel-barbeau/natashkouan-1956.jpg!Large.jpg',
    },
    {
      artist: 'Bernard Cohen',
      artwork: 'Zany at Home',
      description: 'Acrylic on linen, 137 × 167.5 cm',
      date:'2007',
      style:'Abstract Expressionism',
      linkUrl:'https://www.wikiart.org/fr/marcel-barbeau',
      photoUrl:'https://artlogic-res.cloudinary.com/w_1680,h_1680,c_limit,f_auto,fl_lossy,q_auto:good/artlogicstorage/flowers/images/view/3f802f84c81e1a565b5ce10274fdb27a23444873.jpg',
    },
    {
      artist: 'Hiroshi Nagai',
      artwork: 'Poolside',
      description: 'Acrylic on canvas board, 455 mm x 530 mm',
      date:'2022',
      style:'Pop art',
      linkUrl:'http://www.hiroshinagai.com/',
      photoUrl:'https://i.redd.it/y839d419tjf51.png',
    },
    // {
    //   artist: '',
    //   artwork: '',
    //   description: '',
    //   photoUrl:'',
    // },

  ];

  const [expandedWorkIndex, setExpandedWorkIndex] = useState(-1);

  const handleWorkClick = (index) => {
    setExpandedWorkIndex(index === expandedWorkIndex ? -1 : index);
  };

  const customStyles = worksData.map((work, index) => (
    <style key={index}>
      {`
      .custom-li-${index}::before {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100%;
        background-image: url(${work.photoUrl});
        transition: left 2s ease;
        z-index: -1;
      }

      .custom-li-${index}.expanded {
        /* Ajoutez ici les styles pour agrandir la section */
      }
      `}
    </style>
  ));

  return (
    <div className="CustomWorks">
      {customStyles}
      {worksData.map((work, index) => (
        <a key={index} href={`#${work.artwork}`} className={`link ${expandedWorkIndex === index ? 'expanded' : ''}`} onClick={() => handleWorkClick(index)}>
          <ul className={`list pl0 ma0 ${expandedWorkIndex === index ? 'expanded' : ''}`} style={{ marginBottom: 0, marginTop: 0 }}>
            <li className={`pa3 pa4-ns custom-li bb b--black-10 custom-li-${index} ${expandedWorkIndex === index ? 'expanded' : ''}`}>
              <b className="db f3 text mb1">{work.artwork}</b>
              <c className="db f6 text mb1">{work.artist}</c>
              <span className="f5 db text lh-copy measure break-word">{work.date}</span>
              {expandedWorkIndex === index && (
                <div className='CustomList'>
                  <span className="f5 db text lh-copy measure break-word">{work.style}</span>
                  <span className="f5 db text lh-copy measure break-word">{work.description}</span>
                  <a href={work.linkUrl} className="f5 db text lh-copy measure break-word">See more</a>
                </div>
                /* Ajoutez ici d'autres informations sur l'œuvre */
              )}
            </li>
          </ul>
        </a>
      ))}
    </div>
  );
};

export default Works;