import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    BadRequestException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class TenantInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
  
      // 1. Tentamos pegar tenantId do header
      const tenantId = request.headers['x-tenant-id'];
  
      if (!tenantId) {
        throw new BadRequestException('TenantId é obrigatório no header (x-tenant-id).');
      }
  
      // 2. Armazenamos dentro do objeto req para acesso posterior
      request.tenantId = tenantId;
  
      return next.handle();
    }
  }
  