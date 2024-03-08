import { AdminCarousel } from "@/components/ui/adminCarousel";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/ui/loginForm";
import { ModeToggle } from "@/components/ui/modeToggle";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="absolute top-10 left-10">
                <Button asChild>
                    <Link href="/">
                        <IoMdArrowBack />
                    </Link>
                </Button>
            </div>
            <div className="absolute top-10 right-10">
                <ModeToggle />
            </div>
            <AdminCarousel />
        </main>
    );
}