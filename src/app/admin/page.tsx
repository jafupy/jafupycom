"use client";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const router = useSearchParams();
  if (router.getAll("login_successful")) {
    return <LoggedInPage />;
  }

  return (
    <div>
      Admin Page
      {
        <pre>
          <code>{JSON.stringify(router, null, 2)}</code>
        </pre>
      }
    </div>
  );
}

function LoggedInPage() {
  return (
    <div className="mx-auto ">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
        Logged in
      </h1>
    </div>
  );
}
