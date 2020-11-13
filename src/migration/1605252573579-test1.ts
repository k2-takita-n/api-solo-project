import {MigrationInterface, QueryRunner} from "typeorm";

export class test11605252573579 implements MigrationInterface {
    name = 'test11605252573579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ski" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Name" character varying NOT NULL, "Detail" character varying NOT NULL, "makerId" uuid, CONSTRAINT "PK_e2e64da558611d79565520eb41d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "maker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "MakerName" character varying NOT NULL, "Detail" character varying NOT NULL, CONSTRAINT "PK_1bd37f2d6b1df3963946df4bc30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ski" ADD CONSTRAINT "FK_a26525ee01d539d4ab8460fb27b" FOREIGN KEY ("makerId") REFERENCES "maker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ski" DROP CONSTRAINT "FK_a26525ee01d539d4ab8460fb27b"`);
        await queryRunner.query(`DROP TABLE "maker"`);
        await queryRunner.query(`DROP TABLE "ski"`);
    }

}
