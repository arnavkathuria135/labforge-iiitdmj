import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Users, Calendar } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'Hybrid Additive Manufacturing: Principles and Applications',
    authors: ['Dr. Rajesh Kumar', 'Dr. Priya Sharma', 'Dr. Amit Singh'],
    publisher: 'Springer Nature',
    year: 2023,
    isbn: '978-3-031-15234-7',
    pages: 456,
    description: 'A comprehensive guide to hybrid manufacturing processes, covering theoretical foundations, practical implementations, and future directions in the field.',
    chapters: 18,
    topics: [
      'Additive Manufacturing Fundamentals',
      'Subtractive Manufacturing Integration',
      'Materials Science in Hybrid Processes',
      'Process Optimization Techniques',
      'Quality Control and Monitoring',
      'Industrial Applications'
    ],
    type: 'Research Monograph',
    status: 'Published'
  },
  {
    id: 2,
    title: 'Advanced Materials for 3D Printing Applications',
    authors: ['Dr. Priya Sharma', 'Dr. Vikram Patel'],
    publisher: 'Elsevier',
    year: 2022,
    isbn: '978-0-323-95847-2',
    pages: 328,
    description: 'Explores novel materials and their applications in additive manufacturing, with focus on multi-material systems and functional materials.',
    chapters: 14,
    topics: [
      'Polymer Materials for AM',
      'Metal Powder Processing',
      'Ceramic Applications',
      'Composite Materials',
      'Bio-compatible Materials',
      'Smart Materials Integration'
    ],
    type: 'Edited Volume',
    status: 'Published'
  },
  {
    id: 3,
    title: 'Manufacturing Process Optimization Using AI and ML',
    authors: ['Dr. Amit Singh', 'Dr. Rajesh Kumar', 'Dr. Neha Agarwal'],
    publisher: 'CRC Press',
    year: 2024,
    isbn: '978-1-032-45678-9',
    pages: 392,
    description: 'Comprehensive coverage of artificial intelligence and machine learning applications in manufacturing process optimization and quality control.',
    chapters: 16,
    topics: [
      'Machine Learning Fundamentals',
      'Process Parameter Optimization',
      'Quality Prediction Models',
      'Predictive Maintenance',
      'Computer Vision in Manufacturing',
      'Digital Twin Technologies'
    ],
    type: 'Research Monograph',
    status: 'Published'
  },
  {
    id: 4,
    title: 'Sustainable Manufacturing Technologies',
    authors: ['Dr. Priya Sharma', 'Dr. Rohit Verma'],
    publisher: 'Wiley',
    year: 2024,
    isbn: '978-1-119-87654-3',
    pages: 275,
    description: 'Focuses on environmentally sustainable manufacturing practices, energy-efficient processes, and circular economy principles in modern manufacturing.',
    chapters: 12,
    topics: [
      'Green Manufacturing Principles',
      'Energy-Efficient Processes',
      'Waste Reduction Strategies',
      'Life Cycle Assessment',
      'Circular Economy in Manufacturing',
      'Sustainable Materials'
    ],
    type: 'Edited Volume',
    status: 'In Press'
  },
  {
    id: 5,
    title: 'Handbook of Multi-Scale Manufacturing',
    authors: ['Dr. Rajesh Kumar', 'Dr. Sarah Johnson', 'Dr. Michael Chen'],
    publisher: 'Academic Press',
    year: 2025,
    isbn: 'TBD',
    pages: 520,
    description: 'Comprehensive handbook covering manufacturing processes across different scales, from nano-scale to macro-scale applications.',
    chapters: 22,
    topics: [
      'Nano-manufacturing Techniques',
      'Micro-scale Processing',
      'Macro-scale Manufacturing',
      'Multi-scale Integration',
      'Scale-dependent Properties',
      'Cross-scale Optimization'
    ],
    type: 'Handbook',
    status: 'Under Review'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Published': 'bg-success-light text-success border-success/20',
    'In Press': 'bg-warning-light text-warning border-warning/20',
    'Under Review': 'bg-accent-light text-accent border-accent/20',
    'In Preparation': 'bg-muted text-muted-foreground border-border'
  };
  return colors[status as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

const getTypeColor = (type: string) => {
  const colors = {
    'Research Monograph': 'bg-primary/10 text-primary border-primary/20',
    'Edited Volume': 'bg-accent/10 text-accent border-accent/20',
    'Handbook': 'bg-success/10 text-success border-success/20',
    'Conference Proceedings': 'bg-warning/10 text-warning border-warning/20'
  };
  return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
};

export default function Books() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Books & Monographs</h1>
            <p className="body-large mb-8">
              Comprehensive publications covering advanced manufacturing research, theoretical foundations, 
              and practical applications developed by our laboratory team
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <BookOpen className="mr-1 h-3 w-3" />
                {books.filter(b => b.status === 'Published').length} Published
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Calendar className="mr-1 h-3 w-3" />
                {books.filter(b => b.status === 'In Press' || b.status === 'Under Review').length} Upcoming
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Books List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {books.map((book, index) => (
              <Card 
                key={book.id} 
                className="card-elevated animate-scale-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(book.status)} variant="outline">
                        {book.status}
                      </Badge>
                      <Badge className={getTypeColor(book.type)} variant="outline">
                        {book.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {book.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl leading-tight mb-2">
                    {book.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {book.authors.join(', ')}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Publication Details</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Publisher:</span> {book.publisher}</p>
                          {book.isbn !== 'TBD' && (
                            <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
                          )}
                          <p><span className="font-medium">Pages:</span> {book.pages}</p>
                          <p><span className="font-medium">Chapters:</span> {book.chapters}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Key Topics Covered</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {book.topics.map((topic, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    {book.status === 'Published' && (
                      <>
                        <Button variant="default" size="sm" className="group">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View on Publisher Site
                        </Button>
                        <Button variant="outline" size="sm">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Download Sample Chapter
                        </Button>
                      </>
                    )}
                    {book.status === 'In Press' && (
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Pre-order Information
                      </Button>
                    )}
                    {book.status === 'Under Review' && (
                      <Button variant="outline" size="sm" disabled>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Under Review
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
            <h2 className="heading-medium mb-4">Publication Statistics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{books.length}</div>
                <div className="text-sm text-muted-foreground">Total Books</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">
                  {books.filter(b => b.status === 'Published').length}
                </div>
                <div className="text-sm text-muted-foreground">Published</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">
                  {books.reduce((sum, book) => sum + book.pages, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Pages</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {books.reduce((sum, book) => sum + book.chapters, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Chapters</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}