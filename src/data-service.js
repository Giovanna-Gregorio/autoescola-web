import http from "./http-common";

class DataService {
    getAll(endpoint) {
      return http.get(endpoint);
    }
  
    get(endpoint, id) {
      return http.get(`${endpoint}/${id}`);
    }
  
    post(endpoint, data) {
      return http.post(endpoint, data);
    }
  
    put(endpoint, id, data) {
      return http.put(`${endpoint}/${id}`, data);
    }
  
    delete(endpoint, id) {
      return http.delete(`${endpoint}/${id}`);
    }
  }


export default new DataService();