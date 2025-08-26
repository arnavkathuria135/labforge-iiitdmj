import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Wrench, Zap, Gauge, Shield } from 'lucide-react';
import printer3D from '@/assets/3d-printer.jpg';
import cncMachine from '@/assets/cnc-machine.jpg';
import testingEquipment from '@/assets/testing-equipment.jpg';

const facilities = [
  {
    id: 1,
    name: 'Multi-Material 3D Printers',
    image: printer3D,
    category: 'Additive Manufacturing',
    specifications: [
      'Build volume: 300 × 300 × 300 mm',
      'Layer resolution: 0.05-0.4 mm',
      'Multiple material support',
      'Heated bed up to 120°C'
    ],
    description: 'State-of-the-art 3D printing systems capable of processing multiple materials simultaneously, enabling complex geometries and multi-functional parts manufacturing.',
    capabilities: [
      'PLA, ABS, PETG, TPU processing',
      'Soluble support materials',
      'Multi-color printing',
      'High-precision prototyping'
    ],
    icon: Wrench
  },
  {
    id: 2,
    name: 'CNC Machining Centers',
    image: cncMachine,
    category: 'Subtractive Manufacturing',
    specifications: [
      'Work envelope: 1000 × 600 × 500 mm',
      'Spindle speed: up to 24,000 RPM',
      '5-axis simultaneous machining',
      'Tool capacity: 40 tools'
    ],
    description: 'Precision CNC machining centers for high-accuracy material removal processes, post-processing of 3D printed parts, and hybrid manufacturing workflows.',
    capabilities: [
      'Precision machining (±0.01mm)',
      'Complex 5-axis operations',
      'Automated tool changing',
      'In-process measurement'
    ],
    icon: Gauge
  },
  {
    id: 3,
    name: 'Materials Testing & Characterization',
    image: testingEquipment,
    category: 'Analysis & Testing',
    specifications: [
      'Universal testing machine: 100 kN capacity',
      'Hardness testers (Rockwell, Vickers)',
      'Surface roughness measurement',
      'Thermal analysis equipment'
    ],
    description: 'Comprehensive materials testing and characterization equipment for evaluating mechanical properties, surface quality, and thermal behavior of manufactured parts.',
    capabilities: [
      'Tensile and compression testing',
      'Fatigue testing',
      'Microstructural analysis',
      'Thermal characterization'
    ],
    icon: Shield
  },
  {
    id: 4,
    name: 'Hybrid Manufacturing Station',
    image: printer3D,
    category: 'Hybrid Systems',
    specifications: [
      'Integrated AM-SM platform',
      'Real-time process monitoring',
      'Multi-sensor feedback system',
      'Automated quality control'
    ],
    description: 'Innovative hybrid manufacturing platform combining additive and subtractive processes in a single setup, enabling near-net-shape manufacturing with precision finishing.',
    capabilities: [
      'Additive-subtractive integration',
      'Process parameter optimization',
      'Quality monitoring',
      'Adaptive manufacturing'
    ],
    icon: Zap
  },
  {
    id: 5,
    name: 'Powder Processing & Handling',
    image: testingEquipment,
    category: 'Material Preparation',
    specifications: [
      'Powder mixing and blending',
      'Particle size analysis',
      'Powder flowability testing',
      'Controlled atmosphere storage'
    ],
    description: 'Specialized equipment for powder metallurgy processes, including powder preparation, characterization, and handling for additive manufacturing applications.',
    capabilities: [
      'Custom powder blends',
      'Particle size optimization',
      'Flowability enhancement',
      'Quality assurance'
    ],
    icon: Wrench
  },
  {
    id: 6,
    name: 'Process Monitoring & Control',
    image: cncMachine,
    category: 'Instrumentation',
    specifications: [
      'High-speed data acquisition',
      'Multi-sensor integration',
      'Real-time analysis software',
      'Cloud-based data storage'
    ],
    description: 'Advanced monitoring and control systems for real-time process optimization, quality assurance, and data-driven manufacturing decisions.',
    capabilities: [
      'Real-time monitoring',
      'Predictive analytics',
      'Process optimization',
      'Quality prediction'
    ],
    icon: Gauge
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'Additive Manufacturing': 'bg-primary/10 text-primary border-primary/20',
    'Subtractive Manufacturing': 'bg-accent/10 text-accent border-accent/20',
    'Analysis & Testing': 'bg-success/10 text-success border-success/20',
    'Hybrid Systems': 'bg-warning/10 text-warning border-warning/20',
    'Material Preparation': 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800',
    'Instrumentation': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
  };
  return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

export default function Facilities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Research Facilities</h1>
            <p className="body-large mb-8">
              Our laboratory is equipped with state-of-the-art machinery and instrumentation to support 
              cutting-edge research in hybrid additive manufacturing processes
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">Advanced Manufacturing</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Precision Machining</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Materials Testing</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Process Monitoring</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card 
                  key={facility.id} 
                  className="card-elevated overflow-hidden animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(facility.category)} variant="outline">
                        <IconComponent className="mr-1 h-3 w-3" />
                        {facility.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{facility.name}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Technical Specifications</h4>
                      <ul className="space-y-2">
                        {facility.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Key Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.capabilities.map((capability, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Detailed Specifications
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-large mb-4">Research Capabilities</h2>
            <p className="body-large max-w-3xl mx-auto">
              Our integrated facility enables comprehensive research across the entire manufacturing value chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Additive, subtractive, and hybrid manufacturing processes
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive materials and process characterization
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time process monitoring and quality control
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Novel process development and optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}