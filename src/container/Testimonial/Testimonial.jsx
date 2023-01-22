import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";
// import { RxAvatar } from 'react-icons/rx'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIosNew style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div className="testimonial-container">
        <h1 className="section-title">TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXk5bPsvFALSqWkMg8XCP1MUmHxL1BcEOObWEr4rNgCQ&s" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className="main-card" >
      <div className="author-info">
        <img className="img-style" src={img} alt="author_imgs" />
        <p className="author-details">
          <span className="author-name">PAULA WILSON</span> <br />
          <span className="author-designation">Media Analyst</span>
        </p>
      </div>
      <p className="review">
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>

    </div>
  );
};

export default Testimonial;