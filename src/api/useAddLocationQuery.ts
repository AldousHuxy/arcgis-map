import { useMutation } from '@tanstack/react-query';
import { axiosClient } from './axios';
import { AxiosResponse } from 'axios';
import { Location, LocationFormData } from '../types/location';

export const useAddLocationMutation = () => {
    return useMutation({
        mutationKey: ['locations'],
        mutationFn: async (formData: LocationFormData) => (await axiosClient.post<LocationFormData, AxiosResponse<Location, Error>, unknown>('/locations', formData)).data
    })
}