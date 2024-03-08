"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { DialogCloseButton } from "@/components/ui/dialogConfirmationDelete"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy } from "lucide-react"

export type Alumno = {
    id: string
    cedula: string
    nombres: string
    apellidos: string
    grupo: CharacterData
    num_practicas: number
}

export const columns: ColumnDef<Alumno>[] = [
    {
    id: "actions",
    cell: ({ row }) => {
        const property = row.original

        //Manejar acciones

        // Update


        // Delete
        async function deleteAlumno(id: number) {
            console.log("Deleting Alumno with ID:", id);
            const token = localStorage.getItem("token");
            const dataResponse = await fetch(
                "http://192.168.40.2:8000/api/alumnos/" + id + "/",
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await dataResponse.json();
            return ;
        }    

        return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menú</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(property.id)}
                >
                    Copiar ID del Alumno
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem >Actualizar Detalles del Alumno</DropdownMenuItem>
                <DialogTrigger asChild>
                    <DropdownMenuItem>
                    <span>Borrar Alumno</span>
                    </DropdownMenuItem>
                </DialogTrigger>
                </DropdownMenuContent>
                <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>¿Está Seguro?</DialogTitle>
                    <DialogDescription>
                        Esta acción no se puede revertir. ¿Eliminar a <b> {row.getValue('nombres')} {row.getValue('apellidos')} </b> con cédula <b> {row.getValue('cedula')}? </b> 
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" onClick={(e:any) => deleteAlumno(parseInt(property.id))}> {/*Diferentes IDs*/}
                            Borrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
            </DropdownMenu>
        </Dialog>
        )
    },
    },
    {
        accessorKey: "cedula",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Cédula
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
            },
    },
    {
        accessorKey: "nombres",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Nombres
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
            },
    },
    {
        accessorKey: "apellidos",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Apellidos
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
            },
    },
    {
        accessorKey: "grupo",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Grupo
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
            },
    },
    {
        accessorKey: "num_practicas",
        header: ({ column }) => {
            return (
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Número de Prácticas
                <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
            }
    }
]
