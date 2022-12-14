import { For } from "solid-js";
import { useRouteData, createRouteData } from "solid-start";

type Student = { name: string; house: string };

export function routeData() {
  // interface {
  //     state: "pending";
  //     loading: true;
  //     error: undefined;
  //     latest: undefined;
  //     (): undefined;
  // }

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
  console.log("students", students);

  return (
    <ul>
      <For each={students()}>{(student) => <li>{student.name}</li>}</For>
    </ul>
  );
}
