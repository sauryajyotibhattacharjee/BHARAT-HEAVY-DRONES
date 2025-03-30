
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission to a backend
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      variant: "default",
    });
  };

  return (
    <Layout>
      <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading 
            title="Contact Us"
            subtitle="Get in touch with our team to discuss how we can help you"
          />
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you. Whether you have a question about our drones, need a custom solution, or want to explore partnership opportunities, our team is ready to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-bhd-100 text-bhd-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <a href="mailto:bharatdronetech@gmail.com" className="text-bhd-600 hover:underline">
                        bharatdronetech@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <a href="tel:+917005580541" className="text-orange-600 hover:underline">
                        +91 7005580541
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-700">
                        Bharat Drone Innovations, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <p className="text-gray-700 mb-4">
                  Check out our video demonstrations to see our drones in action:
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://youtu.be/4300HS-5lZo?si=Sb4jY8vMFV-MkQun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-bhd-600 hover:underline block"
                  >
                    Product Demo Video 1
                  </a>
                  <a 
                    href="https://youtu.be/MophzRRayfU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-bhd-600 hover:underline block"
                  >
                    Product Demo Video 2
                  </a>
                  <a 
                    href="https://youtu.be/lpzSyqE4yzo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-bhd-600 hover:underline block"
                  >
                    Product Demo Video 3
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-bhd-600 text-white p-6">
                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-white/80">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bhd-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bhd-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bhd-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bhd-500"
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full bg-bhd-600 hover:bg-bhd-700">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
