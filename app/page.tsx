"use client";
import Image from "next/image";
import { useState } from "react";
import { ChoiceButton } from "./components/ChoiceButton";
import { Quiz } from "./components/Quiz";

export default function Home() {
  return (
    <main className="flex text-center min-h-screen flex-col items-center justify-center m-auto w-[40%] 2xl:w-[25%]">
      <Quiz></Quiz>
    </main>
  );
}
