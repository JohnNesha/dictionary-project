import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data);

    let apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function search() {
    if (!keyword) return;

    let apiKey = "a723fd412o41a9d1a23tfcb7443f0307";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            placeholder="Search for a word"
            value={keyword}
            onChange={handleKeywordChange}
            autoFocus={true}
            className="form-control search-input"
          />
        </form>
        <small className="hint">i.e. paris, wine, yoga, coding</small>
      </section>

      {definition && <Result definition={definition} />}
      {photos.length > 0 && <Photos photos={photos} />}
    </div>
  );
}
