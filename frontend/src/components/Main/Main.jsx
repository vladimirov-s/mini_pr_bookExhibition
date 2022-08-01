import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import axios from "axios";
import Book from "./Book";
import { url } from "../../shared/constants";
import "./style.scss";

const Main = () => {
  const [books, setBooks] = useState([]);
  const nav = useNavigate();

  const fetcher = async () => {
    const boks = await axios.get(url);
    setBooks(boks.data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(`${url}/${id}`);
    setBooks(books.filter((obj) => obj._id !== id));
  };

  return (
    <div className='main'>
      <button onClick={() => nav("/book")}>Добавить новую книгу</button>
      <div className='main_table'>
        {books.map((element, index) => (
          <div className='main_wrap' key={`elem${index}`}>
            <i
              className='delIcon'
              title='удалить'
              onClick={() => deleteHandler(element._id)}>
              <HighlightOffTwoToneIcon />
            </i>
            <Book element={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
