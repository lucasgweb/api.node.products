import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1677708793421 implements MigrationInterface {
    name = 'initial1677708793421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" character varying NOT NULL, "active" character varying NOT NULL, "is_public" character varying NOT NULL, "name" character varying NOT NULL, "processprice" integer NOT NULL, "full_description" character varying NOT NULL, "short_description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
