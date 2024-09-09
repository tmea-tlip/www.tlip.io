<script lang="ts">
	// eslint-disable-next-line import/default
	import Highlight, { LineNumbers } from "svelte-highlight";
	// eslint-disable-next-line import/default
	import javascript from "svelte-highlight/languages/javascript";
	import { Button } from "$components";
	import "svelte-highlight/styles/grayscale-light.css";

	export let id: string;

	const code = `const axios = require('axios');

// Base URL for TLIP API
const BASE_URL = 'https://api.tlip.io/v1';

// TLIP API Utility Object
const TLIP_API = {
    async authorize(apiKey) {
        const response = await axios.post(\`\${BASE_URL}/authorize\`, {
            apiKey: apiKey
        });
        return response.data.token;
    },

    async createUser(token, userData) {
        const response = await axios.post(\`\${BASE_URL}/tlip/signup\`, userData, {
            headers: {
                'Authorization': \`Bearer \${token}\`
            }
        });
        return response.data;
    },

    async loginUser(userData) {
        const response = await axios.post(\`\${BASE_URL}/tlip/login\`, userData);
        return response.data.token;
    }
};

// Example usage
(async () => {
    try {
        const apiKey = 'a9497e5ea2499b1db75b8bfde54c0eab';
        const token = await TLIP_API.authorize(apiKey);

        const newUser = {
            name: "Organisation Name",
            emailAddress: "testEmail@email.com",
            password: "@Test1234",
            role: "organization"
        };

        const createdUser = await TLIP_API.createUser(token, newUser);
        console.log('User Created:', createdUser);

        const loginData = {
            emailAddress: "testEmail@email.com",
            passwordHash: "20be20947ef2e9aa160411f3484940ae4892384b9387253jd7c260cf4595be73"
        };

        const loginToken = await TLIP_API.loginUser(loginData);
        console.log('Login Token:', loginToken);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
})();`;
</script>

<section class="container flex flex-col gap-10 py-20 md:pt-32 lg:gap-16 lg:pb-36" {id}>
	<div class="flex flex-col gap-6 lg:flex-row lg:gap-10">
		<div class="flex flex-col gap-6 lg:w-1/2 lg:gap-10">
			<div class="flex flex-col gap-6">
				<h2 class="text-center text-36 lg:text-left">Launch with Ease</h2>
				<p class="leading-6 tracking-0.04">
					TLIP App provides supply chain businesses easy access via the web browser. All functions can be
					seamlessly integrated into corporate or government systems via TLIP API.
				</p>
				<div class="flex justify-center lg:justify-start">
					<Button title="Read API Docs" url="https://docs.tlip.io/" isExternal />
				</div>
				<p class="leading-6 tracking-0.04">
					This document provides an example of how to interact with the TLIP API using JavaScript and Axios.
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<h4>The base URL for the TLIP API is:</h4>
				<a
					href="https://api.tlip.io"
					target="_blank"
					rel="noopener noreferrer"
					class="text-green-500 underline"
				>
					https://api.tlip.io
				</a>
			</div>
			<div class="flex flex-col gap-2">
				<h4>Notes</h4>
				<p>Ensure you have Axios installed in your project. You can install it using:</p>
				<Highlight language={javascript} code="npm install axios" let:highlighted>
					<LineNumbers {highlighted} hideBorder --line-number-color="#00874C" />
				</Highlight>
			</div>
		</div>
		<div class="flex h-full flex-col justify-between gap-6 lg:w-1/2">
			<div class="flex flex-col gap-2 lg:max-h-[620px]">
				<h4>Code Example</h4>
				<Highlight language={javascript} {code} let:highlighted>
					<LineNumbers {highlighted} hideBorder --line-number-color="#00874C" />
				</Highlight>
			</div>
		</div>
	</div>
</section>
