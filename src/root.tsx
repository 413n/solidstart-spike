// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./styles/root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body class="px-6">
        <Suspense>
          <ErrorBoundary>
            <div class="w-full py-2 px-4 flex flex-row items-center gap-4">
              <A class="px-2 py-1 rounded font-bold" href="/">
                HOME
              </A>
              <div class="flex flex-row items-center gap-2">
                <A
                  href="/counter"
                  class="px-2 py-1 rounded hover:bg-slate-50"
                  activeClass="!bg-slate-300"
                >
                  Counter
                </A>
                <A
                  href="/dynamic"
                  class="px-2 py-1 rounded hover:bg-slate-50"
                  activeClass="!bg-slate-300"
                >
                  Dynamic
                </A>
                <A
                  href="/dynamic/static"
                  class="px-2 py-1 rounded hover:bg-slate-50"
                  activeClass="!bg-slate-400"
                >
                  Static Outlet
                </A>
                <A href="/students" class="px-2 py-1 rounded hover:bg-slate-50">
                  Students
                </A>
              </div>
            </div>

            <div class="bg-neutral-200 rounded-lg p-2">
              <Routes>
                <FileRoutes />
              </Routes>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
