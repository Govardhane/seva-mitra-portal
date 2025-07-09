import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, Users, Clock, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">कृष्णा CSC सेंटर</h1>
                <p className="text-sm text-muted-foreground">Krishna CSC Center</p>
              </div>
            </div>
            <Button variant="default" className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              संपर्क करा
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              सर्व सरकारी सेवा एकाच ठिकाणी
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              All Government Services Under One Roof
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              आधार, पॅन, बँकिंग, योजना नोंदणी आणि इतर सर्व सरकारी सेवा द्रुत आणि सुरक्षित पद्धतीने
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                7498847765 वर कॉल करा
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                सेवा पाहा
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>द्रुत सेवा</CardTitle>
                <CardDescription>सर्व कामे लवकर आणि अचूक पद्धतीने</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>सुरक्षित</CardTitle>
                <CardDescription>तुमची माहिती पूर्ण सुरक्षित</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>अनुभवी टीम</CardTitle>
                <CardDescription>प्रशिक्षित आणि अनुभवी कर्मचारी</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              आमच्या सेवा / Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              सर्व सरकारी योजना आणि सेवा उपलब्ध
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-16 px-4 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-yellow-800 dark:text-yellow-200">
                महत्वाची सूचना / Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-4">
                सध्या आमचे CSC सेंटर स्थायी ठिकाणी सुरु झालेले नाही.
              </p>
              <p className="text-muted-foreground mb-6">
                परंतु जर तुम्हाला कुठलीही सरकारी योजना, फॉर्म भरणे किंवा ऑनलाइन सेवा लागणार असेल,<br />
                तर कृपया खालील संपर्कावर मोकळ्या मनाने संपर्क साधा.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  तुम्हाला काही सेवा लागणार असेल तर फक्त <strong>"Hi"</strong> किंवा <strong>"Form पाहिजे"</strong> असा मेसेज करा.<br />
                  आम्ही तुमच्याशी लवकरच संपर्क करू.
                </p>
                <p className="text-xl font-semibold text-primary">
                  🙏 तुमचा विश्वास, आमची सेवा!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              संपर्क माहिती / Contact Information
            </h2>
            <p className="text-xl text-muted-foreground">
              आमच्याशी संपर्क साधा
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  फोन / Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">7498847765</p>
                <p className="text-muted-foreground">सकाळी 9 वाजेपासून संध्याकाळी 6 वाजेपर्यंत</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  ईमेल / Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary">krishnagowardhane@gmail.com</p>
                <p className="text-muted-foreground">कोणत्याही प्रश्नासाठी ईमेल करा</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">कृष्णा CSC सेंटर</h3>
                <p className="text-muted-foreground">Krishna CSC Center</p>
                <p className="text-sm text-muted-foreground">Authorized CSC Service Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">कृष्णा CSC सेंटर</h3>
            <p className="text-gray-400">सर्व सरकारी सेवा एकाच ठिकाणी</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
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
