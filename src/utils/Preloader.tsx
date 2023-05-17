import React from "react";

interface PreLoadProps {
    load: boolean
}
function Preloader({ load }: PreLoadProps) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;