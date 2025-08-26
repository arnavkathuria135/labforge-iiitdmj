import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = ({ isMobile = false }: { isMobile?: boolean }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const NavLink = ({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) => (
    <Link
      to={to}
      className={`nav-link ${isActive(to) ? 'nav-link-active' : ''} ${className} ${isMobile ? 'block py-2' : ''}`}
    >
      {children}
    </Link>
  );

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/facilities">Facilities</NavLink>
      
      <DropdownMenu>
        <DropdownMenuTrigger className={`nav-link flex items-center gap-1 ${isActive('/publications') ? 'nav-link-active' : ''}`}>
          Publications <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link to="/publications/books">Books</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/publications/patents">Patents</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/publications/articles">Articles</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <NavLink to="/research">Projects & Research</NavLink>

      <DropdownMenu>
        <DropdownMenuTrigger className={`nav-link flex items-center gap-1 ${isActive('/people') ? 'nav-link-active' : ''}`}>
          People <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link to="/people/current">Current Team</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/people/alumni">Alumni</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/people/students">Student Teams</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                HAM
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">Hybrid Additive Manufacturing Lab</h1>
                <p className="text-sm text-muted-foreground">IIITDM Jabalpur</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-6">
                  <Navigation isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Hybrid Additive Manufacturing Laboratory</p>
                <p>PDPM Indian Institute of Information Technology,</p>
                <p>Design and Manufacturing, Jabalpur</p>
                <p>Madhya Pradesh, India - 482005</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/facilities" className="block nav-link">Research Facilities</Link>
                <Link to="/publications" className="block nav-link">Publications</Link>
                <Link to="/research" className="block nav-link">Current Projects</Link>
                <Link to="/people" className="block nav-link">Team</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Research Areas</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Additive Manufacturing</p>
                <p>Hybrid Manufacturing Processes</p>
                <p>Materials Engineering</p>
                <p>Process Optimization</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Hybrid Additive Manufacturing Laboratory, IIITDM Jabalpur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};