import { useNavigate } from "solid-start";

export default function DynamicPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(`/dynamic/${Math.floor(Math.random() * 1000)}`)}
      >
        Go to another random page
      </button>
    </div>
  );
}
