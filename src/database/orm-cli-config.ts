import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1713351642428 } from "../migrations/1713351642428-CreateCoursesTable";
import { CreateTagsTable1713352988652 } from "../migrations/1713352988652-CreateTagsTable";
import { CreateCoursesTagsTable1715625612645 } from "../migrations/1715625612645-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1715626903852 } from "../migrations/1715626903852-AddCoursesIdToCoursesTagsTable";
import { AddCoursesTagsIdToCoursesTagsTable1715628056919 } from "../migrations/1715628056919-AddCoursesTagsIdToCoursesTagsTable";

export const  dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [
        CreateCoursesTable1713351642428,
        CreateTagsTable1713352988652,
        CreateCoursesTagsTable1715625612645,
        AddCoursesIdToCoursesTagsTable1715626903852,
        AddCoursesTagsIdToCoursesTagsTable1715628056919
    ]
})