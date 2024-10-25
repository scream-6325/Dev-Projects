import { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [moreImages, setMoreImages] = useState([]);

  const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const fetchData = async () => {
    try {
      const url = new URL('/api/getData', backendURL);
      const response = await fetch(url);
      const myData = await response.json();
      setData(myData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const breedImages = async (id) => {
    try {
      const url = new URL(`/api/breedimages/${id}`, backendURL);
      const response = await fetch(url);
      const myData = await response.json();
      setMoreImages(myData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <DataContext.Provider value={{ data, moreImages, fetchData, breedImages }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.object,
};

export default DataProvider;
