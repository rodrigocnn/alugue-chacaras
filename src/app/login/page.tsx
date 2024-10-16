import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl">Login</h3>
          <p className="text-sm text-muted-foreground">
            Digite seu email e senha para acessar o sistema
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Senha</Label>
              </div>
              <Input type="password" placeholder="Senha" />
            </div>

            <Button> Login</Button>
            <a className="ml-auto inline-block text-sm " href="#">
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
