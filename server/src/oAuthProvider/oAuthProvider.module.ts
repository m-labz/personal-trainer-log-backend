import { Module } from "@nestjs/common";
import { OAuthProviderModuleBase } from "./base/oAuthProvider.module.base";
import { OAuthProviderService } from "./oAuthProvider.service";
import { OAuthProviderController } from "./oAuthProvider.controller";
import { OAuthProviderResolver } from "./oAuthProvider.resolver";

@Module({
  imports: [OAuthProviderModuleBase],
  controllers: [OAuthProviderController],
  providers: [OAuthProviderService, OAuthProviderResolver],
  exports: [OAuthProviderService],
})
export class OAuthProviderModule {}
