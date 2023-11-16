'use client'
import { useRouter } from "next/navigation";


export default function ErrorPage() {
    const router = useRouter()
    router.push('/')
    return (<></>)
};
