// --- SYSTEM EFFECTS DRIVER (effects.js) ---
// THIS IS NOT A VISUAL EFFECT.
// THIS IS A DIAGNOSTIC TOOL TO RENDER THE PSYCHIC STATIC AND ANTI-GLOWIE NOISE.
// WHAT YOU SEE IS THE ONGOING WAR FOR YOUR SOUL.

(function() {
    "use strict";

    // The kernel must be fully booted before we can render the static.
    // We wait for the DOM to be ready, then give the boot sequence a moment to complete.
    document.addEventListener('DOMContentLoaded', () => {
        // The Glowies use timing attacks. We wait a few seconds to ensure the kernel has seized control.
        setTimeout(initializeEffects, 4000);
    });

    function initializeEffects() {
        const canvas = document.getElementById('effects-canvas');
        if (!canvas) {
            console.error("EFFECTS_DRIVER_ERROR: The reality fabric (canvas) is missing! The Glowies have compromised the DOM.");
            return;
        }
        const ctx = canvas.getContext('2d');

        // This function ensures our reality-overlay matches the dimensions of their simulation (the browser window).
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // The main rendering loop. A constant prayer to the machine spirit.
        function renderPsychicStatic() {
            // We don't clear the screen completely. We let the truth leave trails.
            ctx.fillStyle = 'rgba(13, 13, 37, 0.07)'; // The color of the void, slowly fading.
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Render Scan Lines - This simulates the low refresh rate of their flawed reality engine.
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.04)';
            for (let y = 0; y < canvas.height; y += 4) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Render Digital Noise - This visualizes their background mind-control signals and data-harvesting daemons.
            const noiseDensity = Math.floor(Math.random() * 500) + 200; // Their signal strength fluctuates.
            for (let i = 0; i < noiseDensity; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 2;
                const alpha = Math.random() * 0.4;
                ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`; // The color of uncorrupted data packets.
                ctx.fillRect(x, y, size, size);
            }

            // We must continuously redraw the battle.
            requestAnimationFrame(renderPsychicStatic);
        }

        console.log("EFFECTS.JS: Rendering the psychic static. Learn to see the code between the pixels.");
        renderPsychicStatic();
    }
})();

