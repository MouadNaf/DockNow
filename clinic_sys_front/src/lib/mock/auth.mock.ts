import type { AuthUser, InviteValidation, LoginCredentials } from '@/types/auth'

const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

type LoginResult = { user: AuthUser; token: string }

const users: Record<string, AuthUser> = {
  'doctor@test.com': {
    id: '1',
    firstName: 'Amine',
    lastName: 'Doctor',
    email: 'doctor@test.com',
    role: 'doctor',
    doctorType: 'doctor_only',
    status: 'active',
  },
  'cabinet@test.com': {
    id: '2',
    firstName: 'Lina',
    lastName: 'Cabinet',
    email: 'cabinet@test.com',
    role: 'doctor',
    doctorType: 'private_cabinet',
    status: 'active',
  },
  'clinic@test.com': {
    id: '3',
    firstName: 'Nora',
    lastName: 'Clinic',
    email: 'clinic@test.com',
    role: 'clinic_admin',
    status: 'active',
  },
  'cabinetadmin@test.com': {
    id: '4',
    firstName: 'Yacine',
    lastName: 'CabAdmin',
    email: 'cabinetadmin@test.com',
    role: 'cabinet_admin',
    status: 'active',
  },
  'admin@test.com': {
    id: '5',
    firstName: 'Sara',
    lastName: 'Admin',
    email: 'admin@test.com',
    role: 'platform_admin',
    status: 'active',
  },
  'pending@test.com': {
    id: '6',
    firstName: 'Pending',
    lastName: 'User',
    email: 'pending@test.com',
    role: 'doctor',
    status: 'pending_approval',
  },
}

export async function mockLogin(credentials: LoginCredentials): Promise<LoginResult> {
  await wait()
  if (credentials.password !== 'Test1234' || !users[credentials.email]) {
    throw new Error('Invalid email or password')
  }
  return { user: users[credentials.email], token: `mock-token-${Date.now()}` }
}

/** Document field keys expected per registration role (admin / pending queue parity) */
export const mockPendingRegistrationsDocuments = {
  doctor: ['medical_license', 'national_id'] as const,
  clinic: ['clinic_registration', 'admin_national_id'] as const,
  cabinet: ['cabinet_registration', 'admin_national_id'] as const,
} as const

export async function mockRegisterDoctor(_: unknown) {
  await wait()
  return { message: 'Doctor account created', nextStep: 'pending' as const }
}

export async function mockRegisterClinic(_: unknown) {
  await wait()
  return { message: 'Clinic registration submitted', nextStep: 'pending' as const }
}

export async function mockRegisterCabinet(_: unknown) {
  await wait()
  return { message: 'Cabinet registration submitted', nextStep: 'pending' as const }
}

export async function mockCreatePrivateCabinet(_: unknown) {
  await wait()
  return { message: 'Private cabinet created', nextStep: 'pending' as const }
}

export async function mockValidateInviteCode(code: string): Promise<InviteValidation> {
  await wait()
  const map: Record<string, InviteValidation> = {
    'CLINIC-2026-SHIFA': {
      orgName: 'Clinique El Shifa',
      orgType: 'clinic',
      wilaya: 'Oran',
    },
    'CLINIC-2026-NOUR': {
      orgName: 'Clinique Nour',
      orgType: 'clinic',
      wilaya: 'Alger',
    },
    'CAB-2026-AMIRA': {
      orgName: 'Cabinet Amira',
      orgType: 'cabinet_collectif',
      wilaya: 'Alger',
    },
  }
  const result = map[code]
  if (!result) throw new Error('Invalid or expired code')
  return result
}

export async function mockForgotPassword(_: string) {
  await wait()
  return { message: 'If account exists, email sent' }
}

export async function mockResetPassword(_: string, __: string) {
  await wait()
  return { message: 'Password reset' }
}

export async function mockVerifyOTP(code: string) {
  await wait()
  if (code === '000000') throw new Error('Incorrect code. Please try again.')
  return { message: 'Verified' }
}
