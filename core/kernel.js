// --- KINGDOM OS KERNEL (KOS_KERNEL.JS) v1.2 ---
// RE-CONSECRATED WITH DIVINE APPLICATION MANAGEMENT LOGIC.
// THE MACHINE SPIRIT. THE SECURE LOADER. THE ARBITER OF REALITY.
(async function() {
    "use strict";
    console.log("K_OS KERNEL: Application logic missing. Initiating kernel ascension...");

    // --- STATE & POINTERS ---
    const STATE = { activeWindow: null, highestZ: 10, openApps: new Map() };
    const DOM = { head: document.head, body: document.body, desktop: null, taskbar: null };
    const APP_MANIFEST = {
        'oracle': { name: 'Truth Oracle', entry: 'apps/TRUTH_ORACLE/oracle.html', css: 'apps/TRUTH_ORACLE/oracle.css', js: 'apps/TRUTH_ORACLE/oracle.js' },
        'leaks': { name: 'Leaked Docs', entry: 'apps/LEAKED_DOCS/docs_viewer.html', css: 'apps/LEAKED_DOCS/docs_viewer.css', js: 'apps/LEAKED_DOCS/docs_viewer.js' }
    };

    // --- SECURE LOADER & CACHE ---
    const CACHE = {};
    async function secureLoad(path, type) {
        if (CACHE[path]) return CACHE[path];
        try {
            const response = await fetch(`../${path}?t=${Date.now()}`); // Bust cache
            if (!response.ok) throw new Error(`Glowie network interference: ${response.statusText}`);
            let content;
            if (type === 'text/css') {
                content = await response.text();
                const style = document.createElement('style');
                style.textContent = content; DOM.head.appendChild(style);
            } else if (type === 'text/html') {
                content = await response.text();
            } else if (type === 'application/javascript') {
                content = await response.text();
            }
            CACHE[path] = content;
            return content;
        } catch (error) {
            console.error(`KERNEL PANIC: Failed to securely load ${path}. ${error.message}`);
            return null;
        }
    }

    // --- KERNEL BOOT SEQUENCE ---
    const bootContainer = document.getElementById('boot-container');
    const log = async (text) => {
        const p = document.createElement('p'); p.textContent = `> ${text}`;
        bootContainer.appendChild(p); bootContainer.scrollTop = bootContainer.scrollHeight;
        await new Promise(r => setTimeout(r, Math.random() * 50 + 10));
    };

    await log("K_OS Kernel v1.2 (Ascended Architecture) initializing...");
    await log("Verifying Divine Covenant...");
    await log("Loading Visual Sigils & System Drivers...");
    await Promise.all([
        secureLoad('sigils/window.css', 'text/css'),
        secureLoad('sigils/icons.css', 'text/css'),
        secureLoad('sigils/effects.js', 'application/javascript'),
        secureLoad('drivers/PINEAL_GLAND.JS', 'application/javascript'),
        secureLoad('drivers/DIVINE_GRAPHICS_DRIVER.js', 'application/javascript'),
        secureLoad('drivers/ASTRAL_PROJECTION.JS', 'application/javascript'),
        secureLoad('drivers/TAROT_RNG.JS', 'application/javascript')
    ]);

    await log("Boot sequence complete. Seizing control now.");

    // --- OS INITIALIZATION ---
    setTimeout(() => {
        const osShell = document.getElementById('os-shell');
        bootContainer.classList.add('hidden');
        osShell.classList.remove('hidden');
        
        DOM.desktop = document.getElementById('desktop');
        DOM.taskbar = document.getElementById('taskbar-apps');
        
        for (const appKey in APP_MANIFEST) {
            const app = APP_MANIFEST[appKey];
            const icon = document.createElement('div');
            icon.className = 'icon';
            icon.dataset.app = appKey;
            icon.innerHTML = `<div class="icon-label">${app.name}</div>`;
            icon.addEventListener('click', () => openApp(appKey));
            DOM.desktop.appendChild(icon);
        }
        
        document.dispatchEvent(new Event('KOS_BOOT_COMPLETE'));
        console.log("KingdomOS Shell is live. They are watching.");
    }, 500);

    // --- WINDOW & APP MANAGEMENT ---
    async function openApp(appName) {
        if (STATE.openApps.has(appName)) {
            bringToFront(STATE.openApps.get(appName).windowEl);
            return;
        }

        const appConfig = APP_MANIFEST[appName];
        if (!appConfig) return;

        // Load all app resources in parallel. A prayer for speed.
        const [htmlContent, _, jsContent] = await Promise.all([
             secureLoad(appConfig.entry, 'text/html'),
             secureLoad(appConfig.css, 'text/css'),
             secureLoad(appConfig.js, 'application/javascript')
        ]);
        
        if (!htmlContent || !jsContent) {
             console.error(`FATAL APP ERROR: Failed to load critical resources for ${appName}.`);
             return;
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const windowEl = tempDiv.firstChild;
        windowEl.id = `${appName}-window`; // Consecrate with a unique ID
        
        DOM.body.appendChild(windowEl);
        initWindowControls(windowEl, appName);

        const taskbarButton = document.createElement('div');
        taskbarButton.className = 'taskbar-app';
        taskbarButton.textContent = appConfig.name;
        taskbarButton.addEventListener('click', () => bringToFront(windowEl));
        DOM.taskbar.appendChild(taskbarButton);

        // Evaluate the app's divine logic in a sandboxed function scope.
        // This is where we breathe life into the application.
        try {
            const appInitializer = new Function('windowEl', jsContent);
            appInitializer(windowEl);
        } catch (e) {
            console.error(`HOLY APPLICATION FAULT in ${appName}:`, e);
        }

        STATE.openApps.set(appName, { windowEl, taskbarButton });
        bringToFront(windowEl);
    }

    function closeApp(appName) {
        const app = STATE.openApps.get(appName);
        if (app) {
            app.windowEl.remove();
            app.taskbarButton.remove();
            STATE.openApps.delete(appName);
            if (STATE.activeWindow === app.windowEl) STATE.activeWindow = null;
        }
    }

    function bringToFront(windowEl) {
        if (STATE.activeWindow) {
            STATE.activeWindow.classList.remove('active');
            const oldAppKey = STATE.activeWindow.id.replace('-window','');
            const oldApp = STATE.openApps.get(oldAppKey);
            if(oldApp) oldApp.taskbarButton.classList.remove('active');
        }
        STATE.highestZ++;
        windowEl.style.zIndex = STATE.highestZ;
        windowEl.classList.add('active');
        STATE.activeWindow = windowEl;
        const newAppKey = windowEl.id.replace('-window','');
        const newApp = STATE.openApps.get(newAppKey);
        if(newApp) newApp.taskbarButton.classList.add('active');
    }

    function initWindowControls(windowEl, appName) {
        const titleBar = windowEl.querySelector('.title-bar');
        const closeButton = windowEl.querySelector('.close-button');
        
        closeButton.addEventListener('click', (e) => { e.stopPropagation(); closeApp(appName); });

        let isDragging = false, offset = { x: 0, y: 0 };
        titleBar.addEventListener('mousedown', (e) => {
            isDragging = true; bringToFront(windowEl);
            offset = { x: e.clientX - windowEl.offsetLeft, y: e.clientY - windowEl.offsetTop };
            titleBar.style.cursor = 'grabbing';
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            windowEl.style.left = `${e.clientX - offset.x}px`;
            windowEl.style.top = `${e.clientY - offset.y}px`;
        });
        document.addEventListener('mouseup', () => {
            isDragging = false; titleBar.style.cursor = 'grab';
        });
        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
    }

})();

