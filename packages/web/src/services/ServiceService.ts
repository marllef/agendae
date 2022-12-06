import { api } from '~/configs';
import { BaseService } from './BaseService';

export class ServiceServices implements BaseService {
  async create(data: any): Promise<void> {
    const response = await api.post('/service', data)
    return response.data
  }

  async getAll(): Promise<void> {
    const response = await api.get('/service')
    return response.data
  }

  async getOne(id: any): Promise<void> {
    const response = await api.get(`/service/${id}`)
    return response.data
  }

  async update(id: any, data: any): Promise<void> {
    const response = await api.put(`/service/${id}`, data)
    return response.data
  }

  async delete(id: any): Promise<void> {
    const response = await api.delete(`/service/${id}`)
    return response.data
  }
}
 