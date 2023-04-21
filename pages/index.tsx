import { useAppSelector } from "@/redux/hooks";
import GameList from "@/components/GameList";

export default function Home() {
  const games = useAppSelector(state => state.games);
  return (
    <main>
      <h1 className='text-2xl mb-6'>Games</h1>
      <GameList games={games} />
    </main>
  )
}
