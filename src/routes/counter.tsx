import Counter from "~/components/Counter";

export default function About() {
  return (
    <main class="mx-auto text-slate-700 p-4 flex flex-col gap-6">
      <h1 class="text-center text-3xl text-slate-900 font-bold uppercase my-16">
        Counter
      </h1>

      <Counter />

      <p>
        This is a simple counter page. Every second the counter is increased.
      </p>
    </main>
  );
}
