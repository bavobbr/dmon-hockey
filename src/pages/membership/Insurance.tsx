import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Phone, AlertTriangle } from "lucide-react";

const Insurance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Insurance Coverage</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Your Safety is Our Priority
            </CardTitle>
            <CardDescription>
              Comprehensive insurance coverage for all club members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All D-mon Hockey Club members are covered by comprehensive sports insurance through 
              our affiliation with the Belgian Hockey Federation. This coverage protects you during 
              all official club activities.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Accident Coverage</CardTitle>
              <CardDescription>Protection during hockey activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Medical Expenses</p>
                    <p className="text-xs text-muted-foreground">
                      Coverage for treatment of injuries sustained during official club activities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Dental Treatment</p>
                    <p className="text-xs text-muted-foreground">
                      Emergency dental care for hockey-related injuries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Physiotherapy</p>
                    <p className="text-xs text-muted-foreground">
                      Rehabilitation costs covered up to policy limits
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Temporary Disability</p>
                    <p className="text-xs text-muted-foreground">
                      Financial support during recovery period
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Liability Coverage</CardTitle>
              <CardDescription>Protection for third-party claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Personal Liability</p>
                    <p className="text-xs text-muted-foreground">
                      Coverage for damage caused to others during play
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Property Damage</p>
                    <p className="text-xs text-muted-foreground">
                      Protection against claims for damaged property
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Legal Defense</p>
                    <p className="text-xs text-muted-foreground">
                      Legal representation in liability cases
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Equipment Coverage</p>
                    <p className="text-xs text-muted-foreground">
                      Limited coverage for personal hockey equipment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Coverage Details</CardTitle>
            <CardDescription>Important information about your insurance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">What's Covered</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Official training sessions</li>
                  <li>• Sanctioned matches and tournaments</li>
                  <li>• Club-organized events and activities</li>
                  <li>• Travel to/from official activities</li>
                  <li>• Equipment testing and fitting sessions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Exclusions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Unsanctioned or informal games</li>
                  <li>• Activities under influence of alcohol/drugs</li>
                  <li>• Pre-existing medical conditions</li>
                  <li>• Intentional misconduct or violence</li>
                  <li>• Equipment theft or loss</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50/50 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Incident Reporting Process
            </CardTitle>
            <CardDescription className="text-orange-600">
              What to do if an incident occurs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 text-orange-700 font-bold">1</div>
                  <h4 className="font-medium text-orange-800 mb-1">Immediate Care</h4>
                  <p className="text-xs text-orange-600">Ensure safety and provide first aid if trained</p>
                </div>
                
                <div className="text-center p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 text-orange-700 font-bold">2</div>
                  <h4 className="font-medium text-orange-800 mb-1">Report Incident</h4>
                  <p className="text-xs text-orange-600">Notify coach or club official immediately</p>
                </div>
                
                <div className="text-center p-4 border border-orange-200 rounded-lg bg-white">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 text-orange-700 font-bold">3</div>
                  <h4 className="font-medium text-orange-800 mb-1">Complete Forms</h4>
                  <p className="text-xs text-orange-600">Fill out incident report within 24 hours</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-orange-700 mb-3">
                  <strong>Emergency Contact:</strong> Call 112 for serious injuries
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    <Phone className="h-4 w-4 mr-2" />
                    Club Safety Officer
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Incident Form
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Insurance Provider Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Primary Insurer</h4>
                <p className="text-sm text-muted-foreground mb-1">Belgian Hockey Federation Insurance</p>
                <p className="text-sm text-muted-foreground">Policy Number: [Policy Number]</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Claims Contact</h4>
                <p className="text-sm text-muted-foreground mb-1">Phone: +32 [Insurance Phone]</p>
                <p className="text-sm text-muted-foreground">Email: claims@belgiumhockey.be</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                For detailed policy terms and conditions, please refer to your membership welcome packet 
                or contact the club administration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insurance;