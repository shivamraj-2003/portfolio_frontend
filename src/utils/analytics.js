import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const trackVisit = async (section) => {
  try {
    const device = window.innerWidth < 768 ? 'mobile' : 'desktop';
    await axios.post(`${API_URL}/analytics/visit`, {
      section,
      device
    });
  } catch (error) {
    console.error('Failed to track visit:', error);
  }
};
