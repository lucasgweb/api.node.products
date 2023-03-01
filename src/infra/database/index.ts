import { Connection, getConnectionOptions, createConnection } from 'typeorm';

type connectionName = 'default' | 'test';

const ormCreateConnection = async (
  connectionName: connectionName,
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  switch (connectionName) {
    case 'default':
      // eslint-disable-next-line no-return-await
      return await createConnection(defaultOptions);
    case 'test':
      return createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: ['src/modules/**/entities/*{.ts,.js}'],
        migrations: ['src/**/migrations/*{.ts,.js}'],
        dropSchema: true,
        synchronize: true,
        logging: false,
      });
    default:
      throw new Error('Connection name is not found');
  }
};

export { ormCreateConnection };
