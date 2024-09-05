import Async from 'react-async';
import { useFetch } from "react-async";
import Table from 'react-bootstrap/Table';



import { useState, useEffect } from 'react';
const Load = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>

      {photos.slice(0, 5).map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>
  );
};
export default Load;
