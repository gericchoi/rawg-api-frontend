import React from 'react';
import { Card, Row, Col, Container, Carousel } from 'react-bootstrap';

export default function GameList({ games }) {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Top 10 Games By Rawg.io</h1>
      <p className="text-muted mb-4">
        January 1, 2025 - March 30, 2025
      </p>
      {[...games]
        .sort((a, b) => b.rating - a.rating)
        .map((game, index) => (
          <Card key={game.id} className="mb-3 shadow-sm">
            <Row className="g-0">
              <Col md={3}>
                <Card.Img
                  src={game.background_image}
                  alt={game.name}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <span className="rank">{`Top ${index + 1}`}</span> {game.name}
                  </Card.Title>
                  <Card.Text>
                    Released: <strong>{game.released}</strong>
                  </Card.Text>
                  <Card.Text>
                    Platforms:{" "}
                    {game.platforms.map((p) => p.platform.name).join(", ")}
                  </Card.Text>
                  <Card.Text>
                    Rating: <strong>{game.rating}</strong>
                  </Card.Text>
                  <Card.Text>
                    Genres:{" "}
                    {game.genres.map((p) => p.name).join(", ")}
                  </Card.Text>
                  <Card.Text>
                    Available at:{" "}
                    {game.stores.map((p) => p.store.name).join(", ")}
                  </Card.Text>

                  {game.short_screenshots && game.short_screenshots.length > 0 && (
                    <Carousel>
                      {game.short_screenshots.map((screenshot) => (
                        <Carousel.Item key={screenshot.id}>
                          <img
                            className="d-block w-100"
                            src={screenshot.image}
                            alt={`Screenshot of ${game.name}`}
                            style={{ maxHeight: '400px', objectFit: 'contain' }} // Resizing images
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
}
