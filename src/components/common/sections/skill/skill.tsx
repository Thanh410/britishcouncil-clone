import React from "react";
import "./skill.scss";

const Skill = () => {
  return (
    <div className="section__skill">
      <div className="section__container">
        <h2 className="section__title">
          We provide you with the right tools to help you interact confidently
          in the real world
        </h2>
        <div className="section__wrapper">
          <section className="homePageSkills">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/630x680/public/2023-04/RS9171_GettyImages-1391836113_1440x960_0.jpg?itok=5DFIIUea"
              alt=""
            />
            <div className="wrapper__content">
              <h2 className="wrapper__title">Skill</h2>
              <p className="wrapper__description">
                Practise your listening, reading, writing and speaking and learn
                useful language to use at work or to communicate effectively
                with friends.
              </p>
              <ul>
                <li>
                  Audio and video to practise your listening and speaking
                  skills.
                </li>
                <li>Model texts for all types of writing tasks.</li>
                <li>
                  Work on your reading skills to read more quickly and
                  understand more.
                </li>
              </ul>
              <button className="wrapper__btn">
                <a href="#" className="">
                  Start learning
                </a>
              </button>
            </div>
          </section>
          <section className="homePageGrammar">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/630x680/public/2023-04/RS9171_GettyImages-1391836113_1440x960_0.jpg?itok=5DFIIUea"
              alt=""
            />
            <div className="wrapper__content">
              <h2 className="wrapper__title">Skill</h2>
              <p className="wrapper__description">
                Practise your listening, reading, writing and speaking and learn
                useful language to use at work or to communicate effectively
                with friends.
              </p>
              <ul>
                <li>
                  Audio and video to practise your listening and speaking
                  skills.
                </li>
                <li>Model texts for all types of writing tasks.</li>
                <li>
                  Work on your reading skills to read more quickly and
                  understand more.
                </li>
              </ul>
              <button className="wrapper__btn">
                <a href="#" className="">
                  Start learning
                </a>
              </button>
            </div>
          </section>
          <section className="homePageVocabulary">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/630x680/public/2023-04/RS8020_GettyImages-965461824_square.jpg?itok=KxPJn752"
              alt=""
            />
            <div className="wrapper__content">
              <h2 className="wrapper__title">Vocabulary</h2>
              <p className="wrapper__description">
                Learn new words and improve your language level to be able to
                communicate in English effectively.
              </p>
              <ul>
                <li>
                  Online exercises to help you learn the meaning, pronunciation
                  and spelling of new words.
                </li>
                <li>
                  Learn new words connected to a wide range of different topics.
                </li>
                <li>
                  Play our word games and have fun as you improve your
                  vocabulary.
                </li>
              </ul>
              <button className="wrapper__btn">
                <a href="#" className="">
                  Start learning
                </a>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skill;
