import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useDebounce from "@/utils/useDebounce";
import { getGamesByQuery } from "@/pages/api/game";
import { setGames } from "@/redux/slices/gamesSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function Navbar(){
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 400);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (debouncedSearchValue) {
        getGamesByQuery(debouncedSearchValue).then((results) => {
          dispatch(setGames(results))
        });
      } else {
        dispatch(setGames([]));
      }
    },
    [debouncedSearchValue]
  );

  return(
    <nav className="flex flex-row w-screen bg-cyan-900/20 p-6 items-center align-middle">
      <div className="flex basis-1/4 justify-start gap-x-6 items-center">
        <Image
          className="rounded-full"
          src="/favicon.ico"
          alt="Not found"
          width={30}
          height={30}
        />
        <Link href="/">Game searcher</Link>
      </div>
      <div className="flex basis-3/4 justify-end gap-x-6 mr-6">
        <Link className="my-auto" href="/topGames">Top 10 games</Link>
        <Link className="my-auto" href="/createGame">Create game</Link>
        <input 
          className="p-2 rounded-lg text-sm text-black"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </nav>
  )
}