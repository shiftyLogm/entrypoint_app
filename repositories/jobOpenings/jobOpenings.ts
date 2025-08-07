import axios, { AxiosResponse } from 'axios'
import { JobOpening } from './type';
import { apiBaseUrl } from '@/config/env.json'

const BASE_URL = '/job-openings'

export const getAllJobOpenings = async () => {
    const response: AxiosResponse<JobOpening[]> = await axios.get<JobOpening[]>(`${apiBaseUrl}${BASE_URL}/all`)
    return response.data;
}

export const getJobOpeningById = async (id: string): Promise<JobOpening | null> => {
    const response: AxiosResponse<JobOpening> = await axios.get(`${apiBaseUrl}${BASE_URL}/${id}`);
    return response.data;
};