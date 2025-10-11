import { getDoctorById, getAllDoctors } from '@/data/doctors';
import DoctorDetailClient from './DoctorDetailClient';

export async function generateStaticParams() {
    const doctors = getAllDoctors();
    return doctors.map((doctor) => ({
        id: doctor.id,
    }));
}

interface DoctorPageProps {
    params: {
        id: string;
    };
}

export default function DoctorPage({ params }: DoctorPageProps) {
    const doctor = getDoctorById(params.id);

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return <DoctorDetailClient doctor={doctor} />;
}