// import axios from 'axios';
// import { useRouter } from 'next/router';

// export const useAxios = () => {

//   const { isReady } = useRouter();

//   const accessToken = isReady && typeof window !== 'undefined' ? localStorage?.getItem('accessToken') : undefined;

//   const requester = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//     headers: {
//       'content-type': 'application/json',
//       Authorization: Bearer ${accessToken},
//     },
//   });

//   const nextRequester = axios.create({
//     baseURL: process.env.AUTH0_BASE_URL,
//     headers: {
//       'content-type': 'application/json',
//     },
//   });
//   return { requester, nextRequester };
// };
