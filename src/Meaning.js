import React from "react";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
