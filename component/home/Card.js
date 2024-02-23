import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Link from 'next/link';

export default function CardComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API'den kart verilerini almak için axios kullanarak bir istek yapın
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Gelen veriyi ilk üç kartla sınırlayın
        const firstThreePosts = response.data.slice(0, 3);
        setPosts(firstThreePosts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDetailClick = (postId) => {
    // Detay sayfasına gitmek için dinamik yolu oluşturun
    const detailPageUrl = `/detay/${postId}`;
    // Oluşturulan yola yönlendirme yapın
    window.location.href = detailPageUrl;
  };

  return (
    <div className="card-container mt-5">
      {posts.map((post) => (
        
        <Card key={post.id} style={{ width: '18rem', marginRight: '10px' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>

            {/* Butona tıklandığında handleDetailClick fonksiyonunu çağırın */}
             <div className="d-flex justify-content-center">
              <button   onClick={() => handleDetailClick(post.id)}>
                Detay Gör
              </button>
             </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
