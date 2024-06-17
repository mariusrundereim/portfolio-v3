export const fetchCaseStudies = async () => {
  try {
    const response = await fetch("/data/caseStudies.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching case studies:", error);
    throw error;
  }
};
