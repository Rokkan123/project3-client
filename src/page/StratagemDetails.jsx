import { useContext, useEffect, useState } from "react";
import { StratagemContext } from "../context/stratagem.context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import StratagemDetailsCard from "../components/StratagemDetailsCard";

function StratagemDetails() {
  const [stratagem, setstratagem] = useState(null);
  const { stratagems } = useContext(StratagemContext);
  const { stratagemId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    stratagems &&
      setstratagem(stratagems.find((curr) => curr._id === stratagemId));
  }, [stratagems]);
  return (
    <div className="center flex-col gap-6 mb-8">
      <h2 className="text-yellow-400 drop-shadow-[0_8.2px_5.2px_rgba(0,0,0,0.8)] text-3xl font-Insignia Regular m-5">
        Stratagem Details
      </h2>
      {stratagem ? (
        <StratagemDetailsCard stratagem={stratagem} />
      ) : (
        <p>Loading</p>
      )}
      {!user || !user.isAdmin ? (
        <p>
          <Link
            to="/login"
            className="hover:text-slate-700 hover:scale-110 transition-all text-yellow-500"
          >
            Become a Super Citizen
          </Link>{" "}
          to leave a review.
        </p>
      ) : (
        <ReviewForm />
      )}

      {stratagem && stratagem.reviews.length ? (
        stratagem.reviews.map((review) => (
          <ReviewCard review={review} user={user} />
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
}

export default StratagemDetails;
