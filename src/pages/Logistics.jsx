import React, { useEffect } from "react";

const Logistic = () => {
  useEffect(() => {
    // Open the logistics website in a new tab as soon as this page is visited
    window.open("https://firsttrack.site", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Redirecting to Logistics Platform...
        </h2>
        <p className="text-gray-500">
          If it doesn’t open automatically,{" "}
          <a
            href="https://firsttrack.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            click here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Logistic;
