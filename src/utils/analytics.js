import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const trackVisit = async (section) => {
  try {
    const device = window.innerWidth < 768 ? 'mobile' : 'desktop';
    const visitor_name = localStorage.getItem('visitor_name') || 'Anonymous';
    await axios.post(`${API_URL}/analytics/visit`, {
      section,
      device,
      visitor_name
    });
  } catch (error) {
    console.error('Failed to track visit:', error);
  }
};
