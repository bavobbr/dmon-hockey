import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, ExternalLink, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

const API_URL = "https://fih-rag-api-282549120912.europe-west1.run.app/chat";
const API_KEY = "some_secret_key";

interface Message {
  role: "user" | "assistant";
  content: string;
  variant?: string;
}

interface ChatHistory {
  role: "user" | "assistant";
  content: string;
}

export default function RulesAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const buildHistory = (): ChatHistory[] => {
    return messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    
    // Add user message to chat
    const newUserMessage: Message = { role: "user", content: userMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const history = buildHistory();
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY
        },
        body: JSON.stringify({
          query: userMessage,
          history: history
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant response to chat
      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer,
        variant: data.variant
      };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Fout",
        description: "Er ging iets mis bij het ophalen van het antwoord. Probeer het opnieuw.",
        variant: "destructive"
      });
      // Remove the user message if the request failed
      setMessages(prev => prev.slice(0, -1));
      setInputValue(userMessage); // Restore input
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getVariantLabel = (variant: string) => {
    switch (variant?.toLowerCase()) {
      case "outdoor":
        return "Outdoor Hockey";
      case "indoor":
        return "Indoor Hockey";
      case "hockey5s":
        return "Hockey5s";
      default:
        return variant;
    }
  };

  const getVariantColor = (variant: string) => {
    switch (variant?.toLowerCase()) {
      case "outdoor":
        return "bg-green-600 hover:bg-green-700";
      case "indoor":
        return "bg-blue-600 hover:bg-blue-700";
      case "hockey5s":
        return "bg-orange-600 hover:bg-orange-700";
      default:
        return "bg-primary hover:bg-primary/90";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="h-[calc(100vh-12rem)] flex flex-col">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Regels Assistent</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Stel vragen over officiële FIH hockeyregels
                </p>
              </div>
            </div>
            <a
              href="https://fieldhockeyrules.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              Meer functies
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          {/* Messages area */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                <Bot className="h-12 w-12 mb-4 opacity-50" />
                <p className="text-lg font-medium">Welkom bij de Regels Assistent</p>
                <p className="text-sm mt-1">
                  Stel een vraag over hockeyregels en ik help je graag!
                </p>
                <p className="text-xs mt-4 max-w-md">
                  Bijvoorbeeld: "Wat is een strafcorner?", "Hoe lang duurt een groene kaart?", 
                  of "Wat zijn de regels voor indoor hockey?"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <div className="text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                          <ReactMarkdown>{message.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      )}
                      {message.variant && (
                        <Badge 
                          className={`mt-2 text-xs ${getVariantColor(message.variant)} text-white`}
                        >
                          {getVariantLabel(message.variant)}
                        </Badge>
                      )}
                    </div>
                    {message.role === "user" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Stel een vraag over hockeyregels..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button 
                onClick={sendMessage} 
                disabled={!inputValue.trim() || isLoading}
                size="icon"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Antwoorden zijn gebaseerd op officiële FIH regelgeving. 
              <a
                href="https://fieldhockeyrules.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Bezoek fieldhockeyrules.app voor bronvermeldingen en meer functies.
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
