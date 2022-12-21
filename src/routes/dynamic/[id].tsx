import {
  RouteDataArgs,
  useNavigate,
  useParams,
  useRouteData,
} from "solid-start";
// import { createRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async ([, id]) => {
      const newId = Math.floor(Math.random() * 1000);
      console.log("INSIDE ROUTE DATA. Param ID:", id, "Generated ID:", newId);

      return { newId };
    },
    { key: () => ["dynamic", params.id] }
  );
}

export default function DynamicPage() {
  const data = useRouteData<typeof routeData>();
  const params = useParams();
  const navigate = useNavigate();

  const newId = () => data()?.newId;
  console.warn("newId", newId());

  return (
    <div>
      <p>Outlet: Page Id: {params.id}</p>
      <p>Next id: {newId()}</p>
      <button
        class="bg-blue-300 px-2 py-1 leading-tight rounded mt-2"
        onClick={() => navigate(`/dynamic/${newId()}`)}
      >
        Navigate next to {newId()}
      </button>
    </div>
  );
}
