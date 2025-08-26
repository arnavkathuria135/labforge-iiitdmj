import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Shield, Calendar, Users, FileText } from 'lucide-react';

const patents = [
  {
    id: 1,
    title: 'Hybrid Additive-Subtractive Manufacturing System with Real-time Quality Control',
    patentNumber: 'US11,234,567',
    applicationNumber: 'US16/987,654',
    inventors: ['Dr. Rajesh Kumar', 'Dr. Priya Sharma', 'Mr. Ankit Gupta'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2021-03-15',
    grantDate: '2023-08-22',
    expiryDate: '2041-03-15',
    status: 'Granted',
    country: 'United States',
    classification: 'B33Y 30/00, B23C 3/00',
    abstract: 'A novel hybrid manufacturing system that integrates additive and subtractive manufacturing processes with real-time quality monitoring and feedback control mechanisms.',
    claims: 24,
    technology: 'Hybrid Manufacturing',
    commercialStatus: 'Licensed',
    licensePartner: 'TechMfg Industries'
  },
  {
    id: 2,
    title: 'Multi-Material 3D Printing Method with Enhanced Bonding Interface',
    patentNumber: 'IN202011045123',
    applicationNumber: 'IN202011045123',
    inventors: ['Dr. Priya Sharma', 'Dr. Vikram Patel', 'Ms. Shreya Singh'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2020-10-12',
    grantDate: '2022-12-08',
    expiryDate: '2040-10-12',
    status: 'Granted',
    country: 'India',
    classification: 'B29C 64/112, B29C 64/40',
    abstract: 'An innovative method for multi-material 3D printing that ensures strong bonding between different materials through controlled temperature and chemical treatment processes.',
    claims: 18,
    technology: 'Additive Manufacturing',
    commercialStatus: 'Available for Licensing',
    licensePartner: null
  },
  {
    id: 3,
    title: 'Adaptive Process Parameter Control System for Additive Manufacturing',
    patentNumber: 'EP3567890',
    applicationNumber: 'EP19165432.1',
    inventors: ['Dr. Amit Singh', 'Dr. Rajesh Kumar', 'Mr. Rohit Sharma'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2019-03-28',
    grantDate: '2024-01-15',
    expiryDate: '2039-03-28',
    status: 'Granted',
    country: 'European Union',
    classification: 'G05B 19/4099, B33Y 50/02',
    abstract: 'An intelligent control system that automatically adjusts process parameters during 3D printing based on real-time monitoring data to optimize part quality and reduce defects.',
    claims: 22,
    technology: 'Process Control',
    commercialStatus: 'In Negotiation',
    licensePartner: 'EuroTech Solutions'
  },
  {
    id: 4,
    title: 'Surface Treatment Method for Enhancing Adhesion in Hybrid Manufacturing',
    patentNumber: 'US10,987,654',
    applicationNumber: 'US17/234,567',
    inventors: ['Dr. Priya Sharma', 'Dr. Neha Agarwal'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2021-08-10',
    grantDate: '2023-04-18',
    expiryDate: '2041-08-10',
    status: 'Granted',
    country: 'United States',
    classification: 'C23C 24/08, B23K 26/00',
    abstract: 'A surface treatment technique that improves adhesion between additively manufactured and traditionally machined surfaces in hybrid manufacturing processes.',
    claims: 16,
    technology: 'Surface Engineering',
    commercialStatus: 'Available for Licensing',
    licensePartner: null
  },
  {
    id: 5,
    title: 'Powder Recycling System for Metal Additive Manufacturing',
    patentNumber: 'JP6789123',
    applicationNumber: 'JP2020-567890',
    inventors: ['Dr. Vikram Patel', 'Dr. Rajesh Kumar', 'Ms. Priyanka Jain'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2020-05-20',
    grantDate: '2022-11-30',
    expiryDate: '2040-05-20',
    status: 'Granted',
    country: 'Japan',
    classification: 'B22F 9/082, B33Y 40/00',
    abstract: 'An efficient powder recycling system for metal additive manufacturing that maintains powder quality through controlled processing and contamination prevention.',
    claims: 20,
    technology: 'Powder Processing',
    commercialStatus: 'Licensed',
    licensePartner: 'AsiaAM Technologies'
  },
  {
    id: 6,
    title: 'In-situ Monitoring System for Additive Manufacturing Quality Assessment',
    patentNumber: 'CN112345678',
    applicationNumber: 'CN202010987654.2',
    inventors: ['Dr. Amit Singh', 'Dr. Sarah Johnson', 'Mr. Wei Zhang'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2020-09-15',
    grantDate: '2023-07-10',
    expiryDate: '2040-09-15',
    status: 'Granted',
    country: 'China',
    classification: 'G01N 21/95, B33Y 50/02',
    abstract: 'A comprehensive monitoring system that uses multiple sensors and machine learning algorithms to assess quality during the additive manufacturing process.',
    claims: 28,
    technology: 'Quality Monitoring',
    commercialStatus: 'In Negotiation',
    licensePartner: 'ChinaTech Manufacturing'
  },
  {
    id: 7,
    title: 'Biomimetic Support Structure Design for Complex 3D Printed Parts',
    patentNumber: 'WO2023/123456',
    applicationNumber: 'PCT/IN2022/050789',
    inventors: ['Dr. Priya Sharma', 'Dr. Bio Mimic', 'Ms. Nature Inspired'],
    assignee: 'IIITDM Jabalpur',
    filingDate: '2022-08-30',
    grantDate: null,
    expiryDate: '2042-08-30',
    status: 'Published',
    country: 'International (PCT)',
    classification: 'B33Y 80/00, G06F 30/17',
    abstract: 'Nature-inspired support structure designs that minimize material usage while providing optimal support for complex geometries in additive manufacturing.',
    claims: 19,
    technology: 'Design Optimization',
    commercialStatus: 'Pending',
    licensePartner: null
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Granted': 'bg-success-light text-success border-success/20',
    'Published': 'bg-warning-light text-warning border-warning/20',
    'Pending': 'bg-accent-light text-accent border-accent/20',
    'Rejected': 'bg-destructive/10 text-destructive border-destructive/20'
  };
  return colors[status as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

const getCommercialStatusColor = (status: string) => {
  const colors = {
    'Licensed': 'bg-success-light text-success border-success/20',
    'Available for Licensing': 'bg-primary/10 text-primary border-primary/20',
    'In Negotiation': 'bg-warning-light text-warning border-warning/20',
    'Pending': 'bg-muted text-muted-foreground border-border'
  };
  return colors[status as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function Patents() {
  const grantedPatents = patents.filter(p => p.status === 'Granted');
  const pendingPatents = patents.filter(p => p.status !== 'Granted');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Patents & Intellectual Property</h1>
            <p className="body-large mb-8">
              Our innovative research has resulted in multiple patents protecting novel manufacturing 
              technologies and processes that advance the field of hybrid additive manufacturing
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Shield className="mr-1 h-3 w-3" />
                {grantedPatents.length} Granted Patents
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <FileText className="mr-1 h-3 w-3" />
                {pendingPatents.length} Applications
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="mr-1 h-3 w-3" />
                International Coverage
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Patents List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {patents.map((patent, index) => (
              <Card 
                key={patent.id} 
                className="card-elevated animate-scale-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(patent.status)} variant="outline">
                        <Shield className="mr-1 h-3 w-3" />
                        {patent.status}
                      </Badge>
                      <Badge className={getCommercialStatusColor(patent.commercialStatus)} variant="outline">
                        {patent.commercialStatus}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {patent.country}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {patent.patentNumber || patent.applicationNumber}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl leading-tight mb-2">
                    {patent.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {patent.inventors.join(', ')}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {patent.abstract}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Patent Information</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Technology Area:</span> {patent.technology}</p>
                          <p><span className="font-medium">Classification:</span> {patent.classification}</p>
                          <p><span className="font-medium">Claims:</span> {patent.claims}</p>
                          <p><span className="font-medium">Assignee:</span> {patent.assignee}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Important Dates</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Filing Date:</span> {formatDate(patent.filingDate)}</p>
                          {patent.grantDate && (
                            <p><span className="font-medium">Grant Date:</span> {formatDate(patent.grantDate)}</p>
                          )}
                          <p><span className="font-medium">Expiry Date:</span> {formatDate(patent.expiryDate)}</p>
                        </div>
                      </div>
                      
                      {patent.licensePartner && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Commercial Information</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p><span className="font-medium">License Partner:</span> {patent.licensePartner}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    {patent.status === 'Granted' && (
                      <>
                        <Button variant="default" size="sm" className="group">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Patent Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </>
                    )}
                    {patent.commercialStatus === 'Available for Licensing' && (
                      <Button variant="outline" size="sm">
                        <Shield className="mr-2 h-4 w-4" />
                        Licensing Information
                      </Button>
                    )}
                    {patent.status === 'Published' && (
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Track Application Status
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium mb-4">Patent Portfolio Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{patents.length}</div>
                <div className="text-sm text-muted-foreground">Total Patents & Applications</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">{grantedPatents.length}</div>
                <div className="text-sm text-muted-foreground">Granted Patents</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">
                  {[...new Set(patents.map(p => p.country))].length}
                </div>
                <div className="text-sm text-muted-foreground">Countries/Regions</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {patents.filter(p => p.commercialStatus === 'Licensed').length}
                </div>
                <div className="text-sm text-muted-foreground">Licensed Patents</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}