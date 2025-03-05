// TODO: Create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";


const categoryNames = [
  "Car and vehicle",
  "Comedy",
  "Education",
  "Gaming",
  "Enterainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blog",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Video related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
  
}

main();