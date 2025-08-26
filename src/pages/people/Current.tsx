import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink, MapPin, GraduationCap, Award } from 'lucide-react';

const faculty = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Professor & Laboratory Director',
    designation: 'Head, Mechanical Engineering',
    education: 'Ph.D. (IIT Delhi), M.Tech (IISc Bangalore), B.Tech (NIT Trichy)',
    specialization: ['Additive Manufacturing', 'Hybrid Processes', 'Process Optimization'],
    experience: '15+ years',
    email: 'rajesh.kumar@iiitdmj.ac.in',
    phone: '+91-761-2794320',
    office: 'Room 201, Academic Block A',
    achievements: [
      'Best Teacher Award 2023',
      '25+ Journal Publications',
      '3 Patents Filed',
      'DST Young Scientist Award'
    ],
    courses: ['Advanced Manufacturing', 'Manufacturing Systems', 'CAD/CAM'],
    bio: 'Dr. Rajesh Kumar is a renowned expert in advanced manufacturing technologies with over 15 years of research experience. He has led multiple funded projects and has been instrumental in establishing the HAM Lab.'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'Associate Professor',
    designation: 'Materials Science Coordinator',
    education: 'Ph.D. (IIT Bombay), M.Tech (IIT Kanpur), B.Tech (MNIT Jaipur)',
    specialization: ['Multi-material 3D Printing', 'Surface Engineering', 'Materials Characterization'],
    experience: '12+ years',
    email: 'priya.sharma@iiitdmj.ac.in',
    phone: '+91-761-2794321',
    office: 'Room 203, Academic Block A',
    achievements: [
      'SERB Women Excellence Award',
      '30+ Research Publications',
      '2 Technology Transfers',
      'IEEE Senior Member'
    ],
    courses: ['Materials Science', 'Surface Engineering', 'Polymer Processing'],
    bio: 'Dr. Priya Sharma specializes in multi-material additive manufacturing and surface engineering. Her research focuses on developing novel materials and processes for advanced manufacturing applications.'
  },
  {
    id: 3,
    name: 'Dr. Amit Singh',
    position: 'Assistant Professor',
    designation: 'AI & Automation Lead',
    education: 'Ph.D. (IIT Madras), M.Tech (IIT Roorkee), B.Tech (DTU Delhi)',
    specialization: ['AI in Manufacturing', 'Process Control', 'Digital Twin Technologies'],
    experience: '8+ years',
    email: 'amit.singh@iiitdmj.ac.in',
    phone: '+91-761-2794322',
    office: 'Room 205, Academic Block A',
    achievements: [
      'Early Career Research Award',
      '20+ Conference Papers',
      '1 Startup Incubated',
      'Microsoft AI for Good Grant'
    ],
    courses: ['Automation', 'AI in Engineering', 'Control Systems'],
    bio: 'Dr. Amit Singh works on the intersection of artificial intelligence and manufacturing. His research involves developing smart manufacturing systems using AI and IoT technologies.'
  }
];

const staff = [
  {
    id: 1,
    name: 'Mr. Suresh Gupta',
    position: 'Technical Officer',
    specialization: 'Equipment Maintenance & Operation',
    experience: '20+ years',
    email: 'suresh.gupta@iiitdmj.ac.in',
    responsibilities: ['Lab Equipment Management', 'Safety Protocols', 'Student Training']
  },
  {
    id: 2,
    name: 'Ms. Anita Verma',
    position: 'Laboratory Assistant',
    specialization: 'Materials Handling & Testing',
    experience: '8+ years',
    email: 'anita.verma@iiitdmj.ac.in',
    responsibilities: ['Materials Preparation', 'Sample Testing', 'Inventory Management']
  }
];

const researchScholars = [
  {
    id: 1,
    name: 'Mr. Ankit Gupta',
    degree: 'Ph.D. (4th Year)',
    supervisor: 'Dr. Rajesh Kumar',
    topic: 'AI-based Quality Control in Hybrid Manufacturing',
    email: 'ankit.phd2021@iiitdmj.ac.in',
    publications: 8,
    achievements: ['Best Paper Award ICAM 2023', 'CSIR Fellowship']
  },
  {
    id: 2,
    name: 'Ms. Shreya Singh',
    degree: 'Ph.D. (3rd Year)',
    supervisor: 'Dr. Priya Sharma',
    topic: 'Multi-material Interface Engineering in 3D Printing',
    email: 'shreya.phd2022@iiitdmj.ac.in',
    publications: 5,
    achievements: ['DST INSPIRE Fellowship', 'International Conference Travel Grant']
  },
  {
    id: 3,
    name: 'Mr. Rohit Sharma',
    degree: 'Ph.D. (2nd Year)',
    supervisor: 'Dr. Amit Singh',
    topic: 'Digital Twin for Predictive Manufacturing',
    email: 'rohit.phd2023@iiitdmj.ac.in',
    publications: 3,
    achievements: ['UGC JRF', 'Student Innovation Award']
  },
  {
    id: 4,
    name: 'Ms. Priyanka Jain',
    degree: 'M.Tech (2nd Year)',
    supervisor: 'Dr. Priya Sharma',
    topic: 'Sustainable Materials for Additive Manufacturing',
    email: 'priyanka.mtech2023@iiitdmj.ac.in',
    publications: 2,
    achievements: ['GATE Scholarship', 'Best Thesis Proposal Award']
  }
];

const postDocs = [
  {
    id: 1,
    name: 'Dr. Vikram Patel',
    previousInstitution: 'IIT Bombay',
    researchArea: 'Advanced Materials Processing',
    supervisor: 'Dr. Priya Sharma',
    duration: '2 years',
    email: 'vikram.postdoc@iiitdmj.ac.in',
    publications: 15,
    fellowship: 'SERB National Post-Doctoral Fellowship'
  }
];

export default function Current() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Current Team</h1>
            <p className="body-large mb-8">
              Meet our dedicated team of faculty, researchers, and technical staff who drive 
              innovation in hybrid additive manufacturing technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <GraduationCap className="mr-1 h-3 w-3" />
                {faculty.length} Faculty Members
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="mr-1 h-3 w-3" />
                {researchScholars.length} Research Scholars
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <ExternalLink className="mr-1 h-3 w-3" />
                {postDocs.length} Post-Doctoral Fellow
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Faculty Members</h2>
            
            <div className="space-y-8">
              {faculty.map((member, index) => (
                <Card 
                  key={member.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="font-medium text-primary">{member.position}</p>
                          <p>{member.designation}</p>
                          <p className="flex items-center">
                            <GraduationCap className="mr-1 h-3 w-3" />
                            {member.education}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium">Experience: {member.experience}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Specialization</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {member.specialization.map((spec, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Courses Taught</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {member.courses.map((course, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Contact Information</h4>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Mail className="mr-2 h-3 w-3" />
                              <span>{member.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="mr-2 h-3 w-3" />
                              <span>{member.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-3 w-3" />
                              <span>{member.office}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post-Doctoral Fellows */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Post-Doctoral Fellows</h2>
            
            <div className="grid md:grid-cols-1 gap-6">
              {postDocs.map((member, index) => (
                <Card 
                  key={member.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Previous Institution:</span> {member.previousInstitution}</p>
                          <p><span className="font-medium">Research Area:</span> {member.researchArea}</p>
                          <p><span className="font-medium">Supervisor:</span> {member.supervisor}</p>
                        </div>
                      </div>
                      <div className="text-sm">
                        <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">
                          {member.fellowship}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span><span className="font-medium">Duration:</span> {member.duration}</span>
                      <span><span className="font-medium">Publications:</span> {member.publications}</span>
                      <span><span className="font-medium">Email:</span> {member.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Scholars */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Research Scholars</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {researchScholars.map((scholar, index) => (
                <Card 
                  key={scholar.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{scholar.name}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{scholar.degree}</p>
                      <p><span className="font-medium">Supervisor:</span> {scholar.supervisor}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Research Topic</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {scholar.topic}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span><span className="font-medium">Publications:</span> {scholar.publications}</span>
                      <span><span className="font-medium">Email:</span> {scholar.email}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {scholar.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Staff */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-large text-center mb-12">Technical Staff</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {staff.map((member, index) => (
                <Card 
                  key={member.id} 
                  className="card-elevated animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{member.position}</p>
                      <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
                      <p><span className="font-medium">Experience:</span> {member.experience}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Responsibilities</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="mr-2 h-3 w-3" />
                      <span>{member.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium mb-4">Team Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{faculty.length}</div>
                <div className="text-sm text-muted-foreground">Faculty Members</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">{researchScholars.length}</div>
                <div className="text-sm text-muted-foreground">Research Scholars</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">{postDocs.length}</div>
                <div className="text-sm text-muted-foreground">Post-Docs</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">{staff.length}</div>
                <div className="text-sm text-muted-foreground">Technical Staff</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}