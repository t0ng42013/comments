export const ListaProductos = async () => {
        try {
            const response = await fetch("./db/data.json");
            const data = await response.json();

            return data;
        } catch (error) {
            console.error(error);
        }
};