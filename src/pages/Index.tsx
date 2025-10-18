import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleDonate = () => {
    window.open('https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79197589631', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFD700] to-[#FF8C00] p-6">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="font-heading font-black text-6xl md:text-8xl text-black tracking-tight leading-none animate-scale-in">
          ЗАДОНАТЬ<br />АВТОРУ
        </h1>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button
            onClick={handleDonate}
            size="lg"
            className="bg-black hover:bg-black/90 text-white font-semibold text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-black/40"
          >
            <Icon name="Heart" size={28} className="mr-3" />
            ЗАДОНАТИТЬ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;