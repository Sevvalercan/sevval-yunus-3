import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, Button, Spinner } from "react-bootstrap";

export default function MyPhoto() {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const firstThreePhotos = response.data;
        setPhoto(firstThreePhotos);
        setLoading(false); // Veri yüklendiğinde loading durumunu false yap
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Hata durumunda da loading durumunu false yap
      });
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        {loading ? ( // Veri yüklenirken loading durumu
          <div className="col-12 text-center">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        ) : (
          photo.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={item.url} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Link href={`/photos/${item.id}`}>
                    <Button variant="primary">Detay Gör</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
