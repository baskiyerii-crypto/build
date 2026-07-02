/** Eski kayıtlarda `tablet` string’i storage migrasyonu ile eşlenir */
export type DevicePreview =
  | 'desktop'
  | 'tabletLandscape'
  | 'tabletPortrait'
  | 'mobile'

export type SiteType = 'ecommerce' | 'corporate'

export type UserRole = 'owner' | 'client'

/** Sihirbaz + panel tercihleri (sayfa içeriği iframe editörde) */
export interface Project {
  schemaVersion: 2
  siteType: SiteType | null
  headerTemplateId: string | null
  footerTemplateId: string | null
  device: DevicePreview
  previewChrome: boolean
  role: UserRole
}

export function createEmptyProject(): Project {
  return {
    schemaVersion: 2,
    siteType: null,
    headerTemplateId: null,
    footerTemplateId: null,
    device: 'desktop',
    previewChrome: false,
    role: 'owner',
  }
}
