import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";

interface FormData {
  closure_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  status: "closure" | "pending";
}

const FieldClosureForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const isEditing = !!id;

  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      status: "closure"
    }
  });
  
  const statusValue = watch("status");

  const { isLoading } = useQuery({
    queryKey: ["field-closure", id],
    queryFn: async () => {
      if (!id) return null;

      const { data, error } = await supabase
        .from("field_closures")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      
      reset({
        closure_date: data.closure_date,
        start_time: data.start_time.substring(0, 5),
        end_time: data.end_time.substring(0, 5),
        reason: data.reason,
        status: data.status as "closure" | "pending",
      });
      
      return data;
    },
    enabled: isEditing,
  });

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      if (!user) throw new Error("Not authenticated");

      const payload = {
        ...formData,
        created_by: user.id,
      };

      if (isEditing) {
        const { error } = await supabase
          .from("field_closures")
          .update(payload)
          .eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("field_closures").insert([payload]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(isEditing ? "Sluiting bijgewerkt" : "Sluiting aangemaakt");
      navigate("/admin/field-closures");
    },
    onError: () => {
      toast.error("Er is een fout opgetreden");
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Laden...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Sluiting Bewerken" : "Nieuwe Sluiting"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="closure_date">Datum</Label>
              <Input
                id="closure_date"
                type="date"
                {...register("closure_date", { required: true })}
                min={format(new Date(), "yyyy-MM-dd")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start_time">Starttijd</Label>
                <Input
                  id="start_time"
                  type="time"
                  {...register("start_time", { required: true })}
                />
              </div>

              <div>
                <Label htmlFor="end_time">Eindtijd</Label>
                <Input
                  id="end_time"
                  type="time"
                  {...register("end_time", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="reason">Reden</Label>
              <Input
                id="reason"
                {...register("reason", { required: true })}
                placeholder="bijv. vorst, onderhoud, evenement"
              />
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={statusValue}
                onValueChange={(value) => setValue("status", value as "closure" | "pending")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="closure">Gesloten</SelectItem>
                  <SelectItem value="pending">In afwachting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Bezig..." : isEditing ? "Bijwerken" : "Aanmaken"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/field-closures")}
              >
                Annuleren
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FieldClosureForm;
