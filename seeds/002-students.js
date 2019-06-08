
exports.seed = function(knex, Promise) {
    return knex('students').insert([
      {id: 1, name: 'John', cohort_id: 1},
      {id: 2, name: 'Bob', cohort_id: 2},
      {id: 3, name: 'Dan', cohort_id: 2}
    ]);
  
};
