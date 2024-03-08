import { LoginForm } from "@/components/ui/loginForm";
import { ModeToggle } from "@/components/ui/modeToggle";
export default function Home() {
  return (

      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        
        <div className="absolute top-10 right-10">
          <ModeToggle />
        </div>
        <LoginForm />
      </main>
  );
}