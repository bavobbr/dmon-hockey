UPDATE public.announcements SET content = replace(content, '&nbsp;', ' ') WHERE content LIKE '%&nbsp;%';
UPDATE public.announcements SET excerpt = replace(excerpt, '&nbsp;', ' ') WHERE excerpt LIKE '%&nbsp;%';
UPDATE public.vacancies SET content = replace(content, '&nbsp;', ' ') WHERE content LIKE '%&nbsp;%';
UPDATE public.vacancies SET intro = replace(intro, '&nbsp;', ' ') WHERE intro LIKE '%&nbsp;%';