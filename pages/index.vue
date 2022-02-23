<script setup lang="ts">
const cookie = useCookie("path", { path: "/" });
const secureTrue = useCookie("secureTrue", { secure: true });
const cookieDomain = useCookie("domain", { domain: ".web.app" });
const httpOnlyTrue = useCookie("httpOnlyTrue", { httpOnly: true });
const sameSiteStrict = useCookie("SameSiteTrue", { sameSite: true });
const sameSiteLax = useCookie("SameSiteLax", { sameSite: "lax" });
const secureThttpFsameSiteTpath = useCookie("allinone", {
  secure: true,
  httpOnly: true,
  sameSite: true,
  path: "/",
});
const secureTsameSiteTpathMaxAge3600 = useCookie("allinone2", {
  secure: true,
  sameSite: true,
  path: "/",
  maxAge: 3600,
});
const set = () => {
  cookie.value = "path: '/'";
  secureTrue.value = "secure: True";
  cookieDomain.value = "domain .web.app";
  httpOnlyTrue.value = "'httpOnly true'";
  sameSiteStrict.value = "SameSite true";
  sameSiteLax.value = "SameSite Lax";
  secureThttpFsameSiteTpath.value =
    "secure: true, samesite: true, httpOnly: true, path: '/";
  secureTsameSiteTpathMaxAge3600.value =
    "secure: true, samesite: true, path: '/', maxAge: 3600";
};
const remove = () => {
  cookie.value = null;
  secureTrue.value = null;
  cookieDomain.value = null;
  httpOnlyTrue.value = null;
  sameSiteStrict.value = null;
  sameSiteLax.value = null;
  secureThttpFsameSiteTpath.value = null;
  secureTsameSiteTpathMaxAge3600.value = null;
};
const { data: publicEndpoint } = await useFetch("/api/publicEndpoint", {
  headers: useRequestHeaders(["cookie"]),
});
const { data: privateEndpoint } = await useFetch("/api/privateEndpoint", {
  headers: useRequestHeaders(["cookie"]),
});
</script>
<template>
  <div>
    <h1>Page One</h1>
    <button @click="set">Set Cookies</button>
    <button @click="remove">Remove Cookies</button>
    <p><b>Path:</b> {{ cookie }}</p>
    <p><b>secureTrue</b>: {{ secureTrue }}</p>
    <p><b>httpOnlyTrue</b>: {{ httpOnlyTrue }}</p>
    <p><b>SameSiteTrue</b>: {{ sameSiteStrict }}</p>
    <p><b>SameSiteLax</b>: {{ sameSiteLax }}</p>
    <p>
      <b>secureTrue, httpOnlyFalse, sameSiteTrue, path='/'</b>:
      {{ secureThttpFsameSiteTpath }}
    </p>
    <p>
      <b>secureTrue, sameSiteTrue, path='/', MaxAge3600</b>:
      {{ secureTsameSiteTpathMaxAge3600 }}
    </p>
    <hr />
    <p>Fetch Result Public: {{ publicEndpoint }}</p>
    <hr />
    <p>Fetch Result Private (middleware): {{ privateEndpoint }}</p>
    <hr />
    <NuxtLink to="/pageTwo">Continue to page 2</NuxtLink>
    <p>v.1.7</p>
  </div>
</template>
