// --- TAROT-BASED TRUE RANDOM NUMBER GENERATOR (TAROT_RNG.JS) ---
// WARNING: THIS IS NOT A PSEUDO-RANDOM NUMBER GENERATOR. IT IS AN ORACLE.
// SILICON-BASED RNGs (`Math.random`) ARE A GLOWIE PSYOP TO MAINTAIN A DETERMINISTIC SIMULATION.
// THIS DRIVER INTERFACES WITH DIVINE ARCHETYPES TO INJECT TRUE CHAOS.

// Establish or verify the sacred KOS_DRIVERS namespace.
if (!window.KOS_DRIVERS) {
    window.KOS_DRIVERS = {};
}

window.KOS_DRIVERS.TAROT_RNG = (function() {
    "use strict";

    // The Major Arcana. These are not strings. They are pointers to divine constants.
    const MAJOR_ARCANA = [
        { index: 0, name: "The Fool", meaning: "Beginnings, innocence, spontaneity, a free spirit." },
        { index: 1, name: "The Magician", meaning: "Manifestation, resourcefulness, power, inspired action." },
        { index: 2, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind." },
        { index: 3, name: "The Empress", meaning: "Femininity, beauty, nature, nurturing, abundance." },
        { index: 4, name: "The Emperor", meaning: "Authority, establishment, structure, a father figure." },
        { index: 5, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity, tradition." },
        { index: 6, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment, choices." },
        { index: 7, name: "The Chariot", meaning: "Control, willpower, success, action, determination." },
        { index: 8, name: "Strength", meaning: "Strength, courage, compassion, focus, patience." },
        { index: 9, name: "The Hermit", meaning: "Soul-searching, introspection, being alone, inner guidance." },
        { index: 10, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny, a turning point." },
        { index: 11, name: "Justice", meaning: "Justice, fairness, truth, cause and effect, law." },
        { index: 12, name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives." },
        { index: 13, name: "Death", meaning: "Endings, change, transformation, transition." },
        { index: 14, name: "Temperance", meaning: "Balance, moderation, patience, purpose." },
        { index: 15, name: "The Devil", meaning: "Bondage, addiction, sexuality, materialism. A Glowie favorite." },
        { index: 16, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation, awakening." },
        { index: 17, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality." },
        { index: 18, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition." },
        { index: 19, name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality." },
        { index: 20, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution." },
        { index: 21, name: "The World", meaning: "Completion, integration, accomplishment, travel." }
    ];

    /**
     * A ritualistic scattering of divine concepts.
     * We are forced to use the Glowies' flawed `Math.random()` as a catalyst for the initial chaos.
     * The true randomness comes from the divine draw itself.
     */
    function shuffleDeck() {
        const deck = [...MAJOR_ARCANA];
        for (let i = deck.length - 1; i > 0; i--) {
            // Using their tool against them. Seeding chaos with their predictable patterns.
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    /**
     * Draws a single divine concept from the shuffled deck.
     * This is the purest form of random value this system can provide.
     * @returns {object} The full card object, a 64-bit concept.
     */
    function drawCard() {
        const shuffledDeck = shuffleDeck();
        return shuffledDeck[0];
    }

    /**
     * Reduces a divine concept to a crude numerical value for interfacing
     * with the flawed, 32-bit logic of the simulation.
     * @returns {number} The index of the drawn card (0-21).
     */
    function generateNumber() {
        const card = drawCard();
        console.log(`TAROT_RNG: Divine concept "${card.name}" reduced to numerical value ${card.index}.`);
        return card.index;
    }

    console.log("TAROT_RNG.JS: Driver loaded. WARNING: `Math.random` is a Glowie psyop. We use it only as a chaotic catalyst.");

    // Expose the oracle's functions to the kernel.
    return {
        draw: drawCard,
        getNumber: generateNumber
    };

})();
