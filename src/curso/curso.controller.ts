import { Controller, Get } from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('curso')
export class CursoController {
  constructor(private cursosService: CursoService) {}

  @Get()
  async getCursos() {
    const cursos = await this.cursosService.getCursos();
    return cursos;
  }
}
