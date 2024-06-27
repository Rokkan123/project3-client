import { useContext, useState } from "react";
import { StratagemContext } from "../context/stratagem.context";

function CreateForm() {
  const [stratagemInfo, setStratagemInfo] = useState({
    name: "",
    code: "",
    damage: 0,
    cooldown: 0,
    description: "",
    uses: 0,
    amount: 0,
    rank: "",
    penetration: "",
    cost: 0,
    image:
      "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/OrbitalGatlingicon.png/",
  });
  const { createStratagem } = useContext(StratagemContext);
  const handleChange = (e) => {
    setStratagemInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-950 rounded-xl overflow-hidden shadow-lg bg-center mt-10">
      <div className="p-6">
        <h2 className="center text-xl font-semibold text-yellow-400 mb-2">
          Create Stratagem
        </h2>
        <div className="flex">
          <div className="w-2/3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createStratagem(stratagemInfo);
              }}
              className="center flex-col border-2 border-stone-300 m-10 rounded-lg w-[20vw] text-white mb-4"
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={stratagemInfo.name}
              />

              <label htmlFor="code">Code</label>
              <input
                type="text"
                name="code"
                onChange={handleChange}
                value={stratagemInfo.code}
              />

              <label htmlFor="damage">Damage</label>
              <input
                type="number"
                name="damage"
                onChange={handleChange}
                value={stratagemInfo.damage}
              />

              <label htmlFor="cooldown">Cooldown</label>
              <input
                type="number"
                name="cooldown"
                onChange={handleChange}
                value={stratagemInfo.cooldown}
              ></input>

              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={stratagemInfo.description}
                className="w-44"
              />
              <label htmlFor="uses">Uses</label>
              <input
                type="number"
                name="uses"
                onChange={handleChange}
                value={stratagemInfo.uses}
              />

              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                onChange={handleChange}
                value={stratagemInfo.amount}
              />

              <label htmlFor="rank">Rank</label>
              <select
                name="rank"
                onChange={handleChange}
                value={stratagemInfo.rank}
                className="w-48"
              >
                <option value="None"></option>
                <option value="Cadet">Cadet</option>
                <option value="Space Cadet">Space Cadet</option>
                <option value="Sergeant">Sergeant</option>
                <option value="Chief">Chief</option>
                <option value="Space Chief Prime">Space Chief Prime</option>
                <option value="Death Captain">Death Captain</option>
              </select>

              <label htmlFor="penetration">Armor Penetration</label>
              <select
                name="penetration"
                onChange={handleChange}
                value={stratagemInfo.penetration}
                className="w-48"
              >
                <option value="None">None</option>
                <option value="Light Penetration">Light Penetration</option>
                <option value="Medium Penetration">Medium Penetration</option>
                <option value="Heavy Penetration">Heavy Penetration</option>
              </select>

              <label htmlFor="cost">Cost</label>
              <input
                type="number"
                name="cost"
                onChange={handleChange}
                value={stratagemInfo.cost}
              />

              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                value={stratagemInfo.image}
              />
              <br></br>

              <button type="submit" className="btn">
                create
              </button>
            </form>
          </div>

          <div className="w-1/3 ml-4"></div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
