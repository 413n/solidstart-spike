import { Outlet } from "solid-start";

export default function DynamicRoot() {
  return (
    <main class="mx-auto text-slate-700 p-4 flex flex-col gap-6">
      <h1 class="text-center text-3xl text-slate-900 font-bold uppercase my-16">
        DYNAMIC PAGE
      </h1>

      <div class="border-2 rounded-lg border-neutral-400 p-2">
        <Outlet />
      </div>
    </main>
  );
}
