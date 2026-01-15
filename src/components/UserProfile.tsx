import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface UserProfileProps {
  userBalance: number;
  userStats: {
    totalWins: number;
    totalPlayed: number;
    biggestWin: number;
    level: number;
    xp: number;
    nextLevel: number;
  };
  recentGames: Array<{
    game: string;
    result: string;
    amount: number;
    time: string;
  }>;
  bonuses: Array<{
    id: number;
    title: string;
    description: string;
    code: string;
    icon: string;
  }>;
  setShowProfile: (show: boolean) => void;
}

const UserProfile = ({
  userBalance,
  userStats,
  recentGames,
  bonuses,
  setShowProfile
}: UserProfileProps) => {
  return (
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
  );
};

export default UserProfile;
