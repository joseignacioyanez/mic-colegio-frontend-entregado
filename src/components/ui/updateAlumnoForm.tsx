"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Schema ZOD para validacion
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(3, {
        message: "Password must be at least 3 characters.",
    }),
})


export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>, e: any) {
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.40.2:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            // Store JWT token securely (e.g., local storage or cookie)
            localStorage.setItem('token', data.access);

            // Fetch user information
            const userResponse = await fetch('http://192.168.40.2:8000/api/user-group/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${data.access}`,
                },
            });
            const userData = await userResponse.json();

            // Store user group or relevant information
            console.log("Grupo del Usuario:" + userData[0].name);
            localStorage.setItem('userGroup', userData[0].name);

            // Redirect to protected route or do something else
            router.push('/admin');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="user123" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Use el usuario indicado por el Administrador
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="pass123" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-center">
                    <Button className="" type="submit">Iniciar Sesión</Button>
                </div>

            </form>
        </Form>
    )
}
