import CardMain from "../../Components/CardMain/CardMain";
import Comments from "../../Components/comments/Comments";
import SocialMedia from "../../Components/socialMedia/SocialMedia";
import data from "../../Mocks/cardDatas.json";
import InstagramCard from "../../Components/InstagramCard/InstagramCard";
import Subscribe from "../../Components/Subscribe/Subscribe";
import ClimpUp from "../../Components/ClimpUp/ClimpUp";

function Homepage() {


  return (
    <div>
      <Comments />
      <SocialMedia />
      <div>
        {data.cards.map((card, index) => (
          <CardMain
            key={index}
            imageUrl={card.image}
            title={card.title}
            content={card.content}
            tags={card.tags}
          />
        ))}
      </div>
      <InstagramCard />
      <Subscribe />
      <ClimpUp />
    </div>
  );
}

export default Homepage;
