import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Données de connexion:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
   
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-elegant font-bold mb-2 text-foreground">
              Connexion
            </h1>
            <p className="text-muted-foreground">
              Accédez à votre compte pour gérer vos commandes
            </p>
          </div>

          <Card className="bg-warm-cream border-golden-amber/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-foreground">
                Bienvenue
              </CardTitle>
              <CardDescription className="text-center">
                Connectez-vous à votre compte
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link 
                    to="/mot-de-passe-oublie" 
                    className="text-sm text-golden-amber hover:text-golden-amber/80 transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-golden-amber hover:bg-golden-amber/90 text-foreground font-medium"
                >
                  Se connecter
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <Link 
                    to="/inscription" 
                    className="text-golden-amber hover:text-golden-amber/80 font-medium transition-colors"
                  >
                    Créer un compte
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>

    </div>
  );
};

export default Login;
