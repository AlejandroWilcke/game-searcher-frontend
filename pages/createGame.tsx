import Form from "@/components/shared/Form";
import { createGame } from "./api/game";
import { IGame } from "@/components/GameCard";
import { useState } from "react";
import ErrorScreen from "@/components/shared/ErrorScreen";

export default function CreateGame(){
  const [created, setCreated] = useState(false);
  const [creating, setCreating] = useState(true);

  const inputs = [
    {type: 'text', placeholder: "Name", required: true},
    {type: 'number', placeholder: "Year", required: true},
    {type: 'text', placeholder: "Description", required: true},
    {type: 'number', placeholder: "Rating", required: true, min: 1, max: 5},
    {type: 'file', placeholder: "Image", required: true, accept:"image/*"}
  ]

  async function onSubmit(data: IGame){
    let response = await createGame(data);
    if(response.ok){
      setCreated(true);
      setCreating(false)
    }else{
      setCreated(false);
    }
    response.ok ? setCreated(true) : setCreated(false);
  }

  const SuccessScreen = () => <h1>The game has been created successfully!</h1>

  return(
    <div>
      {creating && (
        <>
          <h1 className="text-2xl">Create game!</h1>
          <div className="flex justify-center">
            <Form
              inputs={inputs}
              onSubmit={onSubmit}
              submitText="Create"
            />
          </div>
        </>
      )}
      {!creating && !created && (
        <>
          <ErrorScreen 
            text="There was an error while creating the game, try again."
            onClick={() => setCreating(true)}
          />
        </>
      )}
      {!creating && created && <SuccessScreen />}
    </div>
  )
}
