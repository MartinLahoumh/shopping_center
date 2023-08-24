import { useState, useEffect } from "react";
import "../css/TrendingSlider.css";

function TrendingSlider() {
  const images = [
    "https://blog.artsper.com/wp-content/uploads/2022/06/Featured-image-1200-x-675-px-6.jpg",
    "https://sanctuarymentalhealth.org/wp-content/uploads/2021/03/The-Starry-Night-1200x630-1.jpg",
    "https://news.artnet.com/app/news-upload/2019/12/maurizio-cattelan-banana.jpg",
    "https://www.streetartbio.com/wp-content/uploads/2020/03/Banksy_Balloon_Girl_London.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Start the auto slide timer
    const timer = setInterval(nextSlide, 5000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToSlide = index => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="trending-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? "active" : ""}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="trending-img"
            />
          </div>
        ))}
      </div>
      <div className="trending-navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`bubble ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TrendingSlider;
