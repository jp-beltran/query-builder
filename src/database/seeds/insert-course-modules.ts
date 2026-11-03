import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        { id: 1, name: "HTML" },
        { id: 6, name: "CSS" },
        { id: 5, name: "React.js" },
        { id: 3, name: "Node.js" },
    ]);
};
