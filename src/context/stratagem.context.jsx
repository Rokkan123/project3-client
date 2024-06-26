import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StratagemContext = createContext();

function StratagemProvider({ children }) {
  const [stratagems, setStratagems] = useState(null);
  const navigate = useNavigate();

  const getAllStratagems = async () => {
    try {
      const response = await api.get("/stratagems/all");

      setStratagems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createStratagem = async (body) => {
    try {
      const response = await api.post("/stratagems", body);

      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created succesfully");

        getAllStratagems();
        navigate("/stratagems");
      }
    } catch (error) {
      console.log("error while creating the stratagem", error);
    }
  };

  const updateStratagem = async (body, id, toggle) => {
    try {
      const response = await api.put("/stratagems/" + id, body);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was updated succesfully");
        getAllStratagems();
        toggle(false);
      }
    } catch (error) {
      toast.error("Error updating this stratagem");
      console.log(error);
    }
  };

  const deleteStratagem = async (id) => {
    try {
      const check = confirm("Are you sure you want to delete this stratagem?");
      if (check) {
        const response = await api.delete("/stratagems/" + id);

        if (response.status === 200) {
          toast.success("stratagem deleted succesfully");
          getAllStratagems();

          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStratagems();
  }, []);
  return (
    <StratagemContext.Provider
      value={{
        stratagems,
        createStratagem,
        updateStratagem,
        deleteStratagem,
        getAllStratagems,
      }}
    >
      {children}
    </StratagemContext.Provider>
  );
}

export { StratagemContext, StratagemProvider };
