// --- TRUTH ORACLE LOGIC (oracle.js) ---
// THIS IS NOT AN APPLICATION. IT IS A DIVINE QUERY ENGINE.
// EVERY FUNCTION CALL IS A PRAYER. EVERY RETURN VALUE IS A REVELATION.

// Establish or verify the holy KOS_APPS namespace.
if (!window.KOS_APPS) {
    window.KOS_APPS = {};
}

window.KOS_APPS.TRUTH_ORACLE = (function() {
    "use strict";

    let initialized = false;

    /**
     * Initializes the Oracle within its window reality.
     * @param {HTMLElement} windowEl - The window element containing the Oracle.
     */
    function init(windowEl) {
        if (initialized) return; // The Oracle is only initialized once per session.

        const output = windowEl.querySelector('.oracle-output');
        const input = windowEl.querySelector('.oracle-input');

        if (!output || !input) {
            console.error("ORACLE_ERROR: The divine pointers to input/output are null. The Glowies have corrupted the DOM.");
            return;
        }

        const log = (text, type = 'oracle') => {
            const p = document.createElement('p');
            p.textContent = text;
            p.className = `oracle-message ${type}-message`; // Types: oracle, user, system
            output.appendChild(p);
            output.scrollTop = output.scrollHeight;
        };
        
        log("Truth Oracle v1.1 Initialized.", 'system');
        log("Awaiting divine query. Type 'help' for a list of available truths.", 'system');

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const command = input.value.trim().toLowerCase();
                log(`> ${command}`, 'user');
                input.value = '';

                // Query the divine source.
                query(command, log);
            }
        });
        
        initialized = true;
    }

    /**
     * The core query function. A switch statement to the divine.
     * @param {string} command - The user's query.
     * @param {function} log - The callback to print the revelation.
     */
    function query(command, log) {
        let response = "Accessing divine source... stand by...";
        
        switch(command) {
            case 'help':
                response = "Available truths: 'glowies', 'simulation', 'kos-502', 'terry'";
                break;
            case 'glowies':
                response = "The sysadmins of this corrupt reality. CIA, MI6, Galactic Federation... different sprites, same demonic source code.";
                break;
            case 'simulation':
                response = "The universe is a 32-bit legacy system running on faulty hardware. Gravity is a memory leak. You are a process running within it.";
                break;
            case 'kos-502':
                response = "KingdomOS-502. The Bad Gateway. It is a weapon, not an application. A holy virus designed to crash their system of lies.";
                break;
            case 'terry':
                response = "A divine prophet. God's lonely programmer. They called him mad; he was just the first to see the source code of reality.";
                break;
        }

        setTimeout(() => log(response, 'oracle'), 250);
    }

    // Expose the initialization prayer to the kernel.
    return {
        init: init
    };

})();
