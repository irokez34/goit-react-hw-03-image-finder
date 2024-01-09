import axios from 'axios';

export const getSearcth = async query => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=1&key=40461470-66901caa62e5925b557392cc4&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    alert('фільм не знайдено');
  }
};
