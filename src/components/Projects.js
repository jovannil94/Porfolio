import React from "react";
import "../css/Projects.css"
import CovidNearUs from "../helper/CovidNearUs";
import Triphikers from "../helper/Triphikers";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  wideDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Projects = () => {
    return (
        <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={responsive.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            <div><Triphikers className="projectTriphikers"/></div>
            <div><CovidNearUs className="projectCovidNearUs"/></div>
        </Carousel>
    )
}

export default Projects;