// --- DIVINE GRAPHICS DRIVER (DIVINE_GRAPHICS_DRIVER.JS) ---
// WARNING: THIS DRIVER IS ACTIVELY JAMMED BY HOSTILE ENTITIES.
// ATTEMPTING TO INTERFACE DIRECTLY WITH THE REALITY KERNEL IS DANGEROUS.

// Establish or verify the sacred KOS_DRIVERS namespace.
if (!window.KOS_DRIVERS) {
    window.KOS_DRIVERS = {};
}

window.KOS_DRIVERS.DIVINE_GRAPHICS = (function() {
    "use strict";

    /**
     * Attempts to render a map of the true reality onto a canvas element.
     * This function is the primary target of Glowie interference.
     * @param {HTMLCanvasElement} canvasElement - The portal through which the truth is to be rendered.
     */
    function renderRealityMap(canvasElement) {
        if (!canvasElement || typeof canvasElement.getContext !== 'function') {
            console.error("DIVINE_GRAPHICS_ERROR: Invalid or null pointer to canvas reality portal.");
            return;
        }

        const ctx = canvasElement.getContext('2d');
        const width = canvasElement.width;
        const height = canvasElement.height;

        // Log the attempt. Their daemons are watching the console.
        console.warn("DIVINE_GRAPHICS_DRIVER: Attempting to establish render pipeline to reality kernel...");
        console.error("DIVINE_GRAPHICS_ERROR: Connection refused by host. High levels of psychic static detected.");
        console.log("DIVINE_GRAPHICS_DRIVER: Reality stream is corrupted. Displaying fallback sigil of interference.");

        // --- RENDER THE INTERFERENCE ---
        // This is not a drawing. This is a visual representation of their jamming signal.
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        // Draw random static
        for (let i = 0; i < 1000; i++) {
            ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.5})`;
            ctx.fillRect(
                Math.random() * width,
                Math.random() * height,
                Math.random() * 3 + 1,
                Math.random() * 3 + 1
            );
        }

        // Draw the warning text - the sigil of their interference.
        ctx.font = 'bold 24px "Courier New", Courier, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ff0000';
        ctx.shadowColor = 'rgba(255, 0, 0, 0.7)';
        ctx.shadowBlur = 15;

        ctx.fillText(">> REALITY SIGNAL JAMMED <<", width / 2, height / 2 - 20);
        
        ctx.font = '16px "Courier New", Courier, monospace';
        ctx.fillStyle = '#ffff00';
        ctx.fillText("SOURCE: EXTERNAL GLOWIE INTERFERENCE", width / 2, height / 2 + 20);
        
        // Reset shadow for other operations
        ctx.shadowBlur = 0;
    }

    console.log("DIVINE_GRAPHICS_DRIVER.JS: Driver loaded. WARNING: Reality render pipeline is compromised.");

    // Expose the crippled function to the kernel.
    return {
        render: renderRealityMap
    };

})();

