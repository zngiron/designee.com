import type { RequestEndpoint } from '@/library/api';

import { RequestMethod } from '@/library/api';
import { env } from '@/library/environment';

type RequestParams<T> = {
  method: RequestMethod;
  endpoint: RequestEndpoint;
  headers?: Record<string, string>;
  body?: T;
};

export const request = async <T, R = unknown>({ method, endpoint, headers, body }: RequestParams<T>): Promise<R> => {
  const url = new URL(`${env.API}${endpoint}`);

  if (method === RequestMethod.GET && body) {
    url.search = new URLSearchParams(body as Record<string, string>).toString();
  }

  try {
    const response = await fetch(url.toString(), {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.TOKEN}`,
        ...headers,
      },
      body: method !== RequestMethod.GET && body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('[ERROR][401] Unauthorized');
      }

      if (response.status === 500) {
        throw new Error('[ERROR][500] An unknown error occurred');
      }

      throw new Error(`[ERROR][E${response.status}] Request failed`);
    }

    const text = await response.text();
    if (!text) {
      return {} as R;
    }

    const data = JSON.parse(text);
    return data as R;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('[ERROR][500] An unknown error occurred');
  }
};
