import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { VACANCY_CATEGORY_LABELS, VACANCY_CATEGORY_BADGE, type VacancyCategory } from '@/lib/vacancies';

interface Vacancy {
  id: string;
  title: string;
  slug: string;
  category: VacancyCategory;
  emoji: string | null;
  intro: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const Vacancies = () => {
  const { toast } = useToast();
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVacancies = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('vacancies')
        .select('id,title,slug,category,emoji,intro,published,sort_order,created_at,updated_at')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });
      if (error) throw error;
      setVacancies(data || []);
    } catch (error) {
      console.error('Error fetching vacancies:', error);
      toast({ title: 'Fout', description: 'Kon vacatures niet laden', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => { fetchVacancies(); }, [fetchVacancies]);

  const togglePublished = async (id: string, published: boolean) => {
    const { error } = await supabase.from('vacancies').update({ published: !published }).eq('id', id);
    if (error) {
      toast({ title: 'Fout', description: 'Kon status niet wijzigen', variant: 'destructive' });
      return;
    }
    setVacancies(vs => vs.map(v => v.id === id ? { ...v, published: !published } : v));
    toast({ title: 'Opgeslagen', description: !published ? 'Vacature is gepubliceerd' : 'Vacature is verborgen' });
  };

  const deleteVacancy = async (id: string) => {
    if (!confirm('Deze vacature verwijderen?')) return;
    const { error } = await supabase.from('vacancies').delete().eq('id', id);
    if (error) {
      toast({ title: 'Fout', description: 'Verwijderen mislukt', variant: 'destructive' });
      return;
    }
    setVacancies(vs => vs.filter(v => v.id !== id));
    toast({ title: 'Verwijderd', description: 'Vacature is verwijderd' });
  };

  const move = async (index: number, dir: -1 | 1) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= vacancies.length) return;
    const a = vacancies[index];
    const b = vacancies[newIndex];
    const [orderA, orderB] = [a.sort_order, b.sort_order];
    // Als beide gelijk zijn, forceer een verschil
    const newA = orderA === orderB ? orderB + (dir === -1 ? -1 : 1) : orderB;
    const newB = orderA === orderB ? orderA : orderA;
    await Promise.all([
      supabase.from('vacancies').update({ sort_order: newA }).eq('id', a.id),
      supabase.from('vacancies').update({ sort_order: newB }).eq('id', b.id),
    ]);
    await fetchVacancies();
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="animate-pulse space-y-4">
          {[...Array(4)].map((_, i) => (<div key={i} className="h-24 bg-muted rounded-lg" />))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Vacatures</h1>
          <p className="text-muted-foreground">Beheer vrijwilligersvacatures voor de club</p>
        </div>
        <Link to="/admin/vacancies/new">
          <Button><Plus className="h-4 w-4 mr-2" />Nieuwe vacature</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {vacancies.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">Nog geen vacatures</p>
              <Link to="/admin/vacancies/new">
                <Button><Plus className="h-4 w-4 mr-2" />Maak je eerste vacature</Button>
              </Link>
            </CardContent>
          </Card>
        ) : vacancies.map((v, i) => (
          <Card key={v.id}>
            <CardHeader>
              <div className="flex justify-between items-start gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <CardTitle className="flex items-center gap-2 flex-wrap">
                    {v.emoji && <span aria-hidden>{v.emoji}</span>}
                    <span>{v.title}</span>
                    <Badge variant="outline" className={VACANCY_CATEGORY_BADGE[v.category]}>
                      {VACANCY_CATEGORY_LABELS[v.category]}
                    </Badge>
                    <Badge variant={v.published ? 'default' : 'outline'}>
                      {v.published ? 'Gepubliceerd' : 'Verborgen'}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-1">{v.intro}</CardDescription>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Button variant="outline" size="sm" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Omhoog">
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => move(i, 1)} disabled={i === vacancies.length - 1} aria-label="Omlaag">
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => togglePublished(v.id, v.published)} aria-label={v.published ? 'Verbergen' : 'Publiceren'}>
                    {v.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Link to={`/admin/vacancies/edit/${v.id}`}>
                    <Button variant="outline" size="sm" aria-label="Bewerken"><Edit className="h-4 w-4" /></Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => deleteVacancy(v.id)} aria-label="Verwijderen">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
