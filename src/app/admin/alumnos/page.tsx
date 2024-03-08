"use client"

import { useEffect, useState } from "react"
import { Alumno, columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { ModeToggle } from "@/components/ui/modeToggle";


// Define an async function to fetch data
const fetchData = async (setToken: (token: string | null) => void, setData: (data: Alumno[]) => void) => {
    try {
        const token = localStorage.getItem("token");
        setToken(token);
        console.log("Token fetched:", token);
        const dataResponse = await fetch(
            "http://192.168.40.2:8000/api/alumnos/",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await dataResponse.json();
        console.log("Data fetched:", data);
        setData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


export default function DemoPage() {
    const [data, setData] = useState<Alumno[]>([]);
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        fetchData(setToken, setData);
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 ">
            <div className="absolute top-10 left-10">
                <Button asChild>
                    <Link href="/admin">
                        <IoMdArrowBack />
                    </Link>
                </Button>
            </div>
            <div className="absolute top-10 right-10">
                <ModeToggle />
            </div>
            <h1 className="text-3xl font-bold mb-10">Administrar Alumnos</h1>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}
