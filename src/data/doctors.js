// Import doctors data from JSON file
import doctorsData from './doctors.json';

// Extract doctors array from the JSON data
const doctors = doctorsData.doctors;

// Helper functions to work with the doctors data
export function getAllDoctors() {
    return doctors;
}

export function getDoctorById(id) {
    return doctors.find(doctor => doctor.id === id);
}

// Additional helper functions for filtering and searching
export function getDoctorsBySpecialty(specialty) {
    return doctors.filter(doctor => 
        doctor.specializations.some(spec => 
            spec.toLowerCase().includes(specialty.toLowerCase())
        )
    );
}

export function getDoctorsByLocation(location) {
    return doctors.filter(doctor => 
        doctor.location.toLowerCase().includes(location.toLowerCase())
    );
}

export function getDoctorsByLanguage(language) {
    return doctors.filter(doctor => 
        doctor.languages.some(lang => 
            lang.toLowerCase().includes(language.toLowerCase())
        )
    );
}

export function searchDoctors(query) {
    const lowercaseQuery = query.toLowerCase();
    return doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(lowercaseQuery) ||
        doctor.specialty.toLowerCase().includes(lowercaseQuery) ||
        doctor.specializations.some(spec => 
            spec.toLowerCase().includes(lowercaseQuery)
        )
    );
}

// Get statistics from the JSON data
export function getDoctorStatistics() {
    return doctorsData.statistics;
}

// Get all specialties
export function getAllSpecialties() {
    return doctorsData.specialties;
}

// Get all locations
export function getAllLocations() {
    return doctorsData.locations;
}

// Get all languages
export function getAllLanguages() {
    return doctorsData.languages;
}

// Get all conditions
export function getAllConditions() {
    return doctorsData.conditions;
}

// Get doctors by condition
export function getDoctorsByCondition(conditionId) {
    const condition = doctorsData.conditions.find(c => c.id === conditionId);
    if (!condition) return [];
    
    return doctors.filter(doctor => condition.doctors.includes(doctor.id));
}

// Export the raw data for advanced usage
export { doctorsData };

// Legacy exports for backward compatibility
export { doctors };