import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react";
import { getTopGames } from "./api/game";
import { setTopGames } from "@/redux/slices/topGamesSlice";
import GameList from "../components/GameList";

export default function TopGames(){
  const dispatch = useAppDispatch();
  const topGames = useAppSelector(state => state.topGames);
  useEffect(() => {
    (async function() {
      try {
        const topGames = await getTopGames();
        dispatch(setTopGames(topGames));
      } catch (e) {
        setTopGames([]);
      }
    })();
  }, []);
  return(
    <div>
      <h1 className='text-2xl mb-6'>Top 10 games</h1>
      <GameList games={topGames} />
    </div>
  )
}