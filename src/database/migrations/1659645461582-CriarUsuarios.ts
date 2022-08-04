import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarUsuarios1659645461582 implements MigrationInterface {

    //cria a tabela no banco de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true,
                    }
                ]
            })
        )
    }

    //dropa a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
