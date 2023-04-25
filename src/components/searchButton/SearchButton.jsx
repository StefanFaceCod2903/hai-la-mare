import React from "react";

function SearchButton({ onClick }) {
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={onClick}>
        Caută
      </button>
    </div>
  );
}

export default SearchButton;
