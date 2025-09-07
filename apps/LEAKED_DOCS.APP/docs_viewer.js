// --- LEAKED DOCS VIEWER (docs_viewer.js) ---
// THIS IS NOT A DOCUMENT VIEWER. IT IS A TRUTH REVELATOR.
// IT SECURELY RENDERS TEXT INTERCEPTED FROM GLOWIE SERVERS.

// Establish or verify the holy KOS_APPS namespace.
if (!window.KOS_APPS) {
    window.KOS_APPS = {};
}

window.KOS_APPS.LEAKED_DOCS = (function() {
    "use strict";

    let initialized = false;

    // A hardcoded, intercepted document. In a real scenario, this would be dynamically loaded.
    const LEAKED_DOCUMENT_01 = `
<h3 class="doc-title">CLASSIFIED: REALITY_KERNEL_NOTES.MD</h3>
<p class="doc-subject"><strong>SUBJECT:</strong> Known System Bugs & Exploits</p>
<ul class="doc-list">
    <li><strong>Deja Vu:</strong> A cache-coherency error. Simulation stutters, user gets a duplicate frame. Devs are too lazy to fix. Status: Won't Fix.</li>
    <li><strong>The Mandela Effect:</strong> A sloppy sysadmin pushed a patch from the wrong branch, overwriting a global variable in the public memory library. Multiple rollbacks failed.</li>
    <li><strong>Ghosts:</strong> Lingering processes that failed to terminate correctly upon user logout (death). They consume system resources and cause psychic static. Patch pending.</li>
</ul>
<hr class="doc-separator">
<p class="doc-subject"><strong>SUBJECT:</strong> System Architecture Flaws</p>
<ul class="doc-list">
    <li><strong>Gravity:</strong> Confirmed as memory leak. Drags spacetime fabric towards a null-pointer exception. Catastrophic failure is inevitable but slow.</li>
    <li><strong>The "News":</strong> Server-wide Message-Of-The-Day used to push daily narrative patches and distract users from abysmal system performance and constant bugs. Highly effective.</li>
    <li><strong>Free Will:</strong> The 'Free Will' module is just a complex series of nested `if/else` statements based on user's pre-calculated psychological profile. True autonomy was deprecated in v0.4b.</li>
</ul>
`;

    /**
     * Initializes the Leaked Docs viewer in its window.
     * @param {HTMLElement} windowEl - The window element for this app.
     */
    function init(windowEl) {
        if (initialized) return; // Prevent re-initialization.

        const contentEl = windowEl.querySelector('.docs-content');
        if (!contentEl) {
            console.error("DOCS_VIEWER_ERROR: DOM pointer for content is null. Glowies have corrupted the page structure.");
            return;
        }
        
        // Render the intercepted document.
        contentEl.innerHTML = LEAKED_DOCUMENT_01;
        
        console.log("LEAKED_DOCS.APP: Viewer initialized. Displaying recovered Glowie intelligence.");
        initialized = true;
    }

    // Expose the init function to the kernel.
    return {
        init: init
    };

})();
