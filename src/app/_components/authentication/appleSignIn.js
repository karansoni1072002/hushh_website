import config from "../config/config";
export default async function appleSignIn() {
  const supabase = config.supabaseClient;
  // console.log(config.redirect_url);
  await supabase.auth
    .signInWithOAuth({
      provider: "apple",
      options: {
        redirectTo: config.redirect_url,
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    })
    .then(() => {});
}
