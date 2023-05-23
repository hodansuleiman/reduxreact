import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBreeds } from "../features/breedsSlice";
import { selectselectedBreeds } from "../features/selectedBreedsSlice";
import { addSelectBreedsToStore } from "../features/selectedBreedsSlice";

const Breeds = () => {
  const [selectedBreeds, setselectedBreeds] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(selectBreeds);

  const handleClick = (e) => {
    const value = e.target.dataset.breed;
    let _selectedBreeds = [];
    if (selectedBreeds.indexOf(value) > -1) {
      const _selectedBreeds = selectedBreeds.filter((breed) => breed !== value);
      _setselectedBreeds(_selectedBreeds);
    } else {
      const _selectedBreeds = [...selectedBreeds, value];
    }
    setselectedBreeds(_selectedBreeds);
  };

  const handleSelectedBreeds = () => {
    dispatch(addSelectedBreedsToStore(selectedBreeds));
  };

  const breeds =
    data &&
    data.map((breed) => {
      return (
        <li
          className={selectedBreeds.indexOf(value) > -1 ? "active" : ""}
          data-breed={breed}
          key={breed}
          onClick={handleClick}
        >
          {breed}
        </li>
      );
    });

  return (
    <>
      <div className="breeds-subheader">
        <h1>Breeds</h1>
        {selectedBreeds.length > 0 && (
          <button onClick={handleSelectedBreeds}>
            {" "}
            Add selections to favorites?
          </button>
        )}
      </div>
      <ul className="breeds">{breeds}</ul>
    </>
  );
};

export default Breeds;
