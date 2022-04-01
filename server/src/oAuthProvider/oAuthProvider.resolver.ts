import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OAuthProviderResolverBase } from "./base/oAuthProvider.resolver.base";
import { OAuthProvider } from "./base/OAuthProvider";
import { OAuthProviderService } from "./oAuthProvider.service";

@graphql.Resolver(() => OAuthProvider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OAuthProviderResolver extends OAuthProviderResolverBase {
  constructor(
    protected readonly service: OAuthProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
