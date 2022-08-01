import {
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Main from "../Main/Main";
import Addition from "../Addition/Addition";
import DetailedInfo from "../DetailedInfo/DetailedInfo";
import "./style.scss";
import { useState } from "react";
import { backend, front } from "../../shared/constants";

const App = () => {
  const [isShowtask, setShowTask] = useState(false);
  const nav = useNavigate();

  return (
    <div className='App'>
      {useLocation().pathname !== "/" && (
        <Link className='toMain' to={"/"}>
          На главную
        </Link>
      )}
      {isShowtask ? (
        <div className='podlozhka'>
          <i title='Закрыть инфо' onClick={() => setShowTask(false)}>
            <CancelTwoToneIcon />
          </i>
          <h2>Задача</h2>
          <p>{front}</p>
          <p>{backend}</p>
        </div>
      ) : (
        <i title='Задача' onClick={() => setShowTask(true)}>
          <HelpTwoToneIcon />
        </i>
      )}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:id' element={<DetailedInfo />} />
        <Route path='/book' element={<Addition />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      {useLocation().pathname !== "/" && (
        <button
          onClick={() => {
            nav(-1);
          }}>
          Назад
        </button>
      )}
    </div>
  );
};

export default App;
