import React from "react";
import { StratagemContext } from "../context/stratagem.context";
import StratagemCard from "../components/StratagemCard";
import { useContext } from "react";

function StratagemList() {
  const { stratagems } = useContext(StratagemContext);
  return (
    <div className="center gap-4 m-6 flex-wrap">
      {stratagems ? (
        stratagems.map((stratagem) => <StratagemCard {...stratagem} />)
      ) : (
        <p>Loading Democracy...</p>
      )}
    </div>
  );
}

export default StratagemList;
