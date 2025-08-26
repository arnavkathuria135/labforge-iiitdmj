import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import labHeroImage from '@/assets/lab-hero.jpg';

const achievements = [
  {
    year: '2024',
    title: 'Excellence in Manufacturing Research Award',
    description: 'Recognized for outstanding contributions to hybrid manufacturing processes',
    type: 'Award'
  },
  {
    year: '2023',
    title: 'Patent Granted for Novel 3D Printing Technique',
    description: 'Innovative approach to multi-material additive manufacturing',
    type: 'Patent'
  },
  {
    year: '2023',
    title: 'International Collaboration with MIT',
    description: 'Joint research project on advanced materials characterization',
    type: 'Collaboration'
  },
  {
    year: '2022',
    title: 'Best Paper Award at ICAM 2022',
    description: 'Outstanding research presentation on hybrid manufacturing systems',
    type: 'Publication'
  }
];

const news = [
  {
    date: '2024-01-15',
    title: 'New Research Grant from DST Approved',
    summary: 'Rs 2.5 Crore funding approved for advanced manufacturing research project',
    type: 'Funding'
  },
  {
    date: '2024-01-10',
    title: 'International Workshop on Additive Manufacturing',
    summary: 'HAM Lab to host international workshop with 50+ participants from 15 countries',
    type: 'Event'
  },
  {
    date: '2023-12-20',
    title: 'Three Papers Accepted at Top-tier Conferences',
    summary: 'Research work accepted at ASME, IEEE, and Springer conferences',
    type: 'Publication'
  },
  {
    date: '2023-12-15',
    title: 'New State-of-the-art Equipment Installation',
    summary: 'Latest multi-material 3D printer and CNC machining center now operational',
    type: 'Equipment'
  }
];

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getTypeColor = (type: string) => {
  const colors = {
    Award: 'bg-success-light text-success border-success/20',
    Patent: 'bg-accent-light text-accent border-accent/20',
    Collaboration: 'bg-primary/10 text-primary border-primary/20',
    Publication: 'bg-warning-light text-warning border-warning/20',
    Funding: 'bg-success-light text-success border-success/20',
    Event: 'bg-accent-light text-accent border-accent/20',
    Equipment: 'bg-primary/10 text-primary border-primary/20'
  };
  return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-hover">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${labHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Hybrid Additive Manufacturing Laboratory
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Advancing the frontiers of manufacturing through innovative research in additive and hybrid manufacturing processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/facilities">
                <Button size="lg" variant="secondary" className="group">
                  Explore Our Facilities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  View Research
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-large text-center mb-8">About the Laboratory</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="body-large">
                  The Hybrid Additive Manufacturing Laboratory at IIITDM Jabalpur is at the forefront of manufacturing research, 
                  combining traditional manufacturing processes with cutting-edge additive manufacturing technologies.
                </p>
                <p className="body-medium">
                  Our multidisciplinary approach integrates materials science, mechanical engineering, and computer science 
                  to develop innovative manufacturing solutions. We focus on creating hybrid processes that leverage the 
                  strengths of both additive and subtractive manufacturing techniques.
                </p>
                <p className="body-medium">
                  Manufacturing is the creation or production of goods with the help of equipment, labor, machines, tools, 
                  and chemical or biological processing. Our laboratory specializes in advanced manufacturing processes, 
                  particularly focusing on the integration of additive manufacturing with traditional machining processes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary">Additive Manufacturing</Badge>
                  <Badge variant="secondary">Hybrid Processes</Badge>
                  <Badge variant="secondary">Materials Research</Badge>
                  <Badge variant="secondary">Process Optimization</Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <h3 className="heading-small mb-4">Research Focus Areas</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Multi-material 3D printing technologies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Hybrid manufacturing process development</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Advanced materials characterization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Process monitoring and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Sustainable manufacturing practices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-large mb-4">Recent Achievements</h2>
            <p className="body-large max-w-2xl mx-auto">
              Our laboratory's commitment to excellence has been recognized through various awards, patents, and collaborations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-elevated animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className={getTypeColor(achievement.type)} variant="outline">
                      {achievement.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">{achievement.year}</span>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/research">
              <Button variant="outline" className="group">
                <Award className="mr-2 h-4 w-4" />
                View All Achievements
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-large mb-4">Latest News & Updates</h2>
            <p className="body-large max-w-2xl mx-auto">
              Stay updated with the latest developments, events, and milestones from our laboratory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="card-elevated animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getTypeColor(item.type)} variant="outline">
                      {item.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All News
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}