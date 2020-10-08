import React from 'react';
import { FaChevronRight, FaSearch } from 'react-icons/fa';

import { Container, Title, SearchContainer, Cards, Card } from './styles';

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Search Countries</Title>

      <SearchContainer>
        <input type="search" placeholder="Type a country..." />

        <button type="button">
          <FaSearch />
        </button>
      </SearchContainer>

      <Cards>
        {cards.map(i => (
          <Card key={`card-${i}`}>
            <span role="img" aria-label="Brazil flag">
              🇧🇷
            </span>

            <div>
              <h2>Brazil</h2>

              <p>São Paulo</p>
            </div>

            <FaChevronRight role="img" aria-label="Right icon" />
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Dashboard;
