import * as fs from "fs";
import * as _ from "lodash";

interface MagicItems {
  table_a: string[];
  table_b: string[];
  table_c: string[];
  table_d: string[];
  table_e: string[];
  table_f: string[];
  table_g: string[];
  table_h: string[];
  table_i: string[];
}

// interface Table {
//   category: string
//   items: string[]
// }

const magic_items_empty: MagicItems = {
  table_a: [],
  table_b: [],
  table_c: [],
  table_d: [],
  table_e: [],
  table_f: [],
  table_g: [],
  table_h: [],
  table_i: [],
};

const magic_items_charlie: MagicItems = {
  table_a: ["Bag of Holding", "Drift Globe", "Potion of Greater Healing"],
  table_b: ["Ammunition +1", "Saddle of the Cavilier", "Mithril Half Plate"],
  table_c: ["Ammunition +2", "Horseshoes of Speed", "Periapt of Health"],
  table_d: ["Ammunition +3", "Portable Hole", "Horseshoes of Azephyr"],
  table_e: [
    "Arrow of Slaying",
    "Potion of Supreme Healing",
    "Potion of Storm Giants Strength",
  ],
  table_f: [
    "Weapon +1 (Longbow)",
    "Bracers of Archery",
    "Cloak of Protections",
  ],
  table_g: [
    "Weapon +2 (Longbow)",
    "Ring of Protection",
    "Cloak of Displacement",
  ],
  table_h: ["Oathbow", "Scimitar of Speed", "Manuel of Quickening Action"],
  table_i: [
    "Armor +3 (Breastplate)",
    "Ring of Invisibility",
    "Ioun Stone (Master)",
  ],
};

const magic_items_jessie: MagicItems = {
  table_a: ["Bag of Holding", "Drift Globe", "Potion of Greater Healing"],
  table_b: [
    "Mithril Armor (Breastplate)",
    "Dust of Sneezing and Choking",
    "Oil of Slipperiness",
  ],
  table_c: ["Bead of Force", "Quaal's feather token", "Chime of Opening"],
  table_d: [
    "Potion of Longevity",
    "Potion of Vitality",
    "Horseshoes of Azephyr",
  ],
  table_e: [
    "Sovereign glue",
    "Potion of Supreme Healing",
    "Potion of Storm Giants Strength",
  ],
  table_f: [
    "Instrument of the Bards (Fochlucan bandore)",
    "Hat of Disguise",
    "Sword of Vengence",
  ],
  table_g: [
    "Instrument of the Bards (Cli lyre)",
    "Adamantine Armor (Breastplate)",
    "Shield +2",
  ],
  table_h: [
    "Animated Shield",
    "Tome of Leadership and Influence",
    "Horn of Valhalla (Bronze)",
  ],
  table_i: [
    "Instrument fo the bards (Ollamh harp)",
    "Armor +3 (Breastplate)",
    "Vorpal Sword",
  ],
};

const magic_items_charlotte: MagicItems = {
  table_a: [
    "Bag of Holding",
    "Potion of Climbing",
    "Potion of Greater Healing",
  ],
  table_b: ["Rope of Climbing", "Goggles of Night", "Immovable Rod"],
  table_c: [
    "Potion of Superior Healing",
    "Decanter of Endless Water",
    "Sending Stones",
  ],
  table_d: [
    "Potion of Supreme Healing",
    "Potion of Invisibility",
    "Potion of Flying",
  ],
  table_e: [
    "Potion of Storm Giant Strength",
    "Potion of Supreme Healing",
    "Universal Solvent",
  ],
  table_f: [
    "Ring of Waterwalking",
    "Brooch of Shielding",
    "Necklace of Adaptation",
  ],
  table_g: ["Mace of Disruption", "Giant Slayer", "Bracers of Defense"],
  table_h: [
    "Belt of Fire Giant",
    "Belt of Stone Giant",
    "Ring of Regeneration",
  ],
  table_i: [
    "Belt of Storm Giant",
    "Ring of Invisibility",
    "Belt of Cloud Giant",
  ],
};

const magic_items_emily: MagicItems = {
  table_a: ["Drift Globe"],
  table_b: [],
  table_c: [],
  table_d: ["Bag of Devouring"],
  table_e: [],
  table_f: [],
  table_g: ["Cloak of Displacement"],
  table_h: [],
  table_i: [],
};

const magic_items_justin: MagicItems = {
  table_a: [],
  table_b: [],
  table_c: ["Chime of Opening"],
  table_d: [],
  table_e: [],
  table_f: [
    "Broom of Flying",
    "Staff of the Python (Dog-Snake)",
    "Cloak of Protection",
  ],
  table_g: [
    "Ring of Animal Influence",
    "Ring of Feather Falling",
    "Amulet of Health",
    "Ring of Protection",
  ],
  table_h: [
    "Tome of Clear Thought",
    "Ioun Stone (intellect)",
    "Staff of Frost",
  ],
  table_i: ["Robe of the Archmagi"],
};

function mergeMagicItems(a: MagicItems, b: MagicItems): MagicItems {
  return {
    table_a: a.table_a.concat(b.table_a),
    table_b: a.table_b.concat(b.table_b),
    table_c: a.table_c.concat(b.table_c),
    table_d: a.table_d.concat(b.table_d),
    table_e: a.table_e.concat(b.table_e),
    table_f: a.table_f.concat(b.table_f),
    table_g: a.table_g.concat(b.table_g),
    table_h: a.table_h.concat(b.table_h),
    table_i: a.table_i.concat(b.table_i),
  };
}

const big_list_o_magic_items = _.reduce(
  [
    magic_items_charlie,
    magic_items_charlotte,
    magic_items_jessie,
    magic_items_emily,
    magic_items_justin,
  ],
  mergeMagicItems
);
function pickOne(items: string[]) {
  return items[Math.floor(Math.random() * (items.length - 1))];
}

function pickMagicItem(category: string, magic_items: MagicItems) {
  const stuff = magic_items["table_" + category];

  return pickOne(stuff);
}

export function pick(category: string) {
  const big_list_o_magic_items = _.reduce(
    [
      magic_items_charlie,
      magic_items_charlotte,
      magic_items_jessie,
      magic_items_emily,
      magic_items_justin,
    ],
    mergeMagicItems
  );

  return pickMagicItem(category, big_list_o_magic_items);
}

this.pick = pick;

console.log("a: ", pickMagicItem("a", big_list_o_magic_items));
console.log("b: ", pickMagicItem("b", big_list_o_magic_items));
console.log("c: ", pickMagicItem("c", big_list_o_magic_items));
console.log("e: ", pickMagicItem("d", big_list_o_magic_items));

// fs.writeFile("magic_items.json", JSON.stringify(magic_items), (err) => {
//   if (err) throw err;
// });

// fs.readFile("magic_items.json", (err, data: any) => {
//   if (err) throw err;
//   let magic_items = JSON.parse(data);

//   console.log(magic_items);
// });
