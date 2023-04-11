import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { PageContainer } from "./styles/base/PageContainer";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

export default App;
