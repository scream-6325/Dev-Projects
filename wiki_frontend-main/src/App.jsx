import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import TopTenBreed from "./pages/TopTenBreed";
import { Routes, Route } from "react-router-dom";
import DataContext from "./context/DataContext";
function App() {
  const { fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='bg-[#FFF] min-h-[100lvh]'>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='/top10' element={<TopTenBreed />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
