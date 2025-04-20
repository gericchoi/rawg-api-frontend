import axios from 'axios';

export async function fetchGames() {
  try {
    const response = await axios.get('https://rawg-api-backend.onrender.com/api/games', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("API response:", response.data); // 👈 Add this
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
}
