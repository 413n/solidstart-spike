import { Suspense } from "solid-js";
import { useNavigate, useParams } from "solid-start";
import { createServerData$ } from "solid-start/server";

export default function DynamicPage() {
  const params = useParams();
  const navigate = useNavigate();

  const getServerSideProps = createServerData$((_, { request }) => {
    console.log("This is server-side", request.url);

    return { id: Math.floor(Math.random() * 1000) };
  });

  return (
    <div>
      <p>Outlet: Page Id: {params.id}</p>
      <p>Server data: {getServerSideProps()?.id}</p>
      <button
        onClick={() => navigate(`/dynamic/${Math.floor(Math.random() * 1000)}`)}
      >
        Go to another random page
      </button>
    </div>
  );
}
