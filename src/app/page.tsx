import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-4xl font-bold">TP Auth</h1>
      
      <div className="flex gap-4">
        <Link href="/login" className="bg-teal-700 text-white px-6 py-2 rounded">
          Se connecter
        </Link>
        <Link href="/register" className="border border-teal-700 px-6 py-2 rounded">
          S&apos;inscrire
        </Link>
      </div>
    </main>
  );
}