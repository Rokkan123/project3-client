import React, { useContext } from "react";
import CreateForm from "../components/CreateForm";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreateStratagem() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    user && user.isAdmin ? null : navigate("/");
  }, [user]);
  return (
    <div className="center">
      <CreateForm />
    </div>
  );
}

export default CreateStratagem;
