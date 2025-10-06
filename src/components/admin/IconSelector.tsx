import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IconSelectorProps {
  value: string;
  onChange: (iconName: string) => void;
}

// Popular icons for announcements
const popularIcons = [
  "Newspaper",
  "Trophy",
  "Calendar",
  "Users",
  "Award",
  "Star",
  "Heart",
  "Megaphone",
  "PartyPopper",
  "Bell",
  "Flag",
  "Target",
  "Zap",
  "Gift",
  "Camera",
  "MessageSquare",
  "Sparkles",
  "Medal",
  "Crown",
  "Rocket",
];

export function IconSelector({ value, onChange }: IconSelectorProps) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredIcons = search
    ? popularIcons.filter((icon) =>
        icon.toLowerCase().includes(search.toLowerCase())
      )
    : popularIcons;

  const SelectedIcon = (Icons as any)[value] || Icons.Newspaper;

  return (
    <div className="space-y-2">
      <Label>Icon</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            type="button"
          >
            <SelectedIcon className="h-4 w-4" />
            <span>{value}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-background" align="start">
          <div className="space-y-4">
            <Input
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto">
              {filteredIcons.map((iconName) => {
                const IconComponent = (Icons as any)[iconName];
                return (
                  <button
                    key={iconName}
                    type="button"
                    onClick={() => {
                      onChange(iconName);
                      setOpen(false);
                    }}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-accent transition-colors ${
                      value === iconName ? "bg-accent" : ""
                    }`}
                    title={iconName}
                  >
                    <IconComponent className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
