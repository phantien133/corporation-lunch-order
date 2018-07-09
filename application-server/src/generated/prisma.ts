import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dishes: <T = Dish[]>(args: { where?: DishWhereInput, orderBy?: DishOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menuDishes: <T = MenuDish[]>(args: { where?: MenuDishWhereInput, orderBy?: MenuDishOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menus: <T = Menu[]>(args: { where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dailyMenus: <T = DailyMenu[]>(args: { where?: DailyMenuWhereInput, orderBy?: DailyMenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Order[]>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dish: <T = Dish | null>(args: { where: DishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menuDish: <T = MenuDish | null>(args: { where: MenuDishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dailyMenu: <T = DailyMenu | null>(args: { where: DailyMenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dishesConnection: <T = DishConnection>(args: { where?: DishWhereInput, orderBy?: DishOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menuDishesConnection: <T = MenuDishConnection>(args: { where?: MenuDishWhereInput, orderBy?: MenuDishOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menusConnection: <T = MenuConnection>(args: { where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dailyMenusConnection: <T = DailyMenuConnection>(args: { where?: DailyMenuWhereInput, orderBy?: DailyMenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDish: <T = Dish>(args: { data: DishCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMenuDish: <T = MenuDish>(args: { data: MenuDishCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMenu: <T = Menu>(args: { data: MenuCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDailyMenu: <T = DailyMenu>(args: { data: DailyMenuCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDish: <T = Dish | null>(args: { data: DishUpdateInput, where: DishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMenuDish: <T = MenuDish | null>(args: { data: MenuDishUpdateInput, where: MenuDishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMenu: <T = Menu | null>(args: { data: MenuUpdateInput, where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDailyMenu: <T = DailyMenu | null>(args: { data: DailyMenuUpdateInput, where: DailyMenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDish: <T = Dish | null>(args: { where: DishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMenuDish: <T = MenuDish | null>(args: { where: MenuDishWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMenu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDailyMenu: <T = DailyMenu | null>(args: { where: DailyMenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDish: <T = Dish>(args: { where: DishWhereUniqueInput, create: DishCreateInput, update: DishUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMenuDish: <T = MenuDish>(args: { where: MenuDishWhereUniqueInput, create: MenuDishCreateInput, update: MenuDishUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMenu: <T = Menu>(args: { where: MenuWhereUniqueInput, create: MenuCreateInput, update: MenuUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDailyMenu: <T = DailyMenu>(args: { where: DailyMenuWhereUniqueInput, create: DailyMenuCreateInput, update: DailyMenuUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDishes: <T = BatchPayload>(args: { data: DishUpdateInput, where?: DishWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMenuDishes: <T = BatchPayload>(args: { data: MenuDishUpdateInput, where?: MenuDishWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMenus: <T = BatchPayload>(args: { data: MenuUpdateInput, where?: MenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDailyMenus: <T = BatchPayload>(args: { data: DailyMenuUpdateInput, where?: DailyMenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDishes: <T = BatchPayload>(args: { where?: DishWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMenuDishes: <T = BatchPayload>(args: { where?: MenuDishWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMenus: <T = BatchPayload>(args: { where?: MenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDailyMenus: <T = BatchPayload>(args: { where?: DailyMenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    dish: <T = DishSubscriptionPayload | null>(args: { where?: DishSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    menuDish: <T = MenuDishSubscriptionPayload | null>(args: { where?: MenuDishSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    menu: <T = MenuSubscriptionPayload | null>(args: { where?: MenuSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    dailyMenu: <T = DailyMenuSubscriptionPayload | null>(args: { where?: DailyMenuSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Dish: (where?: DishWhereInput) => Promise<boolean>
  MenuDish: (where?: MenuDishWhereInput) => Promise<boolean>
  Menu: (where?: MenuWhereInput) => Promise<boolean>
  DailyMenu: (where?: DailyMenuWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateDailyMenu {
  count: Int!
}

type AggregateDish {
  count: Int!
}

type AggregateMenu {
  count: Int!
}

type AggregateMenuDish {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type DailyMenu implements Node {
  id: ID!
  menu(where: MenuWhereInput): Menu!
  date: DateTime!
  price: Float!
  owner(where: UserWhereInput): User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type DailyMenuConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DailyMenuEdge]!
  aggregate: AggregateDailyMenu!
}

input DailyMenuCreateInput {
  date: DateTime!
  price: Float
  menu: MenuCreateOneInput!
  owner: UserCreateOneInput!
}

input DailyMenuCreateOneInput {
  create: DailyMenuCreateInput
  connect: DailyMenuWhereUniqueInput
}

"""An edge in a connection."""
type DailyMenuEdge {
  """The item at the end of the edge."""
  node: DailyMenu!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DailyMenuOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DailyMenuPreviousValues {
  id: ID!
  date: DateTime!
  price: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type DailyMenuSubscriptionPayload {
  mutation: MutationType!
  node: DailyMenu
  updatedFields: [String!]
  previousValues: DailyMenuPreviousValues
}

input DailyMenuSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DailyMenuSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DailyMenuSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DailyMenuSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DailyMenuWhereInput
}

input DailyMenuUpdateDataInput {
  date: DateTime
  price: Float
  menu: MenuUpdateOneInput
  owner: UserUpdateOneInput
}

input DailyMenuUpdateInput {
  date: DateTime
  price: Float
  menu: MenuUpdateOneInput
  owner: UserUpdateOneInput
}

input DailyMenuUpdateOneInput {
  create: DailyMenuCreateInput
  connect: DailyMenuWhereUniqueInput
  delete: Boolean
  update: DailyMenuUpdateDataInput
  upsert: DailyMenuUpsertNestedInput
}

input DailyMenuUpsertNestedInput {
  update: DailyMenuUpdateDataInput!
  create: DailyMenuCreateInput!
}

input DailyMenuWhereInput {
  """Logical AND on all given filters."""
  AND: [DailyMenuWhereInput!]

  """Logical OR on all given filters."""
  OR: [DailyMenuWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DailyMenuWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  menu: MenuWhereInput
  owner: UserWhereInput
}

input DailyMenuWhereUniqueInput {
  id: ID
}

scalar DateTime

type Dish implements Node {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  menuDishes(where: MenuDishWhereInput, orderBy: MenuDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuDish!]
  type: String!
}

"""A connection to a list of items."""
type DishConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DishEdge]!
  aggregate: AggregateDish!
}

input DishCreateInput {
  name: String!
  type: String!
  menuDishes: MenuDishCreateManyWithoutDishInput
}

input DishCreateOneWithoutMenuDishesInput {
  create: DishCreateWithoutMenuDishesInput
  connect: DishWhereUniqueInput
}

input DishCreateWithoutMenuDishesInput {
  name: String!
  type: String!
}

"""An edge in a connection."""
type DishEdge {
  """The item at the end of the edge."""
  node: Dish!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DishOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
}

type DishPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: String!
}

type DishSubscriptionPayload {
  mutation: MutationType!
  node: Dish
  updatedFields: [String!]
  previousValues: DishPreviousValues
}

input DishSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DishSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DishSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DishSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DishWhereInput
}

input DishUpdateInput {
  name: String
  type: String
  menuDishes: MenuDishUpdateManyWithoutDishInput
}

input DishUpdateOneWithoutMenuDishesInput {
  create: DishCreateWithoutMenuDishesInput
  connect: DishWhereUniqueInput
  delete: Boolean
  update: DishUpdateWithoutMenuDishesDataInput
  upsert: DishUpsertWithoutMenuDishesInput
}

input DishUpdateWithoutMenuDishesDataInput {
  name: String
  type: String
}

input DishUpsertWithoutMenuDishesInput {
  update: DishUpdateWithoutMenuDishesDataInput!
  create: DishCreateWithoutMenuDishesInput!
}

input DishWhereInput {
  """Logical AND on all given filters."""
  AND: [DishWhereInput!]

  """Logical OR on all given filters."""
  OR: [DishWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DishWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  menuDishes_every: MenuDishWhereInput
  menuDishes_some: MenuDishWhereInput
  menuDishes_none: MenuDishWhereInput
}

input DishWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Menu implements Node {
  id: ID!
  name: String
  menuDishes(where: MenuDishWhereInput, orderBy: MenuDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuDish!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MenuConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  name: String
  menuDishes: MenuDishCreateManyWithoutMenuInput
}

input MenuCreateOneInput {
  create: MenuCreateInput
  connect: MenuWhereUniqueInput
}

input MenuCreateOneWithoutMenuDishesInput {
  create: MenuCreateWithoutMenuDishesInput
  connect: MenuWhereUniqueInput
}

input MenuCreateWithoutMenuDishesInput {
  name: String
}

type MenuDish implements Node {
  id: ID!
  dish(where: DishWhereInput): Dish!
  menu(where: MenuWhereInput): Menu!
  group: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MenuDishConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MenuDishEdge]!
  aggregate: AggregateMenuDish!
}

input MenuDishCreateInput {
  group: String
  dish: DishCreateOneWithoutMenuDishesInput!
  menu: MenuCreateOneWithoutMenuDishesInput!
}

input MenuDishCreateManyWithoutDishInput {
  create: [MenuDishCreateWithoutDishInput!]
  connect: [MenuDishWhereUniqueInput!]
}

input MenuDishCreateManyWithoutMenuInput {
  create: [MenuDishCreateWithoutMenuInput!]
  connect: [MenuDishWhereUniqueInput!]
}

input MenuDishCreateWithoutDishInput {
  group: String
  menu: MenuCreateOneWithoutMenuDishesInput!
}

input MenuDishCreateWithoutMenuInput {
  group: String
  dish: DishCreateOneWithoutMenuDishesInput!
}

"""An edge in a connection."""
type MenuDishEdge {
  """The item at the end of the edge."""
  node: MenuDish!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MenuDishOrderByInput {
  id_ASC
  id_DESC
  group_ASC
  group_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuDishPreviousValues {
  id: ID!
  group: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MenuDishSubscriptionPayload {
  mutation: MutationType!
  node: MenuDish
  updatedFields: [String!]
  previousValues: MenuDishPreviousValues
}

input MenuDishSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuDishSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuDishSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuDishSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MenuDishWhereInput
}

input MenuDishUpdateInput {
  group: String
  dish: DishUpdateOneWithoutMenuDishesInput
  menu: MenuUpdateOneWithoutMenuDishesInput
}

input MenuDishUpdateManyWithoutDishInput {
  create: [MenuDishCreateWithoutDishInput!]
  connect: [MenuDishWhereUniqueInput!]
  disconnect: [MenuDishWhereUniqueInput!]
  delete: [MenuDishWhereUniqueInput!]
  update: [MenuDishUpdateWithWhereUniqueWithoutDishInput!]
  upsert: [MenuDishUpsertWithWhereUniqueWithoutDishInput!]
}

input MenuDishUpdateManyWithoutMenuInput {
  create: [MenuDishCreateWithoutMenuInput!]
  connect: [MenuDishWhereUniqueInput!]
  disconnect: [MenuDishWhereUniqueInput!]
  delete: [MenuDishWhereUniqueInput!]
  update: [MenuDishUpdateWithWhereUniqueWithoutMenuInput!]
  upsert: [MenuDishUpsertWithWhereUniqueWithoutMenuInput!]
}

input MenuDishUpdateWithoutDishDataInput {
  group: String
  menu: MenuUpdateOneWithoutMenuDishesInput
}

input MenuDishUpdateWithoutMenuDataInput {
  group: String
  dish: DishUpdateOneWithoutMenuDishesInput
}

input MenuDishUpdateWithWhereUniqueWithoutDishInput {
  where: MenuDishWhereUniqueInput!
  data: MenuDishUpdateWithoutDishDataInput!
}

input MenuDishUpdateWithWhereUniqueWithoutMenuInput {
  where: MenuDishWhereUniqueInput!
  data: MenuDishUpdateWithoutMenuDataInput!
}

input MenuDishUpsertWithWhereUniqueWithoutDishInput {
  where: MenuDishWhereUniqueInput!
  update: MenuDishUpdateWithoutDishDataInput!
  create: MenuDishCreateWithoutDishInput!
}

input MenuDishUpsertWithWhereUniqueWithoutMenuInput {
  where: MenuDishWhereUniqueInput!
  update: MenuDishUpdateWithoutMenuDataInput!
  create: MenuDishCreateWithoutMenuInput!
}

input MenuDishWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuDishWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuDishWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuDishWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  group: String

  """All values that are not equal to given value."""
  group_not: String

  """All values that are contained in given list."""
  group_in: [String!]

  """All values that are not contained in given list."""
  group_not_in: [String!]

  """All values less than the given value."""
  group_lt: String

  """All values less than or equal the given value."""
  group_lte: String

  """All values greater than the given value."""
  group_gt: String

  """All values greater than or equal the given value."""
  group_gte: String

  """All values containing the given string."""
  group_contains: String

  """All values not containing the given string."""
  group_not_contains: String

  """All values starting with the given string."""
  group_starts_with: String

  """All values not starting with the given string."""
  group_not_starts_with: String

  """All values ending with the given string."""
  group_ends_with: String

  """All values not ending with the given string."""
  group_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  dish: DishWhereInput
  menu: MenuWhereInput
}

input MenuDishWhereUniqueInput {
  id: ID
}

"""An edge in a connection."""
type MenuEdge {
  """The item at the end of the edge."""
  node: Menu!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MenuOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuPreviousValues {
  id: ID!
  name: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MenuWhereInput
}

input MenuUpdateDataInput {
  name: String
  menuDishes: MenuDishUpdateManyWithoutMenuInput
}

input MenuUpdateInput {
  name: String
  menuDishes: MenuDishUpdateManyWithoutMenuInput
}

input MenuUpdateOneInput {
  create: MenuCreateInput
  connect: MenuWhereUniqueInput
  delete: Boolean
  update: MenuUpdateDataInput
  upsert: MenuUpsertNestedInput
}

input MenuUpdateOneWithoutMenuDishesInput {
  create: MenuCreateWithoutMenuDishesInput
  connect: MenuWhereUniqueInput
  delete: Boolean
  update: MenuUpdateWithoutMenuDishesDataInput
  upsert: MenuUpsertWithoutMenuDishesInput
}

input MenuUpdateWithoutMenuDishesDataInput {
  name: String
}

input MenuUpsertNestedInput {
  update: MenuUpdateDataInput!
  create: MenuCreateInput!
}

input MenuUpsertWithoutMenuDishesInput {
  update: MenuUpdateWithoutMenuDishesDataInput!
  create: MenuCreateWithoutMenuDishesInput!
}

input MenuWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  menuDishes_every: MenuDishWhereInput
  menuDishes_some: MenuDishWhereInput
  menuDishes_none: MenuDishWhereInput
}

input MenuWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createDish(data: DishCreateInput!): Dish!
  createMenuDish(data: MenuDishCreateInput!): MenuDish!
  createMenu(data: MenuCreateInput!): Menu!
  createDailyMenu(data: DailyMenuCreateInput!): DailyMenu!
  createOrder(data: OrderCreateInput!): Order!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateDish(data: DishUpdateInput!, where: DishWhereUniqueInput!): Dish
  updateMenuDish(data: MenuDishUpdateInput!, where: MenuDishWhereUniqueInput!): MenuDish
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  updateDailyMenu(data: DailyMenuUpdateInput!, where: DailyMenuWhereUniqueInput!): DailyMenu
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  deleteUser(where: UserWhereUniqueInput!): User
  deleteDish(where: DishWhereUniqueInput!): Dish
  deleteMenuDish(where: MenuDishWhereUniqueInput!): MenuDish
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteDailyMenu(where: DailyMenuWhereUniqueInput!): DailyMenu
  deleteOrder(where: OrderWhereUniqueInput!): Order
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertDish(where: DishWhereUniqueInput!, create: DishCreateInput!, update: DishUpdateInput!): Dish!
  upsertMenuDish(where: MenuDishWhereUniqueInput!, create: MenuDishCreateInput!, update: MenuDishUpdateInput!): MenuDish!
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  upsertDailyMenu(where: DailyMenuWhereUniqueInput!, create: DailyMenuCreateInput!, update: DailyMenuUpdateInput!): DailyMenu!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyDishes(data: DishUpdateInput!, where: DishWhereInput): BatchPayload!
  updateManyMenuDishes(data: MenuDishUpdateInput!, where: MenuDishWhereInput): BatchPayload!
  updateManyMenus(data: MenuUpdateInput!, where: MenuWhereInput): BatchPayload!
  updateManyDailyMenus(data: DailyMenuUpdateInput!, where: DailyMenuWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyDishes(where: DishWhereInput): BatchPayload!
  deleteManyMenuDishes(where: MenuDishWhereInput): BatchPayload!
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  deleteManyDailyMenus(where: DailyMenuWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Order implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  dailyMenu(where: DailyMenuWhereInput): DailyMenu!
  isPaid: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  isPaid: DateTime
  user: UserCreateOneInput!
  dailyMenu: DailyMenuCreateOneInput!
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  isPaid_ASC
  isPaid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  isPaid: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  isPaid: DateTime
  user: UserUpdateOneInput
  dailyMenu: DailyMenuUpdateOneInput
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPaid: DateTime

  """All values that are not equal to given value."""
  isPaid_not: DateTime

  """All values that are contained in given list."""
  isPaid_in: [DateTime!]

  """All values that are not contained in given list."""
  isPaid_not_in: [DateTime!]

  """All values less than the given value."""
  isPaid_lt: DateTime

  """All values less than or equal the given value."""
  isPaid_lte: DateTime

  """All values greater than the given value."""
  isPaid_gt: DateTime

  """All values greater than or equal the given value."""
  isPaid_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  dailyMenu: DailyMenuWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  dishes(where: DishWhereInput, orderBy: DishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dish]!
  menuDishes(where: MenuDishWhereInput, orderBy: MenuDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuDish]!
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  dailyMenus(where: DailyMenuWhereInput, orderBy: DailyMenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DailyMenu]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  user(where: UserWhereUniqueInput!): User
  dish(where: DishWhereUniqueInput!): Dish
  menuDish(where: MenuDishWhereUniqueInput!): MenuDish
  menu(where: MenuWhereUniqueInput!): Menu
  dailyMenu(where: DailyMenuWhereUniqueInput!): DailyMenu
  order(where: OrderWhereUniqueInput!): Order
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  dishesConnection(where: DishWhereInput, orderBy: DishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DishConnection!
  menuDishesConnection(where: MenuDishWhereInput, orderBy: MenuDishOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuDishConnection!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  dailyMenusConnection(where: DailyMenuWhereInput, orderBy: DailyMenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DailyMenuConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  dish(where: DishSubscriptionWhereInput): DishSubscriptionPayload
  menuDish(where: MenuDishSubscriptionWhereInput): MenuDishSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  dailyMenu(where: DailyMenuSubscriptionWhereInput): DailyMenuSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  name: String
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  name: String
  password: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  name: String
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  username: String
  name: String
  password: String
}

input UserUpdateInput {
  username: String
  name: String
  password: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type DishOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type MenuDishOrderByInput =   'id_ASC' |
  'id_DESC' |
  'group_ASC' |
  'group_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MenuOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type DailyMenuOrderByInput =   'id_ASC' |
  'id_DESC' |
  'date_ASC' |
  'date_DESC' |
  'price_ASC' |
  'price_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPaid_ASC' |
  'isPaid_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface DishCreateWithoutMenuDishesInput {
  name: String
  type: String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface MenuCreateOneInput {
  create?: MenuCreateInput
  connect?: MenuWhereUniqueInput
}

export interface MenuDishWhereInput {
  AND?: MenuDishWhereInput[] | MenuDishWhereInput
  OR?: MenuDishWhereInput[] | MenuDishWhereInput
  NOT?: MenuDishWhereInput[] | MenuDishWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  group?: String
  group_not?: String
  group_in?: String[] | String
  group_not_in?: String[] | String
  group_lt?: String
  group_lte?: String
  group_gt?: String
  group_gte?: String
  group_contains?: String
  group_not_contains?: String
  group_starts_with?: String
  group_not_starts_with?: String
  group_ends_with?: String
  group_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  dish?: DishWhereInput
  menu?: MenuWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface DishWhereInput {
  AND?: DishWhereInput[] | DishWhereInput
  OR?: DishWhereInput[] | DishWhereInput
  NOT?: DishWhereInput[] | DishWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  menuDishes_every?: MenuDishWhereInput
  menuDishes_some?: MenuDishWhereInput
  menuDishes_none?: MenuDishWhereInput
}

export interface MenuDishUpdateManyWithoutMenuInput {
  create?: MenuDishCreateWithoutMenuInput[] | MenuDishCreateWithoutMenuInput
  connect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  disconnect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  delete?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  update?: MenuDishUpdateWithWhereUniqueWithoutMenuInput[] | MenuDishUpdateWithWhereUniqueWithoutMenuInput
  upsert?: MenuDishUpsertWithWhereUniqueWithoutMenuInput[] | MenuDishUpsertWithWhereUniqueWithoutMenuInput
}

export interface MenuDishUpdateWithoutDishDataInput {
  group?: String
  menu?: MenuUpdateOneWithoutMenuDishesInput
}

export interface MenuUpdateInput {
  name?: String
  menuDishes?: MenuDishUpdateManyWithoutMenuInput
}

export interface OrderCreateInput {
  isPaid?: DateTime
  user: UserCreateOneInput
  dailyMenu: DailyMenuCreateOneInput
}

export interface DishUpsertWithoutMenuDishesInput {
  update: DishUpdateWithoutMenuDishesDataInput
  create: DishCreateWithoutMenuDishesInput
}

export interface DailyMenuSubscriptionWhereInput {
  AND?: DailyMenuSubscriptionWhereInput[] | DailyMenuSubscriptionWhereInput
  OR?: DailyMenuSubscriptionWhereInput[] | DailyMenuSubscriptionWhereInput
  NOT?: DailyMenuSubscriptionWhereInput[] | DailyMenuSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DailyMenuWhereInput
}

export interface DishUpdateWithoutMenuDishesDataInput {
  name?: String
  type?: String
}

export interface MenuSubscriptionWhereInput {
  AND?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  OR?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  NOT?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MenuWhereInput
}

export interface DishUpdateOneWithoutMenuDishesInput {
  create?: DishCreateWithoutMenuDishesInput
  connect?: DishWhereUniqueInput
  delete?: Boolean
  update?: DishUpdateWithoutMenuDishesDataInput
  upsert?: DishUpsertWithoutMenuDishesInput
}

export interface DishSubscriptionWhereInput {
  AND?: DishSubscriptionWhereInput[] | DishSubscriptionWhereInput
  OR?: DishSubscriptionWhereInput[] | DishSubscriptionWhereInput
  NOT?: DishSubscriptionWhereInput[] | DishSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DishWhereInput
}

export interface MenuDishUpdateInput {
  group?: String
  dish?: DishUpdateOneWithoutMenuDishesInput
  menu?: MenuUpdateOneWithoutMenuDishesInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface MenuDishUpsertWithWhereUniqueWithoutDishInput {
  where: MenuDishWhereUniqueInput
  update: MenuDishUpdateWithoutDishDataInput
  create: MenuDishCreateWithoutDishInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface UserCreateInput {
  username: String
  name?: String
  password: String
}

export interface MenuDishWhereUniqueInput {
  id?: ID_Input
}

export interface DishCreateInput {
  name: String
  type: String
  menuDishes?: MenuDishCreateManyWithoutDishInput
}

export interface DailyMenuWhereUniqueInput {
  id?: ID_Input
}

export interface MenuDishCreateManyWithoutDishInput {
  create?: MenuDishCreateWithoutDishInput[] | MenuDishCreateWithoutDishInput
  connect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
}

export interface DailyMenuUpdateDataInput {
  date?: DateTime
  price?: Float
  menu?: MenuUpdateOneInput
  owner?: UserUpdateOneInput
}

export interface MenuDishCreateWithoutDishInput {
  group?: String
  menu: MenuCreateOneWithoutMenuDishesInput
}

export interface OrderUpdateInput {
  isPaid?: DateTime
  user?: UserUpdateOneInput
  dailyMenu?: DailyMenuUpdateOneInput
}

export interface MenuCreateOneWithoutMenuDishesInput {
  create?: MenuCreateWithoutMenuDishesInput
  connect?: MenuWhereUniqueInput
}

export interface UserUpdateDataInput {
  username?: String
  name?: String
  password?: String
}

export interface MenuCreateWithoutMenuDishesInput {
  name?: String
}

export interface MenuUpsertNestedInput {
  update: MenuUpdateDataInput
  create: MenuCreateInput
}

export interface MenuDishCreateInput {
  group?: String
  dish: DishCreateOneWithoutMenuDishesInput
  menu: MenuCreateOneWithoutMenuDishesInput
}

export interface MenuUpdateOneInput {
  create?: MenuCreateInput
  connect?: MenuWhereUniqueInput
  delete?: Boolean
  update?: MenuUpdateDataInput
  upsert?: MenuUpsertNestedInput
}

export interface DishCreateOneWithoutMenuDishesInput {
  create?: DishCreateWithoutMenuDishesInput
  connect?: DishWhereUniqueInput
}

export interface MenuDishUpsertWithWhereUniqueWithoutMenuInput {
  where: MenuDishWhereUniqueInput
  update: MenuDishUpdateWithoutMenuDataInput
  create: MenuDishCreateWithoutMenuInput
}

export interface MenuUpsertWithoutMenuDishesInput {
  update: MenuUpdateWithoutMenuDishesDataInput
  create: MenuCreateWithoutMenuDishesInput
}

export interface MenuDishUpdateWithWhereUniqueWithoutMenuInput {
  where: MenuDishWhereUniqueInput
  data: MenuDishUpdateWithoutMenuDataInput
}

export interface MenuCreateInput {
  name?: String
  menuDishes?: MenuDishCreateManyWithoutMenuInput
}

export interface DailyMenuWhereInput {
  AND?: DailyMenuWhereInput[] | DailyMenuWhereInput
  OR?: DailyMenuWhereInput[] | DailyMenuWhereInput
  NOT?: DailyMenuWhereInput[] | DailyMenuWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  menu?: MenuWhereInput
  owner?: UserWhereInput
}

export interface MenuDishCreateManyWithoutMenuInput {
  create?: MenuDishCreateWithoutMenuInput[] | MenuDishCreateWithoutMenuInput
  connect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput
  OR?: OrderWhereInput[] | OrderWhereInput
  NOT?: OrderWhereInput[] | OrderWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPaid?: DateTime
  isPaid_not?: DateTime
  isPaid_in?: DateTime[] | DateTime
  isPaid_not_in?: DateTime[] | DateTime
  isPaid_lt?: DateTime
  isPaid_lte?: DateTime
  isPaid_gt?: DateTime
  isPaid_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  user?: UserWhereInput
  dailyMenu?: DailyMenuWhereInput
}

export interface MenuDishCreateWithoutMenuInput {
  group?: String
  dish: DishCreateOneWithoutMenuDishesInput
}

export interface DishWhereUniqueInput {
  id?: ID_Input
}

export interface DailyMenuCreateInput {
  date: DateTime
  price?: Float
  menu: MenuCreateOneInput
  owner: UserCreateOneInput
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
}

export interface MenuWhereInput {
  AND?: MenuWhereInput[] | MenuWhereInput
  OR?: MenuWhereInput[] | MenuWhereInput
  NOT?: MenuWhereInput[] | MenuWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  menuDishes_every?: MenuDishWhereInput
  menuDishes_some?: MenuDishWhereInput
  menuDishes_none?: MenuDishWhereInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface MenuUpdateWithoutMenuDishesDataInput {
  name?: String
}

export interface MenuUpdateDataInput {
  name?: String
  menuDishes?: MenuDishUpdateManyWithoutMenuInput
}

export interface MenuUpdateOneWithoutMenuDishesInput {
  create?: MenuCreateWithoutMenuDishesInput
  connect?: MenuWhereUniqueInput
  delete?: Boolean
  update?: MenuUpdateWithoutMenuDishesDataInput
  upsert?: MenuUpsertWithoutMenuDishesInput
}

export interface MenuDishUpdateWithoutMenuDataInput {
  group?: String
  dish?: DishUpdateOneWithoutMenuDishesInput
}

export interface DailyMenuCreateOneInput {
  create?: DailyMenuCreateInput
  connect?: DailyMenuWhereUniqueInput
}

export interface MenuDishSubscriptionWhereInput {
  AND?: MenuDishSubscriptionWhereInput[] | MenuDishSubscriptionWhereInput
  OR?: MenuDishSubscriptionWhereInput[] | MenuDishSubscriptionWhereInput
  NOT?: MenuDishSubscriptionWhereInput[] | MenuDishSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MenuDishWhereInput
}

export interface MenuWhereUniqueInput {
  id?: ID_Input
}

export interface MenuDishUpdateWithWhereUniqueWithoutDishInput {
  where: MenuDishWhereUniqueInput
  data: MenuDishUpdateWithoutDishDataInput
}

export interface MenuDishUpdateManyWithoutDishInput {
  create?: MenuDishCreateWithoutDishInput[] | MenuDishCreateWithoutDishInput
  connect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  disconnect?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  delete?: MenuDishWhereUniqueInput[] | MenuDishWhereUniqueInput
  update?: MenuDishUpdateWithWhereUniqueWithoutDishInput[] | MenuDishUpdateWithWhereUniqueWithoutDishInput
  upsert?: MenuDishUpsertWithWhereUniqueWithoutDishInput[] | MenuDishUpsertWithWhereUniqueWithoutDishInput
}

export interface DishUpdateInput {
  name?: String
  type?: String
  menuDishes?: MenuDishUpdateManyWithoutDishInput
}

export interface UserUpdateInput {
  username?: String
  name?: String
  password?: String
}

export interface DailyMenuUpdateOneInput {
  create?: DailyMenuCreateInput
  connect?: DailyMenuWhereUniqueInput
  delete?: Boolean
  update?: DailyMenuUpdateDataInput
  upsert?: DailyMenuUpsertNestedInput
}

export interface DailyMenuUpsertNestedInput {
  update: DailyMenuUpdateDataInput
  create: DailyMenuCreateInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderWhereInput
}

export interface DailyMenuUpdateInput {
  date?: DateTime
  price?: Float
  menu?: MenuUpdateOneInput
  owner?: UserUpdateOneInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface OrderPreviousValues {
  id: ID_Output
  isPaid?: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Order extends Node {
  id: ID_Output
  user: User
  dailyMenu: DailyMenu
  isPaid?: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MenuDish extends Node {
  id: ID_Output
  dish: Dish
  menu: Menu
  group?: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface AggregateOrder {
  count: Int
}

export interface MenuPreviousValues {
  id: ID_Output
  name?: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
  aggregate: AggregateOrder
}

export interface AggregateDailyMenu {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface DailyMenuEdge {
  node: DailyMenu
  cursor: String
}

export interface AggregateMenu {
  count: Int
}

export interface Menu extends Node {
  id: ID_Output
  name?: String
  menuDishes?: MenuDish[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MenuConnection {
  pageInfo: PageInfo
  edges: MenuEdge[]
  aggregate: AggregateMenu
}

export interface DailyMenuPreviousValues {
  id: ID_Output
  date: DateTime
  price: Float
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface MenuDishEdge {
  node: MenuDish
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateDish {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  name?: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface DishConnection {
  pageInfo: PageInfo
  edges: DishEdge[]
  aggregate: AggregateDish
}

export interface DailyMenu extends Node {
  id: ID_Output
  menu: Menu
  date: DateTime
  price: Float
  owner: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface DishSubscriptionPayload {
  mutation: MutationType
  node?: Dish
  updatedFields?: String[]
  previousValues?: DishPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface DishPreviousValues {
  id: ID_Output
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  type: String
}

/*
 * A connection to a list of items.

 */
export interface DailyMenuConnection {
  pageInfo: PageInfo
  edges: DailyMenuEdge[]
  aggregate: AggregateDailyMenu
}

export interface DailyMenuSubscriptionPayload {
  mutation: MutationType
  node?: DailyMenu
  updatedFields?: String[]
  previousValues?: DailyMenuPreviousValues
}

export interface AggregateMenuDish {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface DishEdge {
  node: Dish
  cursor: String
}

export interface MenuSubscriptionPayload {
  mutation: MutationType
  node?: Menu
  updatedFields?: String[]
  previousValues?: MenuPreviousValues
}

export interface User extends Node {
  id: ID_Output
  username: String
  name?: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MenuDishPreviousValues {
  id: ID_Output
  group?: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MenuDishSubscriptionPayload {
  mutation: MutationType
  node?: MenuDish
  updatedFields?: String[]
  previousValues?: MenuDishPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface MenuDishConnection {
  pageInfo: PageInfo
  edges: MenuDishEdge[]
  aggregate: AggregateMenuDish
}

/*
 * An edge in a connection.

 */
export interface MenuEdge {
  node: Menu
  cursor: String
}

export interface Dish extends Node {
  id: ID_Output
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  menuDishes?: MenuDish[]
  type: String
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order
  updatedFields?: String[]
  previousValues?: OrderPreviousValues
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number