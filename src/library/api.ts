export type RequestMethod = (typeof RequestMethod)[keyof typeof RequestMethod];
export type RequestEndpoint = (typeof RequestEndpoint)[keyof typeof RequestEndpoint];

export const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export const RequestEndpoint = {
  USERS: '/users',
} as const;
