import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useProject } from '@/context/ProjectContext'

/** Tam ekran sayfa editörü (`public/vvveb/editor.html` iframe) */
export function BuilderPage() {
  const nav = useNavigate()
  const { project } = useProject()

  useEffect(() => {
    if (!project.siteType) nav('/')
    else if (!project.headerTemplateId) nav('/setup/shell')
  }, [project.siteType, project.headerTemplateId, nav])

  return (
    <div className="flex h-svh flex-col bg-zinc-950 text-zinc-100">
      <header className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-zinc-900/90 px-3 backdrop-blur-md">
        <div className="flex min-w-0 items-center gap-2 text-xs">
          <span className="truncate font-medium tracking-tight">Editör</span>
          <span className="hidden text-zinc-500 sm:inline">·</span>
          <span className="hidden truncate text-zinc-400 sm:inline">
            {project.siteType === 'ecommerce' ? 'E-ticaret' : 'Kurumsal'} · üst:{' '}
            {project.headerTemplateId ?? '—'} · alt: {project.footerTemplateId ?? '—'}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            to="/admin"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'h-8 text-zinc-300 hover:bg-white/10',
            )}
          >
            Panele dön
          </Link>
          <a
            href="/vvveb/editor.html"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'h-8 gap-1 text-zinc-300 hover:bg-white/10',
            )}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Yeni sekme
          </a>
        </div>
      </header>
      <iframe
        title="Editör"
        className="min-h-0 w-full flex-1 border-0 bg-white"
        src="/vvveb/editor.html"
      />
    </div>
  )
}
