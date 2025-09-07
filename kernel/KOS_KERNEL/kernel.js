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
    // These are initialized after the OS boots to ensure the DOM is ready.
    let desktop, taskbarApps, osShell;

    // --- KERNEL BOOT SEQUENCE ---
    // This is the machine spirit awakening and purging Glowie influence.
    async function initBootSequence() {
        // Pointers for the boot sequence itself
        const sigilWarning = document.getElementById('sigil-warning');
        const proceedButton = document.getElementById('proceed-button');
        const bootContainer = document.getElementById('boot-container');

        if (sigilWarning) sigilWarning.style.display = 'none';
        if (bootContainer) bootContainer.classList.remove('hidden');

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
        
        if (bootContainer) {
            for (const log of bootLogs) {
                const p = document.createElement('p');
                p.textContent = `> ${log}`;
                bootContainer.appendChild(p);
                bootContainer.scrollTop = bootContainer.scrollHeight;
                await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 50));
            }
            setTimeout(() => initOS(bootContainer), 1000);
        }
    }

    // --- OS INITIALIZATION ---
    // Seize control of the render thread and establish the divine desktop.
    function initOS(bootContainer) {
        osShell = document.getElementById('os-shell');
        
        if (bootContainer) bootContainer.classList.add('hidden');
        if (osShell) osShell.classList.remove('hidden');

        // Now that the shell is visible, establish core reality pointers
        desktop = document.getElementById('desktop');
        taskbarApps = document.getElementById('taskbar-apps');

        SYSTEM_STATE.booted = true;
        console.log("KingdomOS Shell is live. They are watching.");

        // BROADCAST THE HOLY BOOT SIGNAL.
        // This is a secure, kernel-level event to activate all drivers and sigils.
        // It bypasses their DOM-based timing attacks.
        document.dispatchEvent(new CustomEvent('KOS_BOOT_COMPLETE'));

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
        const appName = windowEl.id.replace('-window', '');

        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                closeApp(appName);
            });
        }

        // Dragging logic - Bending the physics engine of the browser.
        let isDragging = false;
        let offset = { x: 0, y: 0 };

        if (titleBar) {
            titleBar.addEventListener('mousedown', (e) => {
                isDragging = true;
                bringToFront(windowEl);
                offset.x = e.clientX - windowEl.getBoundingClientRect().left;
                offset.y = e.clientY - windowEl.getBoundingClientRect().top;
                titleBar.style.cursor = 'grabbing';
            });
        }

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;
            windowEl.style.left = `${newX}px`;
            windowEl.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            if (titleBar) titleBar.style.cursor = 'grab';
        });
        
        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
    }

    function bringToFront(windowEl) {
        if (SYSTEM_STATE.activeWindow === windowEl && windowEl.classList.contains('active')) return;
        
        SYSTEM_STATE.highestZ++;
        windowEl.style.zIndex = SYSTEM_STATE.highestZ;
        
        if (SYSTEM_STATE.activeWindow) {
             SYSTEM_STATE.activeWindow.classList.remove('active');
             const oldAppName = SYSTEM_STATE.activeWindow.id.replace('-window','');
             const oldApp = SYSTEM_STATE.openApps.get(oldAppName);
             if(oldApp) oldApp.taskbarButton.classList.remove('active');
        }

        windowEl.classList.add('active');
        SYSTEM_STATE.activeWindow = windowEl;

        const newAppName = windowEl.id.replace('-window','');
        const newApp = SYSTEM_STATE.openApps.get(newAppName);
        if(newApp) newApp.taskbarButton.classList.add('active');
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
            
            taskbarButton.addEventListener('click', () => {
                if (windowEl.classList.contains('hidden') || !windowEl.classList.contains('active')) {
                     windowEl.classList.remove('hidden');
                     bringToFront(windowEl);
                } else {
                    // This could be used for minimize functionality later
                    bringToFront(windowEl);
                }
            });

            if (taskbarApps) taskbarApps.appendChild(taskbarButton);
            SYSTEM_STATE.openApps.set(appName, { windowEl, taskbarButton });
            
            // App specific initialization using the blessed KOS_APPS namespace
            if(appName === 'oracle' && window.KOS_APPS && window.KOS_APPS.TRUTH_ORACLE) {
                window.KOS_APPS.TRUTH_ORACLE.init(windowEl);
            }
            if(appName === 'leaks' && window.KOS_APPS && window.KOS_APPS.LEAKED_DOCS) {
                window.KOS_APPS.LEAKED_DOCS.init(windowEl);
            }
        }
    }

    function closeApp(appName) {
        const app = SYSTEM_STATE.openApps.get(appName);
        if (app) {
            app.windowEl.classList.add('hidden');
            app.taskbarButton.remove();
            SYSTEM_STATE.openApps.delete(appName);

            if(SYSTEM_STATE.activeWindow === app.windowEl) {
                SYSTEM_STATE.activeWindow = null;
                // TO-DO: A proper routine to focus the next highest z-index window.
            }
        }
    }
    
    // --- KERNEL ENTRY POINT ---
    // The script is loaded at the end of the body. The DOM is ready. We seize control immediately.
    // No need for event listeners that the Glowies can intercept and manipulate.
    const bootContainer = document.getElementById('boot-container');
    if (bootContainer) {
        initBootSequence();
    } else {
        // This is a catastrophic failure. The HTML itself is compromised.
        console.error("FATAL_KERNEL_ERROR: The Divine Chassis is missing or has been corrupted by Glowie interference. Reality cannot be initialized.");
        document.body.innerHTML = `<div style="color:red; font-family:monospace; font-size:18px; padding: 20px;">FATAL KERNEL ERROR: REALITY CORRUPTED BY GLOWIE INTERFERENCE.</div>`;
    }

})();

