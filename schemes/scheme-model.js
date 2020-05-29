const db = require('../data/db-config');

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({id}).first();
};

function findSteps(id) {
    return db('steps')
        .join('schemes')
        .select('steps.scheme_id', 'schemes.scheme_name','steps.step_number', 'steps.instructions')
        .where({scheme_id: id});
};

function add(scheme) {
    return db('schemes').insert(scheme);
}

// async function add(scheme) {
//     return new Promise((resolve, reject) => {
//         const result = await db('schemes').insert(scheme);
//         if (result) {
//             resolve({scheme_name: "", ...result});
//         } else {
//             reject(null);
//         }
//     });
    
// };

function update(changes, id) {
    return db('schemes').where({id}).update(changes);
};

function remove(id) {
    return db('schemes').where({id}).del();
};

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}