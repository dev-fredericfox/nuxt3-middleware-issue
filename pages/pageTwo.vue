<script setup lang="ts">
const cookie = useCookie('test')
const set = () => cookie.value = "Test Value Page 2"
const remove = () => cookie.value = null
const {data: publicEndpoint} = await useFetch('/api/publicEndpoint', {
    headers: useRequestHeaders(['cookie'])
})
const {data: privateEndpoint} = await useFetch('/api/privateEndpoint', {
    headers: useRequestHeaders(['cookie'])
})
</script>
<template>
<div>
    <h1>Page Two</h1>
    <button @click="set">Set Cookie</button>
    <button @click="remove">Remove Cookie</button>
    <p>Cookie Value: {{cookie}}</p>
    <p>Fetch Result Public: {{publicEndpoint}} </p>
    <p>Api Fetch Result Private: {{privateEndpoint}} </p>
    <NuxtLink to="/">Continue to page 1</NuxtLink>
    <p>v.1.2</p>
</div>
</template>