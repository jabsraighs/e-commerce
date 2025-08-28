import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }


    console.log("Données d'inscription:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-elegant font-bold mb-2 text-foreground">
              Inscription
            </h1>
            <p className="text-muted-foreground">
              Créez votre compte pour profiter de nos bougies artisanales
            </p>
          </div>

          <Card className="bg-warm-cream border-golden-amber/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-foreground">
                Créer un compte
              </CardTitle>
              <CardDescription className="text-center">
                Rejoignez notre communauté d'amateurs de bougies
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">Prénom</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Jean"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="pl-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Nom</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Dupont"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean.dupont..email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Téléphone (optionnel)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+33 1 23 45 67 89"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
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
                      minLength={6}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirmer le mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 pr-10 border-golden-amber/30 focus:border-golden-amber focus:ring-golden-amber"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, acceptTerms: Boolean(checked)})
                      }
                      className="border-golden-amber data-[state=checked]:bg-golden-amber"
                      required
                    />
                    <Label 
                      htmlFor="acceptTerms" 
                      className="text-sm text-foreground leading-5"
                    >
                      J'accepte les{" "}
                      <Link to="/conditions" className="text-golden-amber hover:text-golden-amber/80">
                        conditions d'utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link to="/confidentialite" className="text-golden-amber hover:text-golden-amber/80">
                        politique de confidentialité
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => 
                        setFormData({...formData, newsletter: Boolean(checked)})
                      }
                      className="border-golden-amber data-[state=checked]:bg-golden-amber"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-foreground">
                      Je souhaite recevoir les offres et nouveautés par email
                    </Label>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-golden-amber hover:bg-golden-amber/90 text-foreground font-medium"
                >
                  Créer mon compte
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Déjà un compte ?{" "}
                  <Link 
                    to="/connexion" 
                    className="text-golden-amber hover:text-golden-amber/80 font-medium transition-colors"
                  >
                    Se connecter
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

export default Registration;