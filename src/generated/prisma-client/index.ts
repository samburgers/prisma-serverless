// Code generated by Prisma (prisma@1.26.6). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  passwordMeta: (where?: PasswordMetaWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  passwordMetas: (
    args?: {
      where?: PasswordMetaWhereInput;
      orderBy?: PasswordMetaOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<PasswordMeta>;
  user: (where: UserWhereUniqueInput) => UserPromise;
  passwordMeta: (where: PasswordMetaWhereUniqueInput) => PasswordMetaPromise;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  passwordMetasConnection: (
    args?: {
      where?: PasswordMetaWhereInput;
      orderBy?: PasswordMetaOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PasswordMetaConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  createPasswordMeta: (data: PasswordMetaCreateInput) => PasswordMetaPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updatePasswordMeta: (
    args: { data: PasswordMetaUpdateInput; where: PasswordMetaWhereUniqueInput }
  ) => PasswordMetaPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deletePasswordMeta: (
    where: PasswordMetaWhereUniqueInput
  ) => PasswordMetaPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  upsertPasswordMeta: (
    args: {
      where: PasswordMetaWhereUniqueInput;
      create: PasswordMetaCreateInput;
      update: PasswordMetaUpdateInput;
    }
  ) => PasswordMetaPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  updateManyPasswordMetas: (
    args: {
      data: PasswordMetaUpdateManyMutationInput;
      where?: PasswordMetaWhereInput;
    }
  ) => BatchPayloadPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  deleteManyPasswordMetas: (
    where?: PasswordMetaWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  passwordMeta: (
    where?: PasswordMetaSubscriptionWhereInput
  ) => PasswordMetaSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "phone_ASC"
  | "phone_DESC";

export type PasswordMetaOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "resetToken_ASC"
  | "resetToken_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserCreateInput {
  email: String;
  password: String;
  firstName?: String;
  lastName?: String;
  phone?: String;
  passwordMeta?: PasswordMetaCreateOneInput;
}

export interface PasswordMetaUpdateInput {
  resetToken?: String;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  passwordMeta?: PasswordMetaWhereInput;
}

export interface PasswordMetaUpsertNestedInput {
  update: PasswordMetaUpdateDataInput;
  create: PasswordMetaCreateInput;
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
}

export interface PasswordMetaUpdateDataInput {
  resetToken?: String;
}

export interface PasswordMetaWhereInput {
  AND?: PasswordMetaWhereInput[] | PasswordMetaWhereInput;
  OR?: PasswordMetaWhereInput[] | PasswordMetaWhereInput;
  NOT?: PasswordMetaWhereInput[] | PasswordMetaWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  resetToken?: String;
  resetToken_not?: String;
  resetToken_in?: String[] | String;
  resetToken_not_in?: String[] | String;
  resetToken_lt?: String;
  resetToken_lte?: String;
  resetToken_gt?: String;
  resetToken_gte?: String;
  resetToken_contains?: String;
  resetToken_not_contains?: String;
  resetToken_starts_with?: String;
  resetToken_not_starts_with?: String;
  resetToken_ends_with?: String;
  resetToken_not_ends_with?: String;
}

export interface PasswordMetaCreateOneInput {
  create?: PasswordMetaCreateInput;
  connect?: PasswordMetaWhereUniqueInput;
}

export interface PasswordMetaCreateInput {
  resetToken: String;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  firstName?: String;
  lastName?: String;
  phone?: String;
  passwordMeta?: PasswordMetaUpdateOneInput;
}

export interface PasswordMetaUpdateOneInput {
  create?: PasswordMetaCreateInput;
  connect?: PasswordMetaWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: PasswordMetaUpdateDataInput;
  upsert?: PasswordMetaUpsertNestedInput;
}

export interface PasswordMetaSubscriptionWhereInput {
  AND?:
    | PasswordMetaSubscriptionWhereInput[]
    | PasswordMetaSubscriptionWhereInput;
  OR?:
    | PasswordMetaSubscriptionWhereInput[]
    | PasswordMetaSubscriptionWhereInput;
  NOT?:
    | PasswordMetaSubscriptionWhereInput[]
    | PasswordMetaSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PasswordMetaWhereInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
  firstName?: String;
  lastName?: String;
  phone?: String;
}

export interface PasswordMetaUpdateManyMutationInput {
  resetToken?: String;
}

export type PasswordMetaWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

/*
 * An object with an ID

 */
export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePasswordMeta {
  count: Int;
}

export interface AggregatePasswordMetaPromise
  extends Promise<AggregatePasswordMeta>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePasswordMetaSubscription
  extends Promise<AsyncIterator<AggregatePasswordMeta>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PasswordMetaPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  resetToken: String;
}

export interface PasswordMetaPreviousValuesPromise
  extends Promise<PasswordMetaPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  resetToken: () => Promise<String>;
}

export interface PasswordMetaPreviousValuesSubscription
  extends Promise<AsyncIterator<PasswordMetaPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  resetToken: () => Promise<AsyncIterator<String>>;
}

export interface PasswordMeta extends Node {
  id: ID_Output;
  createdAt: DateTimeOutput;
  resetToken: String;
}

export interface PasswordMetaPromise
  extends Promise<PasswordMeta>,
    Fragmentable,
    Node {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  resetToken: () => Promise<String>;
}

export interface PasswordMetaSubscription
  extends Promise<AsyncIterator<PasswordMeta>>,
    Fragmentable,
    Node {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  resetToken: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
 * A connection to a list of items.

 */
export interface PasswordMetaConnection {
  pageInfo: PageInfo;
  edges: PasswordMetaEdge[];
}

/*
 * A connection to a list of items.

 */
export interface PasswordMetaConnectionPromise
  extends Promise<PasswordMetaConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PasswordMetaEdge>>() => T;
  aggregate: <T = AggregatePasswordMetaPromise>() => T;
}

/*
 * A connection to a list of items.

 */
export interface PasswordMetaConnectionSubscription
  extends Promise<AsyncIterator<PasswordMetaConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PasswordMetaEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePasswordMetaSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  firstName?: String;
  lastName?: String;
  phone?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  phone: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
}

export interface User extends Node {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  firstName?: String;
  lastName?: String;
  phone?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable, Node {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  phone: () => Promise<String>;
  passwordMeta: <T = PasswordMetaPromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable,
    Node {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  passwordMeta: <T = PasswordMetaSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
 * An edge in a connection.

 */
export interface PasswordMetaEdge {
  node: PasswordMeta;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface PasswordMetaEdgePromise
  extends Promise<PasswordMetaEdge>,
    Fragmentable {
  node: <T = PasswordMetaPromise>() => T;
  cursor: () => Promise<String>;
}

/*
 * An edge in a connection.

 */
export interface PasswordMetaEdgeSubscription
  extends Promise<AsyncIterator<PasswordMetaEdge>>,
    Fragmentable {
  node: <T = PasswordMetaSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

/*
 * An edge in a connection.

 */
export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

/*
 * A connection to a list of items.

 */
export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

/*
 * A connection to a list of items.

 */
export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PasswordMetaSubscriptionPayload {
  mutation: MutationType;
  node: PasswordMeta;
  updatedFields: String[];
  previousValues: PasswordMetaPreviousValues;
}

export interface PasswordMetaSubscriptionPayloadPromise
  extends Promise<PasswordMetaSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PasswordMetaPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PasswordMetaPreviousValuesPromise>() => T;
}

export interface PasswordMetaSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PasswordMetaSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PasswordMetaSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PasswordMetaPreviousValuesSubscription>() => T;
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "PasswordMeta",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
