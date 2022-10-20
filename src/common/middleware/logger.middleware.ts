import urlData from '@fastify/url-data';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest & typeof urlData, _: FastifyReply, next: () => void) {
    const { path, query, host, port } = req.urlData();

    console.log(`Request...`, { path, query, host, port });

    next();
  }
}
