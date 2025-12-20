const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
  async getProfile() {
    const response = await fetch(`${API_BASE_URL}/profile`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
  },

  async getAbout() {
    const response = await fetch(`${API_BASE_URL}/about`);
    if (!response.ok) throw new Error('Failed to fetch about');
    return response.json();
  },

  async getExperiences() {
    const response = await fetch(`${API_BASE_URL}/experiences`);
    if (!response.ok) throw new Error('Failed to fetch experiences');
    return response.json();
  },

  async getProjects() {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async getSkills() {
    const response = await fetch(`${API_BASE_URL}/skills`);
    if (!response.ok) throw new Error('Failed to fetch skills');
    return response.json();
  },

  async getAllPortfolioData() {
    const [profile, about, experiences, projects, skills] = await Promise.all([
      this.getProfile(),
      this.getAbout(),
      this.getExperiences(),
      this.getProjects(),
      this.getSkills(),
    ]);

    return {
      header: profile,
      about,
      experience: experiences,
      projects,
      skills,
    };
  },
};
