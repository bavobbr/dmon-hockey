import { PageHero } from "@/components/layout/PageHero";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Bot, Send, User, ExternalLink, Loader2, MessageSquarePlus, ChevronDown, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

const API_URL = "https://fih-rag-api-282549120912.europe-west1.run.app/chat";
const API_KEY = "some_secret_key";

interface Message {
  role: "user" | "assistant";
  content: string;
  variant?: string;
  sourceNames?: string[];
}

interface SourceDoc {
  metadata?: { source_file?: string };
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
          history: history,
          country: "BEL"
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
        variant: data.variant,
        sourceNames: [...new Set<string>(
          (Array.isArray(data.source_docs) ? data.source_docs : [])
            .map((doc: SourceDoc) => doc.metadata?.source_file)
            .filter((name: unknown): name is string => typeof name === "string" && name.trim().length > 0)
        )]
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
    <>
      <PageHero label="Spelregels" title="Regels assistent" lead="Stel je vraag over de officiële FIH-spelregels en krijg meteen antwoord." />
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl">
      <Card className="h-[calc(100vh-12rem)] flex flex-col">
        <CardHeader className="border-b">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Regels Assistent</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Jurisdictie: <span className="font-semibold text-foreground">België (BEL)</span>
                </p>
                <p className="text-xs text-muted-foreground">FIH-spelregels met Belgische aanvullingen</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                disabled={isLoading || (messages.length === 0 && inputValue.length === 0)}
                onClick={() => {
                  setMessages([]);
                  setInputValue("");
                }}
              >
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                Nieuwe vraag
              </Button>
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
                          className={`mt-2 text-xs ${getVariantColor(message.variant)} text-primary-foreground`}
                        >
                          {getVariantLabel(message.variant)}
                        </Badge>
                      )}
                      {message.role === "assistant" && (message.sourceNames?.length ?? 0) > 0 && (
                        <Collapsible className="mt-3 border-t border-border pt-2">
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="group h-auto max-w-full gap-2 px-0 py-1 text-primary hover:bg-transparent">
                              <FileText className="h-3.5 w-3.5 shrink-0" />
                              Bronnen ({message.sourceNames?.length})
                              <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                              {message.sourceNames?.map(name => <li key={name} className="break-all">{name}</li>)}
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
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
                aria-label="Vraag versturen"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Antwoorden zijn gebaseerd op FIH-spelregels met Belgische aanvullingen. 
              <a
                href="https://fieldhockeyrules.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Meer functies op fieldhockeyrules.app.
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
