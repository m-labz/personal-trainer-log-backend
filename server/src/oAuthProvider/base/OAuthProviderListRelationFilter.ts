/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OAuthProviderWhereInput } from "./OAuthProviderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OAuthProviderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OAuthProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthProviderWhereInput)
  @IsOptional()
  @Field(() => OAuthProviderWhereInput, {
    nullable: true,
  })
  every?: OAuthProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => OAuthProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthProviderWhereInput)
  @IsOptional()
  @Field(() => OAuthProviderWhereInput, {
    nullable: true,
  })
  some?: OAuthProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => OAuthProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthProviderWhereInput)
  @IsOptional()
  @Field(() => OAuthProviderWhereInput, {
    nullable: true,
  })
  none?: OAuthProviderWhereInput;
}
export { OAuthProviderListRelationFilter };
