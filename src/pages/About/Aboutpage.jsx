import InstagramCard from "../../Components/InstagramCard/InstagramCard";
import Subscribe from "../../Components/Subscribe/Subscribe";
import SocialMedia from "../../Components/socialMedia/SocialMedia";
import AboutImage from "../../Assets/Img/about.jpg"

import "./about-page.css";


const AboutContent = () => {
  return (
    <div>
      <div className="about-content">
      
      <div className="about-content-header">
        <h1>About StoryHub</h1>
        <p>
          StoryHub is a beautiful Gatsby Blog theme designed to showcase your
          work in style. Perfect for designers, artists, photographers and
          developers to use for their portfolio website.
        </p>
      </div>

      <div className="about-content-image">
        <img src={AboutImage} alt="içrekle ilgili resim" />
      </div>

      <div className="about-content-paragraph">
        <h1>Hey there, what’s up?</h1>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
      </div>
      <SocialMedia page="about" />
    </div>
      <InstagramCard />
      <Subscribe />
    </div>
  );
};

export default AboutContent;