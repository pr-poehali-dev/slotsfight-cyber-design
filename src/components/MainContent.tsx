import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  featuredGames: Array<{
    id: number;
    name: string;
    jackpot: number;
    hot: boolean;
    provider: string;
    players: number;
    rating: number;
    minBet: number;
  }>;
  tournaments: Array<{
    id: number;
    name: string;
    prize: string;
    players: number;
    endsIn: string;
  }>;
  bonuses: Array<{
    id: number;
    title: string;
    description: string;
    code: string;
    icon: string;
  }>;
  leaderboard: Array<{
    rank: number;
    player: string;
    wins: number;
    amount: string;
  }>;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  setActiveSection: (section: string) => void;
  setSelectedGame: (id: number) => void;
}

const MainContent = ({
  featuredGames,
  tournaments,
  bonuses,
  leaderboard,
  isLoggedIn,
  setIsLoggedIn,
  setActiveSection,
  setSelectedGame
}: MainContentProps) => {
  return (
    <>
      <section className="mb-16 relative overflow-hidden rounded-2xl neon-border p-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="relative z-10 text-center">
          <Badge className="mb-4 bg-accent text-white animate-float">
            🎰 Самая горячая площадка 2026
          </Badge>
          <h2 className="text-6xl font-bold mb-6 glow-cyan">
            Добро пожаловать в будущее гемблинга
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Погрузитесь в мир киберспорта и слотов. Выигрывайте джекпоты, участвуйте в турнирах и получайте эксклюзивные бонусы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 animate-glow-pulse"
              onClick={() => {
                if (!isLoggedIn) setIsLoggedIn(true);
                setActiveSection('games');
              }}
            >
              <Icon name="Rocket" className="mr-2" />
              Начать играть
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="neon-border-pink text-lg px-8 py-6"
              onClick={() => {
                if (!isLoggedIn) setIsLoggedIn(true);
                setActiveSection('promo');
              }}
            >
              <Icon name="Gift" className="mr-2" />
              Получить бонус
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold glow-purple">🔥 Горячие игры</h3>
          <Button variant="link" className="text-primary">
            Смотреть все
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <Card 
              key={game.id} 
              className="group hover:scale-105 transition-all duration-300 cursor-pointer neon-border bg-card/50 backdrop-blur-sm"
              onClick={() => setSelectedGame(game.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl glow-cyan">{game.name}</CardTitle>
                  {game.hot && (
                    <Badge className="bg-accent text-white animate-pulse">HOT</Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {game.provider}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Gamepad2" size={48} className="text-primary/50 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs bg-background/70 px-2 py-1 rounded">
                    <Icon name="Users" size={12} className="text-primary" />
                    <span>{game.players}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 text-xs bg-background/70 px-2 py-1 rounded">
                    <Icon name="Star" size={12} className="text-accent" />
                    <span>{game.rating}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Джекпот</p>
                      <p className="text-2xl font-bold text-primary">₽{game.jackpot.toLocaleString('ru')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Мин. ставка</p>
                      <p className="text-lg font-semibold">₽{game.minBet}</p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent group-hover:shadow-lg group-hover:shadow-primary/50">
                    <Icon name="Play" size={16} className="mr-2" />
                    Играть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold glow-purple">🏆 Активные турниры</h3>
          <Button variant="link" className="text-primary">
            Все турниры
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card 
              key={tournament.id}
              className="neon-border-pink bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{tournament.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Призовой фонд</span>
                    <span className="text-xl font-bold text-accent">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Участников</span>
                    <span className="font-semibold">{tournament.players}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">До окончания</span>
                    <Badge variant="outline" className="border-accent text-accent">
                      {tournament.endsIn}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-accent to-secondary">
                    Участвовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <section>
          <h3 className="text-3xl font-bold glow-purple mb-8">🎁 Бонусы и промокоды</h3>
          <div className="space-y-4">
            {bonuses.map((bonus) => (
              <Card 
                key={bonus.id}
                className="neon-border bg-card/50 backdrop-blur-sm hover:scale-102 transition-transform"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={bonus.icon as any} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{bonus.title}</CardTitle>
                      <CardDescription>{bonus.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 px-4 py-2 bg-background/50 rounded border border-primary/30 font-mono text-primary">
                      {bonus.code}
                    </code>
                    <Button size="sm" variant="outline" className="neon-border">
                      Копировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold glow-purple mb-8">📊 Топ игроков</h3>
          <Card className="neon-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank}
                    className="flex items-center gap-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                      player.rank === 1 ? 'bg-accent text-white' :
                      player.rank === 2 ? 'bg-secondary text-white' :
                      player.rank === 3 ? 'bg-primary text-white' :
                      'bg-muted text-foreground'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{player.player}</p>
                      <p className="text-sm text-muted-foreground">{player.wins} побед</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{player.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="text-center py-12 neon-border rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <Icon name="Headphones" size={64} className="mx-auto mb-4 text-primary" />
        <h3 className="text-3xl font-bold mb-4 glow-cyan">Нужна помощь?</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Наша поддержка работает 24/7 и готова помочь в любое время
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="MessageCircle" className="mr-2" />
            Онлайн-чат
          </Button>
          <Button size="lg" variant="outline" className="neon-border">
            <Icon name="Mail" className="mr-2" />
            Email
          </Button>
        </div>
      </section>
    </>
  );
};

export default MainContent;
