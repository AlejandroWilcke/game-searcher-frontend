import GameCard, { IGame } from "./GameCard"

interface GamesListProps{
  games: IGame[];
}

export default function GameList({ games }: GamesListProps){
  return(
    <ul className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_25%)] m-auto gap-6 justify-center">
      {games.map((game, i) => {
        return <GameCard key={i} {...game} />
      })}
    </ul>
  )
}