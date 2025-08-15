import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Data Protection Commitment
            </CardTitle>
            <CardDescription>Last updated: January 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              D-mon Hockey Club is committed to protecting your personal data and respecting your privacy. 
              This policy explains how we collect, use, and protect your information.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                What Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Membership Information</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Name, address, phone number, and email address</li>
                    <li>• Date of birth and emergency contact details</li>
                    <li>• Medical information relevant to hockey participation</li>
                    <li>• Payment and billing information</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Participation Data</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Training session attendance</li>
                    <li>• Match participation and performance</li>
                    <li>• Photos and videos from club events (with consent)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Club Administration:</strong> Managing memberships, team selections, and communication
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Safety & Emergency:</strong> Ensuring member safety during activities and contacting emergency contacts if needed
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Communication:</strong> Sending club updates, training schedules, and important announcements
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Compliance:</strong> Meeting sports federation and insurance requirements
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Data Security & Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Security Measures</h4>
                  <p className="text-sm text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal data 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Data Retention</h4>
                  <p className="text-sm text-muted-foreground">
                    We retain your personal data only as long as necessary for the purposes outlined in this policy 
                    or as required by law. Inactive member data is typically deleted after 3 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">Under GDPR, you have the right to:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Access your personal data</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Correct inaccurate data</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Request data deletion</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">Withdraw consent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                If you have questions about this privacy policy or want to exercise your rights, contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@dmonhockey.be</p>
                <p><strong>Mail:</strong> D-mon Hockey Club Privacy Officer, [Address]</p>
                <p><strong>Phone:</strong> [Phone Number]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;