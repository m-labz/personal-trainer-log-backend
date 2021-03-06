/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateOAuthProviderArgs } from "./CreateOAuthProviderArgs";
import { UpdateOAuthProviderArgs } from "./UpdateOAuthProviderArgs";
import { DeleteOAuthProviderArgs } from "./DeleteOAuthProviderArgs";
import { OAuthProviderFindManyArgs } from "./OAuthProviderFindManyArgs";
import { OAuthProviderFindUniqueArgs } from "./OAuthProviderFindUniqueArgs";
import { OAuthProvider } from "./OAuthProvider";
import { OAuthProviderService } from "../oAuthProvider.service";

@graphql.Resolver(() => OAuthProvider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OAuthProviderResolverBase {
  constructor(
    protected readonly service: OAuthProviderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "read",
    possession: "any",
  })
  async _oAuthProvidersMeta(
    @graphql.Args() args: OAuthProviderFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [OAuthProvider])
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "read",
    possession: "any",
  })
  async oAuthProviders(
    @graphql.Args() args: OAuthProviderFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OAuthProvider[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "OAuthProvider",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => OAuthProvider, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "read",
    possession: "own",
  })
  async oAuthProvider(
    @graphql.Args() args: OAuthProviderFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OAuthProvider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "OAuthProvider",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => OAuthProvider)
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "create",
    possession: "any",
  })
  async createOAuthProvider(
    @graphql.Args() args: CreateOAuthProviderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OAuthProvider> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "OAuthProvider",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"OAuthProvider"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => OAuthProvider)
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "update",
    possession: "any",
  })
  async updateOAuthProvider(
    @graphql.Args() args: UpdateOAuthProviderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OAuthProvider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OAuthProvider",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"OAuthProvider"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OAuthProvider)
  @nestAccessControl.UseRoles({
    resource: "OAuthProvider",
    action: "delete",
    possession: "any",
  })
  async deleteOAuthProvider(
    @graphql.Args() args: DeleteOAuthProviderArgs
  ): Promise<OAuthProvider | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
