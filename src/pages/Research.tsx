import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, Calendar, DollarSign, Users, Target, BookOpen } from 'lucide-react';

const currentProjects = [
  {
    id: 1,
    title: 'AI-Driven Quality Control in Hybrid Manufacturing',
    pi: 'Dr. Rajesh Kumar',
    coPi: ['Dr. Priya Sharma', 'Dr. Amit Singh'],
    fundingAgency: 'Department of Science and Technology (DST)',
    amount: '₹2,50,00,000',
    duration: '3 years',
    startDate: '2023-04-01',
    endDate: '2026-03-31',
    progress: 45,
    status: 'Ongoing',
    description: 'Development of artificial intelligence algorithms for real-time quality monitoring and control in hybrid additive-subtractive manufacturing processes.',
    objectives: [
      'Develop ML models for defect prediction',
      'Implement real-time monitoring systems',
      'Create adaptive control algorithms',
      'Validate on industrial case studies'
    ],
    deliverables: [
      'AI-based quality control software',
      '3 journal publications',
      '2 PhD dissertations',
      'Industrial prototype'
    ]
  },
  {
    id: 2,
    title: 'Sustainable Multi-Material 3D Printing Technologies',
    pi: 'Dr. Priya Sharma',
    coPi: ['Dr. Vikram Patel'],
    fundingAgency: 'Ministry of Electronics and IT (MeitY)',
    amount: '₹1,80,00,000',
    duration: '2.5 years',
    startDate: '2023-08-15',
    endDate: '2026-02-14',
    progress: 30,
    status: 'Ongoing',
    description: 'Research on environmentally sustainable multi-material 3D printing processes with focus on biodegradable materials and energy efficiency.',
    objectives: [
      'Develop bio-degradable printing materials',
      'Optimize energy consumption',
      'Create waste reduction strategies',
      'Establish sustainability metrics'
    ],
    deliverables: [
      'New bio-material formulations',
      'Energy-efficient printing protocols',
      '4 conference papers',
      'Sustainability assessment framework'
    ]
  },
  {
    id: 3,
    title: 'Digital Twin Framework for Manufacturing Systems',
    pi: 'Dr. Amit Singh',
    coPi: ['Dr. Rajesh Kumar'],
    fundingAgency: 'Science and Engineering Research Board (SERB)',
    amount: '₹95,00,000',
    duration: '2 years',
    startDate: '2024-01-10',
    endDate: '2025-12-31',
    progress: 15,
    status: 'Recently Started',
    description: 'Development of comprehensive digital twin framework for predictive maintenance and optimization of manufacturing systems.',
    objectives: [
      'Design digital twin architecture',
      'Implement IoT sensor networks',
      'Develop predictive analytics',
      'Create optimization algorithms'
    ],
    deliverables: [
      'Digital twin software platform',
      'IoT integration protocols',
      '2 journal papers',
      'Industry collaboration agreement'
    ]
  }
];

const completedProjects = [
  {
    id: 4,
    title: 'Advanced Surface Treatment for Additive Manufacturing',
    pi: 'Dr. Priya Sharma',
    fundingAgency: 'AICTE',
    amount: '₹75,00,000',
    duration: '2 years',
    completedYear: 2023,
    achievements: [
      '2 patents filed',
      '5 journal publications',
      '1 technology transfer',
      'Industrial collaboration established'
    ]
  },
  {
    id: 5,
    title: 'Hybrid Manufacturing Process Optimization',
    pi: 'Dr. Rajesh Kumar',
    fundingAgency: 'DRDO',
    amount: '₹1,20,00,000',
    duration: '3 years',
    completedYear: 2022,
    achievements: [
      '3 PhD completions',
      '8 journal papers',
      '1 startup incubated',
      'Defense application developed'
    ]
  }
];

const researchAreas = [
  {
    title: 'Hybrid Manufacturing Processes',
    description: 'Integration of additive and subtractive manufacturing for optimal part production',
    icon: Target,
    publications: 15,
    projects: 3
  },
  {
    title: 'Multi-Material Additive Manufacturing',
    description: 'Advanced techniques for printing with multiple materials simultaneously',
    icon: BookOpen,
    publications: 12,
    projects: 2
  },
  {
    title: 'Process Monitoring & Control',
    description: 'Real-time monitoring and adaptive control of manufacturing processes',
    icon: Target,
    publications: 18,
    projects: 4
  },
  {
    title: 'Sustainable Manufacturing',
    description: 'Environmentally friendly manufacturing practices and materials',
    icon: BookOpen,
    publications: 8,
    projects: 2
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ongoing': 'bg-success-light text-success border-success/20',
    'Recently Started': 'bg-accent-light text-accent border-accent/20',
    'Completed': 'bg-primary/10 text-primary border-primary/20'
  };
  return colors[status as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

export default function Research() {
  const totalFunding = [...currentProjects, ...completedProjects].reduce((sum, project) => {
    const amount = parseInt(project.amount.replace(/[₹,]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Projects & Research</h1>
            <p className="body-large mb-8">
              Our laboratory conducts cutting-edge research in advanced manufacturing technologies, 
              supported by grants from national funding agencies and industry partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Target className="mr-1 h-3 w-3" />
                {currentProjects.length} Active Projects
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <DollarSign className="mr-1 h-3 w-3" />
                ₹{(totalFunding / 10000000).toFixed(1)}Cr Total Funding
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <BookOpen className="mr-1 h-3 w-3" />
                {researchAreas.reduce((sum, area) => sum + area.publications, 0)} Publications
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Current Research Projects</h2>
            
            <div className="space-y-8">
              {currentProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getStatusColor(project.status)} variant="outline">
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.duration}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {project.amount}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl md:text-2xl leading-tight mb-2">
                      {project.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        <span>PI: {project.pi}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Project Progress</span>
                        <span className="text-muted-foreground">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Project Details</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p><span className="font-medium">Funding Agency:</span> {project.fundingAgency}</p>
                          <p><span className="font-medium">Co-PI:</span> {project.coPi.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Key Objectives</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Expected Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((deliverable, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Publications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-large mb-4">Research Focus Areas</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our multidisciplinary research spans several key areas in advanced manufacturing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{area.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>{area.publications} Publications</span>
                          <span>{area.projects} Active Projects</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Recently Completed Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">
                        Completed {project.completedYear}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {project.amount}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {project.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <span>PI: {project.pi} • {project.fundingAgency}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium mb-4">Research Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {currentProjects.length + completedProjects.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">
                  ₹{(totalFunding / 10000000).toFixed(1)}Cr
                </div>
                <div className="text-sm text-muted-foreground">Total Funding</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">
                  {researchAreas.reduce((sum, area) => sum + area.publications, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {researchAreas.length}
                </div>
                <div className="text-sm text-muted-foreground">Research Areas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}