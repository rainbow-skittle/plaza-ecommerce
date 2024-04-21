import React from "react";
import Randquotedata from "./Randquotedata";

export default function Allcatban(props) {
  const [quote, setquote] = React.useState("");
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Randquotedata.length);
    setquote(Randquotedata[randomIndex]);
  }, []);
  return (
    <div className="catbanner">
      <div className="quotes">
        <h1>{quote[0]}</h1>
        <h1>{quote[1]}</h1>
      </div>
      <img src={`images/${props.category}ban.jpg`} />
    </div>
  );
}
