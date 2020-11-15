import {MigrationInterface, QueryRunner} from "typeorm";

export class test91605437654106 implements MigrationInterface {
    name = 'test91605437654106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maker" ("id" SERIAL NOT NULL, "MakerName" character varying, "Detail" character varying, CONSTRAINT "PK_1bd37f2d6b1df3963946df4bc30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ski" ("id" SERIAL NOT NULL, "Name" character varying, "Detail" character varying, "makerId" integer, CONSTRAINT "PK_e2e64da558611d79565520eb41d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "ski"`);
        await queryRunner.query(`DROP TABLE "maker"`);
    }

}
