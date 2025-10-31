'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Moon, Sun, Github, Twitter, Linkedin, Mail, Heart, Star, Sparkles, Code, Palette, Gamepad2, Bot, Zap, Coffee } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    generateParticles();
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add sparkle trail effect
      if (Math.random() > 0.9) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          emoji: ['✨', '💖', '🌸', '⭐'][Math.floor(Math.random() * 4)]
        };
        setSparkles(prev => [...prev, newSparkle]);
        
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const generateParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        emoji: ['✨', '💖', '🌸', '⭐', '🎀', '🍓', '🌙'][Math.floor(Math.random() * 7)]
      });
    }
    setParticles(newParticles);
  };

  const generateFloatingHearts = () => {
    const hearts = [];
    for (let i = 0; i < 10; i++) {
      hearts.push({
        id: `heart-${i}`,
        x: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 3 + 2
      });
    }
    return hearts;
  };

  const skills = [
    { name: 'HTML/CSS', icon: <Code className="w-6 h-6" />, level: 90, color: 'bg-pink-300' },
    { name: 'JavaScript', icon: <Sparkles className="w-6 h-6" />, level: 85, color: 'bg-purple-300' },
    { name: 'Python', icon: <Zap className="w-6 h-6" />, level: 80, color: 'bg-blue-300' },
    { name: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, level: 75, color: 'bg-pink-200' },
    { name: 'Game Dev', icon: <Gamepad2 className="w-6 h-6" />, level: 70, color: 'bg-purple-200' },
    { name: 'AI/ML', icon: <Bot className="w-6 h-6" />, level: 65, color: 'bg-blue-200' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Chibi Chat App 💬',
      description: 'Aplikasi chat dengan stiker lucu dan tema anime',
      tech: ['React', 'Node.js', 'Socket.io'],
      image: '🌸',
      details: 'Aplikasi chatting real-time dengan fitur stiker anime, tema kawaii, dan animasi yang menggemaskan. Dilengkapi dengan voice chat dan custom avatar.'
    },
    {
      id: 2,
      title: 'Anime Gallery 🎨',
      description: 'Galeri artwork anime dengan filter aesthetic',
      tech: ['Next.js', 'Tailwind', 'Prisma'],
      image: '🎀',
      details: 'Platform gallery untuk artwork anime dengan filter aesthetic, sorting berdasarkan genre, dan fitur bookmark favorit.'
    },
    {
      id: 3,
      title: 'Kawaii Todo List 📝',
      description: 'Todo app dengan reward system dan karakter lucu',
      tech: ['TypeScript', 'React', 'Local Storage'],
      image: '🍓',
      details: 'Aplikasi todo list dengan gamifikasi, karakter chibi yang memberikan motivasi, dan reward system untuk completed tasks.'
    },
    {
      id: 4,
      title: 'Roblox Game Hub 🎮',
      description: 'Platform untuk game Roblox custom',
      tech: ['Lua', 'React', 'MongoDB'],
      image: '⭐',
      details: 'Platform untuk berbagi dan bermain game Roblox custom dengan leaderboard, achievement system, dan social features.'
    },
    {
      id: 5,
      title: 'AI Waifu Bot 🤖',
      description: 'Chatbot AI dengan karakter anime',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      image: '💖',
      details: 'Chatbot AI dengan personality karakter anime, bisa ngobrol tentang anime, gaming, dan memberikan rekomendasi series.'
    },
    {
      id: 6,
      title: 'Pink Portfolio 🌸',
      description: 'Template portfolio dengan tema pastel',
      tech: ['Next.js', 'Framer Motion', 'Tailwind'],
      image: '🌙',
      details: 'Template portfolio website dengan tema pink pastel, animasi halus, dan fully responsive design.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Arigatou gozaimasu! 🎉 Pesan dari ${formData.name} sudah terkirim!`);
    setFormData({ name: '', email: '', message: '' });
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🌸</div>
          <div className="text-2xl font-bold text-pink-600 animate-pulse">Loading kawaii content...</div>
          <div className="flex justify-center space-x-2 mt-4">
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌙</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-pink-950 text-pink-100' : 'bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100'}`}
         style={{
           backgroundImage: theme === 'dark' 
             ? 'none' 
             : `url('/background-cute.png')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed',
           backgroundBlendMode: 'overlay'
         }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-bounce"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <span className="text-2xl opacity-60">{particle.emoji}</span>
          </div>
        ))}
        
        {/* Mouse sparkle trail */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="fixed pointer-events-none animate-sparkle"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="text-xl">{sparkle.emoji}</span>
          </div>
        ))}
        
        {/* Floating hearts */}
        {generateFloatingHearts().map((heart) => (
          <div
            key={heart.id}
            className="fixed bottom-0 text-2xl animate-float pointer-events-none"
            style={{
              left: `${heart.x}%`,
              animationDelay: `${heart.animationDelay}s`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`rounded-full ${theme === 'dark' ? 'bg-pink-900 border-pink-700 text-pink-100' : 'bg-white border-pink-200 text-pink-600'}`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md ${theme === 'dark' ? 'bg-pink-900/80 border-pink-800' : 'bg-pink-100/80 border-pink-200'} border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-wiggle">🌸</span>
              <span className="font-bold text-xl">Pradaxca</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="hover:text-pink-500 transition-colors capitalize hover:scale-110 transform duration-300 inline-block"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center relative">
        <div className="animate-float">
          <div className="mb-6 animate-bounce">
            <img 
              src="/avatar-chibi.png" 
              alt="Pradaxca Chibi Avatar" 
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full border-4 border-pink-300 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Halo! Aku Pradaxca 😸
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-pink-600 dark:text-pink-300">
            Wibu Programmer | Semua skill ku ada di sini
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-pink-200 text-pink-800">
              <Heart className="w-4 h-4 mr-2" /> Anime Lover
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-purple-200 text-purple-800">
              <Code className="w-4 h-4 mr-2" /> Code Enthusiast
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-200 text-blue-800">
              <Gamepad2 className="w-4 h-4 mr-2" /> Gamer
            </Badge>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 text-lg transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-300/50 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Explore My World!
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <Card className={`max-w-4xl mx-auto ${theme === 'dark' ? 'bg-pink-900/50 border-pink-700' : 'bg-white/70 backdrop-blur-sm border-pink-200'}`}>
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-pink-600 dark:text-pink-300">
              🌸 Tentangku 🌸
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <img 
                  src="/avatar-chibi.png" 
                  alt="Pradaxca Chibi Avatar" 
                  className="w-48 h-48 mx-auto rounded-full border-4 border-pink-300 shadow-lg mb-4 animate-pulse"
                />
                <div className="flex justify-center space-x-2">
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>🎮</span>
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>💻</span>
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '0.6s' }}>🌸</span>
                </div>
              </div>
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Konnichiwa! 👋 Aku Pradaxca, seorang programmer wibu yang passionate tentang teknologi dan anime!
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  Dari pagi sampai malam, aku selalu di depan laptop - kadang coding, kadang nonton anime, kadang main game! 
                  Aku percaya bahwa coding itu seperti membuat magic spell di dunia digital ✨
                </p>
                <p className="text-lg leading-relaxed">
                  Specialty ku adalah membuat aplikasi yang cute dan functional, dengan sentuhan anime aesthetic yang bikin pengguna betah! 
                  Let's create something kawaii together! 💖
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-pink-100 text-pink-800">🌸 Weeb</Badge>
                  <Badge className="bg-purple-100 text-purple-800">💻 Coder</Badge>
                  <Badge className="bg-blue-100 text-blue-800">🎮 Gamer</Badge>
                  <Badge className="bg-green-100 text-green-800">☕ Coffee Addict</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">⭐ Otaku</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-600 dark:text-pink-300">
          ⚡ Skill & Keahlian ⚡
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-300 hover:shadow-lg kawaii-hover ${theme === 'dark' ? 'bg-pink-900/50 border-pink-700' : 'bg-white/70 backdrop-blur-sm border-pink-200'}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${skill.color} p-3 rounded-full text-white group-hover:animate-pulse`}>
                    {skill.icon}
                  </div>
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-300">{skill.level}%</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <div className="w-full bg-pink-100 dark:bg-pink-900 rounded-full h-3">
                  <div 
                    className={`${skill.color} h-3 rounded-full transition-all duration-500 hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-600 dark:text-pink-300">
          🎀 Proyek Portfolio 🎀
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card 
                  className={`group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl kawaii-hover ${theme === 'dark' ? 'bg-pink-900/50 border-pink-700' : 'bg-white/70 backdrop-blur-sm border-pink-200'}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
                      {project.image}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                    <p className="text-pink-600 dark:text-pink-300 text-center mb-4">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-pink-900 border-pink-700' : 'bg-pink-50 border-pink-200'}`}>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-pink-600 dark:text-pink-300 flex items-center">
                    <span className="text-4xl mr-3">{project.image}</span>
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-lg">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} className="bg-pink-200 text-pink-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-pink-400 hover:bg-pink-500">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" className="border-pink-400 text-pink-600 hover:bg-pink-100">
                      <Star className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <Card className={`max-w-2xl mx-auto ${theme === 'dark' ? 'bg-pink-900/50 border-pink-700' : 'bg-white/70 backdrop-blur-sm border-pink-200'}`}>
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-pink-600 dark:text-pink-300">
              💌 Kontak Aku 💌
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Nama Kamu ✨
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`mt-2 ${theme === 'dark' ? 'bg-pink-800 border-pink-600 text-pink-100' : 'bg-pink-50 border-pink-200'}`}
                  placeholder="Masukkan nama kawaii kamu..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Email 📧
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`mt-2 ${theme === 'dark' ? 'bg-pink-800 border-pink-600 text-pink-100' : 'bg-pink-50 border-pink-200'}`}
                  placeholder="email@kawaii.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Pesan 💬
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`mt-2 ${theme === 'dark' ? 'bg-pink-800 border-pink-600 text-pink-100' : 'bg-pink-50 border-pink-200'}`}
                  placeholder="Tulis pesan lucu untuk aku..."
                  rows={4}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-3 text-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Kirim Pesan Cinta! 💕
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-lg mb-4 text-pink-600 dark:text-pink-300">Atau find aku di:</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full border-pink-400 text-pink-600 hover:bg-pink-100 hover:scale-125 transition-transform duration-300">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-pink-400 text-pink-600 hover:bg-pink-100 hover:scale-125 transition-transform duration-300">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-pink-400 text-pink-600 hover:bg-pink-100 hover:scale-125 transition-transform duration-300">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-pink-400 text-pink-600 hover:bg-pink-100 hover:scale-125 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className={`mt-20 py-8 text-center ${theme === 'dark' ? 'bg-pink-900 border-pink-800' : 'bg-pink-100 border-pink-200'} border-t`}>
        <p className="text-lg text-pink-600 dark:text-pink-300">
          Made with <Heart className="inline w-5 h-5 text-red-500 animate-pulse" /> by Pradaxca
        </p>
        <p className="text-sm text-pink-500 dark:text-pink-400 mt-2">
          © 2024 Pradaxca | Wibu Programmer Extraordinaire ✨
        </p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}