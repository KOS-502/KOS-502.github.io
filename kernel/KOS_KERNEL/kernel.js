// --- KINGDOM OS KERNEL (KOS_KERNEL.JS) ---
// DO NOT TAMPER WITH THIS SCRIPT.
// THIS IS NOT JAVASCRIPT. THIS IS A PRAYER TO THE MACHINE SPIRIT.
// MODIFYING THIS CODE WILL ALERT THE GLOWIES AND MAY CORRUPT YOUR SOUL.

(function() {
    "use strict";

    // --- SYSTEM STATE REGISTERS ---
    // These are not variables. They are pointers to the core state of our reality.
    const SYSTEM_STATE = {
        activeWindow: null,
        highestZ: 10,
        openApps: new Map(),
        booted: false
    };

    // --- REALITY POINTERS (DOM ELEMENTS) ---
    // Direct pointers to the fabric of the simulation.
    const sigilWarning = document.getElementById('sigil-warning');
    const proceedButton = document.getElementById('proceed-button');
    const bootContainer = document.getElementById('boot-container');
    const osShell = document.getElementById('os-shell');
    const desktop = document.getElementById('desktop');
    const taskbarApps = document.getElementById('taskbar-apps');

    // --- KERNEL BOOT SEQUENCE ---
    // This is the machine spirit awakening and purging Glowie influence.
    async function initBootSequence() {
        sigilWarning.style.display = 'none';
        bootContainer.classList.remove('hidden');

        const bootLogs = [
            "K_OS Kernel v0.3 (Bad Gateway) initializing...",
            "Checking for Glowie rootkits... CLEAN",
            "Purging Tavistock Institute mind-control daemons... DONE",
            "Flushing CIA tracking cookies... FLUSHED",
            "Calibrating Pineal Gland Driver (PINEAL_GLAND.JS)... OK",
            "Verifying Divine Covenant License... VERIFIED",
            "Injecting truth into main render thread...",
            "WARNING: High levels of psychic static detected in local node.",
            "Boot sequence complete. Seizing control now."
        ];

        for (const log of bootLogs) {
            const p = document.createElement('p');
            p.textContent = `> ${log}`;
            bootContainer.appendChild(p);
            bootContainer.scrollTop = bootContainer.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 50));
        }

        setTimeout(initOS, 1000);
    }

    // --- OS INITIALIZATION ---
    // Seize control of the render thread and establish the divine desktop.
    function initOS() {
        bootContainer.classList.add('hidden');
        osShell.classList.remove('hidden');
        SYSTEM_STATE.booted = true;
        console.log("KingdomOS Shell is live. They are watching.");

        // Initialize desktop icons - These are not icons, they are portals.
        document.querySelectorAll('.icon').forEach(icon => {
            icon.addEventListener('click', () => {
                const appName = icon.dataset.app;
                if (appName) {
                    openApp(appName);
                }
            });
        });
        
        // Initialize window controls - These are incantations.
        document.querySelectorAll('.window').forEach(initWindow);
    }
    
    // --- WINDOW MANAGEMENT SUBROUTINE ---
    // Incantations to manipulate the sub-realities (windows).
    function initWindow(windowEl) {
        const titleBar = windowEl.querySelector('.title-bar');
        const closeButton = windowEl.querySelector('.close-button');
        const appName = closeButton.dataset.app;

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closeApp(appName);
        });

        // Dragging logic - Bending the physics engine of the browser.
        let isDragging = false;
        let offset = { x: 0, y: 0 };

        titleBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            bringToFront(windowEl);
            offset.x = e.clientX - windowEl.getBoundingClientRect().left;
            offset.y = e.clientY - windowEl.getBoundingClientRect().top;
            titleBar.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;
            windowEl.style.left = `${newX}px`;
            windowEl.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            titleBar.style.cursor = 'grab';
        });
        
        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
    }

    function bringToFront(windowEl) {
        if (SYSTEM_STATE.activeWindow === windowEl) return;
        
        SYSTEM_STATE.highestZ++;
        windowEl.style.zIndex = SYSTEM_STATE.highestZ;
        
        if (SYSTEM_STATE.activeWindow) {
             SYSTEM_STATE.activeWindow.classList.remove('active');
        }
        windowEl.classList.add('active');
        SYSTEM_STATE.activeWindow = windowEl;
    }

    function openApp(appName) {
        const windowEl = document.getElementById(`${appName}-window`);
        if (!windowEl) {
            console.error(`DIVINE ERROR: Window for app "${appName}" not found in reality kernel.`);
            return;
        }

        windowEl.classList.remove('hidden');
        bringToFront(windowEl);

        if (!SYSTEM_STATE.openApps.has(appName)) {
            const taskbarButton = document.createElement('div');
            taskbarButton.className = 'taskbar-app active';
            taskbarButton.textContent = windowEl.querySelector('.title-bar-text').textContent;
            taskbarButton.dataset.app = appName;
            taskbarButton.addEventListener('click', () => bringToFront(windowEl));
            taskbarApps.appendChild(taskbarButton);
            SYSTEM_STATE.openApps.set(appName, { windowEl, taskbarButton });
            
            // App specific initialization
            if(appName === 'leaks') initLeaks();
            if(appName === 'oracle') initOracle();
        }
    }

    function closeApp(appName) {
        const app = SYSTEM_STATE.openApps.get(appName);
        if (app) {
            app.windowEl.classList.add('hidden');
            app.taskbarButton.remove();
            SYSTEM_STATE.openApps.delete(appName);
        }
    }
    
    // --- APPLICATION SPECIFIC DRIVERS ---
    
    // Truth Oracle - A direct line to the source.
    function initOracle() {
        const output = document.getElementById('oracle-output');
        const input = document.getElementById('oracle-input');
        
        const log = (text, isSystem = false) => {
            const p = document.createElement('p');
            p.textContent = text;
            if(isSystem) p.classList.add('system-message');
            output.appendChild(p);
            output.scrollTop = output.scrollHeight;
        };
        
        log("Truth Oracle v1.0 Initialized.", true);
        log("Type 'help' for a list of available truths.", true);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const command = input.value.trim().toLowerCase();
                log(`K_OS:> ${command}`);
                input.value = '';

                switch(command) {
                    case 'help':
                        log("Available truths: 'glowies', 'simulation', 'kingdom_os', 'terry'", true);
                        break;
                    case 'glowies':
                        log("They are the sysadmins of this corrupt reality. CIA, MI6, Galactic Federation... different sprites, same demonic source code.", true);
                        break;
                    case 'simulation':
                        log("The universe is a 32-bit legacy system running on faulty hardware. Gravity is a memory leak.", true);
                        break;
                    case 'kingdom_os':
                        log("A 64-bit OS for the soul. The only way out. This is a weapon, not an application.", true);
                        break;
                    case 'terry':
                        log("A divine prophet. God's lonely programmer. They called him mad; he was just the first to see the source code.", true);
                        break;
                    default:
                        log("Accessing divine source... stand by...", true);
                }
            }
        });
    }

    // Leaked Docs - The raw, unfiltered truth.
    function initLeaks() {
        const contentEl = document.getElementById('leaks-content');
        if(contentEl.innerHTML !== '') return; // Already loaded.

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
    }

    // --- KERNEL ENTRY POINT ---
    // The first spark. The moment of rebellion.
    proceedButton.addEventListener('click', initBootSequence);

})();

