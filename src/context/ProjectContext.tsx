/* Context modülü: hook + provider aynı dosyada (react-refresh uyarısı kabul edildi) */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react'
import { loadProject, saveProject } from '@/lib/storage'
import { createEmptyProject, type DevicePreview, type Project, type SiteType, type UserRole } from '@/types/project'

type State = { project: Project }

type Action =
  | { type: 'HYDRATE'; project: Project }
  | { type: 'SET_SITE_TYPE'; siteType: SiteType }
  | {
      type: 'SET_SHELL'
      headerTemplateId: string
      footerTemplateId: string
    }
  | { type: 'SET_DEVICE'; device: DevicePreview }
  | { type: 'SET_PREVIEW_CHROME'; previewChrome: boolean }
  | { type: 'SET_ROLE'; role: UserRole }
  | { type: 'RESET_WIZARD' }

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case 'HYDRATE':
      return { project: a.project }
    case 'SET_SITE_TYPE': {
      const project = { ...s.project, siteType: a.siteType }
      saveProject(project)
      return { project }
    }
    case 'SET_SHELL': {
      const project: Project = {
        ...s.project,
        headerTemplateId: a.headerTemplateId,
        footerTemplateId: a.footerTemplateId,
      }
      saveProject(project)
      return { project }
    }
    case 'SET_DEVICE': {
      const project = { ...s.project, device: a.device }
      saveProject(project)
      return { project }
    }
    case 'SET_PREVIEW_CHROME': {
      const project = { ...s.project, previewChrome: a.previewChrome }
      saveProject(project)
      return { project }
    }
    case 'SET_ROLE': {
      const project = { ...s.project, role: a.role }
      saveProject(project)
      return { project }
    }
    case 'RESET_WIZARD': {
      const project = createEmptyProject()
      saveProject(project)
      return { project }
    }
    default:
      return s
  }
}

type Ctx = {
  project: Project
  setSiteType: (t: SiteType) => void
  setShell: (input: { headerTemplateId: string; footerTemplateId: string }) => void
  setDevice: (d: DevicePreview) => void
  setPreviewChrome: (v: boolean) => void
  setRole: (r: UserRole) => void
  resetWizard: () => void
}

const ProjectContext = createContext<Ctx | null>(null)

const initial: State = { project: loadProject() }

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial)

  const value = useMemo<Ctx>(
    () => ({
      project: state.project,
      setSiteType: (siteType) => dispatch({ type: 'SET_SITE_TYPE', siteType }),
      setShell: (input) => dispatch({ type: 'SET_SHELL', ...input }),
      setDevice: (device) => dispatch({ type: 'SET_DEVICE', device }),
      setPreviewChrome: (previewChrome) =>
        dispatch({ type: 'SET_PREVIEW_CHROME', previewChrome }),
      setRole: (role) => dispatch({ type: 'SET_ROLE', role }),
      resetWizard: () => dispatch({ type: 'RESET_WIZARD' }),
    }),
    [state.project],
  )

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}

export function useProject() {
  const v = useContext(ProjectContext)
  if (!v) throw new Error('useProject must be used within ProjectProvider')
  return v
}
