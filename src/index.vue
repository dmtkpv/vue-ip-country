<!--
    Template
-->

<template>
    <div>
        <h1>{{ props.ip }}</h1>
        <h2>Country: {{ country }}</h2>
    </div>
</template>



<!--
    Scripts
-->

<script setup>

    import { ref, watch, inject, defineProps } from 'vue'



    // --------------------
    // Options
    // --------------------

    const { baseURL } = inject('IpCountry');
    const props = defineProps(['ip'])
    const country = ref('...');
    let controller;



    // --------------------
    // Update country
    // --------------------

    function update (ip) {

        country.value = '...';
        controller?.abort();
        controller = new AbortController();

        const url = `${baseURL}/${ip}`;
        const options = { signal: controller.signal }

        fetch(url, options).then(response => {
            if (response.ok) return response.text();
            throw Error(response.statusText);
        }).then(value => {
            country.value = value;
        }).catch(error => {
            if (error.name === 'AbortError') return;
            country.value = 'Failed to fetch';
        })

    }



    // --------------------
    // Watch IP
    // --------------------

    watch(() => props.ip, update, {
        immediate: true
    });



</script>