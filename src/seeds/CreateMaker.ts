import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


import * as data from './makers.json'
import {Maker} from '../entity/MakerModel'

export default class CreateModels implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Maker)
            .values(data)
            .execute()        
    }
}