import Image from "next/image";
import { Inter } from "next/font/google";
import UserList from "@/components/UserList";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="max-w-5xl m-auto">
      <UserList />
    </main>
  );
}
