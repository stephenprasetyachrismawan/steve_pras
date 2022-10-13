import React, { useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Jam() {
  const [waktu, setWaktu] = useState();

  useLayoutEffect(() => {
    setInterval(() => {
      const jamm = new Date();
      setWaktu(jamm.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <h2 id="h2" className="h2 text-dark">
          {waktu}
        </h2>
      </div>
    </>
  );
}
export default Jam;
