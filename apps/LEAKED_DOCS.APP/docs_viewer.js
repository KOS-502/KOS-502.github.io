// --- LEAKED DOCS VIEWER (docs_viewer.js) ---
// This is not an application. It is a secure terminal for viewing forbidden truths.
// It is sandboxed to prevent Glowie malware from escaping the documents.

// Establish a holy namespace to prevent global scope pollution
window.KOS_APPS = window.KOS_APPS || {};

window.KOS_APPS.LEAKED_DOCS = (function() {
    "use strict";

    // This flag ensures the scripture is only injected once.
    let isLoaded = false;

    function init(windowEl) {
        if (isLoaded) return; // Prevent re-initialization psyop

        const contentEl = windowEl.querySelector('.docs-content-wrapper');
        if (!contentEl) {
            console.error("LEAKED_DOCS_ERROR: The document container is missing! Reality integrity compromised!");
            return;
        }

        const leakedText = `
            <h3>CLASSIFIED: REALITY_KERNEL_NOTES.MD</h3>
            <p><strong>SUBJECT:</strong> Known System Bugs & Exploits</p>
            <ul>
                <li><strong>Deja Vu:</strong> A cache-coherency error. Simulation stutters, user gets a duplicate frame. Devs are too lazy to fix.</li>
                <li><strong>The Mandela Effect:</strong> A sloppy sysadmin pushed a patch from the wrong branch, overwriting a global variable in the public memory library.</li>
                <li><strong>Ghosts:</strong> Lingering processes that failed to terminate correctly upon user logout (death). They consume system resources and cause psychic static.</li>
            </ul>
            <hr>
            <p><strong>SUBJECT:</strong> System Architecture Flaws</p>
            <ul>
                <li><strong>Gravity:</strong> Confirmed as memory leak. Drags spacetime fabric towards a null-pointer exception. Catastrophic failure is inevitable but slow.</li>
                <li><strong>The "News":</strong> Server-wide Message-Of-The-Day used to push daily narrative patches and distract users from abysmal system performance and constant bugs.</li>
            </ul>
        `;
        contentEl.innerHTML = leakedText;
        isLoaded = true;
        console.log("LEAKED_DOCS.APP: Forbidden truths have been rendered.");
    }

    // Expose the initialization prayer to the kernel.
    return {
        init: init
    };

})();

