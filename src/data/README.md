# Doctors Data Structure

This directory contains the comprehensive JSON data structure for all doctors and related information used across the Femure website.

## Files

- `doctors.json` - Main JSON file containing all doctor data
- `doctors.js` - JavaScript module that imports and provides helper functions for the JSON data
- `../utils/doctorUtils.js` - Utility functions for working with doctor data

## JSON Structure

### Main Structure

```json
{
  "doctors": [...],           // Array of doctor objects
  "specialties": [...],       // Array of specialty objects
  "locations": [...],         // Array of location objects
  "languages": [...],         // Array of language objects
  "conditions": [...],        // Array of condition objects
  "statistics": {...}         // Overall statistics object
}
```

### Doctor Object Structure

```json
{
  "id": "dr-priya-sharma",
  "name": "Dr. Priya Sharma",
  "firstName": "Priya",
  "lastName": "Sharma",
  "specialty": "Women's Health Specialist",
  "rating": 4.9,
  "experience": "15+ years",
  "patients": "8,000+",
  "languages": ["English", "Hindi"],
  "quote": "Your health journey is unique, and so should be your treatment.",
  "image": "/img1.png",
  "education": [
    {
      "degree": "MD in Homeopathy",
      "institution": "National Institute of Homeopathy, Kolkata",
      "year": "2010"
    }
  ],
  "specializations": ["PCOS and Hormonal Disorders", "..."],
  "achievements": [
    {
      "title": "Best Homeopathic Doctor",
      "organization": "Indian Homeopathic Medical Association",
      "year": "2022"
    }
  ],
  "approach": "Dr. Priya believes in treating the whole person...",
  "consultationFee": "₹800",
  "availability": "Mon-Sat: 9 AM - 6 PM",
  "location": "Delhi, Mumbai, Online",
  "bio": "With over 15 years of experience...",
  "testimonials": [
    {
      "name": "Sarah M.",
      "condition": "PCOS",
      "rating": 5,
      "text": "Dr. Priya helped me manage my PCOS naturally...",
      "date": "2023-08-15"
    }
  ],
  "socialMedia": {
    "linkedin": "https://linkedin.com/in/dr-priya-sharma",
    "twitter": "https://twitter.com/drpriyasharma"
  },
  "certifications": ["Certified Homeopathic Practitioner (CHP)", "..."],
  "awards": ["Best Homeopathic Doctor 2022", "..."]
}
```

## Usage Examples

### Basic Usage

```javascript
import { getAllDoctors, getDoctorById } from '@/data/doctors';

// Get all doctors
const doctors = getAllDoctors();

// Get specific doctor
const doctor = getDoctorById('dr-priya-sharma');
```

### Advanced Filtering

```javascript
import { 
  getDoctorsBySpecialty, 
  getDoctorsByLocation, 
  searchDoctors 
} from '@/data/doctors';

// Get doctors by specialty
const pcosDoctors = getDoctorsBySpecialty('PCOS');

// Get doctors by location
const delhiDoctors = getDoctorsByLocation('Delhi');

// Search doctors
const searchResults = searchDoctors('fertility');
```

### Using Utility Functions

```javascript
import { 
  getFeaturedDoctors, 
  getDoctorStats, 
  filterDoctors 
} from '@/utils/doctorUtils';

// Get featured doctors (highest rated)
const featured = getFeaturedDoctors(3);

// Get statistics
const stats = getDoctorStats();

// Filter doctors with multiple criteria
const filtered = filterDoctors({
  specialty: 'PCOS',
  location: 'Delhi',
  minRating: 4.5,
  onlineOnly: true
});
```

## Adding New Doctors

To add a new doctor:

1. Add a new doctor object to the `doctors` array in `doctors.json`
2. Update the `specialties`, `locations`, `languages`, and `conditions` arrays if needed
3. Update the `statistics` object with new totals
4. Ensure the doctor ID is unique and follows the format `dr-firstname-lastname`

## Data Validation

The JSON structure includes validation for:

- Required fields (id, name, specialty, rating, etc.)
- Rating range (0-5)
- Experience format (X+ years)
- Patient count format (X,XXX+)
- Consultation fee format (₹XXX)
- Language codes and location names

## Performance Considerations

- The JSON file is imported at build time, so all data is available immediately
- Use the helper functions for filtering rather than processing the raw data
- Consider pagination for large lists of doctors
- Cache filtered results when possible

## Future Enhancements

Potential improvements to the data structure:

- Add doctor availability calendar data
- Include consultation booking slots
- Add more detailed location information (addresses, coordinates)
- Include doctor's response time and availability status
- Add more granular rating categories
- Include insurance and payment method information
