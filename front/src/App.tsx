import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner"; 
import { TooltipProvider } from "@/components/ui/tooltip"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Index from "./pages/Index"; 
import Shop from "./pages/Shop"; 
import Login from "./pages/Login"; 
import Registration from "./pages/Registration"; 
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";  

const queryClient = new QueryClient();  

const App = () => (   
  <QueryClientProvider client={queryClient}>     
    <TooltipProvider>       
      <Toaster />       
      <Sonner />       
      <BrowserRouter>         
        <Routes>           
          <Route path="/" element={<Index />} />           
          <Route path="/boutique" element={<Shop />} /> 
          <Route path="/produit/:id" element={<Product />} />          
          <Route path="/connexion" element={<Login />} />           
          <Route path="/inscription" element={<Registration />} />           
          <Route path="*" element={<NotFound />} />         
        </Routes>       
      </BrowserRouter>     
    </TooltipProvider>   
  </QueryClientProvider> 
);  

export default App;