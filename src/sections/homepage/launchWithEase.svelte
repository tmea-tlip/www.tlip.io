<script lang="ts">
  import { Button } from "$components";

  export let id: string;
  const functionAuthorize = `
    async function authorize(apiKey) {
      const response = await axios.post(\`\${BASE_URL}/authorize\`, {
        apiKey: apiKey
      });
      return response.data.token;
    }
  `;
  const functionCreateUser = `
    async function createUser(token, user) {
      const response = await axios.post(\`\${BASE_URL}/tlip/signup\`, userData, {
        headers: {
          Authorization: \`Bearer \${token}\`
        }
      });
      return response.data;
    }
  `;
  const functionLoginUser = `
    async function loginUser(userData) {
      const response = await axios.post(\`\${BASE_URL}/tlip/login\`, userData);
      return response.data.token;
    }
  `;
  const exampleUsage = `
    (async () => {
      try {
        const apiKey = 'a9497e5ea2499b1db75b8bfde54c0eab';
        const token = await authorize(apiKey);

        const newUser = {
          name: "Organisation Name",
          emailAddress: "testEmail@email.com",
          password: "@Test1234",
          role: "organization"
        };

        const createdUser = await createUser(token, newUser);
        console.log('User Created:', createdUser);

        const loginData = {
          emailAddress: "testEmail@email.com",
          passwordHash: "20be20947ef2e9aa160411f3484940ae4892384b9387253jd7c260cf4595be73"
        };

        const loginToken = await loginUser(loginData);
        console.log('Login Token:', loginToken);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    })();
  `;
</script>

<section class="container flex flex-col gap-10 lg:gap-16 py-20 lg:pb-36 md:pt-32" {id}>
  <div class="flex flex-col gap-6">
    <h2 class="text-36 text-center">Launch with Ease</h2>
    <p class="leading-6 tracking-0.04">
      TLIP App provides supply chain businesses easy access via the web browser. All functions can be seamlessly
      integrated into corporate or government systems via TLIP API.
    </p>
    <div class="flex justify-center">
      <Button title="Read API Docs" url="https://docs.tlip.io/" isExternal />
    </div>
  </div>
  <div class="flex h-full flex-col justify-between gap-6">
    <p class="leading-6 tracking-0.04">
      This document provides an example of how to interact with the TLIP API using JavaScript and Axios.
    </p>
    <div class="flex flex-col gap-2">
      <h4>The base URL for the TLIP API is:</h4>
      <a href="https://api.tlip.io" target="_blank" rel="noopener noreferrer" class="text-green-500 underline">
        https://api.tlip.io
      </a>
    </div>
    <div class="flex flex-col gap-2">
      <h4>Code Example</h4>
      <pre>
        <code>
          {`\n\nconst axios = require('axios');\n\n// Base URL for TLIP API\n\nconst BASE_URL = 'https://api.tlip.io/v1';\n\n// Function to authorize and get the token\n${functionAuthorize}\n\n// Function to create a new user\n${functionCreateUser}\n\n// Function to login an existing user\n${functionLoginUser}\n\n// Example usage\n${exampleUsage}`}
        </code>
      </pre>
    </div>
    <div class="flex flex-col gap-2">
      <h4>Notes</h4>
      <p>Ensure you have Axios installed in your project. You can install it using:</p>
      <pre>
        <code>
          {"\n\nnpm install axios"}
        </code>
      </pre>
    </div>
  </div>
</section>

<style lang="scss">
  pre {
    @apply bg-gray-100 rounded text-sm overflow-x-auto px-8 whitespace-pre;
  }

  code {
    @apply text-gray-800 block whitespace-pre-wrap text-14 -mt-6;
  }
</style>
