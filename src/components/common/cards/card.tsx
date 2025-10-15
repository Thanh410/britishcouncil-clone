
import "./card.scss";

interface CardProps {
  img?: string;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  shadow?: boolean;
  hoverEffect?: boolean;
  padding?: string;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  width = "320px",
  height = "auto",
  bgColor = "#fff",
  textColor = "#222",
  borderRadius = "20px",
  shadow = true,
  hoverEffect = true,
  padding = "20px",
}) => {
  return (
    <div
      className={`card ${shadow ? "card--shadow" : ""} ${
        hoverEffect ? "card--hover" : ""
      }`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius,
        color: textColor,
        padding,
      }}
    >
      {img && (
        <div className="card__image">
          <img src={img} alt={title} />
        </div>
      )}
      <div className="card__content" >
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__desc">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
