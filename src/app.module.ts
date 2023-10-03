import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
