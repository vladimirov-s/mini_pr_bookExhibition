import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../shared/constants";
import "./style.scss";

const DetailedInfo = () => {
  const id = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    pictire: "",
    description: "",
    year: "",
  });
  const fetcher = async () => {
    const book = await axios.get(`${url}/${id.id}`);
    setBook(book.data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className='detail'>
      <h2 className='detail_headText'>Детальная инвормация о книге</h2>
      <div className='detail_wrapper'>
        <div className='detail_field pic'>
          <img src={`../${book.pictire}`} alt='' />
        </div>
        <div className='detail_field'>
          <b>Название:</b>
          {book.title}
        </div>
        <div className='detail_field'>
          <b>Автор:</b> {book.author}
        </div>
        <div className='detail_field'>
          <b>Описание:</b> {book.description}
        </div>
        <div className='detail_field'>
          <b>Год выпуска:</b> {book.year}
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
