import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Trophy, Calendar, Target, Award } from 'lucide-react';

const studentTeams = [
  {
    id: 1,
    name: 'HAM Lab Innovation Team',
    category: 'Research & Development',
    focus: 'Advanced Manufacturing Technologies',
    established: 2021,
    memberCount: 12,
    leader: 'Ankit Gupta (Ph.D. Scholar)',
    description: 'A multidisciplinary team focusing on innovative solutions in hybrid additive manufacturing, combining theoretical research with practical applications.',
    currentProjects: [
      'Smart Quality Control System',
      'IoT-enabled 3D Printer Network',
      'AI-based Process Optimization'
    ],
    achievements: [
      'Winner - National Innovation Challenge 2023',
      'Best Technical Project Award - IIITDM TechFest 2023',
      '2 Patent Applications Filed',
      'Published 3 Research Papers'
    ],
    members: [
      { name: 'Ankit Gupta', role: 'Team Lead', degree: 'Ph.D.' },
      { name: 'Shreya Singh', role: 'Research Coordinator', degree: 'Ph.D.' },
      { name: 'Priyanka Jain', role: 'Materials Specialist', degree: 'M.Tech' },
      { name: 'Rahul Sharma', role: 'Software Developer', degree: 'B.Tech' }
    ]
  },
  {
    id: 2,
    name: 'Sustainable Manufacturing Club',
    category: 'Environmental Engineering',
    focus: 'Green Manufacturing Processes',
    established: 2022,
    memberCount: 15,
    leader: 'Priyanka Jain (M.Tech)',
    description: 'Dedicated to developing environmentally sustainable manufacturing practices and promoting awareness about green technologies in the manufacturing sector.',
    currentProjects: [
      'Biodegradable 3D Printing Materials',
      'Energy Efficiency in AM Processes',
      'Waste Reduction Strategies'
    ],
    achievements: [
      'Green Innovation Award 2023',
      'Published Sustainability Report',
      'Industry Partnership with EcoTech',
      'Organized National Green Manufacturing Workshop'
    ],
    members: [
      { name: 'Priyanka Jain', role: 'Team Lead', degree: 'M.Tech' },
      { name: 'Eco Warrior', role: 'Sustainability Analyst', degree: 'B.Tech' },
      { name: 'Green Tech', role: 'Materials Researcher', degree: 'M.Tech' },
      { name: 'Nature First', role: 'Process Engineer', degree: 'B.Tech' }
    ]
  },
  {
    id: 3,
    name: 'Digital Manufacturing Society',
    category: 'Industry 4.0',
    focus: 'Digital Twin & AI Technologies',
    established: 2020,
    memberCount: 18,
    leader: 'Rohit Sharma (Ph.D. Scholar)',
    description: 'Explores the integration of digital technologies in manufacturing, including AI, IoT, and digital twin implementations for smart manufacturing systems.',
    currentProjects: [
      'Digital Twin Development Platform',
      'Machine Learning for Quality Prediction',
      'Industrial IoT Integration'
    ],
    achievements: [
      'Microsoft AI for Good Grant Recipient',
      'Winner - Smart India Hackathon 2023',
      'Industry Collaboration with Siemens',
      'Developed Open-source Digital Twin Framework'
    ],
    members: [
      { name: 'Rohit Sharma', role: 'Team Lead', degree: 'Ph.D.' },
      { name: 'AI Expert', role: 'ML Engineer', degree: 'M.Tech' },
      { name: 'IoT Specialist', role: 'Hardware Developer', degree: 'B.Tech' },
      { name: 'Data Scientist', role: 'Analytics Lead', degree: 'M.Tech' }
    ]
  },
  {
    id: 4,
    name: 'Materials Research Collective',
    category: 'Materials Science',
    focus: 'Advanced Materials for AM',
    established: 2021,
    memberCount: 10,
    leader: 'Shreya Singh (Ph.D. Scholar)',
    description: 'Focuses on developing and characterizing new materials for additive manufacturing applications, with emphasis on multi-material systems and functional materials.',
    currentProjects: [
      'Multi-material Interface Study',
      'Biocompatible Materials Development',
      'High-temperature Resistant Polymers'
    ],
    achievements: [
      'Best Materials Research Project 2023',
      'Published in Top Materials Journal',
      '1 Patent Application for Novel Material',
      'Collaboration with International Research Lab'
    ],
    members: [
      { name: 'Shreya Singh', role: 'Team Lead', degree: 'Ph.D.' },
      { name: 'Material Master', role: 'Characterization Expert', degree: 'M.Tech' },
      { name: 'Polymer Pro', role: 'Synthesis Specialist', degree: 'B.Tech' },
      { name: 'Testing Tech', role: 'Analysis Coordinator', degree: 'M.Tech' }
    ]
  }
];

const competitions = [
  {
    year: 2023,
    events: [
      {
        name: 'National Innovation Challenge',
        team: 'HAM Lab Innovation Team',
        position: '1st Place',
        prize: '₹2,00,000'
      },
      {
        name: 'Smart India Hackathon',
        team: 'Digital Manufacturing Society',
        position: 'Winner',
        prize: '₹1,00,000'
      },
      {
        name: 'Green Tech Competition',
        team: 'Sustainable Manufacturing Club',
        position: '2nd Place',
        prize: '₹75,000'
      }
    ]
  },
  {
    year: 2022,
    events: [
      {
        name: 'IIITDM TechFest',
        team: 'HAM Lab Innovation Team',
        position: 'Best Technical Project',
        prize: '₹50,000'
      },
      {
        name: 'Materials Research Symposium',
        team: 'Materials Research Collective',
        position: 'Outstanding Research',
        prize: 'Publication Opportunity'
      }
    ]
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'Research & Development': 'bg-primary/10 text-primary border-primary/20',
    'Environmental Engineering': 'bg-success/10 text-success border-success/20',
    'Industry 4.0': 'bg-accent/10 text-accent border-accent/20',
    'Materials Science': 'bg-warning/10 text-warning border-warning/20'
  };
  return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

export default function Students() {
  const totalMembers = studentTeams.reduce((sum, team) => sum + team.memberCount, 0);
  const totalProjects = studentTeams.reduce((sum, team) => sum + team.currentProjects.length, 0);
  const totalAchievements = studentTeams.reduce((sum, team) => sum + team.achievements.length, 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Student Teams</h1>
            <p className="body-large mb-8">
              Our vibrant student community drives innovation through collaborative research teams, 
              competitive projects, and cutting-edge technological developments
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="mr-1 h-3 w-3" />
                {studentTeams.length} Active Teams
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Target className="mr-1 h-3 w-3" />
                {totalMembers} Student Members
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Trophy className="mr-1 h-3 w-3" />
                Multiple Competition Winners
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Student Teams */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {studentTeams.map((team, index) => (
              <Card 
                key={team.id} 
                className="card-elevated animate-scale-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getCategoryColor(team.category)} variant="outline">
                        {team.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        Est. {team.established}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        {team.memberCount} members
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl md:text-2xl leading-tight mb-2">
                    {team.name}
                  </CardTitle>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium">Focus Area:</span> {team.focus}</p>
                    <p><span className="font-medium">Team Leader:</span> {team.leader}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {team.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Current Projects</h4>
                        <ul className="space-y-2">
                          {team.currentProjects.map((project, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Key Members</h4>
                        <div className="space-y-2">
                          {team.members.slice(0, 4).map((member, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                              <span className="font-medium">{member.name}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{member.role}</Badge>
                                <Badge variant="outline" className="text-xs">{member.degree}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Major Achievements</h4>
                      <div className="space-y-2">
                        {team.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button variant="default" size="sm" className="group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Team Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="mr-2 h-4 w-4" />
                      Contact Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Achievements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Competition Achievements</h2>
            
            <div className="space-y-8">
              {competitions.map((yearData, index) => (
                <Card 
                  key={yearData.year} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-center text-xl">{yearData.year} Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-1 gap-4">
                      {yearData.events.map((event, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-muted/50 rounded-lg">
                          <div className="flex-1 mb-2 md:mb-0">
                            <h4 className="font-semibold">{event.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.team}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-success-light text-success border-success/20" variant="outline">
                              <Trophy className="mr-1 h-3 w-3" />
                              {event.position}
                            </Badge>
                            <span className="text-sm font-medium text-success">{event.prize}</span>
                          </div>
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

      {/* Team Activities & Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-large mb-4">Student Activities & Events</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our student teams actively participate in various activities throughout the year
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Competitions</h3>
                <p className="text-sm text-muted-foreground">
                  National and international competitions in manufacturing, AI, and sustainability
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Research Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative research projects with faculty and industry partners
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Technical workshops, seminars, and industry interaction sessions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium mb-4">Student Team Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{studentTeams.length}</div>
                <div className="text-sm text-muted-foreground">Active Teams</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">{totalMembers}</div>
                <div className="text-sm text-muted-foreground">Student Members</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">{totalProjects}</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">{totalAchievements}</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}