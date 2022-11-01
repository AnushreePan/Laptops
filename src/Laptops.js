import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Laptops() {
  useEffect(() => {
    fetch("https://62dba3fee56f6d82a77507de.mockapi.io/Laptops")
      .then((Lap) => {
        return Lap.json();
      })
      .then((Lap) => {
        SetLaptop(Lap);
      });
  }, []);

  const [Laptop, SetLaptop] = useState([]);

  let LaptopDetails = Laptop.map((Lap) => {
    return (
      <>
        <div className="col-md-4">
          <center>
            <div class="flip-card-container">
              <div class="flip-card">
                <div class="card-front">
                  <figure>
                    <img src={Lap.LaptopImage} alt="a" />
                    <figcaption>{Lap.LaptopName}</figcaption>
                  </figure>
                </div>
                <div class="card-back">
                  <figure>
                    <div class="img-bg"></div>
                    <img src={Lap.LaptopImage} alt="b" />
                  </figure>
                  <Link to={"../Laptops_id/"+Lap.id}>
                    <button id="buttoncard">Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </center>
        </div>
      </>
    );
  });

  return (
    <>
      <div class="container" id="container">
        <div class="carousel">
          <div class="carousel__face">
            <span>This is something</span>
          </div>
          <div class="carousel__face">
            <span>Very special</span>
          </div>
          <div class="carousel__face">
            <span>Special is the key</span>
          </div>
          <div class="carousel__face">
            <span>For you</span>
          </div>
          <div class="carousel__face">
            <span>Just give it</span>
          </div>
          <div class="carousel__face">
            <span>A try</span>
          </div>
          <div class="carousel__face">
            <span>And see</span>
          </div>
          <div class="carousel__face">
            <span>How it Works</span>
          </div>
          <div class="carousel__face">
            <span>Woow !!</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" id="rowl">{LaptopDetails}</div>
      </div>

      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="https://i.pinimg.com/236x/7c/1f/6c/7c1f6cb06c37e8d5a773bd545cac9d6f.jpg"alt="hp"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/dc/14/7a/dc147a75b3bd78858a4cbade289f5c4f.jpg" alt="asus"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/82/12/04/821204c5913185cf85654638c34bc5b4.jpg" alt="lenovo"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/e0/42/99/e04299d962b1803df63065608e47d374.jpg" alt="dell"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/cc/63/3a/cc633ad293fb08831b0d635cb77e5405.jpg" alt="samsung"/>
          </div>
          <div class="slide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNyinheyEvytr1XRpPTBFUWutvELUsv3iTA&usqp=CAU" alt="mac"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/ef/47/21/ef4721320ecdcec2532e17f1fb9967c5.jpg" alt="lg"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/7c/1f/6c/7c1f6cb06c37e8d5a773bd545cac9d6f.jpg"alt="hp"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/dc/14/7a/dc147a75b3bd78858a4cbade289f5c4f.jpg" alt="asus"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/82/12/04/821204c5913185cf85654638c34bc5b4.jpg" alt="lenovo"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/e0/42/99/e04299d962b1803df63065608e47d374.jpg" alt="dell"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/cc/63/3a/cc633ad293fb08831b0d635cb77e5405.jpg" alt="samsung"/>
          </div>
          <div class="slide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNyinheyEvytr1XRpPTBFUWutvELUsv3iTA&usqp=CAU" alt="mac"/>
          </div>
          <div class="slide">
            <img src="https://i.pinimg.com/236x/ef/47/21/ef4721320ecdcec2532e17f1fb9967c5.jpg" alt="lg"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptops;
