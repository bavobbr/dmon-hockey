import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VACANCY_CATEGORY_LABELS, VACANCY_CATEGORY_OPTIONS, slugify, type VacancyCategory } from '@/lib/vacancies';

const quillModules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};
const quillFormats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'link'];

const VacancyForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [category, setCategory] = useState<VacancyCategory>('werkgroep');
  const [emoji, setEmoji] = useState('');
  const [intro, setIntro] = useState('');
  const [content, setContent] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [published, setPublished] = useState(true);
  const [sortOrder, setSortOrder] = useState(0);

  const fetchVacancy = useCallback(async () => {
    if (!id) return;
    const { data, error } = await supabase.from('vacancies').select('*').eq('id', id).single();
    if (error || !data) {
      toast({ title: 'Fout', description: 'Kon vacature niet laden', variant: 'destructive' });
      navigate('/admin/vacancies');
      return;
    }
    setTitle(data.title);
    setSlug(data.slug);
    setSlugTouched(true);
    setCategory(data.category);
    setEmoji(data.emoji ?? '');
    setIntro(data.intro);
    setContent(data.content);
    setContactName(data.contact_name);
    setContactEmail(data.contact_email);
    setPublished(data.published);
    setSortOrder(data.sort_order);
  }, [id, navigate, toast]);

  useEffect(() => { if (isEditing) fetchVacancy(); }, [isEditing, fetchVacancy]);

  useEffect(() => {
    if (!isEditing && !slugTouched) setSlug(slugify(title));
  }, [title, slugTouched, isEditing]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !intro.trim() || !content.trim() || !contactName.trim() || !contactEmail.trim()) {
      toast({ title: 'Onvolledig', description: 'Vul alle verplichte velden in', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      category,
      emoji: emoji.trim() || null,
      intro: intro.trim(),
      content,
      contact_name: contactName.trim(),
      contact_email: contactEmail.trim(),
      published,
      sort_order: sortOrder,
    };
    const { error } = isEditing && id
      ? await supabase.from('vacancies').update(payload).eq('id', id)
      : await supabase.from('vacancies').insert([payload]);
    setLoading(false);
    if (error) {
      console.error(error);
      toast({
        title: 'Fout bij opslaan',
        description: error.message.includes('unique') ? 'Deze slug bestaat al' : 'Opslaan mislukt',
        variant: 'destructive',
      });
      return;
    }
    toast({ title: 'Opgeslagen', description: isEditing ? 'Vacature bijgewerkt' : 'Vacature aangemaakt' });
    navigate('/admin/vacancies');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isEditing ? 'Vacature bewerken' : 'Nieuwe vacature'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing ? 'Pas de gegevens van de vacature aan' : 'Maak een nieuwe vacature aan'}
        </p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Gegevens</CardTitle>
          <CardDescription>Alle velden met * zijn verplicht.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="space-y-2">
                <Label htmlFor="title">Titel *</Label>
                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} maxLength={200} required
                  placeholder="Bijv. Vacature Penningmeester" />
              </div>
              <div className="space-y-2 md:w-32">
                <Label htmlFor="emoji">Emoji</Label>
                <Input id="emoji" value={emoji} onChange={e => setEmoji(e.target.value)} maxLength={8} placeholder="🏑" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input id="slug" value={slug} onChange={e => { setSlug(e.target.value); setSlugTouched(true); }}
                  maxLength={80} required placeholder="penningmeester" />
                <p className="text-xs text-muted-foreground">URL: /vacatures/{slug || '…'}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categorie *</Label>
                <Select value={category} onValueChange={(v) => setCategory(v as VacancyCategory)}>
                  <SelectTrigger id="category"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {VACANCY_CATEGORY_OPTIONS.map(c => (
                      <SelectItem key={c} value={c}>{VACANCY_CATEGORY_LABELS[c]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="intro">Intro * <span className="text-xs text-muted-foreground">(1-2 zinnen, max 300 tekens)</span></Label>
              <Textarea id="intro" value={intro} onChange={e => setIntro(e.target.value)} maxLength={300} rows={3} required
                placeholder="Korte teaser die op de overzichtspagina verschijnt." />
              <p className="text-xs text-muted-foreground">{intro.length}/300</p>
            </div>

            <div className="space-y-2">
              <Label>Inhoud *</Label>
              <div className="min-h-[350px]">
                <ReactQuill value={content} onChange={setContent} modules={quillModules} formats={quillFormats}
                  theme="snow" className="h-[300px]" placeholder="Wat ga je doen? / Wie zoeken we? / Wat bieden we?" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contactName">Contactpersoon *</Label>
                <Input id="contactName" value={contactName} onChange={e => setContactName(e.target.value)} maxLength={100} required
                  placeholder="Naam van contactpersoon" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact-e-mail *</Label>
                <Input id="contactEmail" type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)}
                  maxLength={200} required placeholder="naam@dmon.be" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div>
                  <Label htmlFor="published" className="text-base">Gepubliceerd</Label>
                  <p className="text-xs text-muted-foreground">Zichtbaar op /vacatures</p>
                </div>
                <Switch id="published" checked={published} onCheckedChange={setPublished} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sortOrder">Volgorde</Label>
                <Input id="sortOrder" type="number" value={sortOrder} onChange={e => setSortOrder(Number(e.target.value) || 0)} />
                <p className="text-xs text-muted-foreground">Lager = hoger in lijst</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Opslaan…' : (isEditing ? 'Bijwerken' : 'Aanmaken')}
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate('/admin/vacancies')}>
                Annuleren
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacancyForm;
