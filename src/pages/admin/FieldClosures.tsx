import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface FieldClosure {
  id: string;
  closure_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  status: "closure" | "pending";
}

const FieldClosures = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: closures, isLoading } = useQuery({
    queryKey: ["admin-field-closures"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("field_closures")
        .select("*")
        .order("closure_date", { ascending: false })
        .order("start_time", { ascending: true });

      if (error) throw error;
      return data as FieldClosure[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("field_closures").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-field-closures"] });
      toast.success("Sluiting verwijderd");
    },
    onError: () => {
      toast.error("Fout bij verwijderen");
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Laden...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Terreinsluitingen</h1>
        <Button onClick={() => navigate("/admin/field-closures/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Nieuwe Sluiting
        </Button>
      </div>

      {closures && closures.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">Geen sluitingen gepland</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {closures?.map((closure) => (
            <Card key={closure.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {format(new Date(closure.closure_date), "EEEE d MMMM yyyy", { locale: nl })}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/admin/field-closures/edit/${closure.id}`)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Sluiting verwijderen?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Deze actie kan niet ongedaan worden gemaakt.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuleren</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteMutation.mutate(closure.id)}>
                            Verwijderen
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tijd: {closure.start_time.substring(0, 5)} - {closure.end_time.substring(0, 5)}
                </p>
                <p className="text-sm mt-1">Reden: {closure.reason}</p>
                <p className="text-sm mt-1">
                  Status: <span className={closure.status === "closure" ? "text-destructive" : "text-orange-600"}>
                    {closure.status === "closure" ? "Gesloten" : "In afwachting"}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FieldClosures;
