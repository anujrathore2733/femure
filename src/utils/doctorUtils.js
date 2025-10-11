// Utility functions for working with doctor data
import { doctorsData } from '@/data/doctors';

/**
 * Get doctor statistics for display
 */
export function getDoctorStats() {
    const stats = doctorsData.statistics;
    return {
        totalDoctors: stats.totalDoctors,
        totalPatients: stats.totalPatients,
        averageRating: stats.averageRating,
        totalExperience: stats.totalExperience,
        languagesSupported: stats.languagesSupported,
        locationsServed: stats.locationsServed,
        conditionsTreated: stats.conditionsTreated
    };
}

/**
 * Format doctor experience for display
 */
export function formatExperience(experience) {
    return experience.replace('+', '');
}

/**
 * Format patient count for display
 */
export function formatPatientCount(patients) {
    return patients.replace('+', '');
}

/**
 * Get featured doctors (highest rated)
 */
export function getFeaturedDoctors(limit = 3) {
    return doctorsData.doctors
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Get doctors by rating range
 */
export function getDoctorsByRating(minRating = 4.5) {
    return doctorsData.doctors.filter(doctor => doctor.rating >= minRating);
}

/**
 * Get doctors with most experience
 */
export function getMostExperiencedDoctors(limit = 3) {
    return doctorsData.doctors
        .sort((a, b) => {
            const aExp = parseInt(a.experience);
            const bExp = parseInt(b.experience);
            return bExp - aExp;
        })
        .slice(0, limit);
}

/**
 * Get doctors by consultation fee range
 */
export function getDoctorsByFeeRange(minFee = 0, maxFee = 1000) {
    return doctorsData.doctors.filter(doctor => {
        const fee = parseInt(doctor.consultationFee.replace('₹', ''));
        return fee >= minFee && fee <= maxFee;
    });
}

/**
 * Get available consultation types
 */
export function getConsultationTypes() {
    return [
        { id: 'video', name: 'Video Consultation', icon: 'Video' },
        { id: 'audio', name: 'Audio Consultation', icon: 'Phone' },
        { id: 'in-person', name: 'In-Person Consultation', icon: 'MapPin' }
    ];
}

/**
 * Get doctor availability status
 */
export function getDoctorAvailability() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Simple availability check based on current time
    if (currentHour >= 9 && currentHour <= 18 && currentDay >= 1 && currentDay <= 6) {
        return 'Available Now';
    } else if (currentHour >= 9 && currentHour <= 18) {
        return 'Available Today';
    } else {
        return 'Available Tomorrow';
    }
}

/**
 * Calculate doctor's success rate based on testimonials
 */
export function calculateSuccessRate(doctor) {
    const totalTestimonials = doctor.testimonials.length;
    const positiveTestimonials = doctor.testimonials.filter(t => t.rating >= 4).length;
    return totalTestimonials > 0 ? Math.round((positiveTestimonials / totalTestimonials) * 100) : 0;
}

/**
 * Get doctor's top specializations
 */
export function getTopSpecializations(doctor, limit = 3) {
    return doctor.specializations.slice(0, limit);
}

/**
 * Format doctor's education for display
 */
export function formatEducation(education) {
    return education.map(edu => {
        if (typeof edu === 'string') {
            return edu;
        }
        return `${edu.degree} - ${edu.institution} (${edu.year})`;
    });
}

/**
 * Get doctor's recent achievements
 */
export function getRecentAchievements(doctor, limit = 2) {
    return doctor.achievements.slice(0, limit);
}

/**
 * Check if doctor offers online consultation
 */
export function offersOnlineConsultation(doctor) {
    return doctor.location.toLowerCase().includes('online');
}

/**
 * Get doctor's consultation fee as number
 */
export function getConsultationFeeNumber(doctor) {
    return parseInt(doctor.consultationFee.replace('₹', ''));
}

/**
 * Sort doctors by various criteria
 */
export function sortDoctors(doctors, sortBy = 'rating', order = 'desc') {
    return doctors.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortBy) {
            case 'rating':
                aValue = a.rating;
                bValue = b.rating;
                break;
            case 'experience':
                aValue = parseInt(a.experience);
                bValue = parseInt(b.experience);
                break;
            case 'patients':
                aValue = parseInt(a.patients.replace(/,/g, ''));
                bValue = parseInt(b.patients.replace(/,/g, ''));
                break;
            case 'fee':
                aValue = getConsultationFeeNumber(a);
                bValue = getConsultationFeeNumber(b);
                break;
            case 'name':
                aValue = a.name;
                bValue = b.name;
                break;
            default:
                aValue = a.rating;
                bValue = b.rating;
        }
        
        if (order === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
}

/**
 * Filter doctors by multiple criteria
 */
export function filterDoctors(filters = {}) {
    let filteredDoctors = [...doctorsData.doctors];
    
    if (filters.specialty) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.specializations.some(spec =>
                spec.toLowerCase().includes(filters.specialty.toLowerCase())
            )
        );
    }
    
    if (filters.location) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }
    
    if (filters.language) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.languages.some(lang =>
                lang.toLowerCase().includes(filters.language.toLowerCase())
            )
        );
    }
    
    if (filters.minRating) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            doctor.rating >= filters.minRating
        );
    }
    
    if (filters.maxFee) {
        filteredDoctors = filteredDoctors.filter(doctor => {
            const fee = getConsultationFeeNumber(doctor);
            return fee <= filters.maxFee;
        });
    }
    
    if (filters.onlineOnly) {
        filteredDoctors = filteredDoctors.filter(doctor =>
            offersOnlineConsultation(doctor)
        );
    }
    
    return filteredDoctors;
}
