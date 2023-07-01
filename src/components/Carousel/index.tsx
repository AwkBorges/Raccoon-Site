
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ratingsData from "../../database/rating.json";
import * as C from './styles';

function getRandomReviews(data: { nome: string; data: string; avaliação: string; }[], count: number) {
  const reviews = [...data];
  const randomReviews = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    randomReviews.push(reviews.splice(randomIndex, 1)[0]);
  }

  return randomReviews;
}

const ReviewsCarousel = () => {

  const reviews = getRandomReviews(ratingsData, 7);

  return (
    <C.CenteredCarouselWrapper>
      <C.FullWidthContainer>
        <Carousel>
          {reviews.map((review) => (
            <C.ContentContainer key={review.nome}>
              <C.ReviewText>" {review.avaliação} "</C.ReviewText>
              <C.AuthorText>- {review.nome}</C.AuthorText>
              <C.AuthorText>{review.data}</C.AuthorText>
            </C.ContentContainer>
          ))}
        </Carousel>
      </C.FullWidthContainer>
    </C.CenteredCarouselWrapper>
  );
};

export default ReviewsCarousel;

//https://www.npmjs.com/package/react-responsive-carousel