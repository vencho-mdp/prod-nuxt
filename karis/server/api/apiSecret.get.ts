export default defineEventHandler((e) => {
  const config = useRuntimeConfig();
  const headers = e.req.headers;
  
  // if (headers.authorization === config.apiSecret) {
  //   return 'You are Authorized';
  // }
  // else {
  //   return 'You are not Authorized';
  // }
})