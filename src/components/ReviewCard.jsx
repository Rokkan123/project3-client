import toast from "react-hot-toast";
import api from "../services/api";
import { useContext } from "react";
import { StratagemContext } from "../context/stratagem.context";
import { useNavigate } from "react-router-dom";

function ReviewCard({ review, user }) {
  const { getAllStratagems } = useContext(StratagemContext);
  const handleDelete = async (reviewId) => {
    try {
      const check = confirm("Are you sure you want to delete your review?");
      if (check) {
        const response = await api.delete("/review/" + reviewId);

        if (response.status === 200) {
          toast.success("Your review was deleted");
          getAllStratagems();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-stone-700 w-[50vw]">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={review.creator.image}
              alt="missing image"
            />
            {review.creator.username} {"⭐".repeat(review.rating)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(review.createdAt).toLocaleString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-300">{review.review}</p>
      {user && user._id === review.creator._id && (
        <button onClick={() => handleDelete(review._id)}>🗑️</button>
      )}

      <div className="text-end text-color-yellow-400">
        <button
          className="regularhover1 mt-6 "
          onClick={async function likeComment() {
            try {
              const id = review._id;
              const response = await api.patch(`/review/like/${id}`);
              console.log(response);
              toast.success("Liked/Unliked");
            } catch (error) {
              console.log(error);
            }
            window.location.reload(false);
          }}
        >
          👍
        </button>{" "}
        {review.likes ? (
          <span className="text-white">{review.likes.length}</span>
        ) : (
          <span className="text-white">0</span>
        )}{" "}
        <button
          className="navbutton"
          onClick={() => {
            navigate(`/traitor`);
          }}
        >
          👎
        </button>
        <span className="text-white">0</span>
      </div>
    </article>
  );
}

export default ReviewCard;
