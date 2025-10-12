import React from "react";
import "./resources.scss";
import SliderCourses from "../../slider/slider";
import { coursesData } from "../../../../data/courcesData";

const Resources: React.FC = () => {
  return (
    <div className="section__resources">
      <div className="section__container">
        <h2 className="section__title">
          Learn with one of our popular online courses
        </h2>
        <div className="section__wrapper">
          <section className="wrapper__items">
            <SliderCourses courses={coursesData} />
          </section>
          <div className="resources__plus">
            <h2 className="resources__title">Plus hundreds more!</h2>
            <button className="resources__btn">
              <a href="#">All resources</a>
            </button>
            <h2 className="resources__explore">Explore our free resources:</h2>
            <ul className="resources__menu">
              <li className="resources__items">
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Listening</a>
              </li>
              <li>
                <a href="">Reading</a>
              </li>
              <li>
                <a href="">Writing</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Vocabulary</a>
              </li>
              <li>
                <a href="">Business English</a>
              </li>
              <li>
                <a href="">General English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
