"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ComponentBooleanIcon } from "@radix-ui/react-icons";
import { Home, HomeIcon } from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { FaFileContract, FaFileInvoiceDollar } from "react-icons/fa";
import { GiModernCity, GiTeacher, GiTeamIdea } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiExamDuotone, PiStudentBold } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";


type Props = {
    title: string,
    icon: any,
    href: string
}

export default function AdminCarouselCard({ title , icon , href} : Props) {
    return (
        <Link href={href} >
            <Card className='h-[300px]'>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {icon === 'alumnos' && <PiStudentBold size={50}/>}
                    {icon === 'profesores' && <GiTeacher size={50}/>}
                    {icon === 'examenesTeoricos' && <PiExamDuotone size={50}/>}
                    {icon === 'practicas' && <IoGameControllerOutline size={50}/>}
                    {icon === 'alumnoExamenTeorico' && <><PiStudentBold size={50}/> <PiExamDuotone size={50}/> </>}
                    {icon === 'alumnoPractica' && <><PiStudentBold size={50}/> <IoGameControllerOutline size={50}/> </>}
                    {icon === 'profesorDisenioPractica' && <><GiTeacher size={50}/> <IoGameControllerOutline size={50}/> </>}
                </CardContent>
            </Card>
        </Link>
    )
}