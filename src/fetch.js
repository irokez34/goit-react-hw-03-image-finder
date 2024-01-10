import axios from 'axios';

export const getSearcth = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=40461470-66901caa62e5925b557392cc4&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    alert('не знайдено');
  }
};
