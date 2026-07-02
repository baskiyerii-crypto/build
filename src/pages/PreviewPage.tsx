import { Link } from 'react-router-dom'
import { canvasMaxWidth, deviceLabel } from '@/lib/device-frame'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useProject } from '@/context/ProjectContext'

export function PreviewPage() {
  const { project } = useProject()

  return (
    <div className="min-h-svh bg-zinc-100 text-foreground dark:bg-zinc-950">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-background/95 px-4 py-2.5 backdrop-blur-md">
        <p className="text-sm font-semibold">Önizleme</p>
        <Link to="/builder" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
          Editör
        </Link>
      </div>
      <div className="mx-auto max-w-full px-4 py-8">
        <div
          className="mx-auto rounded-xl border border-border/80 bg-background shadow-lg"
          style={{ maxWidth: canvasMaxWidth(project.device) }}
        >
          <div className="border-b bg-muted/40 px-4 py-2 text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {deviceLabel(project.device)} · canlı önizleme Editör içindeki Önizleme ile yapılır
          </div>
          <div className="space-y-4 p-8 text-sm text-muted-foreground">
            <p>
              Bu ekran eski blok önizlemesini kaldırdı. Düzenlemek için{' '}
              <Link to="/builder" className="font-medium text-foreground underline-offset-4 hover:underline">
                builder
              </Link>{' '}
              sayfasında Önizleme düğmesini kullanın.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
