const Footer = () => {
  return (
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
  );
};

export default Footer;
