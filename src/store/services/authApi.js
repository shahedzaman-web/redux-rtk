import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi ({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery ({
    baseUrl: 'https://boiling-refuge-97275.herokuapp.com',
  }),

  endpoints: builder => ({
  //   signupUser: builder.mutation ({
  //     query: body => {
  //       //   console.log({body})
  //       return {
  //         url: '/posts',
  //         method: 'POST',
  //         body,
  //       };
  //     },
  //   }),
    signinUser: builder.mutation ({
      query: body => {
        console.log ({body});
        return {
          url: '/user/signin',
          method: 'POST',
          body: body,
        };
      },
    }),
    getAuthToken: builder.mutation({
      query: email => ({
        body: {
          email: `1ds#2d54${email}df15kg2@3456gfh`,
          password:
            'gdfiugh>-fhfgh^&*^5~+!i(mki6y48jk93xem!t2*xdlau-)e=)g8(ad_aghn3eu4^$_ln',
        },
        url: '/token/',
        method: 'POST',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSignupUserMutation, useSigninUserMutation,useGetAuthTokenMutation} = authApi;
