import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import useForm from "./hook";
import { RATINGS } from "./SearchForm.constants";
import css from "./SearchForm.module.css";

export default function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
}) {
  const navigate = useNavigate();

  const { keyword, rating, changeKeyword, changeRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      navigate(`/search/${keyword}/${rating}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <Button>Buscar</Button>
      <input
        className={css["c-search-input"]}
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select
        className={css["c-search-list"]}
        value={rating}
        onChange={handleChangeRating}
      >
        <option disabled>Rating: </option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}
