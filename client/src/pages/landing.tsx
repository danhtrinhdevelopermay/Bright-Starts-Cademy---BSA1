import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/components/TranslationProvider";
import { GraduationCap, Brain, Users, Calendar, Trophy, FileText, Target, CreditCard, Check } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function Landing() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: CreditCard,
      title: t('landing.features.flashcards'),
      description: t('landing.features.flashcardsDesc'),
      color: "bg-primary/20 text-primary"
    },
    {
      icon: Users,
      title: t('landing.features.groups'),
      description: t('landing.features.groupsDesc'),
      color: "bg-secondary/20 text-secondary"
    },
    {
      icon: Calendar,
      title: t('landing.features.assignments'),
      description: t('landing.features.assignmentsDesc'),
      color: "bg-accent/20 text-accent"
    },
    {
      icon: Trophy,
      title: t('landing.features.achievements'),
      description: t('landing.features.achievementsDesc'),
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: FileText,
      title: t('landing.features.notes'),
      description: t('landing.features.notesDesc'),
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: Target,
      title: t('landing.features.quizzes'),
      description: t('landing.features.quizzesDesc'),
      color: "bg-blue-500/20 text-blue-400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      university: "Stanford University",
      content: "StudyVibe literally saved my GPA 😭 The flashcards are so much better than Quizlet and the study groups are actually fun!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Marcus T.",
      university: "NYU",
      content: "The deadline tracker is a game changer. No more late assignments and the achievement system keeps me motivated 🏆",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Zoe L.",
      university: "UC Berkeley",
      content: "Finally, a study app that doesn't feel like it was made in 2010. The interface is clean and the features actually work ✨",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="BSC Logo" 
                className="w-10 h-10 rounded-xl"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">BSC</span>
                <span className="text-xs text-muted-foreground -mt-1">Bright Starts</span>
              </div>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                beta
              </Badge>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
              <a href="#cta" className="hover:text-primary transition-colors">Get Started</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setLocation('/auth')}
                className="bg-primary hover:bg-primary/90 hover-scale"
              >
                Sign Up Free 🚀
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Bright Starts Academy 🌟
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your learning journey begins here. Create flashcards, take quizzes, track deadlines, and join study groups - all in one beautiful app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => setLocation('/auth')}
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg hover-scale"
                size="lg"
              >
                <FaGoogle className="mr-2" />
                Continue with Google
              </Button>
              <Button 
                onClick={() => setLocation('/auth')}
                variant="outline"
                className="px-8 py-4 text-lg hover-scale"
                size="lg"
              >
                Sign up with Email ✉️
              </Button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-secondary" />
                <span>Free forever</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-secondary" />
                <span>No credit card</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-secondary" />
                <span>2min setup</span>
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Students studying together" 
              className="rounded-3xl shadow-2xl w-full max-w-5xl mx-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Features that hit different 🔥
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to ace your studies and vibe with your study squad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover-scale group animate-on-scroll"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <div className="flex items-center space-x-2 text-primary">
                    <span className="font-medium">Try it out</span>
                    <Target className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your dashboard, your vibe ✨
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clean, organized, and actually useful. See everything that matters at a glance.
            </p>
          </div>

          <Card className="animate-on-scroll shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h3>
                  <p className="text-muted-foreground">Ready to crush today's goals?</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    🔥 7 day streak
                  </Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Level 12
                  </Badge>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/20 p-4 rounded-xl text-center">
                          <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                          <p className="font-medium">Create Flashcards</p>
                        </div>
                        <div className="bg-secondary/20 p-4 rounded-xl text-center">
                          <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                          <p className="font-medium">Join Study Group</p>
                        </div>
                        <div className="bg-accent/20 p-4 rounded-xl text-center">
                          <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
                          <p className="font-medium">New Notes</p>
                        </div>
                        <div className="bg-purple-500/20 p-4 rounded-xl text-center">
                          <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                          <p className="font-medium">Take Quiz</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Deadlines ⏰</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-500/20 rounded-xl border border-red-500/30">
                        <div>
                          <p className="font-medium text-red-400">Physics Lab Report</p>
                          <p className="text-sm text-muted-foreground">Tomorrow</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-xl">
                        <div>
                          <p className="font-medium">Math Quiz</p>
                          <p className="text-sm text-muted-foreground">In 3 days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Study Streak 🔥</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">7</div>
                      <p className="text-muted-foreground mb-4">days in a row!</p>
                      <p className="text-sm text-muted-foreground">3 more days for "10-Day Scholar" badge!</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real students, real results 💬
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what the community is saying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-on-scroll">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to level up? 🚀
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Join 50,000+ students who are already crushing their goals with StudyVibe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              onClick={() => setLocation('/auth')}
              className="bg-primary hover:bg-primary/90 px-10 py-5 text-xl hover-scale"
              size="lg"
            >
              <FaGoogle className="mr-3" />
              Start Free with Google
            </Button>
            <Button 
              onClick={() => setLocation('/auth')}
              variant="outline"
              className="px-10 py-5 text-xl hover-scale"
              size="lg"
            >
              Create Account
            </Button>
          </div>
          
          <p className="text-muted-foreground">
            No spam, no BS. Just better grades. 📈
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="BSC Logo" 
                  className="w-10 h-10 rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">BSC</span>
                  <span className="text-xs text-muted-foreground -mt-1">Bright Starts</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Bright Starts Academy - Your learning journey begins here. Built for students, by students.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Beta Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Study Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 StudyVibe. Made with 💜 for students.
            </p>
            <p className="text-muted-foreground mt-4 md:mt-0">
              Built different. Study different. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
