import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.TYPEORM_HOST || "localhost",
      port: 3306,
      username: process.env.TYPEORM_USERNAME || "root",
      password: process.env.TYPEORM_PASSWORD || "password",
      database: "catalogue",
      entities: ["dist/**/**.entity{.ts,.js}"],
      migrations: [
        "dist/migrations/**/*.js"
      ],
      logging: true,
      migrationsRun: true,
      synchronize: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

