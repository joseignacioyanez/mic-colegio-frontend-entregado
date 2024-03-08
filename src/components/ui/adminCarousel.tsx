"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import AdminCarouselCard from "./adminCarouselCard";
import { useEffect, useState } from "react";


export function AdminCarousel() {
    const [userGroup, setUserGroup] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const group = localStorage.getItem('userGroup');
            setUserGroup(group);
        }
    }, []);

    const canAdminAlumnos = () => {if (userGroup === 'administradores' || 'gestores' || 'consultores') return true; else return false;}
    const canAdminProfesores = () => {if (userGroup === 'administradores' || 'gestores' || 'consultores') return true; else return false;}
    const canAdminExamenesTeoricos = () => {if (userGroup === 'administradores') return true; else return false;}
    const canAdminPracticas = () => {if (userGroup === 'administradores') return true; else return false;}
    const canAdminAlumnoPracticas = () => {if (userGroup === 'administradores') return true; else return false;}
    const canAdminAlumnoExamenTeorico = () => {if (userGroup === 'administradores') return true; else return false;}
    const canAdminProfesoresDisenioPracticas = () => {if (userGroup === 'administradores') return true; else return false;}


    return (
        <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselContent className="-ml-1">
                {canAdminAlumnos() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Alumnos' icon='alumnos' href='/admin/alumnos/'/> </CarouselItem>}
                {canAdminProfesores() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Profesores' icon='profesores' href='/admin/profesores/'/> </CarouselItem>}
                {canAdminExamenesTeoricos() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Exámenes Teóricos' icon='examenesTeoricos' href='/admin/examenesTeoricos/'/> </CarouselItem>}
                {canAdminPracticas() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Prácticas' icon='practicas' href='/admin/practicas/'/> </CarouselItem>}
                {canAdminAlumnoPracticas() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Alumno & Práctica' icon='alumnoPractica' href='/admin/alumnoPractica/'/> </CarouselItem>}
                {canAdminAlumnoExamenTeorico() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Alumno & Examen Teórico' icon='alumnoExamenTeorico' href='/admin/alumnoExamenTeorico/'/> </CarouselItem>}
                {canAdminProfesoresDisenioPracticas() && <CarouselItem className="basis-1/5"> <AdminCarouselCard title='Profesor & Diseño de Práctica' icon='profesorDisenioPractica' href='/admin/profesorDisenioPractica/'/> </CarouselItem>}
            </CarouselContent>
            <CarouselNext />
        </Carousel>
    )
}