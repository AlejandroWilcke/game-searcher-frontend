const BASE_URL = process.env.NEXT_PUBLIC_GAMES_API_ENDPOINT!;

export async function getGameById(id: string){
  const URL = `${BASE_URL}/${id}`;
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getGamesByQuery(query: string){
  const URL = `${BASE_URL}?name=${query}`;
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getTopGames(){
  const URL = `${BASE_URL}/topGames`;
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createGame(game: any){
  const data = new FormData()
  data.append('file', game.image[0])
  data.append('name', game.name)
  data.append('year', game.year);
  data.append('description', game.description);
  data.append('rating', game.rating);
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: data
  });
  return response;
}