export default defineEventHandler((e) => {
  const config = useRuntimeConfig();
  return {
    config,
  }
  // console.log('Header Authorization (SUPABASE KEY): ', headers.supabaseKey,
  // config.SUPABASE_KEY);

  // if (headers.authorization == config.apiSecret) {
  //   return 'You are Authorized';
  // }
  // else {
  //   return 'You are not Authorized';
  // }
})