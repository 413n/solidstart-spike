import { For, Suspense } from "solid-js";
import { useRouteData, createRouteData } from "solid-start";

type Student = { name: string; house: string };

export function routeData() {
  return createRouteData(async () => {
    await new Promise((r) => setTimeout(r, 2000));

    return [
      { name: "Harry Potter", house: "Gryffindor" },
      { name: "Hermione Granger", house: "Gryffindor" },
      { name: "Ron Weasley", house: "Gryffindor" },
      { name: "Draco Malfoy", house: "Slytherin" },
    ] as Student[];
  });
}

export default function Page() {
  const students = useRouteData<typeof routeData>();

  return (
    <Suspense fallback={<p class="text-blue-500">Loading...</p>}>
      <ul>
        <For each={students()}>{(student) => <li>{student.name}</li>}</For>
      </ul>
    </Suspense>
  );
}
