import React from "react"
import "./featuredProperties.css"

const FeaturedProperties=()=>{
  return(
    <div className="fp">
      <div className="fpItem">
      <img src="https://images.pexels.com/photos/414035/pexels-photo-414035.jpeg?cs=srgb&dl=pexels-pixabay-414035.jpg&fm=jpg" alt="" className="fpImg"/>
      <span className="fpName">Apart otel Misto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellen</span>

      </div>
      </div>
      <div className="fpItem">
      <img src="https://images.pexels.com/photos/462119/pexels-photo-462119.jpeg?cs=srgb&dl=pexels-pixabay-462119.jpg&fm=jpg" alt="" className="fpImg"/>
      <span className="fpName">Apart otel Misto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellen</span>
      </div>
      </div>
      <div className="fpItem">
      <img src="https://images.pexels.com/photos/4969845/pexels-photo-4969845.jpeg?cs=srgb&dl=pexels-maria-orlova-4969845.jpg&fm=jpg" alt="" className="fpImg"/>
      <span className="fpName">Apart otel Misto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellen</span>
      </div>
      </div>
      <div className="fpItem">
      <img src="https://images.pexels.com/photos/1196018/pexels-photo-1196018.jpeg?cs=srgb&dl=pexels-michaela-1196018.jpg&fm=jpg" alt="" className="fpImg"/>
      <span className="fpName">Apart otel Misto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellen</span>
      </div>
      </div>
    </div>
  )
}
export default FeaturedProperties