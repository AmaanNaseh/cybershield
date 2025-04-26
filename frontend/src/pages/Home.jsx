import React from "react";
import { Link } from "react-router-dom";
import riskAnalysisIcon from "../assets/riskAnalysis.png";
import cyberReportIcon from "../assets/cyberReport.png";
import AIMetricsIcon from "../assets/AIMetrics.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="my-10 md:px-8 lg:px-20">
        <Slider {...settings}>
          <div className="bg-[#5985B3] text-white py-10 md:py-20">
            <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              Cyber Risk Analytics System
            </h3>
          </div>
          <div className="bg-[#5985B3] text-white py-10 md:py-20">
            <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              What We Provide ?
            </h3>
          </div>
          <div className="bg-[#5985B3] text-white py-10 md:py-20">
            <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              ML Based Risk Analysis
            </h3>
          </div>
          <div className="bg-[#5985B3] text-white py-10 md:py-20">
            <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              Analytics Report Generation
            </h3>
          </div>
          <div className="bg-[#5985B3] text-white py-10 md:py-20">
            <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              Download Analytics Report
            </h3>
          </div>
        </Slider>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-white">
        <Link to={"/predict"}>
          <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg text-black font-bold w-fit p-4 hover:scale-105">
            <div className="w-[200px]">
              <img src={riskAnalysisIcon} className="w-full" alt="image" />
            </div>
            <h1>Analyze Risks</h1>
          </div>
        </Link>
        <Link to={"/reports"}>
          <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg text-black font-bold w-fit p-4 hover:scale-105">
            <div className="w-[200px]">
              <img src={cyberReportIcon} className="w-full" alt="image" />
            </div>
            <h1>Cyber Analysis Reports</h1>
          </div>
        </Link>
        <Link to={"/ai-metrics"}>
          <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg text-black font-bold w-fit p-4 hover:scale-105">
            <div className="w-[200px]">
              <img src={AIMetricsIcon} className="w-full" alt="image" />
            </div>
            <h1>AI Metrics</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
