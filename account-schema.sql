-- Run once in your own Supabase SQL editor before activating account-config.js.
create table if not exists public.vocabulary_backups (
 user_id uuid primary key references auth.users(id) on delete cascade,
 words jsonb not null default '[]'::jsonb,
 constraint words_array check (jsonb_typeof(words) = 'array'),
 constraint words_size check (octet_length(words::text) <= 2000000)
);
alter table public.vocabulary_backups enable row level security;
revoke all on public.vocabulary_backups from anon;
grant select, insert, update, delete on public.vocabulary_backups to authenticated;
drop policy if exists "own_vocabulary_backup" on public.vocabulary_backups;
create policy "own_vocabulary_backup" on public.vocabulary_backups
 for all to authenticated
 using ((select auth.uid()) = user_id)
 with check ((select auth.uid()) = user_id);
