import "./groups.scss";
import Card from "../../cards/card";

const Groups = () => {
  return (
    <div className="section__group">
      <div className="section__container">
        <h2 className="section__title">
          Learn with one of our popular online courses
        </h2>
        <div className="section__wrapper">
          <section className="wrapper__items">
            <Card
              img="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/thumbnail/public/2023-04/live_classes_icon.jpg?itok=6QMbz2yY"
              title="IELTS preparation"
              description="Get the score you need with private and group online classes."
              borderRadius="12px 0"
              width="100%"
              padding="0"
            />
            <Card
              img="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/thumbnail/public/2023-04/IELTS_preparation_icon.jpg?itok=gfH79Zst"
              title="IELTS preparation"
              description="Get the score you need with private and group online classes."
              borderRadius="12px 0"
              width="100%"
              padding="0"
            />
            <Card
              img="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/thumbnail/public/2023-04/IELTS_preparation_icon.jpg?itok=gfH79Zst"
              title="IELTS preparation"
              description="Get the score you need with private and group online classes."
              borderRadius="12px 0"
              width="100%"
              padding="0"
            />
            <Card
              img="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/thumbnail/public/2023-04/IELTS_preparation_icon.jpg?itok=gfH79Zst"
              title="IELTS preparation"
              description="Get the score you need with private and group online classes."
              borderRadius="12px 0"
              width="100%"
              padding="0"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Groups;
