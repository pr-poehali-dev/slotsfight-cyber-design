import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  userBalance: number;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
  navigationItems: Array<{ id: string; label: string; icon: string }>;
}

const Header = ({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  userBalance,
  isLoggedIn,
  setIsLoggedIn,
  showProfile,
  setShowProfile,
  navigationItems
}: HeaderProps) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow-pulse">
              <Icon name="Zap" className="text-background" size={28} />
            </div>
            <h1 className="text-3xl font-bold glow-cyan">SLOTSFIGHT</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => setActiveSection(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg neon-border bg-background/50">
                  <Icon name="Wallet" size={20} className="text-primary" />
                  <span className="font-bold text-primary">{userBalance.toLocaleString('ru')} ₽</span>
                </div>
                <Button 
                  variant="outline" 
                  className="neon-border"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <Icon name="User" size={18} className="md:mr-2" />
                  <span className="hidden md:inline">Профиль</span>
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="neon-border"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Вход
                </Button>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hidden md:flex"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Регистрация
                </Button>
              </>
            )}
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/30">
                <div className="flex flex-col gap-4 mt-8">
                  {isLoggedIn && (
                    <div className="flex items-center gap-3 p-4 rounded-lg neon-border bg-background/50 mb-4">
                      <Icon name="Wallet" size={24} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Баланс</p>
                        <p className="font-bold text-xl text-primary">{userBalance.toLocaleString('ru')} ₽</p>
                      </div>
                    </div>
                  )}
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className="justify-start gap-3 text-lg"
                    >
                      <Icon name={item.icon as any} size={20} />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
