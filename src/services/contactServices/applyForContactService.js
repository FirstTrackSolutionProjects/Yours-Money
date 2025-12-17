const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const applyForContactService = async (formData) => {
  // Validate with Zod schema
  let data;
  try {
    const response = await fetch(`${BACKEND_URL}/contact/submit-contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    data = await response.json();

    if (!data.success) {
      throw new Error(data?.message || "Something went wrong");
    }

    return data?.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unexpected error occurred");
  }
};

export default applyForContactService;
