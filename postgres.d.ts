interface SqlBricksParam {
    text: string;
    values: any[];
}

interface Statement {
    toParams(options?: { placeholder: string }): SqlBricksParam;
}

interface WhereObject {
    [column: string]: any;
}

interface InsertStatement extends Statement {
    returning(columns: string): InsertStatement;
}

interface UpdateStatement extends Statement {
    values(...values: any[]): UpdateStatement;
    set(...values: any[]): UpdateStatement;
    where(column?: string | null, value?: any): UpdateStatement;
    where(...whereExpr: WhereObject[]): UpdateStatement;
    and(column?: string | null, value?: any): UpdateStatement;
    and(...whereExpr: WhereObject[]): UpdateStatement;
    returning(columns: string): UpdateStatement;
}

interface SqlBricksPostgresFunction extends SqlBricksFn {
    insert(tbl: string, ...values: any[]): InsertStatement;
    update(tbl: string, ...values: any[]): UpdateStatement;
}

declare module 'sql-bricks-postgres' {
    declare const SqlBricksPostgres: SqlBricksPostgresFunction;
    export = SqlBricksPostgres;
}
