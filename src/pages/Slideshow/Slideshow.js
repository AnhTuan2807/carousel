import index from "../Slideshow/index.css";

function Slideshow() {
    return (
      <div>
        <div className="slideshow-container">
            <div className="mySlides fade">
              <div class="numbertext">1 / 4</div>
              <img src="assets/img/portfolio-1.jpg"/>
              <div className="text">Caption One</div>
            </div>
            
            <div className="mySlides fade">
              <div class="numbertext">2 / 4</div>
              <img src="assets/img/portfolio-2.jpg"/>
              <div className="text">Caption Two</div>
            </div>
            
            <div className="mySlides fade">
              <div class="numbertext">3 / 4</div>
              <img src="assets/img/portfolio-3.jpg"/>
              <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
              <div class="numbertext">4 / 4</div>
              <img src="assets/img/portfolio-4.jpg"/>
              <div className="text">Caption Four</div>
            </div>
            
            <a className="prev" onclick="plusSlides(-1)">❮</a>
            <a className="next" onclick="plusSlides(1)">❯</a>
            
              
        </div> 
      </div>
    );
  }

export default Slideshow
