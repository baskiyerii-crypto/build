import { createEmptyProject, type DevicePreview, type Project } from '@/types/project'

const STORAGE_KEY = 'builder-site-v1'

type LegacyV1 = {
  schemaVersion?: number
  siteType?: Project['siteType']
  headerTemplateId?: string | null
  footerTemplateId?: string | null
  device?: unknown
  previewChrome?: boolean
  role?: Project['role']
}

function normalizeDevice(raw: unknown): DevicePreview {
  if (raw === 'tablet') return 'tabletLandscape'
  if (
    raw === 'desktop' ||
    raw === 'tabletLandscape' ||
    raw === 'tabletPortrait' ||
    raw === 'mobile'
  ) {
    return raw
  }
  return 'desktop'
}

function migrateToV2(raw: LegacyV1): Project {
  const device = normalizeDevice(raw.device)
  return {
    schemaVersion: 2,
    siteType: raw.siteType ?? null,
    headerTemplateId: raw.headerTemplateId ?? null,
    footerTemplateId: raw.footerTemplateId ?? null,
    device,
    previewChrome: Boolean(raw.previewChrome),
    role: raw.role === 'client' ? 'client' : 'owner',
  }
}

export function loadProject(): Project {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createEmptyProject()
    const data = JSON.parse(raw) as LegacyV1
    if (data.schemaVersion === 2) {
      return { ...createEmptyProject(), ...data, schemaVersion: 2 } as Project
    }
    if (data.schemaVersion === 1 || data.siteType !== undefined) {
      return migrateToV2(data)
    }
    return createEmptyProject()
  } catch {
    return createEmptyProject()
  }
}

export function saveProject(project: Project): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(project))
}

export function clearProject(): void {
  localStorage.removeItem(STORAGE_KEY)
}
