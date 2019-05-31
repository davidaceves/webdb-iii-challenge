
exports.seed = function(knex, Promise) {
    return knex('students').insert([
      {id: 1, name: 'John'},
      {id: 2, name: 'Bob'},
      {id: 3, name: 'Dan'}
    ]);
  
};
