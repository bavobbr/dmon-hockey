import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Euro, Gift, ShoppingBag, Shirt, Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const MembershipInfo = () => {
  const programs = [
    {
      category: "Youth Programs",
      icon: Users,
      teams: [
        { name: "Mini Hockey", age: "6-8 years", fee: "€150", sessions: "1x per week" },
        { name: "Development", age: "9-12 years", fee: "€200", sessions: "2x per week" },
        { name: "Junior", age: "13-16 years", fee: "€250", sessions: "2x per week + matches" },
        { name: "Youth Elite", age: "17-18 years", fee: "€300", sessions: "3x per week + competitions" }
      ]
    },
    {
      category: "Adult Programs", 
      icon: Users,
      teams: [
        { name: "Recreational", age: "18+ years", fee: "€180", sessions: "1x per week" },
        { name: "Competitive", age: "18+ years", fee: "€280", sessions: "2x per week + matches" },
        { name: "Masters", age: "35+ years", fee: "€200", sessions: "1x per week + friendly matches" }
      ]
    }
  ];

  const discounts = [
    { type: "Family Discount", description: "15% off for second family member, 25% off for third+", icon: Gift },
    { type: "Student Discount", description: "20% off with valid student ID", icon: Gift },
    { type: "Early Bird", description: "10% off when registering before June 1st", icon: Gift }
  ];

  const equipment = [
    { item: "Hockey Stick", required: true, note: "Age-appropriate size and weight" },
    { item: "Shin Guards", required: true, note: "Properly fitted for protection" },
    { item: "Mouth Guard", required: true, note: "Mandatory for all players" },
    { item: "Hockey Shoes", required: true, note: "Non-marking soles for indoor courts" },
    { item: "Gloves", required: false, note: "Recommended for advanced players" },
    { item: "Protective Eyewear", required: false, note: "Recommended for youth players" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Join Our Club</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to D-Man Hockey</CardTitle>
            <CardDescription>
              Discover our programs for players of all ages and skill levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Whether you're new to hockey or an experienced player, we have a place for you. 
              Our programs focus on skill development, teamwork, and most importantly, having fun 
              while playing the sport we love.
            </p>
          </CardContent>
        </Card>

        {/* Programs & Fees */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {programs.map((program) => (
            <Card key={program.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <program.icon className="h-5 w-5" />
                  {program.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {program.teams.map((team) => (
                    <div key={team.name} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{team.name}</h4>
                        <Badge variant="secondary">{team.fee}/season</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Age: {team.age}</p>
                      <p className="text-sm text-muted-foreground">Training: {team.sessions}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Discounts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Available Discounts
            </CardTitle>
            <CardDescription>Save on membership fees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {discounts.map((discount) => (
                <div key={discount.type} className="flex items-start gap-3 p-4 border rounded-lg">
                  <discount.icon className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium">{discount.type}</h4>
                    <p className="text-sm text-muted-foreground">{discount.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Equipment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Required Equipment
            </CardTitle>
            <CardDescription>What you'll need to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {equipment.map((item) => (
                <div key={item.item} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-2 ${item.required ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.item}</h4>
                      <Badge variant={item.required ? "destructive" : "secondary"} className="text-xs">
                        {item.required ? "Required" : "Optional"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Club Clothing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5" />
              Club Clothing
            </CardTitle>
            <CardDescription>Official club gear and uniforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Training Gear</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Club polo shirt - €25</li>
                    <li>• Training shorts - €20</li>
                    <li>• Club hoodie - €35</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Match Kit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Home jersey - €30</li>
                    <li>• Away jersey - €30</li>
                    <li>• Match shorts - €25</li>
                    <li>• Match socks - €12</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <RouterLink to="/shop">
                  <Button>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Visit Club Shop
                  </Button>
                </RouterLink>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ready to Join */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Ready to Join?</CardTitle>
            <CardDescription>
              Start your hockey journey with us today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/membership/register">
                <Button size="lg">
                  Complete Registration Form
                </Button>
              </RouterLink>
              <RouterLink to="/membership/contact">
                <Button variant="outline" size="lg">
                  Have Questions? Contact Us
                </Button>
              </RouterLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MembershipInfo;