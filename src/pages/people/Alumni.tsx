import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, GraduationCap, Building, Calendar, Award } from 'lucide-react';

const phdAlumni = [
  {
    id: 1,
    name: 'Dr. Neha Agarwal',
    degree: 'Ph.D. (2023)',
    thesis: 'Surface Engineering in Hybrid Additive-Subtractive Manufacturing',
    supervisor: 'Dr. Priya Sharma',
    currentPosition: 'Assistant Professor',
    currentOrganization: 'NIT Bhopal',
    yearGraduated: 2023,
    achievements: [
      'Best Thesis Award 2023',
      '12 Journal Publications',
      '2 Patents Filed',
      'Industry Collaboration'
    ],
    linkedin: 'https://linkedin.com/in/neha-agarwal-phd'
  },
  {
    id: 2,
    name: 'Dr. Vikash Kumar',
    degree: 'Ph.D. (2022)',
    thesis: 'Optimization of Multi-material 3D Printing Processes',
    supervisor: 'Dr. Rajesh Kumar',
    currentPosition: 'Senior Research Scientist',
    currentOrganization: 'General Electric Global Research',
    yearGraduated: 2022,
    achievements: [
      'SERB Overseas Fellowship',
      '15 Research Papers',
      '1 Technology Transfer',
      'International Collaboration'
    ],
    linkedin: 'https://linkedin.com/in/vikash-kumar-ge'
  },
  {
    id: 3,
    name: 'Dr. Rajesh Mishra',
    degree: 'Ph.D. (2021)',
    thesis: 'AI-driven Process Monitoring in Additive Manufacturing',
    supervisor: 'Dr. Amit Singh',
    currentPosition: 'Principal Engineer',
    currentOrganization: 'Honeywell Technology Solutions',
    yearGraduated: 2021,
    achievements: [
      'Outstanding Dissertation Award',
      '10 Conference Papers',
      '3 Patents Granted',
      'Startup Co-founder'
    ],
    linkedin: 'https://linkedin.com/in/rajesh-mishra-honeywell'
  }
];

const mtechAlumni = [
  {
    id: 1,
    name: 'Ms. Sakshi Verma',
    degree: 'M.Tech (2023)',
    thesis: 'Sustainable Materials for 3D Printing Applications',
    supervisor: 'Dr. Priya Sharma',
    currentPosition: 'Design Engineer',
    currentOrganization: 'Mahindra & Mahindra',
    yearGraduated: 2023,
    achievements: ['Best Project Award', 'Published 2 Papers']
  },
  {
    id: 2,
    name: 'Mr. Rahul Singh',
    degree: 'M.Tech (2023)',
    thesis: 'Process Parameter Optimization in Metal 3D Printing',
    supervisor: 'Dr. Rajesh Kumar',
    currentPosition: 'Manufacturing Engineer',
    currentOrganization: 'Tata Motors',
    yearGraduated: 2023,
    achievements: ['Industry Internship Award', '1 Conference Paper']
  },
  {
    id: 4,
    name: 'Ms. Pooja Kumari',
    degree: 'M.Tech (2022)',
    thesis: 'Digital Twin Implementation for Manufacturing Systems',
    supervisor: 'Dr. Amit Singh',
    currentPosition: 'Software Engineer',
    currentOrganization: 'Siemens Digital Industries',
    yearGraduated: 2022,
    achievements: ['Merit Scholarship', 'Siemens Hackathon Winner']
  }
];

const btechAlumni = [
  {
    id: 1,
    name: 'Mr. Arjun Patel',
    degree: 'B.Tech (2023)',
    project: 'IoT-based Monitoring System for 3D Printers',
    supervisor: 'Dr. Amit Singh',
    currentPosition: 'Graduate Trainee Engineer',
    currentOrganization: 'L&T Construction',
    yearGraduated: 2023
  },
  {
    id: 2,
    name: 'Ms. Divya Sharma',
    degree: 'B.Tech (2023)',
    project: 'Material Testing Setup for Additive Manufacturing',
    supervisor: 'Dr. Priya Sharma',
    currentPosition: 'Junior Research Fellow',
    currentOrganization: 'DRDO Hyderabad',
    yearGraduated: 2023
  },
  {
    id: 3,
    name: 'Mr. Karan Gupta',
    degree: 'B.Tech (2022)',
    project: 'Automated Quality Control System',
    supervisor: 'Dr. Rajesh Kumar',
    currentPosition: 'Software Developer',
    currentOrganization: 'TCS Innovation Labs',
    yearGraduated: 2022
  },
  {
    id: 4,
    name: 'Ms. Nisha Jain',
    degree: 'B.Tech (2022)',
    project: 'Cost Analysis of Hybrid Manufacturing',
    supervisor: 'Dr. Priya Sharma',
    currentPosition: 'Process Engineer',
    currentOrganization: 'Maruti Suzuki',
    yearGraduated: 2022
  }
];

const industrialPlacements = {
  '2023': [
    { company: 'Mahindra & Mahindra', count: 3 },
    { company: 'Tata Motors', count: 2 },
    { company: 'L&T Construction', count: 2 },
    { company: 'DRDO', count: 1 }
  ],
  '2022': [
    { company: 'TCS Innovation Labs', count: 2 },
    { company: 'Maruti Suzuki', count: 2 },
    { company: 'Siemens', count: 1 },
    { company: 'General Electric', count: 1 }
  ]
};

const getPositionColor = (position: string) => {
  if (position.includes('Professor') || position.includes('Faculty')) {
    return 'bg-primary/10 text-primary border-primary/20';
  } else if (position.includes('Engineer') || position.includes('Scientist')) {
    return 'bg-accent/10 text-accent border-accent/20';
  } else if (position.includes('Fellow') || position.includes('Research')) {
    return 'bg-success/10 text-success border-success/20';
  }
  return 'bg-muted text-muted-foreground';
};

export default function Alumni() {
  const totalAlumni = phdAlumni.length + mtechAlumni.length + btechAlumni.length;
  const academicPlacements = [...phdAlumni, ...mtechAlumni].filter(
    alumni => alumni.currentPosition.includes('Professor') || 
              alumni.currentPosition.includes('Fellow') ||
              alumni.currentPosition.includes('Research')
  ).length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Alumni Network</h1>
            <p className="body-large mb-8">
              Our proud alumni have gone on to make significant contributions in academia, 
              industry, and research institutions worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <GraduationCap className="mr-1 h-3 w-3" />
                {totalAlumni} Total Alumni
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Building className="mr-1 h-3 w-3" />
                {academicPlacements} Academic Positions
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="mr-1 h-3 w-3" />
                Multiple Award Winners
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Ph.D. Alumni */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Ph.D. Alumni</h2>
            
            <div className="space-y-6">
              {phdAlumni.map((alumni, index) => (
                <Card 
                  key={alumni.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{alumni.name}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="font-medium text-primary">{alumni.degree}</p>
                          <p><span className="font-medium">Thesis:</span> {alumni.thesis}</p>
                          <p><span className="font-medium">Supervisor:</span> {alumni.supervisor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getPositionColor(alumni.currentPosition)} variant="outline">
                          {alumni.currentPosition}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-2">
                          <div className="flex items-center">
                            <Building className="mr-1 h-3 w-3" />
                            {alumni.currentOrganization}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {alumni.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        LinkedIn Profile
                      </Button>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        Graduated: {alumni.yearGraduated}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* M.Tech Alumni */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">M.Tech Alumni</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mtechAlumni.map((alumni, index) => (
                <Card 
                  key={alumni.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{alumni.name}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{alumni.degree}</p>
                      <p><span className="font-medium">Thesis:</span> {alumni.thesis}</p>
                      <p><span className="font-medium">Supervisor:</span> {alumni.supervisor}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Badge className={getPositionColor(alumni.currentPosition)} variant="outline">
                        {alumni.currentPosition}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="mr-1 h-3 w-3" />
                        {alumni.currentOrganization}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {alumni.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground pt-2 border-t">
                      <Calendar className="mr-1 h-3 w-3" />
                      Graduated: {alumni.yearGraduated}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B.Tech Alumni */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">B.Tech Alumni</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {btechAlumni.map((alumni, index) => (
                <Card 
                  key={alumni.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{alumni.name}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{alumni.degree}</p>
                      <p><span className="font-medium">Project:</span> {alumni.project}</p>
                      <p><span className="font-medium">Supervisor:</span> {alumni.supervisor}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Badge className={getPositionColor(alumni.currentPosition)} variant="outline">
                        {alumni.currentPosition}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="mr-1 h-3 w-3" />
                        {alumni.currentOrganization}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground pt-2 border-t">
                      <Calendar className="mr-1 h-3 w-3" />
                      Graduated: {alumni.yearGraduated}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Recent Placement Statistics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(industrialPlacements).map(([year, companies]) => (
                <Card key={year} className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-center">Class of {year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {companies.map((company, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{company.company}</span>
                          <Badge variant="outline" className="text-xs">
                            {company.count} {company.count === 1 ? 'placement' : 'placements'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium mb-4">Alumni Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{totalAlumni}</div>
                <div className="text-sm text-muted-foreground">Total Alumni</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">{phdAlumni.length}</div>
                <div className="text-sm text-muted-foreground">Ph.D. Graduates</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">{academicPlacements}</div>
                <div className="text-sm text-muted-foreground">Academic Positions</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {Object.values(industrialPlacements).flat().reduce((sum, company) => sum + company.count, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Industry Placements</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}