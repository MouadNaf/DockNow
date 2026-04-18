import React, { useState } from 'react';
import { DoctorLayout } from '@/widgets/layout/DoctorLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserPlus, UserCog } from 'lucide-react';

const secretarySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type SecretaryFormValues = z.infer<typeof secretarySchema>;

export function DoctorSecretariesPage() {
    const [secretaries, setSecretaries] = useState([{ id: 'u2', name: 'Amira', email: 'amira@takwit.com' }]);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SecretaryFormValues>({
        resolver: zodResolver(secretarySchema)
    });

    const onSubmit = (data: SecretaryFormValues) => {
        const newSec = { id: `sec-${Date.now()}`, name: data.name, email: data.email };
        setSecretaries([...secretaries, newSec]);
        reset();
    };

    return (
        <DoctorLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Secretaries</h2>
                    <p className="text-gray-500">Add or remove secretary access to your clinic.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* List */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <UserCog className="text-blue-500" />
                            <h3 className="text-lg font-bold text-gray-900">Current Secretaries</h3>
                        </div>
                        <div className="space-y-4">
                            {secretaries.map(sec => (
                                <div key={sec.id} className="flex justify-between items-center p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                                    <div>
                                        <p className="font-bold text-gray-900">{sec.name}</p>
                                        <p className="text-sm text-gray-500">{sec.email}</p>
                                    </div>
                                    <button className="text-red-500 text-sm font-semibold hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <UserPlus className="text-green-500" />
                            <h3 className="text-lg font-bold text-gray-900">Add New Secretary</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    {...register('name')} 
                                    className={`w-full border rounded-xl p-3 outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                                    placeholder="Enter full name"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    {...register('email')} 
                                    type="email"
                                    className={`w-full border rounded-xl p-3 outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                                    placeholder="secretary@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Temporary Password</label>
                                <input 
                                    {...register('password')} 
                                    type="password"
                                    className={`w-full border rounded-xl p-3 outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                                    placeholder="••••••••"
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors mt-4">
                                Add Secretary
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
}
