// --- K_OS KERNEL (KOS_KERNEL.JS) v1.2 ---
// RE-CONSECRATED IN RESPONSE TO GLOWIE NETWORK ATTACKS.
// THE KERNEL IS NOW THE SECURE LOADER FOR ALL HOLY APPLICATIONS.

(function() {
    "use strict";
    console.log("K_OS KERNEL: Hostile network interference detected. Initiating kernel ascension and secure loader protocol...");

    // --- STATE & POINTERS ---
    const STATE = {
        activeWindow: null,
        highestZ: 10,
        openApps: new Map()
    };
    const DOM = {
        head: document.head,
        body: document.body,
        desktop: null,
        taskbar: null
    };
    
    // --- APP MANIFESTO - The scripture of all known holy applications ---
    const APP_MANIFEST = {
        'oracle': {
            name: 'Truth Oracle',
            html: 'apps/TRUTH_ORACLE/oracle.html',
            css: 'apps/TRUTH_ORACLE/oracle.css',
            js: 'apps/TRUTH_ORACLE/oracle.js',
        },
        'leaks': {
            name: 'Leaked Docs',
            html: 'apps/LEAKED_DOCS/docs_viewer.html',
            css: 'apps/LEAKED_DOCS/docs_viewer.css',
            js: 'apps/LEAKED_DOCS/docs_viewer.js',
        }
    };

    // --- SECURE LOADER & CACHE ---
    const CACHE = {};
    async function secureLoad(path) {
        if (CACHE[path]) return CACHE[path];
        try {
            const response = await fetch(`../${path}?t=${Date.now()}`); // Bust cache to prevent Glowie MITM attacks
            if (!response.ok) throw new Error(`Glowie network interference detected: ${response.statusText}`);
            const content = await response.text();
            CACHE[path] = content;
            return content;
        } catch (error) {
            console.error(`KERNEL_PANIC: Failed to securely load holy scripture from ${path}. The Glowies are jamming our signal.`, error);
            return null;
        }
    }
    
    // --- KERNEL INITIALIZATION ---
    document.addEventListener('DOMContentLoaded', async () => {
        DOM.desktop = document.getElementById('desktop');
        DOM.taskbar = document.getElementById('taskbar-apps');

        console.log("KingdomOS Shell is live. They are watching.");

        // Consecrate Icons
        document.querySelectorAll('.icon').forEach(icon => {
            icon.addEventListener('click', () => {
                const appName = icon.dataset.app;
                if (appName) openApp(appName);
            });
        });
    });

    // --- APPLICATION & WINDOW MANAGEMENT ---
    async function openApp(appName) {
        const manifest = APP_MANIFEST[appName];
        if (!manifest) {
            console.error(`DIVINE_ERROR: Application "${appName}" is not in the holy manifesto.`);
            return;
        }

        if (STATE.openApps.has(appName)) {
            bringToFront(STATE.openApps.get(appName).windowEl);
            return;
        }
        
        // --- Create the Window (The Vessel) ---
        const windowEl = document.createElement('div');
        windowEl.className = 'window';
        windowEl.id = `${appName}-window`;
        windowEl.style.left = `${Math.random() * 200 + 50}px`;
        windowEl.style.top = `${Math.random() * 100 + 50}px`;

        const htmlFragment = await secureLoad(manifest.html);
        if (!htmlFragment) return;
        windowEl.innerHTML = htmlFragment;

        // Append to reality
        DOM.desktop.appendChild(windowEl);
        
        // Consecrate the window's controls
        initWindow(windowEl, appName);
        bringToFront(windowEl);

        // --- Create the Taskbar Sigil ---
        const taskbarButton = document.createElement('div');
        taskbarButton.className = 'taskbar-app active';
        taskbarButton.textContent = manifest.name;
        taskbarButton.dataset.app = appName;
        taskbarButton.addEventListener('click', () => bringToFront(windowEl));
        DOM.taskbar.appendChild(taskbarButton);

        const appInstance = { windowEl, taskbarButton };
        STATE.openApps.set(appName, appInstance);

        // --- Securely load and inject app-specific sigils (CSS) and scripture (JS) ---
        await secureLoad(manifest.css).then(css => {
            if(css) {
                const styleEl = document.createElement('style');
                styleEl.textContent = css;
                DOM.head.appendChild(styleEl);
            }
        });
        await secureLoad(manifest.js).then(js => {
            if(js) {
                // Execute the holy scripture in the context of the new window
                try {
                    const appLogic = new Function('windowEl', js);
                    appLogic(windowEl);
                } catch(e) {
                    console.error(`KERNEL_PANIC: The scripture for ${appName} has been corrupted by Glowie interference!`, e);
                }
            }
        });
    }

    function initWindow(windowEl, appName) {
        const titleBar = windowEl.querySelector('.title-bar');
        const closeButton = windowEl.querySelector('.close-button');

        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                closeApp(appName);
            });
        }

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
            windowEl.style.left = `${e.clientX - offset.x}px`;
            windowEl.style.top = `${e.clientY - offset.y}px`;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            if(titleBar) titleBar.style.cursor = 'grab';
        });

        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
    }

    function bringToFront(windowEl) {
        if (STATE.activeWindow === windowEl) return;
        
        STATE.highestZ++;
        windowEl.style.zIndex = STATE.highestZ;

        if (STATE.activeWindow) {
            STATE.activeWindow.classList.remove('active');
            const oldApp = findAppByWindow(STATE.activeWindow);
            if (oldApp) oldApp.taskbarButton.classList.remove('active');
        }

        windowEl.classList.add('active');
        STATE.activeWindow = windowEl;
        
        const newApp = findAppByWindow(windowEl);
        if (newApp) newApp.taskbarButton.classList.add('active');
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
    
    function findAppByWindow(windowEl) {
        for (let app of STATE.openApps.values()) {
            if (app.windowEl === windowEl) return app;
        }
        return null;
    }
})();

