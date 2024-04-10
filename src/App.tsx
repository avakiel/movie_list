import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Movies } from "./Pages/Movies";
import { ForFuture } from "./Pages/ForFuture";
import { Favourites } from "./Pages/Favourites";
import { Watched } from "./Pages/Watched";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="future" element={<ForFuture />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
