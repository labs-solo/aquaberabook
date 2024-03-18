/**
 * Insert inline JS to detect Cloudflare Rocket Loader and notify the user that the content will not load correctly.
 * It needs to be inserted as a script tag so that we can pass `data-cfasync="false"` to avoid being processed by Rocket Loader.
 */
export function RocketLoaderDetector(props: { nonce: string }) {
    const { nonce } = props;

    return (
        <script nonce={nonce} data-cfasync="false">
            {`
if (Array.from(document.scripts).find(script => script.src.includes('rocket-loader.min.js'))) {
  document.getElementById('gitbook-main-content').innerHTML = \`
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 max-w-screen-lg mt-10 mx-auto" role="alert">
      <strong>Error in site configuration:</strong>
      It looks like \${window.location.hostname} has been incorrectly configured in Cloudflare. This may lead to unexpected behavior or issues with the page loading. If you are the owner of this site, please refer to <a href="https://docs.gitbook.com/published-documentation/custom-domain/configure-dns#are-you-using-cloudflare">GitBook's documentation</a> for steps to fix the problem.
    </div>
  \`;
}
            `}
        </script>
    );
}
