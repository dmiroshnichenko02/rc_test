import { API_URL } from '@/configs/api.config'
import axios from 'axios'
import { getContentType } from './api.helper'

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})
