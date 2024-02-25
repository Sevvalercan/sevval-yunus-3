import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function DetailPage() {
  const [photo, setPhoto] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id === undefined) {
      // id değeri undefined ise, sayfayı yenileme veya farklı bir işlem yap
      console.log('id is undefined');
    } else {
      // id değeri tanımlı ise, istenilen işlemi yap
      console.log('id:', id);
    }
  
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        console.log(response);
        const firstThreePhotos = response.data;
        setPhoto(firstThreePhotos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div
      className="h-100 d-flex flex-column justify-content-between"
      style={{ minHeight: "80vh" }}
    >
      {photo ? (
        <div>
          <img src={photo.url} alt={photo.title} style={{ maxWidth: "30%" }} />
          <h2>{photo.title}</h2>
          <p>{photo.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
