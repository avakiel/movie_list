import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Movies } from "./Pages/Movies";
import { Future } from "./Pages/Future";
import { Favourites } from "./Pages/Favourites";
import { Watched } from "./Pages/Watched";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App" bg="green.800" height="100vh">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/future" element={<Future />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </main>
    </Box>
  );
}

export default App;
