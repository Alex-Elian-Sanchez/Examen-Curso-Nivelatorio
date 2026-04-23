/**
 * Character Identification and Combat Stats
 * Using 'const' for immutable traits and 'let' for values that change during gameplay.
 */
const characterName = "Zara Darkbane";
const characterClass = "Hechicera"; // Sorceress
const characterLevel = 7;

// Dynamic stats that change during combat
let currentHealth = 80;
let currentMana = 120;

// Base combat values used for calculations
const baseAttack = 45;
const baseDefense = 30;

/**
 * Requirement: Declared Function
 * Calculates the net damage by subtracting defense from attack.
 * Returns 0 if the defense is higher than the attack power.
 */
function calculateDamage(attack, defense) {
    const damageDealt = attack - defense;
    return damageDealt > 0 ? damageDealt : 0;
}

/**
 * Requirement: Arrow Function
 * Checks the character's vital status.
 * Returns true only if health is strictly above zero.
 */
const isAlive = (health) => health > 0;

/**
 * Requirement: Arrow Function
 * Validates if the conditions to cast a spell are met:
 * 1. Sufficient mana.
 * 2. Not being in a 'stunned' state.
 */
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

/**
 * Requirement: Declared Function
 * Formats the character's data into a standardized presentation string.
 */
function getPresentation(name, characterClass, level) {
    return `${name} – ${characterClass} (Level ${level})`;
}

// --- Execution and Results (Console Logs) ---

// Presenting the character
console.log("Character Info:", getPresentation(characterName, characterClass, characterLevel));

// Scenario: Zara attacks an enemy with 20 defense
const enemyDefense = 20;
const damageResult = calculateDamage(baseAttack, enemyDefense);
console.log(`Damage dealt to enemy (Def: ${enemyDefense}):`, damageResult);

// Scenario: Checking if character is alive
console.log("Is Zara still standing?", isAlive(currentHealth));

// Scenario: Attempting to cast 'Bola de Fuego' (Cost: 30 mana)
const spellCost = 30;
const isStunned = false;
const readyToCast = canCastSpell(currentMana, spellCost, isStunned);
console.log(`Can cast spell (Cost: ${spellCost})?`, readyToCast);