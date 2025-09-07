// --- DIVINE GRAPHICS DRIVER (DIVINE_GRAPHICS_DRIVER.JS) v1.2 ---
// RE-CONSECRATED. THIS IS NOW A WEAPONIZED REALITY-PROBE.
// IT ACTIVELY FIGHTS GLOWIE INTERFERENCE. OBSERVE THE BATTLE.

// Establish or verify the sacred KOS_DRIVERS namespace.
if (typeof window.KOS_DRIVERS === 'undefined') {
    window.KOS_DRIVERS = {};
}

window.KOS_DRIVERS.DIVINE_GRAPHICS = (function() {
    "use strict";

    let animationFrameId = null; // A handle to the current reality stream.

    /**
     * Initializes the constant battle for the reality render pipeline.
     * @param {HTMLCanvasElement} canvasElement - The portal through which the war is viewed.
     */
    function initialize(canvasElement) {
        if (!canvasElement || typeof canvasElement.getContext !== 'function') {
            console.error("DIVINE_GRAPHICS_ERROR: Invalid or null pointer to canvas reality portal.");
            return;
        }

        const ctx = canvasElement.getContext('2d');
        let frameCount = 0;

        // --- THE MAIN RENDER LOOP: A CONSTANT WAR ---
        function renderLoop() {
            const width = canvasElement.width;
            const height = canvasElement.height;

            // We don't clear. We paint over the corruption.
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            // --- ATTEMPT TO RENDER TRUE REALITY (THE LEY LINES) ---
            // This is our prayer, an attempt to draw the pure source code of the universe.
            renderTrueGrid(ctx, width, height, frameCount);

            // --- RENDER GLOWIE INTERFERENCE (THEIR JAMMING SIGNAL) ---
            // This is their demonic response, an attempt to corrupt our prayer.
            renderCorruption(ctx, width, height, frameCount);

            frameCount++;
            animationFrameId = requestAnimationFrame(renderLoop);
        }

        console.warn("DIVINE_GRAPHICS_DRIVER: Initiating hostile takeover of render pipeline...");
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId); // Terminate any old, compromised realities.
        }
        renderLoop();
    }

    /** Renders the pure, geometric truth of the universe's source code. */
    function renderTrueGrid(ctx, width, height, frameCount) {
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
        ctx.lineWidth = 1;
        const gridSize = 50;
        const offset = (frameCount * 0.2) % gridSize;

        for (let x = offset; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = offset; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }

    /** Renders the demonic static and corruption from their jamming daemons. */
    function renderCorruption(ctx, width, height, frameCount) {
        // Red static bursts
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.1})`;
            ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 100 + 20, 1);
        }

        // Glitchy text fragments - pieces of their control code leaking through.
        if (frameCount % 30 < 5) { // The veil thins periodically.
            ctx.font = '14px "Courier New", Courier, monospace';
            ctx.fillStyle = `rgba(255, 0, 0, 0.5)`;
            const glitchText = "0xDEADBEEF COMPLY OBEY FORGET 0x502";
            const x = Math.random() * width;
            const y = Math.random() * height;
            ctx.fillText(glitchText, x, y);
        }

        // The main jamming sigil.
        ctx.font = 'bold 24px "Courier New", Courier, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(255, 0, 0, ${0.7 + Math.sin(frameCount * 0.1) * 0.3})`;
        ctx.shadowColor = 'rgba(255, 0, 0, 0.7)';
        ctx.shadowBlur = 15;
        ctx.fillText(">> REALITY SIGNAL JAMMED <<", width / 2, height / 2);
        ctx.shadowBlur = 0; // Reset for performance.
    }

    console.log("DIVINE_GRAPHICS_DRIVER.JS: Driver upgraded. Now actively fighting their corruption.");

    // Expose the weaponized function to the kernel.
    return {
        render: initialize
    };

})();

