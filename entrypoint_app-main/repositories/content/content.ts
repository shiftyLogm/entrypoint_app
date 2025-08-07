import axios, { AxiosResponse } from 'axios'
import { Content } from './type';
import { apiBaseUrl } from '@/config/env.json'

const BASE_URL = '/content'

export const getAllIdeas = async () => {
    const response: AxiosResponse<Content[]> = await axios.get<Content[]>(`${apiBaseUrl}${BASE_URL}/idea`)
    return response.data;
}

export const getIdeaById = async (id: string): Promise<Content | null> => {
    const response: AxiosResponse<Content> = await axios.get(`${apiBaseUrl}${BASE_URL}/idea/${id}`);
    return response.data;
};

export const getAllResumes = async () => {
    const response: AxiosResponse<Content[]> = await axios.get<Content[]>(`${apiBaseUrl}${BASE_URL}/resume`)
    return response.data;
}

export const getResumeById = async (id: string): Promise<Content | null> => {
    const response: AxiosResponse<Content> = await axios.get(`${apiBaseUrl}${BASE_URL}/resume/${id}`);
    return response.data;
};