import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/** Django sipariş listesi buraya bağlanacak. */
export function AdminOrdersPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <p className="text-sm text-muted-foreground">Yönetim</p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">Siparişler</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sipariş durumu ve ödeme yöntemi (kapıda / havale) Django modellerinden beslenir.
      </p>
      <Link to="/admin" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'mt-6 inline-flex')}>
        Panele dön
      </Link>
    </div>
  )
}
