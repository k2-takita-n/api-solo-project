import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


import * as data2 from './skis.json'
import {Ski} from '../entity/SkiModel'
import {Maker} from '../entity/MakerModel'

//console.log(data2);

export default class CreateModels implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Ski)
            .values(data2)
            .execute()        
    }
}