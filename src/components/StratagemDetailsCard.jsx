import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { StratagemContext } from "../context/stratagem.context";
import { AuthContext } from "../context/auth.context";

function StratagemDetailsCard({ stratagem }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteStratagem } = useContext(StratagemContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      {!toggleEdit && ( // Render only if toggleEdit is false
        <div className="flex flex-col items-center md:flex-row w-[80vw] h-[80vh] bg-zinc-800 border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700">
          <img
            className="object-cover rounded-t-lg h-full md:w-[25%] md:rounded-none md:rounded-s-lg"
            src={stratagem.image}
            alt=""
          />
          <div className="flex flex-col p-4 items-center leading-normal w-full md:w-[75%] ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {stratagem.name}
            </h5>
            <p className="mb-3 font-Insignia Regular text-gray-700 dark:text-gray-400">
              <span className="font-semibold">Name:</span> {stratagem.name}{" "}
              <br />
              <span className="font-semibold">Code:</span> {stratagem.code}{" "}
              <br />
              <span className="font-semibold">Damage:</span> {stratagem.damage}{" "}
              <br />
              <span className="font-semibold">Cooldown:</span>{" "}
              {stratagem.cooldown} <br />
              <span className="font-semibold">Description:</span>{" "}
              {stratagem.description} <br />
              <span className="font-semibold">Uses:</span> {stratagem.uses}{" "}
              <br />
              <span className="font-semibold">Explosions per use:</span>{" "}
              {stratagem.amount} <br />
              <span className="font-semibold">Rank required:</span>{" "}
              {stratagem.rank} <br />
              <span className="font-semibold">Armor Penetration:</span>{" "}
              {stratagem.penetration} <br />
              <span className="font-semibold">Requisition Cost:</span>{" "}
              {stratagem.cost} <br />
            </p>
            {user && user.isAdmin && (
              <div className="flex gap-2">
                <button
                  className="btn text-white"
                  onClick={() => setToggleEdit(!toggleEdit)}
                >
                  Edit
                </button>
                <button
                  className="btn bg-amber-700"
                  onClick={() => deleteStratagem(stratagem._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {toggleEdit && (
        <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
    </>
  );
}

export default StratagemDetailsCard;
