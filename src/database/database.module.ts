import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from '../courses/entities/courses.entity';
import { Tag } from '../courses/entities/tags.entity';
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'devtraining',
    entities: [Course, Tag],
    synchronize: false,
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async() => {
                return {
                    ... dataSourceOptions
                }
            }
        })
    ],
})
export class DatabaseModule {}
