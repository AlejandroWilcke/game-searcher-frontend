import Game, { IGame } from '@/components/GameCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getGameById } from '../api/game';

export default function GameDetail(){
  const router = useRouter();
  const { id } = router.query;
  const [game, setGame] = useState<IGame>();

  useEffect(() => {
    if(!id){
      return;
    }
    (async function() {
        const result = await getGameById(String(id));
        setGame(result);
    })()
  }, [id]);

  return(
    <div className='flex justify-center'>
      {game && <Game {...game}/>}
    </div>
  )
}