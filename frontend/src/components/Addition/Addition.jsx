import { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { url } from "../../shared/constants";

const Addition = () => {
  const nav = useNavigate();
  const [drag, setDrag] = useState(false);
  const [files, setFile] = useState([]);
  const [bookField, setbookFields] = useState({
    title: "",
    author: "",
    pictire: [],
    description: "",
    year: "",
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".giff", ".tiff"],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  // const images = files.map((file) => (
  // <img key={file.name} src={file.preview} alt='image' />
  // ));

  const addhandler = async () => {
    console.log(files);
    try {
      await axios.post(`${url}/`, files, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // nav("/");
    } catch (err) {
      console.error(err);
    }
  };

  const dragStartHandler = (e) => {
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    setDrag(false);
  };

  return (
    <div className='addBook'>
      <label className='addBookLabel'>
        Название
        <input
          placeholder='Название'
          name='title'
          type='text'
          value={bookField.title}
          onChange={(e) => {
            setbookFields({ ...bookField, title: e.target.value });
          }}
        />
      </label>
      <label className='addBookLabel'>
        Автор
        <input
          name='author'
          type='text'
          placeholder='Автор'
          value={bookField.author}
          onChange={(e) => {
            setbookFields({ ...bookField, author: e.target.value });
          }}
        />
      </label>
      <label className='addBookLabel'>
        Описание
        <textarea
          name='description'
          type='text'
          maxLength={250}
          rows='4'
          placeholder='Описание'
          value={bookField.description}
          onChange={(e) => {
            setbookFields({ ...bookField, description: e.target.value });
          }}
        />
      </label>
      <label className='addBookLabel'>
        Год издания
        <input
          name='year'
          type='text'
          placeholder='Год'
          value={bookField.year}
          onChange={(e) =>
            setbookFields({ ...bookField, year: e.target.value })
          }
        />
      </label>
      <div
        className='addBookLabel'
        {...getRootProps()}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}>
        Картинка
        <input {...getInputProps()} />
        {drag ? (
          <div>Отпустите файлы для загрузки</div>
        ) : (
          <div>Перетащите или кликните для загрузки файлов</div>
        )}
      </div>
      <button className='addBook_button' onClick={addhandler}>
        Добавить
      </button>
    </div>
  );
};

export default Addition;
