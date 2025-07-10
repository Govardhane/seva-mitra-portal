import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, Users, Clock, Shield } from "lucide-react";

// Import images
import cscLogo from "@/assets/csc-logo.png";
import digitalServicesHero from "@/assets/digital-services-hero.jpg";
import cscOffice from "@/assets/csc-office.jpg";
import techBackground from "@/assets/tech-background.jpg";

const Index = () => {
  const services = [
    "आधार कार्ड नोंदणी व अपडेट / Aadhaar Enrollment & Update",
    "पॅन कार्ड सेवा / PAN Card Services", 
    "पीएम किसान योजना / PM Kisan Samman Nidhi Yojana",
    "प्रधानमंत्री पिक विमा योजना / PM Fasal Bima Yojana (PMFBY)",
    "आयुष्मान भारत कार्ड / Ayushman Bharat Health Card",
    "ई-श्रम कार्ड / E-Shram Registration",
    "निवृत्ती वेतन योजना / Pension Schemes (PM-SYM, NPS)",
    "शिधापत्रिका सेवा / Ration Card Services",
    "बँक खाते उघडणे / Bank Account Opening (BC Point)",
    "बँकिंग सेवा – पैसे जमा, काढणे, बॅलन्स तपासणी",
    "विमा सेवा – जीवन, अपघात, आरोग्य / Insurance Services",
    "ऑनलाईन फॉर्म भरणे – शिष्यवृत्ती, MPSC, UPSC",
    "७/१२, फेरफार, मालमत्ता प्रमाणपत्र / Land Records, Satbara",
    "जन्म / मृत्यू / जाती / उत्पन्न / रहिवासी प्रमाणपत्र",
    "PM Awas Yojana / प्रधानमंत्री आवास योजना अर्ज",
    "पाणी व वीज बिल भरणा / Electricity & Water Bill Payments",
    "रेल्वे / बस तिकीट आरक्षण / Railway & Bus Ticket Booking",
    "मोबाईल व DTH रिचार्ज / Mobile & DTH Recharge",
    "मतदार ओळखपत्र / Voter ID Services",
    "पासपोर्ट सेवा / Passport Application",
    "Udyam / MSME नोंदणी / Udyam Registration",
    "डिजिटल स्वाक्षरी (DSC) / Digital Signature Certificate",
    "Police Character Certificate / पोलीस चारित्र्य प्रमाणपत्र",
    "CSC TEC सर्टिफिकेट प्रशिक्षण व नोंदणी",
    "आयडी कार्ड, फोटो, प्रिंटआउट, स्कॅनिंग, लॅमिनेशन",
    "Resume / CV / Visiting Card Design",
    "PM Digital Literacy Mission (PMGDISHA)"
  ];

  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url(${techBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white p-1">
                <img src={cscLogo} alt="CSC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">कृष्णा CSC सेंटर</h1>
                <p className="text-sm text-muted-foreground">Krishna CSC Center</p>
              </div>
            </div>
            <Button 
              className="hidden md:flex gradient-primary text-white border-0 hover:scale-105 transition-transform"
              onClick={() => window.open('https://wa.me/917498847765?text=Hi', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              संपर्क करा
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-pulse-slow z-10"></div>
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url(${digitalServicesHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-float">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                सर्व सरकारी सेवा एकाच ठिकाणी
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-foreground mb-8 font-semibold">
              All Government Services Under One Roof
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              आधार, पॅन, बँकिंग, योजना नोंदणी आणि इतर सर्व सरकारी सेवा द्रुत आणि सुरक्षित पद्धतीने
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gradient-primary text-white border-0 hover-scale shadow-lg"
                onClick={() => window.open('https://wa.me/917498847765?text=Hi', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                7498847765 वर कॉल करा
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white hover-scale"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                सेवा पाहा
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-scale gradient-card border-0 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-success rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
                  <Clock className="w-8 h-8 text-success-foreground" />
                </div>
                <CardTitle className="text-xl">द्रुत सेवा</CardTitle>
                <CardDescription>सर्व कामे लवकर आणि अचूक पद्धतीने</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale gradient-card border-0 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-info rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
                  <Shield className="w-8 h-8 text-info-foreground" />
                </div>
                <CardTitle className="text-xl">सुरक्षित</CardTitle>
                <CardDescription>तुमची माहिती पूर्ण सुरक्षित</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale gradient-card border-0 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-warning rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
                  <Users className="w-8 h-8 text-warning-foreground" />
                </div>
                <CardTitle className="text-xl">अनुभवी टीम</CardTitle>
                <CardDescription>प्रशिक्षित आणि अनुभवी कर्मचारी</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              आमच्या सेवा / Our Services
            </h2>
            <p className="text-xl text-foreground font-semibold">
              सर्व सरकारी योजना आणि सेवा उपलब्ध
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-2xl gradient-card border-0 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-success-foreground" />
                    </div>
                    <p className="text-sm leading-relaxed group-hover:text-primary transition-colors">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-16 px-4 bg-gradient-to-r from-warning/10 to-accent/10 relative z-10">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto gradient-card border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gradient">
                💡 महत्वाची सूचना / Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-warning/20 rounded-lg p-6 mb-6">
                <p className="text-lg mb-4 font-semibold">
                  सध्या आमचे CSC सेंटर स्थायी ठिकाणी सुरु झालेले नाही.
                </p>
                <p className="text-muted-foreground mb-6">
                  परंतु जर तुम्हाला कुठलीही सरकारी योजना, फॉर्म भरणे किंवा ऑनलाइन सेवा लागणार असेल,<br />
                  तर कृपया खालील संपर्कावर मोकळ्या मनाने संपर्क साधा.
                </p>
              </div>
              <div className="space-y-4 bg-success/10 rounded-lg p-6">
                <p className="text-lg">
                  तुम्हाला काही सेवा लागणार असेल तर फक्त <strong className="text-primary">"Hi"</strong> किंवा <strong className="text-primary">"Form पाहिजे"</strong> असा मेसेज करा.<br />
                  आम्ही तुमच्याशी लवकरच संपर्क करू.
                </p>
                <p className="text-xl font-bold text-gradient">
                  🙏 तुमचा विश्वास, आमची सेवा!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              📞 संपर्क माहिती / Contact Information
            </h2>
            <p className="text-xl text-foreground font-semibold">
              आमच्याशी संपर्क साधा
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-scale gradient-card border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  फोन / Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gradient mb-2">7498847765</p>
                <p className="text-muted-foreground">सकाळी 9 वाजेपासून संध्याकाळी 6 वाजेपर्यंत</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale gradient-card border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center text-secondary">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  ईमेल / Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-gradient mb-2">krishnagowardhane@gmail.com</p>
                <p className="text-muted-foreground">कोणत्याही प्रश्नासाठी ईमेल करा</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 gradient-card rounded-2xl p-8 shadow-2xl hover-scale">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white p-2">
                <img src={cscLogo} alt="CSC Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gradient">कृष्णा CSC सेंटर</h3>
                <p className="text-muted-foreground text-lg">Krishna CSC Center</p>
                <p className="text-sm text-accent font-semibold">✅ Authorized CSC Service Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2 text-gradient">कृष्णा CSC सेंटर</h3>
            <p className="text-gray-300 text-lg">सर्व सरकारी सेवा एकाच ठिकाणी</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Krishna CSC Center. All rights reserved. | सर्व हक्क राखीव.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
