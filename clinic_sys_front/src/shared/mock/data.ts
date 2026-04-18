import type { User } from '@/entities/user';
import type { Patient } from '@/entities/patient';
import type { Appointment } from '@/entities/appointment';
import type { Schedule } from '@/entities/schedule';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Dr. Yassine', email: 'yassine@takwit.com', role: 'doctor' },
  { id: 'u2', name: 'Amira', email: 'amira@takwit.com', role: 'secretary' }
];

export const mockPatients: Patient[] = [
  { id: 'p1', name: 'Ahlam Benali', phone: '0555123456', totalVisits: 3, lastVisit: '2023-10-12' },
  { id: 'p2', name: 'Karim Brahimi', phone: '0666987654', totalVisits: 1, lastVisit: '2023-11-01' },
  { id: 'p3', name: 'Yassine Mansouri', phone: '0777112233', totalVisits: 5, lastVisit: '2023-10-25' },
  { id: 'p4', name: 'Fatima Zohra', phone: '0555443322', totalVisits: 0, lastVisit: '' },
  { id: 'p5', name: 'Omar Khelil', phone: '0666554433', totalVisits: 2, lastVisit: '2023-09-15' },
  { id: 'p6', name: 'Nadia Saidi', phone: '0777665544', totalVisits: 4, lastVisit: '2023-10-30' },
  { id: 'p7', name: 'Ali Belkacem', phone: '0555778899', totalVisits: 1, lastVisit: '2023-11-02' },
  { id: 'p8', name: 'Samira Toumi', phone: '0666112233', totalVisits: 6, lastVisit: '2023-10-05' },
  { id: 'p9', name: 'Hassan Cherif', phone: '0777998877', totalVisits: 2, lastVisit: '2023-10-20' },
  { id: 'p10', name: 'Meriem Haddad', phone: '0555223344', totalVisits: 3, lastVisit: '2023-10-28' },
];

export const mockAppointments: Appointment[] = [
  { id: 'a1', patientId: 'p1', doctorId: 'u1', date: '2023-11-10', time: '09:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a2', patientId: 'p2', doctorId: 'u1', date: '2023-11-10', time: '09:30', status: 'arrived', paymentStatus: 'paid', visitType: 'first_time', consultationFee: 2500, paidAt: '2023-11-10T09:25:00Z' },
  { id: 'a3', patientId: 'p3', doctorId: 'u1', date: '2023-11-10', time: '10:00', status: 'completed', paymentStatus: 'paid', visitType: 'follow_up', consultationFee: 2000, paidAt: '2023-11-10T10:30:00Z' },
  { id: 'a4', patientId: 'p4', doctorId: 'u1', date: '2023-11-10', time: '10:30', status: 'no_show', paymentStatus: 'unpaid', visitType: 'first_time', consultationFee: 2500 },
  { id: 'a5', patientId: 'p5', doctorId: 'u1', date: '2023-11-10', time: '11:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a6', patientId: 'p6', doctorId: 'u1', date: '2023-11-10', time: '13:00', status: 'confirmed', paymentStatus: 'paid', visitType: 'follow_up', consultationFee: 2000, paidAt: '2023-11-09T14:00:00Z' },
  { id: 'a7', patientId: 'p7', doctorId: 'u1', date: '2023-11-11', time: '09:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'first_time', consultationFee: 2500 },
  { id: 'a8', patientId: 'p8', doctorId: 'u1', date: '2023-11-11', time: '09:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a9', patientId: 'p9', doctorId: 'u1', date: '2023-11-11', time: '10:00', status: 'confirmed', paymentStatus: 'paid', visitType: 'follow_up', consultationFee: 2000, paidAt: '2023-11-05T10:00:00Z' },
  { id: 'a10', patientId: 'p10', doctorId: 'u1', date: '2023-11-11', time: '10:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a11', patientId: 'p1', doctorId: 'u1', date: '2023-11-12', time: '09:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a12', patientId: 'p2', doctorId: 'u1', date: '2023-11-12', time: '09:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a13', patientId: 'p3', doctorId: 'u1', date: '2023-11-12', time: '10:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a14', patientId: 'p4', doctorId: 'u1', date: '2023-11-12', time: '10:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'first_time', consultationFee: 2500 },
  { id: 'a15', patientId: 'p5', doctorId: 'u1', date: '2023-11-12', time: '11:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a16', patientId: 'p6', doctorId: 'u1', date: '2023-11-13', time: '09:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a17', patientId: 'p7', doctorId: 'u1', date: '2023-11-13', time: '09:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a18', patientId: 'p8', doctorId: 'u1', date: '2023-11-13', time: '10:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a19', patientId: 'p9', doctorId: 'u1', date: '2023-11-13', time: '10:30', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
  { id: 'a20', patientId: 'p10', doctorId: 'u1', date: '2023-11-13', time: '11:00', status: 'confirmed', paymentStatus: 'unpaid', visitType: 'follow_up', consultationFee: 2000 },
];

export const mockSchedules: Schedule[] = [
  { id: 's1', dayOfWeek: 0, startTime: '09:00', endTime: '16:00', slotDuration: 30, bufferTime: 0 },
  { id: 's2', dayOfWeek: 1, startTime: '09:00', endTime: '16:00', slotDuration: 30, bufferTime: 0 },
  { id: 's3', dayOfWeek: 2, startTime: '09:00', endTime: '16:00', slotDuration: 30, bufferTime: 0 },
  { id: 's4', dayOfWeek: 3, startTime: '09:00', endTime: '12:00', slotDuration: 30, bufferTime: 0 },
  { id: 's5', dayOfWeek: 4, startTime: '09:00', endTime: '16:00', slotDuration: 30, bufferTime: 0 },
];
