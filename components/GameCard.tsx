import Image from "next/image";
import { useRouter } from 'next/navigation';

export interface IGame{
  id: number;
  name: string;
  year: number;
  description: string;
  rating: number;
  imageFileName: string;
}

export default function GameCard({ id, name, year, description, rating, imageFileName }: IGame){
  const BASE_URL = process.env.NEXT_PUBLIC_GAMES_IMAGES;
  const { push } = useRouter();
  const renderStars = (rating: number) => {
    return new Array(rating).fill(0).map( (p, i) => <span key={i}>&#10031;</span>);
  }
  return(
    <li 
      className="rounded-lg bg-gray-700/30 p-6 cursor-pointer list-none max-w-5xl"
      onClick={() => push(`/games/${id}`)}
    >
      <div className="w-full relative pt-[70%] mb-6">
        <Image
          src={`${BASE_URL}${imageFileName}`}
          alt="Not found"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full top-0 left-0 object-cover rounded-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150"
        />
      </div>
      <p className="mb-4">{name}, {year}</p>
      <p className="mb-4">{description}</p>
      <p className="text-yellow-100 cursor-default text-2xl">{renderStars(rating)}</p>
    </li>
  )
}