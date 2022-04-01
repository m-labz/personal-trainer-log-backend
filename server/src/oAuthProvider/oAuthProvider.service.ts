import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OAuthProviderServiceBase } from "./base/oAuthProvider.service.base";

@Injectable()
export class OAuthProviderService extends OAuthProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
