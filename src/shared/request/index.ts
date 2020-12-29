import qs from "qs";

interface CreateResquestOptions {
  baseUrl: string;
}

type Params = Record<string, any>;

interface CustomRequest {
  get(endpoint?: string, params?: Params): void;
}

type HTTP_METHOD = "GET" | "POST" | "DELETE";

interface CreateFetchMethodOptions {
  endpoint?: string;
  body?: any;
  params?: Params;
  method: HTTP_METHOD;
}

export const createRequest = ({ baseUrl }: CreateResquestOptions) => {
  async function createFetchMethod<ResponseType>({
    method,
    endpoint,
    params,
    body,
  }: CreateFetchMethodOptions): Promise<ResponseType> {
    const url = `${baseUrl}${endpoint || ""}?${qs.stringify(params)}`;

    try {
      const plainRes = await fetch(url, {
        body,
        method,
      });

      const res = await plainRes.json();

      return res;
    } catch (error) {
      throw new Error("to be implemented");
    }
  }

  return {
    get: <ResponseType = any>(
      endpoint?: string,
      params?: Params
    ): Promise<ResponseType> =>
      createFetchMethod<ResponseType>({
        method: "GET",
        endpoint,
        params,
      }),
  };
};
