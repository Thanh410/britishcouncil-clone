
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/1280x500/public/2023-04/RS9260_GettyImages-1324510963_1440x960.jpg?itok=BRnKD4Xz"
        alt="banner"
        className=""
      />
      <div className="wrapper-title">
        <div className="wrapper-title-course">
          <img
            src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2025-02/British%20Council%20English%20indigo%20RGB_3.png?itok=ScGYu81L"
            alt="logo"
            className="logo"
          />
          <h3>LearnEnglish</h3>
        </div>
        <div className="wrapper-title-des">
          <p>
            Learn English online and improve your skills through our
            high-quality <a href="#">courses</a> and <a href="#">resources</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
