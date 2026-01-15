import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

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
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        userBalance={userBalance}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        navigationItems={navigationItems}
      />

      <main className="container mx-auto px-4 py-8">
        {showProfile && isLoggedIn ? (
          <UserProfile
            userBalance={userBalance}
            userStats={userStats}
            recentGames={recentGames}
            bonuses={bonuses}
            setShowProfile={setShowProfile}
          />
        ) : (
          <MainContent
            featuredGames={featuredGames}
            tournaments={tournaments}
            bonuses={bonuses}
            leaderboard={leaderboard}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setActiveSection={setActiveSection}
            setSelectedGame={setSelectedGame}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
