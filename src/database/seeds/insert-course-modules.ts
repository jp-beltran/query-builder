import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        { id: 1, colName: "HTML" },
        { id: 2, colName: "CSS" },
        { id: 3, colName: "React.js" },
        { id: 3, colName: "Node.js" },
    ]);
};
