import React from "react";
import Mood from "../components/mood";

import SEO from "../components/seo";

function IndexPage() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-96">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className=" px-36 ">
        <div className=" bg-yellow-900 p-20">
          <p className="text-white text-5xl text-center">
            C&apos;est le toit !
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 p-6 bg-gray-600 ">
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <Mood
            title="horizontal"
            type="horizontal"
            src={["https://placekitten.com/3000/300"]}
          />
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <Mood
            title="Comme insta"
            type="carousel"
            src={[
              "https://placekitten.com/1000/300",
              "https://placekitten.com/1001/300",
              "https://placekitten.com/1002/300",
              "https://placekitten.com/1003/300",
              "https://placekitten.com/1004/300",
            ]}
          />
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <Mood
            title="vertical"
            type="vertical"
            src={["https://placekitten.com/1000/3000"]}
          />
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
          <img src="https://placekitten.com/300/300"></img>
        </div>
      </div>
      <div className="bg-green-500 p-20">
        <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
      </div>
    </div>
  );
}

export default IndexPage;
