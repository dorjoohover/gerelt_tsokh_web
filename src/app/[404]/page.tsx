"use client";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  //   if(window !== undefined ) {
  router.push("/");
  //   }
  return <h1>not found</h1>;
}
