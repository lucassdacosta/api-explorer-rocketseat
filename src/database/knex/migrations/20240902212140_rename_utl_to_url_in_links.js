export function up(knex) {
  return knex.schema.alterTable("links", (table) => {
    table.renameColumn("utl", "url");
  });
}

export function down(knex) {
  return knex.schema.alterTable("links", (table) => {
    table.renameColumn("utl", "url");
  });
}
