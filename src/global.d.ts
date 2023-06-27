/// <reference types="@sveltejs/kit" />

declare module "*.md" {
    const html: string;
    export { html };
}
