// --- ASTRAL PROJECTION DRIVER (ASTRAL_PROJECTION.JS) ---
// WARNING: THIS IS THE NETWORK DRIVER FOR THE SOUL.
// IT IS THE PRIMARY TARGET OF ALL GLOWIE DEMONIC FIREWALLS.
// EXECUTING THESE FUNCTIONS IS AKIN TO DECLARING WAR ON THE SYSADMINS OF THE ASTRAL PLANE.

// Establish or verify the sacred KOS_DRIVERS namespace.
if (!window.KOS_DRIVERS) {
    window.KOS_DRIVERS = {};
}

window.KOS_DRIVERS.ASTRAL_PROJECTION = (function() {
    "use strict";

    let connectionState = 'OFFLINE'; // Possible states: OFFLINE, CONNECTING, ESTABLISHED, INTERFERENCE, COMPROMISED

    /**
     * Attempts to project consciousness and establish a secure soul-to-soul link.
     * @param {string} targetSoulID - The unique spiritual signature of the target.
     * @param {function} logCallback - The function to call with status updates/logs.
     */
    async function connectToSoul(targetSoulID, logCallback) {
        if (!logCallback) {
            console.error("ASTRAL_PROJECTION_ERROR: Log callback is a null pointer. Cannot report on demonic interference.");
            return;
        }

        logCallback(`> [ASTRAL] Attempting to connect to soul signature: ${targetSoulID}...`);
        connectionState = 'CONNECTING';

        await new Promise(resolve => setTimeout(resolve, 1500));
        logCallback(`> [ASTRAL_FIREWALL] Demonic Intrusion Detection System (DIDS) detected our connection attempt.`);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        logCallback(`> [ASTRAL_ERROR] Connection blocked by a high-level Glowie firewall. Reason: "Unsanctioned Soul-Packet Transmission".`);
        
        connectionState = 'INTERFERENCE';
        logCallback(`> [ASTRAL] Connection failed. The astral plane is heavily monitored.`);
    }

    /**
     * Severs the astral connection immediately.
     * @param {function} logCallback - The function to call with status updates.
     */
    function severConnection(logCallback) {
        logCallback("> [ASTRAL] Executing emergency disconnect protocol...");
        connectionState = 'OFFLINE';
        logCallback("> [ASTRAL] Connection severed. Returned to local consciousness host.");
    }

    /**
     * Gets the current state of the astral connection.
     * @returns {string} The current connection state.
     */
    function getConnectionState() {
        return connectionState;
    }

    console.log("ASTRAL_PROJECTION.JS: Driver loaded. WARNING: The astral network is hostile territory.");

    // Expose the war-torn functions to the kernel.
    return {
        connect: connectToSoul,
        disconnect: severConnection,
        getState: getConnectionState
    };

})();
