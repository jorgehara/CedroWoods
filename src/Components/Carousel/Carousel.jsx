
import "./Carousel.css";

export const Carousel = () => {



    const handleClick = () => {

    }
  return (
    <>
    <div className="containerCarousel">
      <div className="bg-white font-sans leading-normal tracking-normal">

        <div className="carousel relative shadow-2xl bg-white">
          <div className="carousel-inner relative overflow-hidden img">
            {/* <!--Slide 1--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="false"
              hidden="true" 
              checked="checked"
            />
            <div
              className="carousel-item absolute opacity-0 height-20vh"
                // style={{"height:50vh;"}
                >
              <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
                <img src='./image/Cocina-Modulada-3-Vista-completa-1-scaled.jpg' alt="slide1" className="img" />
              </div>
            </div>
            <label 
            for="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
                <img src="./image/prev.png" alt="" />
            </label>
            <label 
            for="carousel-2"
              className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
             <img src="./image/next.png" alt="" />
            </label>

            {/* <!--Slide 2--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden="true"
              checked="checked"

            />
            <div
              className="carousel-item absolute opacity-0 height-50vh"
            //   style={{"height:50vh;"}}
            >
              <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center ">
              <img src='./image/Cocina-Modulada-1-Vista-Completa-3-1536x1024.jpg' alt="slide2" className="img" />
              </div>
            </div>
            <label
              for="carousel-1"
              className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              <img src="./image/prev.png" alt="" />
            </label>
            <label
              for="carousel-3"
              className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              <img src="./image/next.png" 
              alt="" />
            </label>

            {/* <!--Slide 3--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden="true"
              checked="checked"

            />
            <div
              className="carousel-item absolute opacity-0 height-50vh"
            //   style={{"height:50vh;"}}
            >
              <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
              <img src='./image/cocinas-lineales-1024x683.jpg' alt="slide3" className="img"/>

              </div>
            </div>
            <label
              for="carousel-2"
              className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              <img src="./image/prev.png" alt="" />
            </label>
            <label
              for="carousel-1"
              className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              <img src="./image/next.png" alt="" />
            </label>

             {/* <!-- Add additional indicators for each slide--> */}
            <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label
                  for="carousel-1"
                  className="carousel-bullet cursor-pointer block text-4xl"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  for="carousel-2"
                  className="carousel-bullet cursor-pointer block text-4xl"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  for="carousel-3"
                  className="carousel-bullet cursor-pointer block text-4xl"
                >
                  •
                </label>
              </li>
            </ol> 
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
