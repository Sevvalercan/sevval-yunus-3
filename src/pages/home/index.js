import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "../../../component/home/Slider";

export default function index() {
  return (
    <div>
      <Slider />
      <MyCards />
    </div>
  );
}

const MyCards = () => {
  return (
    <div className="card-container mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card Başlığı 1</Card.Title>
          <Card.Text>
            Bu birinci kartın metin içeriğidir. Burada kartın içeriği veya
            açıklaması olabilir.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card Başlığı 2</Card.Title>
          <Card.Text>
            Bu ikinci kartın metin içeriğidir. Burada kartın içeriği veya
            açıklaması olabilir.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card Başlığı 3</Card.Title>
          <Card.Text>
            Bu üçüncü kartın metin içeriğidir. Burada kartın içeriği veya
            açıklaması olabilir.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
