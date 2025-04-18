import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from './api/rawg';
import GameList from './components/GamesList';
import './App.css'

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <GameList games={data.results} />
    </>
  );
}

export default App
