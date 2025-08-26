import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, FileText, Search, Filter, Calendar, Users, Award } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Real-time Quality Monitoring in Hybrid Additive-Subtractive Manufacturing Using Machine Learning',
    authors: ['Dr. Rajesh Kumar', 'Dr. Priya Sharma', 'Mr. Ankit Gupta', 'Dr. Sarah Johnson'],
    journal: 'Journal of Manufacturing Science and Engineering',
    year: 2024,
    volume: 146,
    issue: 3,
    pages: '031001-1 to 031001-12',
    doi: '10.1115/1.4054321',
    impactFactor: 2.95,
    citations: 23,
    abstract: 'This paper presents a novel approach for real-time quality monitoring in hybrid manufacturing processes using advanced machine learning techniques and multi-sensor data fusion.',
    keywords: ['Hybrid Manufacturing', 'Quality Control', 'Machine Learning', 'Real-time Monitoring'],
    category: 'Manufacturing Processes',
    type: 'Research Article',
    openAccess: true
  },
  {
    id: 2,
    title: 'Multi-material 3D Printing: Challenges and Opportunities in Interface Engineering',
    authors: ['Dr. Priya Sharma', 'Dr. Vikram Patel', 'Ms. Shreya Singh'],
    journal: 'Additive Manufacturing',
    year: 2024,
    volume: 72,
    issue: null,
    pages: '103642',
    doi: '10.1016/j.addma.2023.103642',
    impactFactor: 11.632,
    citations: 45,
    abstract: 'A comprehensive review of multi-material 3D printing technologies, focusing on interface engineering challenges and emerging solutions for improved bonding.',
    keywords: ['Multi-material', '3D Printing', 'Interface Engineering', 'Additive Manufacturing'],
    category: 'Materials Science',
    type: 'Review Article',
    openAccess: false
  },
  {
    id: 3,
    title: 'Optimization of Process Parameters in Metal Powder Bed Fusion Using Genetic Algorithm',
    authors: ['Dr. Amit Singh', 'Dr. Rajesh Kumar', 'Mr. Rohit Sharma', 'Dr. Michael Chen'],
    journal: 'International Journal of Advanced Manufacturing Technology',
    year: 2023,
    volume: 128,
    issue: 7,
    pages: '3245-3262',
    doi: '10.1007/s00170-023-11821-4',
    impactFactor: 3.563,
    citations: 67,
    abstract: 'This study presents a genetic algorithm-based optimization framework for process parameters in metal powder bed fusion additive manufacturing.',
    keywords: ['Parameter Optimization', 'Genetic Algorithm', 'Metal 3D Printing', 'Process Control'],
    category: 'Process Optimization',
    type: 'Research Article',
    openAccess: true
  },
  {
    id: 4,
    title: 'Surface Roughness Prediction in Hybrid Manufacturing Using Artificial Neural Networks',
    authors: ['Dr. Priya Sharma', 'Dr. Neha Agarwal', 'Mr. Vikash Kumar'],
    journal: 'Journal of Materials Processing Technology',
    year: 2023,
    volume: 312,
    issue: null,
    pages: '117834',
    doi: '10.1016/j.jmatprotec.2022.117834',
    impactFactor: 6.404,
    citations: 34,
    abstract: 'Development of artificial neural network models for predicting surface roughness in hybrid additive-subtractive manufacturing processes.',
    keywords: ['Surface Roughness', 'Neural Networks', 'Hybrid Manufacturing', 'Prediction'],
    category: 'Surface Engineering',
    type: 'Research Article',
    openAccess: false
  },
  {
    id: 5,
    title: 'Sustainable Manufacturing Practices in Additive Manufacturing: A Life Cycle Assessment',
    authors: ['Dr. Rohit Verma', 'Dr. Priya Sharma', 'Ms. Eco Green'],
    journal: 'Journal of Cleaner Production',
    year: 2023,
    volume: 398,
    issue: null,
    pages: '136542',
    doi: '10.1016/j.jclepro.2023.136542',
    impactFactor: 11.072,
    citations: 28,
    abstract: 'Comprehensive life cycle assessment of additive manufacturing processes with focus on sustainability metrics and environmental impact reduction strategies.',
    keywords: ['Sustainability', 'Life Cycle Assessment', 'Environmental Impact', 'Green Manufacturing'],
    category: 'Sustainability',
    type: 'Research Article',
    openAccess: true
  },
  {
    id: 6,
    title: 'Digital Twin Framework for Predictive Maintenance in Additive Manufacturing Systems',
    authors: ['Dr. Amit Singh', 'Dr. Tech Nology', 'Mr. Digital Twin', 'Dr. Rajesh Kumar'],
    journal: 'Computers in Industry',
    year: 2023,
    volume: 149,
    issue: null,
    pages: '103925',
    doi: '10.1016/j.compind.2023.103925',
    impactFactor: 10.0,
    citations: 52,
    abstract: 'Novel digital twin framework for predictive maintenance of additive manufacturing systems using IoT sensors and machine learning algorithms.',
    keywords: ['Digital Twin', 'Predictive Maintenance', 'IoT', 'Industry 4.0'],
    category: 'Digital Manufacturing',
    type: 'Research Article',
    openAccess: false
  },
  {
    id: 7,
    title: 'Biomimetic Design Strategies for Additive Manufacturing of Lightweight Structures',
    authors: ['Dr. Priya Sharma', 'Dr. Bio Mimic', 'Ms. Nature Design'],
    journal: 'Materials & Design',
    year: 2022,
    volume: 221,
    issue: null,
    pages: '110926',
    doi: '10.1016/j.matdes.2022.110926',
    impactFactor: 9.417,
    citations: 89,
    abstract: 'Investigation of biomimetic design principles for creating lightweight structures using additive manufacturing, inspired by natural systems.',
    keywords: ['Biomimetic Design', 'Lightweight Structures', 'Nature-inspired', 'Topology Optimization'],
    category: 'Design Optimization',
    type: 'Research Article',
    openAccess: true
  },
  {
    id: 8,
    title: 'In-situ Monitoring of Melt Pool Dynamics in Selective Laser Melting Using High-Speed Imaging',
    authors: ['Dr. Vikram Patel', 'Dr. Laser Tech', 'Mr. High Speed'],
    journal: 'Rapid Prototyping Journal',
    year: 2022,
    volume: 28,
    issue: 8,
    pages: '1456-1468',
    doi: '10.1108/RPJ-11-2021-0298',
    impactFactor: 3.9,
    citations: 41,
    abstract: 'High-speed imaging techniques for real-time monitoring of melt pool dynamics in selective laser melting processes with applications to quality control.',
    keywords: ['Melt Pool', 'High-Speed Imaging', 'Selective Laser Melting', 'Process Monitoring'],
    category: 'Process Monitoring',
    type: 'Research Article',
    openAccess: false
  }
];

const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];
const types = ['All', ...Array.from(new Set(articles.map(a => a.type)))];
const years = ['All', ...Array.from(new Set(articles.map(a => a.year.toString()))).sort().reverse()];

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      article.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesType = selectedType === 'All' || article.type === selectedType;
    const matchesYear = selectedYear === 'All' || article.year.toString() === selectedYear;
    
    return matchesSearch && matchesCategory && matchesType && matchesYear;
  });

  const totalCitations = articles.reduce((sum, article) => sum + article.citations, 0);
  const avgImpactFactor = (articles.reduce((sum, article) => sum + article.impactFactor, 0) / articles.length).toFixed(2);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6">Research Articles & Publications</h1>
            <p className="body-large mb-8">
              Peer-reviewed research articles and publications from our laboratory, 
              contributing to the advancement of manufacturing science and technology
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <FileText className="mr-1 h-3 w-3" />
                {articles.length} Publications
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="mr-1 h-3 w-3" />
                {totalCitations} Total Citations
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Calendar className="mr-1 h-3 w-3" />
                Avg IF: {avgImpactFactor}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filter and search articles</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredArticles.length} of {articles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {filteredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="card-elevated animate-scale-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.type}
                      </Badge>
                      {article.openAccess && (
                        <Badge className="bg-success-light text-success border-success/20 text-xs">
                          Open Access
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>IF: {article.impactFactor}</span>
                      <span>Citations: {article.citations}</span>
                      <span>{article.year}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg md:text-xl leading-tight mb-3">
                    {article.title}
                  </CardTitle>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="mr-1 h-3 w-3 flex-shrink-0" />
                      <span>{article.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="mr-1 h-3 w-3 flex-shrink-0" />
                      <span className="font-medium">{article.journal}</span>
                      {article.volume && (
                        <span className="ml-2">
                          Vol. {article.volume}{article.issue && `, Issue ${article.issue}`}, 
                          Pages {article.pages} ({article.year})
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {article.abstract}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {article.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button variant="default" size="sm" className="group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Journal
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      DOI: {article.doi}
                    </Button>
                    {article.openAccess && (
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Download PDF
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
            <h2 className="heading-medium mb-4">Publication Metrics</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{articles.length}</div>
                <div className="text-sm text-muted-foreground">Total Articles</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">{totalCitations}</div>
                <div className="text-sm text-muted-foreground">Total Citations</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">{avgImpactFactor}</div>
                <div className="text-sm text-muted-foreground">Avg Impact Factor</div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">
                  {articles.filter(a => a.openAccess).length}
                </div>
                <div className="text-sm text-muted-foreground">Open Access</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}