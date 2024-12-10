import { baseApi } from "../../API/baseApi";


const menuApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllMenus: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["menu"],
        }),

        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["menu"],
        }),
    }),
});

export const {
    useGetAllMenusQuery,
    useGetSingleProductQuery
} = menuApi;
