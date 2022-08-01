import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ element }) => {
  const { pictire, title, author, year, description, _id } = element;
  const nav = useNavigate();
  const extraInformation = (id) => {
    nav(`/details/${id}`);
  };

  return (
    <div className='book' onClick={() => extraInformation(_id)}>
      <img src={pictire} alt='' />
      <span className='book_field' onClick={() => extraInformation(_id)}>
        <b> Название:</b> {title}
      </span>
      <span className='book_field'>
        <b>Автор:</b> {author}
      </span>
      <span className='book_field'>
        <b>Год:</b> {year}
      </span>
      <span className='book_field'>
        <b>Описание:</b> {description}
      </span>
    </div>
  );
};

export default Book;
