import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

export default function MyPhoto() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const firstThreePhotos = response.data.slice(0, 3);
        setPhoto(firstThreePhotos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        {photo.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
