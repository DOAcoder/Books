import api from "../axios";

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`
}

const useBook = {
  createCountry: (data) => api.post("/country", data),
  getCountry: () => api.get("/country", { headers }),
  getCountryItem: (id) => api.get(`/country/${id}`, { headers }),
  updateCountry: (id, data) => api.put(`country/${id}`, data),
  deleteCountry: (id) => api.delete(`/country/${id}`, { headers })

}

export default useCountry