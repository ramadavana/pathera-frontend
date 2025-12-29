import Link from "next/link";
import { BaseButton } from "../BaseButton";

export default function Navbar() {
  return (
    <div className="container mx-auto flex w-full max-w-7xl items-center justify-between py-4">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Path</span>
        <span className="text-secondary">era</span>
      </h1>

      <div className="flex items-center gap-2">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
