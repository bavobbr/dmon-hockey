import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                General Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Phone: +32 [Club Phone]</p>
              <p className="text-muted-foreground">Email: info@dmanhockey.be</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Volunteering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Join our volunteer team and help grow hockey in our community!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;