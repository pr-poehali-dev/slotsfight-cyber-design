import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userBalance, setUserBalance] = useState(45230);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'tournaments', label: 'Турниры', icon: 'Trophy' },
    { id: 'ratings', label: 'Рейтинги', icon: 'BarChart3' },
    { id: 'promo', label: 'Промо', icon: 'Gift' },
    { id: 'support', label: 'Поддержка', icon: 'MessageCircle' },
    { id: 'about', label: 'О сайте', icon: 'Info' }
  ];

  const featuredGames = [
    { id: 1, name: 'Neon Slots', jackpot: 2450000, hot: true, provider: 'CyberGaming', players: 3421, rating: 4.8, minBet: 10 },
    { id: 2, name: 'Cyber Fortune', jackpot: 1890000, hot: true, provider: 'NeoSoft', players: 2891, rating: 4.7, minBet: 20 },
    { id: 3, name: 'Digital Rush', jackpot: 3200000, hot: true, provider: 'FuturePlay', players: 4102, rating: 4.9, minBet: 50 },
    { id: 4, name: 'Matrix Wins', jackpot: 950000, hot: false, provider: 'TechGames', players: 1823, rating: 4.5, minBet: 10 },
    { id: 5, name: 'Electric Dreams', jackpot: 1550000, hot: false, provider: 'CyberGaming', players: 2341, rating: 4.6, minBet: 25 },
    { id: 6, name: 'Neon Paradise', jackpot: 780000, hot: false, provider: 'NeoSoft', players: 1654, rating: 4.4, minBet: 15 }
  ];

  const userStats = {
    totalWins: 147,
    totalPlayed: 523,
    biggestWin: 89450,
    level: 12,
    xp: 67,
    nextLevel: 100
  };

  const recentGames = [
    { game: 'Neon Slots', result: 'win', amount: 12500, time: '5 мин назад' },
    { game: 'Cyber Fortune', result: 'loss', amount: -5000, time: '18 мин назад' },
    { game: 'Digital Rush', result: 'win', amount: 34200, time: '1 час назад' },
    { game: 'Matrix Wins', result: 'win', amount: 8900, time: '2 часа назад' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      featuredGames.forEach((_, index) => {
        const randomIncrease = Math.floor(Math.random() * 5000);
        featuredGames[index].jackpot += randomIncrease;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tournaments = [
    { id: 1, name: 'Cyber Championship', prize: '₽5,000,000', players: 2847, endsIn: '2д 14ч' },
    { id: 2, name: 'Neon Battle Royale', prize: '₽3,500,000', players: 1923, endsIn: '5д 8ч' },
    { id: 3, name: 'Digital Showdown', prize: '₽2,000,000', players: 1456, endsIn: '1д 3ч' }
  ];

  const bonuses = [
    { 
      id: 1, 
      title: 'Приветственный бонус', 
      description: '+200% к депозиту + 100 фриспинов', 
      code: 'CYBER200',
      icon: 'Gift'
    },
    { 
      id: 2, 
      title: 'Ежедневные фриспины', 
      description: 'До 50 бесплатных вращений каждый день', 
      code: 'DAILY50',
      icon: 'Zap'
    },
    { 
      id: 3, 
      title: 'Кэшбэк 15%', 
      description: 'Возврат средств каждую неделю', 
      code: 'CASHBACK15',
      icon: 'Coins'
    }
  ];

  const leaderboard = [
    { rank: 1, player: 'CyberKing', wins: 15847, amount: '₽8,450,000' },
    { rank: 2, player: 'NeonQueen', wins: 14523, amount: '₽7,230,000' },
    { rank: 3, player: 'DigitalAce', wins: 13891, amount: '₽6,890,000' },
    { rank: 4, player: 'TechMaster', wins: 12456, amount: '₽5,920,000' },
    { rank: 5, player: 'FuturePro', wins: 11234, amount: '₽5,110,000' }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
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

      <main className="container mx-auto px-4 py-8">
        {showProfile && isLoggedIn ? (
          <section className="mb-16 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold glow-cyan">Личный кабинет</h2>
              <Button variant="outline" onClick={() => setShowProfile(false)}>
                <Icon name="ArrowLeft" className="mr-2" size={18} />
                Назад
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" className="text-primary" />
                    Баланс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">{userBalance.toLocaleString('ru')} ₽</p>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-accent">Пополнить</Button>
                    <Button variant="outline" className="flex-1 neon-border">Вывести</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-accent" />
                    Уровень {userStats.level}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold">{userStats.xp}/{userStats.nextLevel} XP</span>
                    </div>
                    <Progress value={userStats.xp} className="h-3" />
                    <p className="text-xs text-muted-foreground">До уровня {userStats.level + 1}: {userStats.nextLevel - userStats.xp} XP</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="neon-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" className="text-secondary" />
                    Статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Побед</span>
                      <span className="font-bold text-accent">{userStats.totalWins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Игр сыграно</span>
                      <span className="font-bold">{userStats.totalPlayed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Макс. выигрыш</span>
                      <span className="font-bold text-primary">₽{userStats.biggestWin.toLocaleString('ru')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="recent">Последние игры</TabsTrigger>
                <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
                <TabsTrigger value="transactions">Транзакции</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="space-y-4">
                {recentGames.map((game, index) => (
                  <Card key={index} className="neon-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            game.result === 'win' ? 'bg-accent/20' : 'bg-muted'
                          }`}>
                            <Icon name={game.result === 'win' ? 'TrendingUp' : 'TrendingDown'} 
                              className={game.result === 'win' ? 'text-accent' : 'text-muted-foreground'} 
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{game.game}</p>
                            <p className="text-sm text-muted-foreground">{game.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${
                            game.result === 'win' ? 'text-accent' : 'text-muted-foreground'
                          }`}>
                            {game.amount > 0 ? '+' : ''}{game.amount.toLocaleString('ru')} ₽
                          </p>
                          <Badge variant={game.result === 'win' ? 'default' : 'secondary'}>
                            {game.result === 'win' ? 'Выигрыш' : 'Проигрыш'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="bonuses">
                <div className="space-y-4">
                  {bonuses.map((bonus) => (
                    <Card key={bonus.id} className="neon-border bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
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
                          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                            Активировать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="transactions">
                <Card className="neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-center text-muted-foreground py-8">
                      История транзакций пуста
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        ) : (
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
        )}
      </main>

      <footer className="border-t border-primary/30 mt-16 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">О платформе</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Игры</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Слоты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Live-игры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Помощь</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>support@slotsfight.com</li>
                <li>+7 (800) 555-35-35</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
            <p>© 2026 SLOTSFIGHT. Все права защищены. Играйте ответственно. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;