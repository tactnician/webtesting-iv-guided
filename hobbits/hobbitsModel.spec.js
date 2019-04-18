
const db = require('../data/dbConfig');
const hobbitsDb = require('./hobbitsModel');

describe('hobbis model', function () {
    
    describe('insert()', () => {
        afterEach( async () => {
            await db('hobbits').truncate()
        })
        
        it('should insert the provided hobbits ', async () => {
            await hobbitsDb.insert({name: 'gaffer'})
            await hobbitsDb.insert({name: 'sam'})
            
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2)
        })

        it('should insert provided hobbit', async () => {
            let hobbit = await hobbitsDb.insert({name: 'gaffer'})
            expect(hobbit.name).toBe('gaffer');

            hobbit = await hobbitsDb.insert({name: 'sam'})
            expect(hobbit.name).toBe('sam')
        })
    })


})


