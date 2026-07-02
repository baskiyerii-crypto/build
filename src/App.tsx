import { Navigate, Route, Routes } from 'react-router-dom'
import { BuilderPage } from '@/pages/BuilderPage'
import { AdminDashboard } from '@/pages/AdminDashboard'
import { AdminOrdersPage } from '@/pages/AdminOrdersPage'
import { AdminProductsPage } from '@/pages/AdminProductsPage'
import { ChooseSiteType } from '@/pages/ChooseSiteType'
import { PreviewPage } from '@/pages/PreviewPage'
import { SetupShell } from '@/pages/SetupShell'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ChooseSiteType />} />
      <Route path="/setup/shell" element={<SetupShell />} />
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProductsPage />} />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
