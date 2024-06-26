import { useContext, useEffect, useState } from "react";
import { StratagemContext } from "../context/stratagem.context";
import { useParams } from "react-router-dom";

function EditForm({ toggleEdit, setToggleEdit }) {
  const [currStratagem, setCurrStratagem] = useState(null);
  const { stratagemId } = useParams();
  const { stratagems, updateStratagem } = useContext(StratagemContext);

  const handleChange = (e) => {
    setCurrStratagem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancel = () => {
    setToggleEdit(false); // Hide the edit form
  };

  useEffect(() => {
    stratagems &&
      setCurrStratagem(
        stratagems.find((stratagem) => stratagem._id === stratagemId)
      );
  }, [toggleEdit]);

  return (
    currStratagem && (
      <div className="max-w-lg mx-auto bg-gray rounded-xl overflow-hidden shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white-800 mb-2">
            Edit Stratagem
          </h2>
          <div className="flex">
            <div className="w-2/3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateStratagem(currStratagem, stratagemId, setToggleEdit);
                }}
                className="center flex-col border-2 border-stone-300  rounded-lg w-[20vw] h-full text-white mb-4"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={currStratagem.name}
                />

                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  name="code"
                  onChange={handleChange}
                  value={currStratagem.code}
                />

                <label htmlFor="damage">Damage</label>
                <input
                  type="number"
                  name="damage"
                  onChange={handleChange}
                  value={currStratagem.damage}
                />

                <label htmlFor="cooldown">Cooldown</label>
                <input
                  type="number"
                  name="cooldown"
                  onChange={handleChange}
                  value={currStratagem.cooldown}
                />

                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={currStratagem.description}
                  className="w-44"
                />

                <label htmlFor="uses">Uses</label>
                <input
                  type="number"
                  name="uses"
                  onChange={handleChange}
                  value={currStratagem.uses}
                />

                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={currStratagem.amount}
                />

                <label htmlFor="rank">Rank</label>
                <select
                  name="rank"
                  value={currStratagem.rank}
                  className="w-44"
                  onChange={handleChange}
                >
                  <option defaultValue hidden></option>
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
                  value={currStratagem.penetration}
                  className="w-44"
                  onChange={handleChange}
                >
                  <option defaultValue hidden></option>
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
                  value={currStratagem.cost}
                />

                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  onChange={handleChange}
                  value={currStratagem.image}
                />

                <button type="submit" className="btn">
                  edit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn bg-gray-400 text-white hover:bg-gray-500"
                >
                  Cancel{" "}
                </button>
              </form>
            </div>

            <div className="w-1/3 ml-4"></div>
          </div>
        </div>
      </div>
    )
  );
}

export default EditForm;
