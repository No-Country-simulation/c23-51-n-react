export const fetchData = async (path, method, body, token) => {
    try {
      const URL = import.meta.env.VITE_BASE_URL;
  
      const headers = { "Content-Type": "application/json" };
  
      token && (headers["Authorization"] = `Bearer ${token}`);
      const options = { method, headers };
      body && method != "GET" && (options.body = JSON.stringify(body));
  
      const res = await fetch(`${URL}/${path}`, options);
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Ha ocurrido un error");
      }
  
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
  
  