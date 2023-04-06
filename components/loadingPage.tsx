import React from "react";

const temp = new Array(16).fill("null");
const LoadingPage = ({children, laoding}) => {
  return (laoding ? temp.map((item, index) => <Loading key={index}/>) : children)
}

export default LoadingPage


export const Loading = () => {
  return (
      <div className=" shadow-[1px_1px_15px_rgba(0,0,0,0.1)] bg-white dark:bg-custom-navy rounded-lg">
        <div className="w-full h-[150px] relative bg-custom-secondary dark:bg-custom-dark-navy "></div>
        <div className="p-5">
          <div className="h-4 w-full bg-custom-secondary dark:bg-custom-navy animate-pulse"></div>
          <div className="my-4 flex flex-col gap-2">
            <div className="h-2 w-8/12 bg-custom-secondary dark:bg-custom-dark-navy animate-pulse"></div>
            <div className="h-2 w-8/12 bg-custom-secondary dark:bg-custom-dark-navy animate-pulse"></div>
            <div className="h-2 w-8/12 bg-custom-secondary dark:bg-custom-dark-navy animate-pulse"></div>
          </div>
        </div>
      </div>
  )
}