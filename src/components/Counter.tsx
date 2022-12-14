import { createEffect, createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    setInterval(() => {
      setCount(count() + 1);
    }, 500);
  });

  const doubleAmount = () => count() * 2;

  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <p class="font-medium text-slate-900">Clicks: {count()}</p>
        <p class="font-regular text-slate-500">
          Doubled amount: {doubleAmount()}
        </p>
      </div>
      <button
        class="rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 active:bg-blue-400 px-2 py-1 w-fit"
        onClick={() => setCount(count() + 1)}
      >
        Add +1
      </button>
    </div>
  );
}
