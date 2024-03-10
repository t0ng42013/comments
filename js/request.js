export const request = async () => {
  try {
    // Esperar 3 segundos antes de realizar la solicitud
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch("./db/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para manejarlo externamente si es necesario
  }
};
