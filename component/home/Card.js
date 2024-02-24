
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function CardComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const firstThreePosts = response.data.slice(0, 3);
        setPosts(firstThreePosts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="card-container mt-5">
      {posts.map((post) => (
        <Card key={post.id} style={{ width: '18rem', marginRight: '10px' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            
            {/* Detay sayfasına yönlendiren bağlantı */}
            <Link href={`/home/${post.id}`}>
            <Button variant="primary">Detay Gör</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}


