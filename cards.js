// =============================================================================
// cards.js - All card data for Clash of Cards
// =============================================================================
// Property naming convention (camelCase):
//   name, type, subtype, archetype, hp, atk, def, dex, eng
//   passives, ability, active, extra, image
// =============================================================================

const cards = [
  // ---------------------------------------------------------------------------
  // Characters
  // ---------------------------------------------------------------------------

  //Black? you mean NI- (I will not end that)
  {
    name: "Mil Mi-24 Attack Helicopter + Pilot",
    type: "Character",
    archetype: "Mechanical",
    hp: 300,
    atk: 60,
    def: 20,
    dex: 22,
    eng: "30 Rounds (Recharge on land)",
    ability: `
      <strong>Rocket Run:</strong> Deal 40 +/-20 damage for every rocket pod you use (up to 4 before needing to land to refill) in explosive damage.
      <br><strong>Escort:</strong> Can escort up to 8 characters at once (not including this one) but if this card is attacked then all other characters in the helicopter also receive the same amount of damage. Must be on land to board/exit unless Tails the Fox or another flying entity is boarding/exiting.
    `,
  }, //POV: 80 S-8 Rockets direct impacting a hedgehog.

  {
    name: "Tails the Fox",
    type: "Character",
    archetype: "Nature",
    hp: 175,
    atk: 40,
    def: 15,
    dex: 18,
    eng: 8,
    passives: `
      <strong>1:</strong> Can carry Nature Archetype character over water for 1 round.
      <br><strong>2:</strong> All Heals on Mechanical Archetypes are 1.5x as effective.
    `,
    ability: `
      <strong>Mecha Healer:</strong> Tails can heal a Mechanical Archetype character for 3% of their HP. (-2 ENG, 4 Round Cooldown.)
      <br><strong>Throw Partner:</strong> Tails will grab the selected teammate, and throw them at the enemy, dealing ATK*1.25. (-3 ENG, 5 Round Cooldown. It's the teammates ATK, not Tails'.)
    `,
  },

  {
    name: "Blaze the Cat",
    type: "Character",
    archetype: "Nature",
    hp: 160,
    atk: 65,
    def: 15,
    dex: 25,
    eng: 10,
    passives:
      "<strong>'Royal' Guards: </strong>All allies gain 5 DEF, and for every Ally in her squad, she'll gain 10 DEF for herself.<br><strong>Sol Flames:</strong> All base attacks are considered fire attacks.",
    ability: `
      <strong>Sol Accumulation:</strong> For any item action that occurs in Blaze's squad, she'll gain a token that increases her ATK by 5, and it stacks. Tokens can be traded in for 1 ENG each.
    `,
  }, //Don't tell me you wouldn't if you had the chance -Leland
  //I have a boyfriend. -Brayden
  //Oh damn, didn't think you swung all the way, I thought you were, like, both. Aight. -Leland
  //I am both, but I would rather be gay then date any female from our generation. -brayden
  //Based af I just jork it to Blaze and that's enough. -Leland

  {
    name: "Silver the Hedgehog",
    type: "Character",
    archetype: "Nature",
    hp: 200,
    atk: 45,
    def: 15,
    dex: 18,
    eng: "15 (+2 ENG per round until full)",
    passives: "Can fly over water tiles.",
    ability: `
      <strong>It's no use!:</strong> Paralyze an enemy for 3 ENG per round, and a maximum of 3 rounds straight. (-3 ENG per round, 4 round cooldown)
      <br><strong>Unstun:</strong> Cure an ally's stun for 2 ENG.
      <br><strong>Rock :) :</strong> Block an incoming attack by moving a heavy object in the way. Negates 90% of damage taken before DEF negation. (-3 ENG, 5 round cooldown)
    `,
  },

  {
    name: "Sonic the Hedgehog",
    type: "Character",
    archetype: "Nature",
    hp: 240,
    atk: 55,
    def: 18,
    dex: 26,
    eng: "6 (+2 per round)",
    passives: "At 40 DEX, Sonic has a 95% dodge chance of any attacks.",
    ability: `
      <strong>Speed Build:</strong> For 1 extra energy per round, increase DEX by 1 with a limit of 4 (+1 DEX costs 1 ENG, +2 DEX costs 2 ENG...) and when the desired DEX is reached it only costs 1 ENG every other round to maintain it. Can start and stop this move at any point with 1 round cooldown each time it's used. Cannot be used past 30 DEX.
    `,
  },

  {
    name: "Jet the Hawk",
    type: "Character",
    archetype: "Nature",
    hp: 150,
    atk: 50,
    def: 10,
    dex: 18,
    eng: 5,
    passives: "Can fly over water with -2 DEX.",
    ability: `
      <strong>Gear Runover':</strong> Spend a round circling above a target enemy (Makes them dizzy, +20% chance to miss for 3 rounds) (while circling, this card has a 95% chance to dodge) then strike the opponent with Jet's hoverboard dealing 100 damage and stunning the target enemy for a round. (-3 ENG, 5 round cooldown)
    `,//The bird is the word. -Peter
  },

  {
    name: "Honey the Cat",
    type: "Character",
    archetype: "Nature",
    hp: 230,
    atk: 95,
    def: 15,
    dex: 20,
    eng: 8,
    passives: "No fall damage 'Nimble'; +5% dodge chance",
    ability: `
      <strong>Defense Stance:</strong> Reallocate up to 50 from ATK to DEF and divide the remaining ATK by 2. This card is stun immune when in defense stance. Move is cancelled immediately without using an action if another special move, item or skillset is used by Honey. (-0 ENG, 2 round cooldown)
      <br><strong>Honey Glider / Pounce:</strong> Deal 70 ATK to a target opponent (not negated by DEF) and stun the opponent for a round, however, you will take on all of the opponents effects. (-4 ENG, 3 round cooldown)
    `,
  }, //"This is a fighting tourny, kiddo. We're here to tussle!" -Honey after she uppercut Tails in the chin

  {
    name: "Shadow the Hedgehog",
    type: "Character",
    archetype: "Nature",
    hp: 250,
    atk: 60,
    def: 20,
    dex: 20,
    eng: 10,
    passives:
      "Can match Sonic's DEX if he's a teammate (capped at 36 DEX). All of Shadow's attacks against government employees are 33% more effective.",
    ability: `
      <strong>Chaos Control:</strong> Teleport behind two selected enemies and deal 50 ATK to both of them (not negated by DEF).
      <br><strong>Chaos Blast:</strong> Charge up for one round (Shadow is invulnerable in this one round) and then deal the amount of damage that Shadow has taken back to all enemies (divide the damage equally between the enemies).
    `,
  }, //ALL HAIL SHADOW!!! Also has combat related PTSD from when he was direct impacted by 80 S-8 unguided rockets from an Mi-24 Attack Helicopter.
  //I may or may not be the reason for the PTSD -brayden

  {
    name: "Nicole Watterson",
    type: "Character",
    archetype: "Nature",
    hp: 240,
    atk: 80,
    def: 16,
    dex: 16,
    eng: 16,
    passives:
      "<strong>Chaos:</strong> Every three rounds, the MaxHP and BaseATK of all friends and foes in the battle is changed by +/-20.",
  },
  {
    name: "Model A0001 Battle Droid",
    type: "Character",
    archetype: "Mechanical",
    hp: 180,
    atk: "30 Normal + 60 Burn",
    def: "30 (it's made of solid steel)",
    dex: 10,
    eng: 10,
    passives:
      "<strong>Powered by ChatGPT: </strong>+10% miss chance<br><strong>High Melting Point: </strong> Takes 40% less burn damage.",
    ability: `
      <strong>Laser:</strong> Can be used to burn flammable materials and melt plastics or metal. When used on an enemy, deal 1.5x base attack but there will be a 70% miss chance by default. (-5 ENG, 5 Round Cooldown)<br><strong>Shield: </strong>When activated, the next attack this card recieves will be negated by 50% and stuns the attacker for two rounds. Shield lasts for three rounds by default, during which this card cannot use any attacks. (-2 ENG per round, +2 rounds Cooldown for every round it was active)<br><strong>Self Repair: </strong>Heal 25 HP per round when activated (twice effectiveness with Tails the Fox on the team)(-1 ENG per round, 3 round cooldown).
    `,
  },//This things targetting system is powered by and was also written by ChatGPT.. not the card game mechanics but like the clankers arm cannon I mean. -Leland

  {
    name: "Family Guy 3",
    type: "Character",
    archetype: "Nature",
    hp: 200,
    atk: "45 (+/- 10)",
    def: "20 (+/- 3)",
    dex: 5,
    eng: "maximum of 5, start at 3.",
    ability: `
      <strong>say:</strong> "Bird, bird, buh-birds the word ah well the bird bird bird well the bird is the word." and stun a target enemy for 1 round or 3 rounds if it's a bird. (-3 ENG, 2 round cooldown)
    `,
  },

  {
    name: "Spy",
    type: "Character",
    archetype: "Nature",
    hp: 180,
    atk: "60",
    def: "16 ± 4",
    dex: 15,
    eng: "10",
    passives: "<strong>inconspicuous:</strong> Enemies will not immediately battle with this card.",
    ability: `
      <strong>Paper Maché:</strong> Wear the face and clothes of a defeated enemy or ally (+50% dodge chance)
    `,
  },//*ahem*, gentlemen?

  {
    name: "AI Powered Microwave",
    type: "Character",
    archetype: "Clanker",//DIE CLANKER, DIE! -Leland
    hp: 130,
    atk: "40",
    def: "5",
    dex: "0, but can be picked up by other characters (-1 DEX to whoever carries it)",
    eng: "undefined",
    ability: `
      <strong>"can i hav a chezburger, plz?":</strong> Heal a target for 50~70 HP (roll a d20 to determine) (heals an additional 50 if target has Jim's Talent equipped as a skillset and is holding the microwave in it's item slot)<br>-10 ENG, 4 Round Cooldown.
    `,
  },//This card is also one of the most busted healers in the game and it's a goddamned microwave.

  {
    name: "Shredded (Buff Shrek)",
    type: "Character",
    archetype: "Nature",
    hp: 240,
    atk: 100,
    def: 20,
    dex: 14,
    eng: 8,
    passives:
      "-20% damage taken from blunt attacks. Cannot ride hovercraft or fit inside of small vehicles like the Бумер. +10% effectiveness against Mechanical archetype enemies.",
    ability: `
      <strong>Steely Abs:</strong> Take only 30 damage from the next attack this card receives but also only deal 60 damage the following round and also first passive is halved when this move is active. (-3 ENG on activation, -1 ENG per round maintained, 5 round cooldown)
    `,
  }, //I like 'em big, I like 'em chunky.

  // ---------------------------------------------------------------------------
  // Items
  // ---------------------------------------------------------------------------

  {
    name: "MONSTER ENERGY",
    type: "Item",
    passives: "None",
    ability: `
      Gives the target character 80% more DEX for 10 rounds, but lowers their MaxHP by 10% until the end of the battle when it returns to normal (They don't heal back that HP, it's just that the MaxHP returns.) Comes in a 6 pack. DEX multiplier is not stackable. Additionally, whatever team has this will go first in battle unless contradicted by an enemy card, then go by highest BaseDEX.
    `,
  }, //It's green, so it's nature! Also holy shit it's expensive.
  //ha you dont have money -brayden
  //Richy rich over here. -Leland

  {
    name: "Engineer/Modder",
    type: "Item",
    passives:
      "All Mechanical Archetype cards in squad take 10 less damage from any attack, and heal 1.5x as effectively.",
    ability: `
      <strong>Technology:</strong> When this effect is applied to a Mechanical Archetype character, there's a 5% chance that any damage it takes will be multiplied by 0.5x (-1 ENG per round, 5 round cooldown after).
      <br><strong>Mechanic:</strong> On any ally, buff one random stat by 10% (3 used, no Cooldown, -1 ENG. Can only be used on Mechanical Archetype cards.)
    `,
  }, //The engineer is engiNEARING MY FUCKING LIMIT!
  //engineer gaming -Brayden

  {
    name: "Red Chaos Emerald",
    type: "Item",
    passives:
      "+2 ENG per round (until full ENG is reached). -1 Cooldown length",
    active: `
      <strong>Flames of Disaster:</strong> Double BaseATK, any enemy hit with this attack is set on fire taking 7 damage for 5 rounds. When this move is activated, it cannot be deactivated for 3 rounds. Additionally, there's a 15% chance to miss melee attacks and 20% chance to miss ranged attacks. (-1 ENG per round maintained, 5 round cooldown)
    `,
  },

  {
    name: "Blue Chaos Emerald",
    type: "Item",
    passives: "+3 DEX",
    active:
      "Mechanical Archetypes can equip this item for an additional +4 ENG. All cooldowns are one round faster (does NOT change charge times)",
  },

  {
    name: "Purple Chaos Emerald",
    type: "Item",
    passives: "All attacks to the enemy do 5 extra damage.",
    active: `
      <strong>Discord:</strong> Pick a target, that target will take 15 damage every round. Enemy teammates will take 3 damage every round passively. If all of the other 6 Chaos Emeralds are present and are being used by the holder of this card, all enemies take 20 damage per round and their heals are only 75% as effective.
    `,
  },

  {
    name: "Pink Chaos Emerald",
    type: "Item",
    active:
      "<strong>Zen:</strong> Passively heals the holder of this card by 20 every round and passively heals teammates by 5 every round. All other heals in the battle have 20% more effectiveness and all heals outside of battle are 100% more effective.",
  },

  {
    name: "Green Chaos Emerald",
    type: "Item",
    active: `
      If the holder of this card has Chaos Harness (skillset or passive on the card) and this card is equipped as an Item, they can use the following ability:
      <br><strong>Chaos Control:</strong> Teleport behind one selected enemy and deal 45 ATK. The DEF of the target will only have half of its effectiveness.
    `,
  },

  {
    name: "Yellow Chaos Emerald",
    type: "Item",
    passives: "+4 ENG",
    active: `
      <strong>Zeus:</strong> Call the god of thunder to smite a target enemy. It stuns Mechanical archetypes for two rounds, and sets nature archetypes on fire for 5 rounds dealing 5 damage each round. (-10 ENG, 6 Round Cooldown)
    `,
  },

  {
    name: "White Chaos Emerald",
    type: "Item",
    passives: "+5 DEF",
    active: `
      <strong>Push:</strong> Telekinetically throw an enemy, dealing 30 damage, stunning the enemy for one round (unless they just got out of stun the previous round) and lowering their DEX by 3 for 3 rounds. (-5 ENG, 6 Round Cooldown)
    `,
  }, //cumstone
  //...ok -brayden

  {
    name: "Jim's Soul",
    type: "Item",
    ability: `
      <strong>Consume:</strong> Copy any card (incl. Character types) by sacrificing a character you own.
    `,
  },

  {
    name: "M92F Beretta Service Pistol",
    type: "Item",
    passives: "The character this is applied to changes their ATK stat to ''40 BaseATK + (20*1~6)''. If this card is applied to a character that already has a gun (or Shadow the Hedgehog) add twenty to both of those numbers like this: ''60 BaseATK + (40*1~6)''. Roll a d6 for the second part of the attack equation.",
  },

  {
    name: "Master Emerald",
    type: "Item",
    ability: `
      <strong>End Game Item:</strong> The Master Emerald is accessable through a hole blown into the top of the Hidden Palace through the use of a Global Event Card (Or triggered by completing a specific mission in the Singleplayer / Co-Op campaign) in the dead center of the Angel Island Zone.
    `,
  },

  {
    name: "Opiods and Mary Jane",
    type: "Item",
    ability: `
      <strong>Medication:</strong> This has an unlimited supply because of Little Jacob from GTAIV. It makes the character this card is equipped to 100% stun immune, however, all cooldowns and charge ups take two more rounds and DEX is multiplied by 0.8 times.
    `,
  },

  {
    name: "FIM 92 ''Stinger'' L Variant",
    type: "Item",
    passives: "-4 DEX or you can opt for +1 round charge-up.",
    ability: `
      <strong>''Star Streaker'':</strong> This variant of the FIM 92, also known as the ''Star Streaker'' can target any airborne entity including drones, planes, flying foxes, and hedgehogs.<br><br>Deals 50 ATK to Nature archetypes and 70 ATK to Mechanical archetypes or Clankers. If an opponent does a dodge check, it's their DEX*2 as a percent. (e.g. 15 DEX would equal a 30% dodge chance)
    `,
  },

  {
    name: "Bicycle Playing Cards",
    type: "Item",
    ability: `
      Draw 5 cards from a deck of playing cards; If an Ace is drawn, you get +1 ENG along with other buffs you might get.
      <br><strong>Pair:</strong> +2 DEX (stackable with a pair of a pair)
      <br><strong>3-Pair':</strong> +13 DEF
      <br><strong>4-of-a-kind:</strong> +20 MaxHP
      <br><strong>Straight:</strong> +15 MaxHP and +15 BaseATK
      <br><strong>Royal Straight:</strong> +5 DEX and +15 DEF
      <br><strong>Royal Flush:</strong> All stats multiplied by 3. An Ace of Spades grants you a second life starting at 75HP and passively heal 10 HP every round until you reach 150 HP or MaxHP (whatever comes first). You can play another hand for your ally. Can redraw every 2 rounds. (-1 ENG, 2 round cooldown)
    `,
  }, //you seen em, you play em. And if'n I don't?

  {
    name: "Pocket Candy",
    type: "Item",
    ability: `
      (all are one time use)
      <br><strong>Red Jolly Rancher:</strong> Heal 20 HP.
      <br><strong>Purple Jolly Rancher:</strong> +1 DEX.
      <br><strong>Green Jolly Rancher:</strong> +5 DEF.
      <br><strong>Blue Jolly Rancher:</strong> +10 HP, +8 ENG.
      <br><strong>Mint Lifesaver:</strong> -10% Miss Chance.
      <br><strong>Candy Lifesaver:</strong> +10% Dodge Chance. (Lifesaver effects wear off in 5 rounds)
      <br><strong>2 starbursts:</strong> Deal 20 ATK for each one used and stun enemy for 1 or 2 rounds.
      <br><strong>Pop Rocks:</strong> Deal 5*d20 (roll d20) damage, if more than 80 damage is dealt to the target they're stunned for 1 round.
    `,
  }, //there's more in the van
  //...ok (again) -brayden

  {
    name: "UH-1 Huey Medevac",
    type: "Item",
    ability: `
      <strong>Escape:</strong> When used, it will take 3 rounds for a helicopter to arrive and two rounds for characters to board and leave respectively. (-1 ENG, 20 round cooldown, 3 uses before discard). During those 2 rounds, characters boarding can only be attacked in the first round and cannot attack back, and in the second round the helicopter can be destroyed by Tails' Throw Partner move, Sonic's BaseATK (50% chance to miss), FIM-92 Stinger (20% miss chance), Kamikaze Drone (20% miss chance), and/or a Super Character with the 7 Chaos Emeralds (0% miss chance). Upon successful escape, all characters are healed to full HP and if a character died while boarding they are revived with 50% health.
    `,
  }, //SOME FOLKS INHERIT STAR SPANGLED EYES- OOH THEY'RE RED WHITE AND BLUE!
  //WHAT THE FUCK IS A KILOMETER!!!!! *Eagle sound* -brayden

  // ---------------------------------------------------------------------------
  // Skillsets
  // ---------------------------------------------------------------------------

  {
    name: "Chaos Harness",
    type: "Skillset",
    passives: "All Chaos Emeralds individually have 10% greater effectiveness.",
    active: `
      <strong>Super:</strong> (requires all 7 Chaos Emeralds) upon activation, the character with all 7 emeralds will have their Maximum HP buffed to 4,500 and healed to full. They'll have infinite ENG. They'll also have 50% dodge chance and 60 DEX. Return to normal at the end of the battle. (30 Round Cooldown)
    `,
  },

  {
    name: "Quick Dash",
    type: "Skillset",
    passives: "<strong>Nimble: </strong>Increase the applied characters default dodge chance by 5%.<br><strong>Slightly faster:</strong> +2 DEX<br><strong>Skipped arm days for leg days: </strong>The applied card will deal 20 less melee damage.",
    active: `
      <strong>Decieve: </strong>Move extremely quickly creating a phantom copy of yourself (+50% dodge chance) (costs 3 energy to maintain every round, 3 round cooldown)<br><strong>Stretches: </strong>Increase dodge chance by 1% - stacks up to +20% (-0 ENG, 1 Round cooldown)<br><strong>Bypass:</strong> Disorient a target enemy (they have a +20% miss chance) and you can attack the enemy as well (they'll only have 5% dodge chance at the highest).(-3 ENG, 5 Round cooldown)<br><strong>Reflex: </strong> Set dodge chance to (DEX*3)% for 3 rounds (-5 ENG, 8 Round cooldown).
    `,
  },

  {
    name: "Pyrotechnics Skillset",
    type: "Skillset",
    active:
      "<strong>Burn to Ashes: </strong>Burn everything flammable currently in game which will remove certain buffs or debuffs from the environment. If there is nothing flammable that is causing a debuff, it will instead damage all enemies for 30 burn damage and an additional 10 burn damage for 3 rounds after. (-3 ENG, 3 round cooldown)<br><strong>Fire Toss: </strong>When this attack hits an enemy, it deals 15 damage on contact, lowers DEX and DEF by 5, and continues doing 5 damage per round for 5 rounds. Debuffs wear off one round after they stop burning. (-6 ENG, 8 Round Cooldown)",
  },

  {
    name: "Жмурки (Dead Man's Bluff)",
    type: "Skillset",
    passives:
      "When the character this card is applied to dies, flip a coin (hide result from the enemy/enemies) and then either tell them the true result or lie to them. They then need to guess whether you're bluffing/lying about the result or not. If they correctly guess whether you're lying or not, they suffer 0 effects. If they are incorrect, the enemy that killed the character this card was applied to will take 1 damage, and then 2, then 4, 8, 16, 32, 64, so on and so forth until the target enemy character dies permanently for the game.",
  },

  {
    name: "Personalized OST Skillset",
    type: "Skillset",
    passives:
      "The character that this skillset is applied to will ''lock the f### in''.<br><br><strong>Locked In: </strong><br>+15% chance that an attack to this card only deals 33% of the damage it's supposed to.<br>Immune to single round stuns, and other stuns are halved in length (rounding up if decimal).<br>The character this card is applied to can do both squad actions in a round.<br>-10% dodge chance (However, dodge chance cannot go below 0% with this card equipped)",
  },

  {
    name: "Jim's Talent",
    type: "Skillset",
    passives:
      "Buff all stats by 50 with a 10% chance to explode and die instantly every turn.",
  }, //who the fuck is Jim anyway?
  //idk -brayden

  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------

  {
    name: "Jim's Reckoning",
    type: "Event",
    ability: `
      <strong>Are you ready to have a bad time?:</strong> Everything in a 5inch² area on the map is instantly burned (take 5 damage each round for 5 rounds), poisoned (15 damage each round for 3 rounds), and a randomly selected character is reduced to 5 HP. Discard after card is used. (-5 ENG to everyone affected.)
    `,
  },

  {
    name: "Snap of Thanos",
    type: "Event",
    ability: `
      <strong>''I am... inevitable'':</strong> Flip a coin for every character on the board. If heads, they will turn into dust and blow away into the wind like Mr. Game and Watch when he didn't feel so good. Two rounds later, they will reappear at a random coordinate on the board (chosen by dice or RNG) with 75% of their maximum HP.
    `,
  },//I don't feel so good... aaaAAAUUUGHHH!!! -Mr. Game and Watch

  {
    name: "Nuclear War",
    type: "Event",
    ability: `
      <strong>Initial Blast:</strong> Any character card in any POI is immediately reduced to 80 HP. If they were under 51 HP, they die (does not affect ghosts or abstract spirits)
      <br><strong>Radiation Sickness:</strong> Applied to any cards that were in a POI and lived:
      <br>-1% HP per round for 15 rounds after they leave the POI
      <br>+10% chance to miss attacks (affects all archetypes)
    `,
  }, //war, war never changes

  {
    name: "Kolossos",
    type: "Event",
    subtype: "Boss",
    hp: "Undefined",
    atk: "150 (33% hit chance, 33% near miss chance, 33% miss chance)",
    def: "Undefined",
    dex: "8 in battle, 40 after 5 rounds out of battle.",
    eng: "Undefined",
    passives: `
      <strong>Running Start:</strong> At the start of every battle, Ability one is immediately used with an 80% starting hit chance rather than 50%.
      <br><strong>Block:</strong> 25% Block chance when attacked: if he blocks, the attacking character is stunned for two rounds and will take 20% more damage from Kolossos until they are out of stun.
      <br><strong>Where are you going?:</strong> Nobody can escape battle with him until the battle has been going for 10 rounds.
      <br><strong>Fear:</strong> Characters going against Kolossos have 1 fear token at the start, and get another for every hit they take from Kolossos, for every near-miss from Kolossos, and for every character that Kolossos kills.
      <br><strong>Get. up.</strong> If a character dies to this boss for the first time, they can be revived by a teammate up to 3 rounds after they were killed and when they are revived, they are set to 60% of their MaxHP.
      <br>(What is 'Fear'? For every fear token, the applied character has +1 DEX, -10 DEF, +/-5% BaseATK, and they have a +5% chance to miss. Their Special abilities have a 10% chance to miss unless they aren't offense.)
    `,
    ability: `
      <strong>Ability 1 - Charge:</strong> When used, Kolossos will charge towards a target and have a 50% chance to spike them, dealing 40 damage, then they can pick another target and have half the chance to hit that target (25%), he can pick as many targets as he wants until he misses one, but he has 2 rounds of charge to hit at least one person. Once he misses someone, he will slam everyone he spiked on his arm into the wall, dealing an additional 20 damage. However, once he does this, he has a DEX of 4 for one round and is 100% more susceptible to stun (meaning stuns can be applied with just 50 for one round, but two rounds is still 150, and 3 rounds is still 250, etc.)
      <br><strong>Ability 2 - Taunt:</strong> Kolossos will select one person to Taunt, which will give that person a trance state (-20% dodge chance).
      <br><strong>Ability 3 - Grab:</strong> If Kolossos has been hit by a melee attack in the previous turn and/or round, he can grab the person who dealt it (unless they have a DEX of 18 or higher) and deal 40 damage to them.
    `,
    extra: `
      <strong>Last Man Standing:</strong> Unless the chance to escape has already been given, the amount of rounds needed to survive is set to 6 before escape is possible. The character's defense is set to double BaseDEF plus whatever buffs from the card's passives x 1.2 and items. Their cooldowns are shortened to 33%, and they have 3x energy that recharges 3 times as fast. At the start of LMS, the last man standing will be healed to full +65% of their HP as overcharge. Kolossos hit chance is 50% and near miss is also 50%.
      <br><strong>To truly defeat Kolossos:</strong> A character would need all seven Chaos Emeralds, which will allow them to deal undefined DMG to Kolossos - you need to do this 5 times before Kolossos dies. The character does not need to be in super form, they simply need the Chaos Emeralds, however, if they aren't in super, it is very likely that they die in their endeavor.
      <br><br><strong>Controlled by Game Master.</strong>
    `,
  },
  //Brayden, please for the love of god keep Kolossos at the way bottom so we don't have a void in the middle of the website, thank you. -Leland
  //I'll fix it dont worry. -Brayden
  //Aight. -Leland

  // ---------------------------------------------------------------------------
  // Art
  // ---------------------------------------------------------------------------

  //==========================================================================\
  //                                                                           \
  //Make sure the link is a "//cdn.discordapp.com" not "//media.discordapp.net" |
  //                 Also make sure they are ".png" or ".gif"                   |
  //                                                                           /
  //==========================================================================/
  //I did not need it make it look like that lol -brayden

  {
    name: "Rigby Blaze",
    type: "Art",
    image: "https://i.imgur.com/jQMhGIn.jpeg",
    //I have a lot of self control, but some things in this world. -Leland (Monster Energy Enjoyer for those who don't know me IRL btw)
  },
  {
    name: "Male 07 is pissed",
    type: "Art",
    image: "https://i.imgur.com/CPK3dbH.gif",
  },
  {
    name: "''You Aight?''",
    type: "Art",
    image: "https://i.imgur.com/apwcpTG.jpeg",
  },
  {
    name: "Странное рождество...",
    type: "Art",
    image: "https://i.imgur.com/LxAGxnc.png",
  },//translates to "Strange Christmas" -Leland
  {
    name: "Lethal Popcorn Weapon",
    type: "Art",
    image: "https://i.imgur.com/vucQrKV.gif",
  },
  {
    name: "What the f### Scout?",
    type: "Art",
    image: "https://i.imgur.com/WuZhqqw.png",
  },
  {
    name: "v0.1, yay!",
    type: "Art",
    image: "https://i.imgur.com/OazMwE6.gif",
  },//Yippie!
  //https://i.imgur.com/apwcpTG.jpeg here's the link to the assets folder, Brayden. -Leland
];
