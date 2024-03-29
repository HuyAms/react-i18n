/**
 * Root API abstract
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import axios from 'axios'
import {stringify} from 'query-string'

const baseUrl: string =
	process.env.API_ENDPOINT || 'https://jsonplaceholder.typicode.com'

export const api: any = axios.create({baseURL: baseUrl})

const getData = res => res.data
const joinUrl = (path, params?, query?): string => {
	let joinedUrl = path

	if (params) {
		joinedUrl = joinedUrl + '/' + params
	}

	if (query) {
		joinedUrl = joinedUrl + `?${stringify(query)}`
	}

	return joinedUrl
}

export const requests = {
	get: (path: string, params?, query?) =>
		api.get(joinUrl(path, params, query)).then(getData),
	post: (path: string, body, params?, query?) =>
		api.post(joinUrl(path, params, query), body).then(getData),
	put: (path: string, body, params?, query?) =>
		api.put(joinUrl(path, params, query), body).then(getData),
	delete: (path: string, params?, query?) =>
		api.delete(joinUrl(path, params, query)).then(getData),
}
