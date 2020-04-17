import React from 'react';
import './FighterCard.css';

function FighterCard({ infos }) {
  return (
    <div className="FighterCard">
      <div className="FighterContainerImage">
        <div className="FighterImage">
          <img src={infos.avatar_url} alt={infos.login} />
        </div>
      </div>

      <div className="FighterContainerContent">
        <div className="FighterContainerName">
          <div className="FighterName">{infos.name}</div>
          <div className="FighterLogin">{infos.login}</div>
        </div>

        <div className="FighterBio">{infos.bio}</div>

        <div className="FighterList">
          <ul className="FighterUnorderedList">
            <li className="FighterCompany">{infos.company}</li>
            <li className="FighterLocation">{infos.location}</li>
            <li className="FighterBlog">
              <a href="#">{infos.blog}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FighterCard;
