
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pasien
 * 
 */
export type Pasien = $Result.DefaultSelection<Prisma.$PasienPayload>
/**
 * Model NamaPasien
 * 
 */
export type NamaPasien = $Result.DefaultSelection<Prisma.$NamaPasienPayload>
/**
 * Model KontakPasien
 * 
 */
export type KontakPasien = $Result.DefaultSelection<Prisma.$KontakPasienPayload>
/**
 * Model JenisKontak
 * 
 */
export type JenisKontak = $Result.DefaultSelection<Prisma.$JenisKontakPayload>
/**
 * Model AlamatPasien
 * 
 */
export type AlamatPasien = $Result.DefaultSelection<Prisma.$AlamatPasienPayload>
/**
 * Model DokumenPasien
 * 
 */
export type DokumenPasien = $Result.DefaultSelection<Prisma.$DokumenPasienPayload>
/**
 * Model IdentifierPasien
 * 
 */
export type IdentifierPasien = $Result.DefaultSelection<Prisma.$IdentifierPasienPayload>
/**
 * Model JenisIdentifier
 * 
 */
export type JenisIdentifier = $Result.DefaultSelection<Prisma.$JenisIdentifierPayload>
/**
 * Model StatusPerkawinan
 * 
 */
export type StatusPerkawinan = $Result.DefaultSelection<Prisma.$StatusPerkawinanPayload>
/**
 * Model StatusPembiayaan
 * 
 */
export type StatusPembiayaan = $Result.DefaultSelection<Prisma.$StatusPembiayaanPayload>
/**
 * Model Pendidikan
 * 
 */
export type Pendidikan = $Result.DefaultSelection<Prisma.$PendidikanPayload>
/**
 * Model Agama
 * 
 */
export type Agama = $Result.DefaultSelection<Prisma.$AgamaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  pasien: 'pasien',
  dokter: 'dokter',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  Pria: 'Pria',
  Wanita: 'Wanita'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Use: {
  Official: 'Official',
  Informal: 'Informal'
};

export type Use = (typeof Use)[keyof typeof Use]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Use = $Enums.Use

export const Use: typeof $Enums.Use

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pasien`: Exposes CRUD operations for the **Pasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasiens
    * const pasiens = await prisma.pasien.findMany()
    * ```
    */
  get pasien(): Prisma.PasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.namaPasien`: Exposes CRUD operations for the **NamaPasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NamaPasiens
    * const namaPasiens = await prisma.namaPasien.findMany()
    * ```
    */
  get namaPasien(): Prisma.NamaPasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kontakPasien`: Exposes CRUD operations for the **KontakPasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KontakPasiens
    * const kontakPasiens = await prisma.kontakPasien.findMany()
    * ```
    */
  get kontakPasien(): Prisma.KontakPasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisKontak`: Exposes CRUD operations for the **JenisKontak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisKontaks
    * const jenisKontaks = await prisma.jenisKontak.findMany()
    * ```
    */
  get jenisKontak(): Prisma.JenisKontakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alamatPasien`: Exposes CRUD operations for the **AlamatPasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlamatPasiens
    * const alamatPasiens = await prisma.alamatPasien.findMany()
    * ```
    */
  get alamatPasien(): Prisma.AlamatPasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokumenPasien`: Exposes CRUD operations for the **DokumenPasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DokumenPasiens
    * const dokumenPasiens = await prisma.dokumenPasien.findMany()
    * ```
    */
  get dokumenPasien(): Prisma.DokumenPasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identifierPasien`: Exposes CRUD operations for the **IdentifierPasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentifierPasiens
    * const identifierPasiens = await prisma.identifierPasien.findMany()
    * ```
    */
  get identifierPasien(): Prisma.IdentifierPasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisIdentifier`: Exposes CRUD operations for the **JenisIdentifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisIdentifiers
    * const jenisIdentifiers = await prisma.jenisIdentifier.findMany()
    * ```
    */
  get jenisIdentifier(): Prisma.JenisIdentifierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusPerkawinan`: Exposes CRUD operations for the **StatusPerkawinan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusPerkawinans
    * const statusPerkawinans = await prisma.statusPerkawinan.findMany()
    * ```
    */
  get statusPerkawinan(): Prisma.StatusPerkawinanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusPembiayaan`: Exposes CRUD operations for the **StatusPembiayaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusPembiayaans
    * const statusPembiayaans = await prisma.statusPembiayaan.findMany()
    * ```
    */
  get statusPembiayaan(): Prisma.StatusPembiayaanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendidikan`: Exposes CRUD operations for the **Pendidikan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendidikans
    * const pendidikans = await prisma.pendidikan.findMany()
    * ```
    */
  get pendidikan(): Prisma.PendidikanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agama`: Exposes CRUD operations for the **Agama** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agamas
    * const agamas = await prisma.agama.findMany()
    * ```
    */
  get agama(): Prisma.AgamaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pasien: 'Pasien',
    NamaPasien: 'NamaPasien',
    KontakPasien: 'KontakPasien',
    JenisKontak: 'JenisKontak',
    AlamatPasien: 'AlamatPasien',
    DokumenPasien: 'DokumenPasien',
    IdentifierPasien: 'IdentifierPasien',
    JenisIdentifier: 'JenisIdentifier',
    StatusPerkawinan: 'StatusPerkawinan',
    StatusPembiayaan: 'StatusPembiayaan',
    Pendidikan: 'Pendidikan',
    Agama: 'Agama'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pasien" | "namaPasien" | "kontakPasien" | "jenisKontak" | "alamatPasien" | "dokumenPasien" | "identifierPasien" | "jenisIdentifier" | "statusPerkawinan" | "statusPembiayaan" | "pendidikan" | "agama"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pasien: {
        payload: Prisma.$PasienPayload<ExtArgs>
        fields: Prisma.PasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findFirst: {
            args: Prisma.PasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findMany: {
            args: Prisma.PasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          create: {
            args: Prisma.PasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          createMany: {
            args: Prisma.PasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          delete: {
            args: Prisma.PasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          update: {
            args: Prisma.PasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          deleteMany: {
            args: Prisma.PasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          upsert: {
            args: Prisma.PasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          aggregate: {
            args: Prisma.PasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasien>
          }
          groupBy: {
            args: Prisma.PasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasienCountArgs<ExtArgs>
            result: $Utils.Optional<PasienCountAggregateOutputType> | number
          }
        }
      }
      NamaPasien: {
        payload: Prisma.$NamaPasienPayload<ExtArgs>
        fields: Prisma.NamaPasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NamaPasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NamaPasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          findFirst: {
            args: Prisma.NamaPasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NamaPasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          findMany: {
            args: Prisma.NamaPasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>[]
          }
          create: {
            args: Prisma.NamaPasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          createMany: {
            args: Prisma.NamaPasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NamaPasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>[]
          }
          delete: {
            args: Prisma.NamaPasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          update: {
            args: Prisma.NamaPasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          deleteMany: {
            args: Prisma.NamaPasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NamaPasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NamaPasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>[]
          }
          upsert: {
            args: Prisma.NamaPasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamaPasienPayload>
          }
          aggregate: {
            args: Prisma.NamaPasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNamaPasien>
          }
          groupBy: {
            args: Prisma.NamaPasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<NamaPasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.NamaPasienCountArgs<ExtArgs>
            result: $Utils.Optional<NamaPasienCountAggregateOutputType> | number
          }
        }
      }
      KontakPasien: {
        payload: Prisma.$KontakPasienPayload<ExtArgs>
        fields: Prisma.KontakPasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KontakPasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KontakPasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          findFirst: {
            args: Prisma.KontakPasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KontakPasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          findMany: {
            args: Prisma.KontakPasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>[]
          }
          create: {
            args: Prisma.KontakPasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          createMany: {
            args: Prisma.KontakPasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KontakPasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>[]
          }
          delete: {
            args: Prisma.KontakPasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          update: {
            args: Prisma.KontakPasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          deleteMany: {
            args: Prisma.KontakPasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KontakPasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KontakPasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>[]
          }
          upsert: {
            args: Prisma.KontakPasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KontakPasienPayload>
          }
          aggregate: {
            args: Prisma.KontakPasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKontakPasien>
          }
          groupBy: {
            args: Prisma.KontakPasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<KontakPasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.KontakPasienCountArgs<ExtArgs>
            result: $Utils.Optional<KontakPasienCountAggregateOutputType> | number
          }
        }
      }
      JenisKontak: {
        payload: Prisma.$JenisKontakPayload<ExtArgs>
        fields: Prisma.JenisKontakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisKontakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisKontakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          findFirst: {
            args: Prisma.JenisKontakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisKontakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          findMany: {
            args: Prisma.JenisKontakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>[]
          }
          create: {
            args: Prisma.JenisKontakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          createMany: {
            args: Prisma.JenisKontakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisKontakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>[]
          }
          delete: {
            args: Prisma.JenisKontakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          update: {
            args: Prisma.JenisKontakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          deleteMany: {
            args: Prisma.JenisKontakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisKontakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JenisKontakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>[]
          }
          upsert: {
            args: Prisma.JenisKontakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisKontakPayload>
          }
          aggregate: {
            args: Prisma.JenisKontakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisKontak>
          }
          groupBy: {
            args: Prisma.JenisKontakGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisKontakGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisKontakCountArgs<ExtArgs>
            result: $Utils.Optional<JenisKontakCountAggregateOutputType> | number
          }
        }
      }
      AlamatPasien: {
        payload: Prisma.$AlamatPasienPayload<ExtArgs>
        fields: Prisma.AlamatPasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlamatPasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlamatPasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          findFirst: {
            args: Prisma.AlamatPasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlamatPasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          findMany: {
            args: Prisma.AlamatPasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>[]
          }
          create: {
            args: Prisma.AlamatPasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          createMany: {
            args: Prisma.AlamatPasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlamatPasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>[]
          }
          delete: {
            args: Prisma.AlamatPasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          update: {
            args: Prisma.AlamatPasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          deleteMany: {
            args: Prisma.AlamatPasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlamatPasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlamatPasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>[]
          }
          upsert: {
            args: Prisma.AlamatPasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlamatPasienPayload>
          }
          aggregate: {
            args: Prisma.AlamatPasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlamatPasien>
          }
          groupBy: {
            args: Prisma.AlamatPasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlamatPasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlamatPasienCountArgs<ExtArgs>
            result: $Utils.Optional<AlamatPasienCountAggregateOutputType> | number
          }
        }
      }
      DokumenPasien: {
        payload: Prisma.$DokumenPasienPayload<ExtArgs>
        fields: Prisma.DokumenPasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokumenPasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokumenPasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          findFirst: {
            args: Prisma.DokumenPasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokumenPasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          findMany: {
            args: Prisma.DokumenPasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>[]
          }
          create: {
            args: Prisma.DokumenPasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          createMany: {
            args: Prisma.DokumenPasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DokumenPasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>[]
          }
          delete: {
            args: Prisma.DokumenPasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          update: {
            args: Prisma.DokumenPasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          deleteMany: {
            args: Prisma.DokumenPasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokumenPasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DokumenPasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>[]
          }
          upsert: {
            args: Prisma.DokumenPasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPasienPayload>
          }
          aggregate: {
            args: Prisma.DokumenPasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokumenPasien>
          }
          groupBy: {
            args: Prisma.DokumenPasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumenPasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokumenPasienCountArgs<ExtArgs>
            result: $Utils.Optional<DokumenPasienCountAggregateOutputType> | number
          }
        }
      }
      IdentifierPasien: {
        payload: Prisma.$IdentifierPasienPayload<ExtArgs>
        fields: Prisma.IdentifierPasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentifierPasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentifierPasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          findFirst: {
            args: Prisma.IdentifierPasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentifierPasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          findMany: {
            args: Prisma.IdentifierPasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>[]
          }
          create: {
            args: Prisma.IdentifierPasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          createMany: {
            args: Prisma.IdentifierPasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentifierPasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>[]
          }
          delete: {
            args: Prisma.IdentifierPasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          update: {
            args: Prisma.IdentifierPasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          deleteMany: {
            args: Prisma.IdentifierPasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentifierPasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentifierPasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>[]
          }
          upsert: {
            args: Prisma.IdentifierPasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentifierPasienPayload>
          }
          aggregate: {
            args: Prisma.IdentifierPasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentifierPasien>
          }
          groupBy: {
            args: Prisma.IdentifierPasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentifierPasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentifierPasienCountArgs<ExtArgs>
            result: $Utils.Optional<IdentifierPasienCountAggregateOutputType> | number
          }
        }
      }
      JenisIdentifier: {
        payload: Prisma.$JenisIdentifierPayload<ExtArgs>
        fields: Prisma.JenisIdentifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisIdentifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisIdentifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          findFirst: {
            args: Prisma.JenisIdentifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisIdentifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          findMany: {
            args: Prisma.JenisIdentifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>[]
          }
          create: {
            args: Prisma.JenisIdentifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          createMany: {
            args: Prisma.JenisIdentifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisIdentifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>[]
          }
          delete: {
            args: Prisma.JenisIdentifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          update: {
            args: Prisma.JenisIdentifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          deleteMany: {
            args: Prisma.JenisIdentifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisIdentifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JenisIdentifierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>[]
          }
          upsert: {
            args: Prisma.JenisIdentifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisIdentifierPayload>
          }
          aggregate: {
            args: Prisma.JenisIdentifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisIdentifier>
          }
          groupBy: {
            args: Prisma.JenisIdentifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisIdentifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisIdentifierCountArgs<ExtArgs>
            result: $Utils.Optional<JenisIdentifierCountAggregateOutputType> | number
          }
        }
      }
      StatusPerkawinan: {
        payload: Prisma.$StatusPerkawinanPayload<ExtArgs>
        fields: Prisma.StatusPerkawinanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusPerkawinanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusPerkawinanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          findFirst: {
            args: Prisma.StatusPerkawinanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusPerkawinanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          findMany: {
            args: Prisma.StatusPerkawinanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>[]
          }
          create: {
            args: Prisma.StatusPerkawinanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          createMany: {
            args: Prisma.StatusPerkawinanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusPerkawinanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>[]
          }
          delete: {
            args: Prisma.StatusPerkawinanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          update: {
            args: Prisma.StatusPerkawinanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          deleteMany: {
            args: Prisma.StatusPerkawinanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusPerkawinanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusPerkawinanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>[]
          }
          upsert: {
            args: Prisma.StatusPerkawinanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPerkawinanPayload>
          }
          aggregate: {
            args: Prisma.StatusPerkawinanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusPerkawinan>
          }
          groupBy: {
            args: Prisma.StatusPerkawinanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusPerkawinanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusPerkawinanCountArgs<ExtArgs>
            result: $Utils.Optional<StatusPerkawinanCountAggregateOutputType> | number
          }
        }
      }
      StatusPembiayaan: {
        payload: Prisma.$StatusPembiayaanPayload<ExtArgs>
        fields: Prisma.StatusPembiayaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusPembiayaanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusPembiayaanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          findFirst: {
            args: Prisma.StatusPembiayaanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusPembiayaanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          findMany: {
            args: Prisma.StatusPembiayaanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>[]
          }
          create: {
            args: Prisma.StatusPembiayaanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          createMany: {
            args: Prisma.StatusPembiayaanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusPembiayaanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>[]
          }
          delete: {
            args: Prisma.StatusPembiayaanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          update: {
            args: Prisma.StatusPembiayaanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          deleteMany: {
            args: Prisma.StatusPembiayaanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusPembiayaanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusPembiayaanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>[]
          }
          upsert: {
            args: Prisma.StatusPembiayaanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPembiayaanPayload>
          }
          aggregate: {
            args: Prisma.StatusPembiayaanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusPembiayaan>
          }
          groupBy: {
            args: Prisma.StatusPembiayaanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusPembiayaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusPembiayaanCountArgs<ExtArgs>
            result: $Utils.Optional<StatusPembiayaanCountAggregateOutputType> | number
          }
        }
      }
      Pendidikan: {
        payload: Prisma.$PendidikanPayload<ExtArgs>
        fields: Prisma.PendidikanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendidikanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendidikanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          findFirst: {
            args: Prisma.PendidikanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendidikanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          findMany: {
            args: Prisma.PendidikanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>[]
          }
          create: {
            args: Prisma.PendidikanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          createMany: {
            args: Prisma.PendidikanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendidikanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>[]
          }
          delete: {
            args: Prisma.PendidikanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          update: {
            args: Prisma.PendidikanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          deleteMany: {
            args: Prisma.PendidikanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendidikanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendidikanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>[]
          }
          upsert: {
            args: Prisma.PendidikanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendidikanPayload>
          }
          aggregate: {
            args: Prisma.PendidikanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendidikan>
          }
          groupBy: {
            args: Prisma.PendidikanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendidikanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendidikanCountArgs<ExtArgs>
            result: $Utils.Optional<PendidikanCountAggregateOutputType> | number
          }
        }
      }
      Agama: {
        payload: Prisma.$AgamaPayload<ExtArgs>
        fields: Prisma.AgamaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgamaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgamaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          findFirst: {
            args: Prisma.AgamaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgamaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          findMany: {
            args: Prisma.AgamaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>[]
          }
          create: {
            args: Prisma.AgamaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          createMany: {
            args: Prisma.AgamaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgamaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>[]
          }
          delete: {
            args: Prisma.AgamaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          update: {
            args: Prisma.AgamaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          deleteMany: {
            args: Prisma.AgamaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgamaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgamaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>[]
          }
          upsert: {
            args: Prisma.AgamaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgamaPayload>
          }
          aggregate: {
            args: Prisma.AgamaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgama>
          }
          groupBy: {
            args: Prisma.AgamaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgamaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgamaCountArgs<ExtArgs>
            result: $Utils.Optional<AgamaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pasien?: PasienOmit
    namaPasien?: NamaPasienOmit
    kontakPasien?: KontakPasienOmit
    jenisKontak?: JenisKontakOmit
    alamatPasien?: AlamatPasienOmit
    dokumenPasien?: DokumenPasienOmit
    identifierPasien?: IdentifierPasienOmit
    jenisIdentifier?: JenisIdentifierOmit
    statusPerkawinan?: StatusPerkawinanOmit
    statusPembiayaan?: StatusPembiayaanOmit
    pendidikan?: PendidikanOmit
    agama?: AgamaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PasienCountOutputType
   */

  export type PasienCountOutputType = {
    dokumen: number
    identifiers: number
    kontak: number
  }

  export type PasienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokumen?: boolean | PasienCountOutputTypeCountDokumenArgs
    identifiers?: boolean | PasienCountOutputTypeCountIdentifiersArgs
    kontak?: boolean | PasienCountOutputTypeCountKontakArgs
  }

  // Custom InputTypes
  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasienCountOutputType
     */
    select?: PasienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeCountDokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenPasienWhereInput
  }

  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeCountIdentifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentifierPasienWhereInput
  }

  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeCountKontakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KontakPasienWhereInput
  }


  /**
   * Count Type JenisKontakCountOutputType
   */

  export type JenisKontakCountOutputType = {
    kontakPasien: number
  }

  export type JenisKontakCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kontakPasien?: boolean | JenisKontakCountOutputTypeCountKontakPasienArgs
  }

  // Custom InputTypes
  /**
   * JenisKontakCountOutputType without action
   */
  export type JenisKontakCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontakCountOutputType
     */
    select?: JenisKontakCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisKontakCountOutputType without action
   */
  export type JenisKontakCountOutputTypeCountKontakPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KontakPasienWhereInput
  }


  /**
   * Count Type JenisIdentifierCountOutputType
   */

  export type JenisIdentifierCountOutputType = {
    identifierPasien: number
  }

  export type JenisIdentifierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identifierPasien?: boolean | JenisIdentifierCountOutputTypeCountIdentifierPasienArgs
  }

  // Custom InputTypes
  /**
   * JenisIdentifierCountOutputType without action
   */
  export type JenisIdentifierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifierCountOutputType
     */
    select?: JenisIdentifierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisIdentifierCountOutputType without action
   */
  export type JenisIdentifierCountOutputTypeCountIdentifierPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentifierPasienWhereInput
  }


  /**
   * Count Type StatusPerkawinanCountOutputType
   */

  export type StatusPerkawinanCountOutputType = {
    pasien: number
  }

  export type StatusPerkawinanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | StatusPerkawinanCountOutputTypeCountPasienArgs
  }

  // Custom InputTypes
  /**
   * StatusPerkawinanCountOutputType without action
   */
  export type StatusPerkawinanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinanCountOutputType
     */
    select?: StatusPerkawinanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusPerkawinanCountOutputType without action
   */
  export type StatusPerkawinanCountOutputTypeCountPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
  }


  /**
   * Count Type StatusPembiayaanCountOutputType
   */

  export type StatusPembiayaanCountOutputType = {
    pasien: number
  }

  export type StatusPembiayaanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | StatusPembiayaanCountOutputTypeCountPasienArgs
  }

  // Custom InputTypes
  /**
   * StatusPembiayaanCountOutputType without action
   */
  export type StatusPembiayaanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaanCountOutputType
     */
    select?: StatusPembiayaanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusPembiayaanCountOutputType without action
   */
  export type StatusPembiayaanCountOutputTypeCountPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
  }


  /**
   * Count Type PendidikanCountOutputType
   */

  export type PendidikanCountOutputType = {
    pasien: number
  }

  export type PendidikanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PendidikanCountOutputTypeCountPasienArgs
  }

  // Custom InputTypes
  /**
   * PendidikanCountOutputType without action
   */
  export type PendidikanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendidikanCountOutputType
     */
    select?: PendidikanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendidikanCountOutputType without action
   */
  export type PendidikanCountOutputTypeCountPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
  }


  /**
   * Count Type AgamaCountOutputType
   */

  export type AgamaCountOutputType = {
    pasien: number
  }

  export type AgamaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | AgamaCountOutputTypeCountPasienArgs
  }

  // Custom InputTypes
  /**
   * AgamaCountOutputType without action
   */
  export type AgamaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgamaCountOutputType
     */
    select?: AgamaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgamaCountOutputType without action
   */
  export type AgamaCountOutputTypeCountPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    isVerified: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    pasien?: boolean | User$pasienArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "isVerified" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | User$pasienArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      isVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends User$pasienArgs<ExtArgs> = {}>(args?: Subset<T, User$pasienArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pasien
   */
  export type User$pasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    where?: PasienWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pasien
   */

  export type AggregatePasien = {
    _count: PasienCountAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  export type PasienMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    ihsNumber: string | null
    medicalRecordNumber: string | null
    tanggalLahir: Date | null
    statusPerkawinanId: string | null
    statusPembiayaanId: string | null
    pendidikanId: string | null
    agamaId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PasienMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    ihsNumber: string | null
    medicalRecordNumber: string | null
    tanggalLahir: Date | null
    statusPerkawinanId: string | null
    statusPembiayaanId: string | null
    pendidikanId: string | null
    agamaId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PasienCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    ihsNumber: number
    medicalRecordNumber: number
    tanggalLahir: number
    statusPerkawinanId: number
    statusPembiayaanId: number
    pendidikanId: number
    agamaId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type PasienMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    ihsNumber?: true
    medicalRecordNumber?: true
    tanggalLahir?: true
    statusPerkawinanId?: true
    statusPembiayaanId?: true
    pendidikanId?: true
    agamaId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PasienMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    ihsNumber?: true
    medicalRecordNumber?: true
    tanggalLahir?: true
    statusPerkawinanId?: true
    statusPembiayaanId?: true
    pendidikanId?: true
    agamaId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PasienCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    ihsNumber?: true
    medicalRecordNumber?: true
    tanggalLahir?: true
    statusPerkawinanId?: true
    statusPembiayaanId?: true
    pendidikanId?: true
    agamaId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasien to aggregate.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pasiens
    **/
    _count?: true | PasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasienMaxAggregateInputType
  }

  export type GetPasienAggregateType<T extends PasienAggregateArgs> = {
        [P in keyof T & keyof AggregatePasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasien[P]>
      : GetScalarType<T[P], AggregatePasien[P]>
  }




  export type PasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithAggregationInput | PasienOrderByWithAggregationInput[]
    by: PasienScalarFieldEnum[] | PasienScalarFieldEnum
    having?: PasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasienCountAggregateInputType | true
    _min?: PasienMinAggregateInputType
    _max?: PasienMaxAggregateInputType
  }

  export type PasienGroupByOutputType = {
    id: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt: Date
    createdAt: Date
    _count: PasienCountAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  type GetPasienGroupByPayload<T extends PasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasienGroupByOutputType[P]>
            : GetScalarType<T[P], PasienGroupByOutputType[P]>
        }
      >
    >


  export type PasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    ihsNumber?: boolean
    medicalRecordNumber?: boolean
    tanggalLahir?: boolean
    statusPerkawinanId?: boolean
    statusPembiayaanId?: boolean
    pendidikanId?: boolean
    agamaId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    alamat?: boolean | Pasien$alamatArgs<ExtArgs>
    dokumen?: boolean | Pasien$dokumenArgs<ExtArgs>
    identifiers?: boolean | Pasien$identifiersArgs<ExtArgs>
    kontak?: boolean | Pasien$kontakArgs<ExtArgs>
    nama?: boolean | Pasien$namaArgs<ExtArgs>
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    ihsNumber?: boolean
    medicalRecordNumber?: boolean
    tanggalLahir?: boolean
    statusPerkawinanId?: boolean
    statusPembiayaanId?: boolean
    pendidikanId?: boolean
    agamaId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    ihsNumber?: boolean
    medicalRecordNumber?: boolean
    tanggalLahir?: boolean
    statusPerkawinanId?: boolean
    statusPembiayaanId?: boolean
    pendidikanId?: boolean
    agamaId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    ihsNumber?: boolean
    medicalRecordNumber?: boolean
    tanggalLahir?: boolean
    statusPerkawinanId?: boolean
    statusPembiayaanId?: boolean
    pendidikanId?: boolean
    agamaId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type PasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "ihsNumber" | "medicalRecordNumber" | "tanggalLahir" | "statusPerkawinanId" | "statusPembiayaanId" | "pendidikanId" | "agamaId" | "updatedAt" | "createdAt", ExtArgs["result"]["pasien"]>
  export type PasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | Pasien$alamatArgs<ExtArgs>
    dokumen?: boolean | Pasien$dokumenArgs<ExtArgs>
    identifiers?: boolean | Pasien$identifiersArgs<ExtArgs>
    kontak?: boolean | Pasien$kontakArgs<ExtArgs>
    nama?: boolean | Pasien$namaArgs<ExtArgs>
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agama?: boolean | AgamaDefaultArgs<ExtArgs>
    pendidikan?: boolean | PendidikanDefaultArgs<ExtArgs>
    statusPembiayaan?: boolean | StatusPembiayaanDefaultArgs<ExtArgs>
    statusPerkawinan?: boolean | StatusPerkawinanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pasien"
    objects: {
      alamat: Prisma.$AlamatPasienPayload<ExtArgs> | null
      dokumen: Prisma.$DokumenPasienPayload<ExtArgs>[]
      identifiers: Prisma.$IdentifierPasienPayload<ExtArgs>[]
      kontak: Prisma.$KontakPasienPayload<ExtArgs>[]
      nama: Prisma.$NamaPasienPayload<ExtArgs> | null
      agama: Prisma.$AgamaPayload<ExtArgs>
      pendidikan: Prisma.$PendidikanPayload<ExtArgs>
      statusPembiayaan: Prisma.$StatusPembiayaanPayload<ExtArgs>
      statusPerkawinan: Prisma.$StatusPerkawinanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gender: $Enums.Gender
      ihsNumber: string
      medicalRecordNumber: string
      tanggalLahir: Date
      statusPerkawinanId: string
      statusPembiayaanId: string
      pendidikanId: string
      agamaId: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["pasien"]>
    composites: {}
  }

  type PasienGetPayload<S extends boolean | null | undefined | PasienDefaultArgs> = $Result.GetResult<Prisma.$PasienPayload, S>

  type PasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasienCountAggregateInputType | true
    }

  export interface PasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pasien'], meta: { name: 'Pasien' } }
    /**
     * Find zero or one Pasien that matches the filter.
     * @param {PasienFindUniqueArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasienFindUniqueArgs>(args: SelectSubset<T, PasienFindUniqueArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasienFindUniqueOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasienFindUniqueOrThrowArgs>(args: SelectSubset<T, PasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasienFindFirstArgs>(args?: SelectSubset<T, PasienFindFirstArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasienFindFirstOrThrowArgs>(args?: SelectSubset<T, PasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasiens
     * const pasiens = await prisma.pasien.findMany()
     * 
     * // Get first 10 Pasiens
     * const pasiens = await prisma.pasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pasienWithIdOnly = await prisma.pasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasienFindManyArgs>(args?: SelectSubset<T, PasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pasien.
     * @param {PasienCreateArgs} args - Arguments to create a Pasien.
     * @example
     * // Create one Pasien
     * const Pasien = await prisma.pasien.create({
     *   data: {
     *     // ... data to create a Pasien
     *   }
     * })
     * 
     */
    create<T extends PasienCreateArgs>(args: SelectSubset<T, PasienCreateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasiens.
     * @param {PasienCreateManyArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasienCreateManyArgs>(args?: SelectSubset<T, PasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasiens and returns the data saved in the database.
     * @param {PasienCreateManyAndReturnArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasienCreateManyAndReturnArgs>(args?: SelectSubset<T, PasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pasien.
     * @param {PasienDeleteArgs} args - Arguments to delete one Pasien.
     * @example
     * // Delete one Pasien
     * const Pasien = await prisma.pasien.delete({
     *   where: {
     *     // ... filter to delete one Pasien
     *   }
     * })
     * 
     */
    delete<T extends PasienDeleteArgs>(args: SelectSubset<T, PasienDeleteArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pasien.
     * @param {PasienUpdateArgs} args - Arguments to update one Pasien.
     * @example
     * // Update one Pasien
     * const pasien = await prisma.pasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasienUpdateArgs>(args: SelectSubset<T, PasienUpdateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasiens.
     * @param {PasienDeleteManyArgs} args - Arguments to filter Pasiens to delete.
     * @example
     * // Delete a few Pasiens
     * const { count } = await prisma.pasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasienDeleteManyArgs>(args?: SelectSubset<T, PasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasienUpdateManyArgs>(args: SelectSubset<T, PasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens and returns the data updated in the database.
     * @param {PasienUpdateManyAndReturnArgs} args - Arguments to update many Pasiens.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasienUpdateManyAndReturnArgs>(args: SelectSubset<T, PasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pasien.
     * @param {PasienUpsertArgs} args - Arguments to update or create a Pasien.
     * @example
     * // Update or create a Pasien
     * const pasien = await prisma.pasien.upsert({
     *   create: {
     *     // ... data to create a Pasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pasien we want to update
     *   }
     * })
     */
    upsert<T extends PasienUpsertArgs>(args: SelectSubset<T, PasienUpsertArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienCountArgs} args - Arguments to filter Pasiens to count.
     * @example
     * // Count the number of Pasiens
     * const count = await prisma.pasien.count({
     *   where: {
     *     // ... the filter for the Pasiens we want to count
     *   }
     * })
    **/
    count<T extends PasienCountArgs>(
      args?: Subset<T, PasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasienAggregateArgs>(args: Subset<T, PasienAggregateArgs>): Prisma.PrismaPromise<GetPasienAggregateType<T>>

    /**
     * Group by Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasienGroupByArgs['orderBy'] }
        : { orderBy?: PasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pasien model
   */
  readonly fields: PasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alamat<T extends Pasien$alamatArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$alamatArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dokumen<T extends Pasien$dokumenArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$dokumenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    identifiers<T extends Pasien$identifiersArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$identifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kontak<T extends Pasien$kontakArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$kontakArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nama<T extends Pasien$namaArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$namaArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agama<T extends AgamaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgamaDefaultArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pendidikan<T extends PendidikanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendidikanDefaultArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statusPembiayaan<T extends StatusPembiayaanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusPembiayaanDefaultArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statusPerkawinan<T extends StatusPerkawinanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusPerkawinanDefaultArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pasien model
   */
  interface PasienFieldRefs {
    readonly id: FieldRef<"Pasien", 'String'>
    readonly userId: FieldRef<"Pasien", 'String'>
    readonly gender: FieldRef<"Pasien", 'Gender'>
    readonly ihsNumber: FieldRef<"Pasien", 'String'>
    readonly medicalRecordNumber: FieldRef<"Pasien", 'String'>
    readonly tanggalLahir: FieldRef<"Pasien", 'DateTime'>
    readonly statusPerkawinanId: FieldRef<"Pasien", 'String'>
    readonly statusPembiayaanId: FieldRef<"Pasien", 'String'>
    readonly pendidikanId: FieldRef<"Pasien", 'String'>
    readonly agamaId: FieldRef<"Pasien", 'String'>
    readonly updatedAt: FieldRef<"Pasien", 'DateTime'>
    readonly createdAt: FieldRef<"Pasien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pasien findUnique
   */
  export type PasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findUniqueOrThrow
   */
  export type PasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findFirst
   */
  export type PasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findFirstOrThrow
   */
  export type PasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findMany
   */
  export type PasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasiens to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien create
   */
  export type PasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to create a Pasien.
     */
    data: XOR<PasienCreateInput, PasienUncheckedCreateInput>
  }

  /**
   * Pasien createMany
   */
  export type PasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasien createManyAndReturn
   */
  export type PasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pasien update
   */
  export type PasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to update a Pasien.
     */
    data: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
    /**
     * Choose, which Pasien to update.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien updateMany
   */
  export type PasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
  }

  /**
   * Pasien updateManyAndReturn
   */
  export type PasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pasien upsert
   */
  export type PasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The filter to search for the Pasien to update in case it exists.
     */
    where: PasienWhereUniqueInput
    /**
     * In case the Pasien found by the `where` argument doesn't exist, create a new Pasien with this data.
     */
    create: XOR<PasienCreateInput, PasienUncheckedCreateInput>
    /**
     * In case the Pasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
  }

  /**
   * Pasien delete
   */
  export type PasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter which Pasien to delete.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien deleteMany
   */
  export type PasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasiens to delete
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to delete.
     */
    limit?: number
  }

  /**
   * Pasien.alamat
   */
  export type Pasien$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    where?: AlamatPasienWhereInput
  }

  /**
   * Pasien.dokumen
   */
  export type Pasien$dokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    where?: DokumenPasienWhereInput
    orderBy?: DokumenPasienOrderByWithRelationInput | DokumenPasienOrderByWithRelationInput[]
    cursor?: DokumenPasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumenPasienScalarFieldEnum | DokumenPasienScalarFieldEnum[]
  }

  /**
   * Pasien.identifiers
   */
  export type Pasien$identifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    where?: IdentifierPasienWhereInput
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    cursor?: IdentifierPasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentifierPasienScalarFieldEnum | IdentifierPasienScalarFieldEnum[]
  }

  /**
   * Pasien.kontak
   */
  export type Pasien$kontakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    where?: KontakPasienWhereInput
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    cursor?: KontakPasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KontakPasienScalarFieldEnum | KontakPasienScalarFieldEnum[]
  }

  /**
   * Pasien.nama
   */
  export type Pasien$namaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    where?: NamaPasienWhereInput
  }

  /**
   * Pasien without action
   */
  export type PasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
  }


  /**
   * Model NamaPasien
   */

  export type AggregateNamaPasien = {
    _count: NamaPasienCountAggregateOutputType | null
    _min: NamaPasienMinAggregateOutputType | null
    _max: NamaPasienMaxAggregateOutputType | null
  }

  export type NamaPasienMinAggregateOutputType = {
    id: string | null
    pasienId: string | null
    namaDepan: string | null
    namaTengah: string | null
    namaBelakang: string | null
    namaLengkap: string | null
    use: $Enums.Use | null
  }

  export type NamaPasienMaxAggregateOutputType = {
    id: string | null
    pasienId: string | null
    namaDepan: string | null
    namaTengah: string | null
    namaBelakang: string | null
    namaLengkap: string | null
    use: $Enums.Use | null
  }

  export type NamaPasienCountAggregateOutputType = {
    id: number
    pasienId: number
    namaDepan: number
    namaTengah: number
    namaBelakang: number
    namaLengkap: number
    use: number
    _all: number
  }


  export type NamaPasienMinAggregateInputType = {
    id?: true
    pasienId?: true
    namaDepan?: true
    namaTengah?: true
    namaBelakang?: true
    namaLengkap?: true
    use?: true
  }

  export type NamaPasienMaxAggregateInputType = {
    id?: true
    pasienId?: true
    namaDepan?: true
    namaTengah?: true
    namaBelakang?: true
    namaLengkap?: true
    use?: true
  }

  export type NamaPasienCountAggregateInputType = {
    id?: true
    pasienId?: true
    namaDepan?: true
    namaTengah?: true
    namaBelakang?: true
    namaLengkap?: true
    use?: true
    _all?: true
  }

  export type NamaPasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NamaPasien to aggregate.
     */
    where?: NamaPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamaPasiens to fetch.
     */
    orderBy?: NamaPasienOrderByWithRelationInput | NamaPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NamaPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamaPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamaPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NamaPasiens
    **/
    _count?: true | NamaPasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NamaPasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NamaPasienMaxAggregateInputType
  }

  export type GetNamaPasienAggregateType<T extends NamaPasienAggregateArgs> = {
        [P in keyof T & keyof AggregateNamaPasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNamaPasien[P]>
      : GetScalarType<T[P], AggregateNamaPasien[P]>
  }




  export type NamaPasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NamaPasienWhereInput
    orderBy?: NamaPasienOrderByWithAggregationInput | NamaPasienOrderByWithAggregationInput[]
    by: NamaPasienScalarFieldEnum[] | NamaPasienScalarFieldEnum
    having?: NamaPasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NamaPasienCountAggregateInputType | true
    _min?: NamaPasienMinAggregateInputType
    _max?: NamaPasienMaxAggregateInputType
  }

  export type NamaPasienGroupByOutputType = {
    id: string
    pasienId: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
    _count: NamaPasienCountAggregateOutputType | null
    _min: NamaPasienMinAggregateOutputType | null
    _max: NamaPasienMaxAggregateOutputType | null
  }

  type GetNamaPasienGroupByPayload<T extends NamaPasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NamaPasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NamaPasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NamaPasienGroupByOutputType[P]>
            : GetScalarType<T[P], NamaPasienGroupByOutputType[P]>
        }
      >
    >


  export type NamaPasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    namaDepan?: boolean
    namaTengah?: boolean
    namaBelakang?: boolean
    namaLengkap?: boolean
    use?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["namaPasien"]>

  export type NamaPasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    namaDepan?: boolean
    namaTengah?: boolean
    namaBelakang?: boolean
    namaLengkap?: boolean
    use?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["namaPasien"]>

  export type NamaPasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    namaDepan?: boolean
    namaTengah?: boolean
    namaBelakang?: boolean
    namaLengkap?: boolean
    use?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["namaPasien"]>

  export type NamaPasienSelectScalar = {
    id?: boolean
    pasienId?: boolean
    namaDepan?: boolean
    namaTengah?: boolean
    namaBelakang?: boolean
    namaLengkap?: boolean
    use?: boolean
  }

  export type NamaPasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "namaDepan" | "namaTengah" | "namaBelakang" | "namaLengkap" | "use", ExtArgs["result"]["namaPasien"]>
  export type NamaPasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type NamaPasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type NamaPasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $NamaPasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NamaPasien"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasienId: string
      namaDepan: string
      namaTengah: string
      namaBelakang: string
      namaLengkap: string
      use: $Enums.Use
    }, ExtArgs["result"]["namaPasien"]>
    composites: {}
  }

  type NamaPasienGetPayload<S extends boolean | null | undefined | NamaPasienDefaultArgs> = $Result.GetResult<Prisma.$NamaPasienPayload, S>

  type NamaPasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NamaPasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NamaPasienCountAggregateInputType | true
    }

  export interface NamaPasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NamaPasien'], meta: { name: 'NamaPasien' } }
    /**
     * Find zero or one NamaPasien that matches the filter.
     * @param {NamaPasienFindUniqueArgs} args - Arguments to find a NamaPasien
     * @example
     * // Get one NamaPasien
     * const namaPasien = await prisma.namaPasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NamaPasienFindUniqueArgs>(args: SelectSubset<T, NamaPasienFindUniqueArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NamaPasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NamaPasienFindUniqueOrThrowArgs} args - Arguments to find a NamaPasien
     * @example
     * // Get one NamaPasien
     * const namaPasien = await prisma.namaPasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NamaPasienFindUniqueOrThrowArgs>(args: SelectSubset<T, NamaPasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NamaPasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienFindFirstArgs} args - Arguments to find a NamaPasien
     * @example
     * // Get one NamaPasien
     * const namaPasien = await prisma.namaPasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NamaPasienFindFirstArgs>(args?: SelectSubset<T, NamaPasienFindFirstArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NamaPasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienFindFirstOrThrowArgs} args - Arguments to find a NamaPasien
     * @example
     * // Get one NamaPasien
     * const namaPasien = await prisma.namaPasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NamaPasienFindFirstOrThrowArgs>(args?: SelectSubset<T, NamaPasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NamaPasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NamaPasiens
     * const namaPasiens = await prisma.namaPasien.findMany()
     * 
     * // Get first 10 NamaPasiens
     * const namaPasiens = await prisma.namaPasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const namaPasienWithIdOnly = await prisma.namaPasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NamaPasienFindManyArgs>(args?: SelectSubset<T, NamaPasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NamaPasien.
     * @param {NamaPasienCreateArgs} args - Arguments to create a NamaPasien.
     * @example
     * // Create one NamaPasien
     * const NamaPasien = await prisma.namaPasien.create({
     *   data: {
     *     // ... data to create a NamaPasien
     *   }
     * })
     * 
     */
    create<T extends NamaPasienCreateArgs>(args: SelectSubset<T, NamaPasienCreateArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NamaPasiens.
     * @param {NamaPasienCreateManyArgs} args - Arguments to create many NamaPasiens.
     * @example
     * // Create many NamaPasiens
     * const namaPasien = await prisma.namaPasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NamaPasienCreateManyArgs>(args?: SelectSubset<T, NamaPasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NamaPasiens and returns the data saved in the database.
     * @param {NamaPasienCreateManyAndReturnArgs} args - Arguments to create many NamaPasiens.
     * @example
     * // Create many NamaPasiens
     * const namaPasien = await prisma.namaPasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NamaPasiens and only return the `id`
     * const namaPasienWithIdOnly = await prisma.namaPasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NamaPasienCreateManyAndReturnArgs>(args?: SelectSubset<T, NamaPasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NamaPasien.
     * @param {NamaPasienDeleteArgs} args - Arguments to delete one NamaPasien.
     * @example
     * // Delete one NamaPasien
     * const NamaPasien = await prisma.namaPasien.delete({
     *   where: {
     *     // ... filter to delete one NamaPasien
     *   }
     * })
     * 
     */
    delete<T extends NamaPasienDeleteArgs>(args: SelectSubset<T, NamaPasienDeleteArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NamaPasien.
     * @param {NamaPasienUpdateArgs} args - Arguments to update one NamaPasien.
     * @example
     * // Update one NamaPasien
     * const namaPasien = await prisma.namaPasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NamaPasienUpdateArgs>(args: SelectSubset<T, NamaPasienUpdateArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NamaPasiens.
     * @param {NamaPasienDeleteManyArgs} args - Arguments to filter NamaPasiens to delete.
     * @example
     * // Delete a few NamaPasiens
     * const { count } = await prisma.namaPasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NamaPasienDeleteManyArgs>(args?: SelectSubset<T, NamaPasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NamaPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NamaPasiens
     * const namaPasien = await prisma.namaPasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NamaPasienUpdateManyArgs>(args: SelectSubset<T, NamaPasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NamaPasiens and returns the data updated in the database.
     * @param {NamaPasienUpdateManyAndReturnArgs} args - Arguments to update many NamaPasiens.
     * @example
     * // Update many NamaPasiens
     * const namaPasien = await prisma.namaPasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NamaPasiens and only return the `id`
     * const namaPasienWithIdOnly = await prisma.namaPasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NamaPasienUpdateManyAndReturnArgs>(args: SelectSubset<T, NamaPasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NamaPasien.
     * @param {NamaPasienUpsertArgs} args - Arguments to update or create a NamaPasien.
     * @example
     * // Update or create a NamaPasien
     * const namaPasien = await prisma.namaPasien.upsert({
     *   create: {
     *     // ... data to create a NamaPasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NamaPasien we want to update
     *   }
     * })
     */
    upsert<T extends NamaPasienUpsertArgs>(args: SelectSubset<T, NamaPasienUpsertArgs<ExtArgs>>): Prisma__NamaPasienClient<$Result.GetResult<Prisma.$NamaPasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NamaPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienCountArgs} args - Arguments to filter NamaPasiens to count.
     * @example
     * // Count the number of NamaPasiens
     * const count = await prisma.namaPasien.count({
     *   where: {
     *     // ... the filter for the NamaPasiens we want to count
     *   }
     * })
    **/
    count<T extends NamaPasienCountArgs>(
      args?: Subset<T, NamaPasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NamaPasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NamaPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NamaPasienAggregateArgs>(args: Subset<T, NamaPasienAggregateArgs>): Prisma.PrismaPromise<GetNamaPasienAggregateType<T>>

    /**
     * Group by NamaPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamaPasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NamaPasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NamaPasienGroupByArgs['orderBy'] }
        : { orderBy?: NamaPasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NamaPasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamaPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NamaPasien model
   */
  readonly fields: NamaPasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NamaPasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NamaPasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NamaPasien model
   */
  interface NamaPasienFieldRefs {
    readonly id: FieldRef<"NamaPasien", 'String'>
    readonly pasienId: FieldRef<"NamaPasien", 'String'>
    readonly namaDepan: FieldRef<"NamaPasien", 'String'>
    readonly namaTengah: FieldRef<"NamaPasien", 'String'>
    readonly namaBelakang: FieldRef<"NamaPasien", 'String'>
    readonly namaLengkap: FieldRef<"NamaPasien", 'String'>
    readonly use: FieldRef<"NamaPasien", 'Use'>
  }
    

  // Custom InputTypes
  /**
   * NamaPasien findUnique
   */
  export type NamaPasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter, which NamaPasien to fetch.
     */
    where: NamaPasienWhereUniqueInput
  }

  /**
   * NamaPasien findUniqueOrThrow
   */
  export type NamaPasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter, which NamaPasien to fetch.
     */
    where: NamaPasienWhereUniqueInput
  }

  /**
   * NamaPasien findFirst
   */
  export type NamaPasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter, which NamaPasien to fetch.
     */
    where?: NamaPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamaPasiens to fetch.
     */
    orderBy?: NamaPasienOrderByWithRelationInput | NamaPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NamaPasiens.
     */
    cursor?: NamaPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamaPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamaPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NamaPasiens.
     */
    distinct?: NamaPasienScalarFieldEnum | NamaPasienScalarFieldEnum[]
  }

  /**
   * NamaPasien findFirstOrThrow
   */
  export type NamaPasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter, which NamaPasien to fetch.
     */
    where?: NamaPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamaPasiens to fetch.
     */
    orderBy?: NamaPasienOrderByWithRelationInput | NamaPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NamaPasiens.
     */
    cursor?: NamaPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamaPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamaPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NamaPasiens.
     */
    distinct?: NamaPasienScalarFieldEnum | NamaPasienScalarFieldEnum[]
  }

  /**
   * NamaPasien findMany
   */
  export type NamaPasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter, which NamaPasiens to fetch.
     */
    where?: NamaPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamaPasiens to fetch.
     */
    orderBy?: NamaPasienOrderByWithRelationInput | NamaPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NamaPasiens.
     */
    cursor?: NamaPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamaPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamaPasiens.
     */
    skip?: number
    distinct?: NamaPasienScalarFieldEnum | NamaPasienScalarFieldEnum[]
  }

  /**
   * NamaPasien create
   */
  export type NamaPasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * The data needed to create a NamaPasien.
     */
    data: XOR<NamaPasienCreateInput, NamaPasienUncheckedCreateInput>
  }

  /**
   * NamaPasien createMany
   */
  export type NamaPasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NamaPasiens.
     */
    data: NamaPasienCreateManyInput | NamaPasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NamaPasien createManyAndReturn
   */
  export type NamaPasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * The data used to create many NamaPasiens.
     */
    data: NamaPasienCreateManyInput | NamaPasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NamaPasien update
   */
  export type NamaPasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * The data needed to update a NamaPasien.
     */
    data: XOR<NamaPasienUpdateInput, NamaPasienUncheckedUpdateInput>
    /**
     * Choose, which NamaPasien to update.
     */
    where: NamaPasienWhereUniqueInput
  }

  /**
   * NamaPasien updateMany
   */
  export type NamaPasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NamaPasiens.
     */
    data: XOR<NamaPasienUpdateManyMutationInput, NamaPasienUncheckedUpdateManyInput>
    /**
     * Filter which NamaPasiens to update
     */
    where?: NamaPasienWhereInput
    /**
     * Limit how many NamaPasiens to update.
     */
    limit?: number
  }

  /**
   * NamaPasien updateManyAndReturn
   */
  export type NamaPasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * The data used to update NamaPasiens.
     */
    data: XOR<NamaPasienUpdateManyMutationInput, NamaPasienUncheckedUpdateManyInput>
    /**
     * Filter which NamaPasiens to update
     */
    where?: NamaPasienWhereInput
    /**
     * Limit how many NamaPasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NamaPasien upsert
   */
  export type NamaPasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * The filter to search for the NamaPasien to update in case it exists.
     */
    where: NamaPasienWhereUniqueInput
    /**
     * In case the NamaPasien found by the `where` argument doesn't exist, create a new NamaPasien with this data.
     */
    create: XOR<NamaPasienCreateInput, NamaPasienUncheckedCreateInput>
    /**
     * In case the NamaPasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NamaPasienUpdateInput, NamaPasienUncheckedUpdateInput>
  }

  /**
   * NamaPasien delete
   */
  export type NamaPasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
    /**
     * Filter which NamaPasien to delete.
     */
    where: NamaPasienWhereUniqueInput
  }

  /**
   * NamaPasien deleteMany
   */
  export type NamaPasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NamaPasiens to delete
     */
    where?: NamaPasienWhereInput
    /**
     * Limit how many NamaPasiens to delete.
     */
    limit?: number
  }

  /**
   * NamaPasien without action
   */
  export type NamaPasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamaPasien
     */
    select?: NamaPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamaPasien
     */
    omit?: NamaPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamaPasienInclude<ExtArgs> | null
  }


  /**
   * Model KontakPasien
   */

  export type AggregateKontakPasien = {
    _count: KontakPasienCountAggregateOutputType | null
    _min: KontakPasienMinAggregateOutputType | null
    _max: KontakPasienMaxAggregateOutputType | null
  }

  export type KontakPasienMinAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jenisKontakId: string | null
    nilaiKontak: string | null
    use: $Enums.Use | null
  }

  export type KontakPasienMaxAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jenisKontakId: string | null
    nilaiKontak: string | null
    use: $Enums.Use | null
  }

  export type KontakPasienCountAggregateOutputType = {
    id: number
    pasienId: number
    jenisKontakId: number
    nilaiKontak: number
    use: number
    _all: number
  }


  export type KontakPasienMinAggregateInputType = {
    id?: true
    pasienId?: true
    jenisKontakId?: true
    nilaiKontak?: true
    use?: true
  }

  export type KontakPasienMaxAggregateInputType = {
    id?: true
    pasienId?: true
    jenisKontakId?: true
    nilaiKontak?: true
    use?: true
  }

  export type KontakPasienCountAggregateInputType = {
    id?: true
    pasienId?: true
    jenisKontakId?: true
    nilaiKontak?: true
    use?: true
    _all?: true
  }

  export type KontakPasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KontakPasien to aggregate.
     */
    where?: KontakPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KontakPasiens to fetch.
     */
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KontakPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KontakPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KontakPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KontakPasiens
    **/
    _count?: true | KontakPasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KontakPasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KontakPasienMaxAggregateInputType
  }

  export type GetKontakPasienAggregateType<T extends KontakPasienAggregateArgs> = {
        [P in keyof T & keyof AggregateKontakPasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKontakPasien[P]>
      : GetScalarType<T[P], AggregateKontakPasien[P]>
  }




  export type KontakPasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KontakPasienWhereInput
    orderBy?: KontakPasienOrderByWithAggregationInput | KontakPasienOrderByWithAggregationInput[]
    by: KontakPasienScalarFieldEnum[] | KontakPasienScalarFieldEnum
    having?: KontakPasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KontakPasienCountAggregateInputType | true
    _min?: KontakPasienMinAggregateInputType
    _max?: KontakPasienMaxAggregateInputType
  }

  export type KontakPasienGroupByOutputType = {
    id: string
    pasienId: string
    jenisKontakId: string
    nilaiKontak: string
    use: $Enums.Use
    _count: KontakPasienCountAggregateOutputType | null
    _min: KontakPasienMinAggregateOutputType | null
    _max: KontakPasienMaxAggregateOutputType | null
  }

  type GetKontakPasienGroupByPayload<T extends KontakPasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KontakPasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KontakPasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KontakPasienGroupByOutputType[P]>
            : GetScalarType<T[P], KontakPasienGroupByOutputType[P]>
        }
      >
    >


  export type KontakPasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisKontakId?: boolean
    nilaiKontak?: boolean
    use?: boolean
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kontakPasien"]>

  export type KontakPasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisKontakId?: boolean
    nilaiKontak?: boolean
    use?: boolean
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kontakPasien"]>

  export type KontakPasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisKontakId?: boolean
    nilaiKontak?: boolean
    use?: boolean
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kontakPasien"]>

  export type KontakPasienSelectScalar = {
    id?: boolean
    pasienId?: boolean
    jenisKontakId?: boolean
    nilaiKontak?: boolean
    use?: boolean
  }

  export type KontakPasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "jenisKontakId" | "nilaiKontak" | "use", ExtArgs["result"]["kontakPasien"]>
  export type KontakPasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type KontakPasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type KontakPasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisKontak?: boolean | JenisKontakDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $KontakPasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KontakPasien"
    objects: {
      jenisKontak: Prisma.$JenisKontakPayload<ExtArgs>
      pasien: Prisma.$PasienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasienId: string
      jenisKontakId: string
      nilaiKontak: string
      use: $Enums.Use
    }, ExtArgs["result"]["kontakPasien"]>
    composites: {}
  }

  type KontakPasienGetPayload<S extends boolean | null | undefined | KontakPasienDefaultArgs> = $Result.GetResult<Prisma.$KontakPasienPayload, S>

  type KontakPasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KontakPasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KontakPasienCountAggregateInputType | true
    }

  export interface KontakPasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KontakPasien'], meta: { name: 'KontakPasien' } }
    /**
     * Find zero or one KontakPasien that matches the filter.
     * @param {KontakPasienFindUniqueArgs} args - Arguments to find a KontakPasien
     * @example
     * // Get one KontakPasien
     * const kontakPasien = await prisma.kontakPasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KontakPasienFindUniqueArgs>(args: SelectSubset<T, KontakPasienFindUniqueArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KontakPasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KontakPasienFindUniqueOrThrowArgs} args - Arguments to find a KontakPasien
     * @example
     * // Get one KontakPasien
     * const kontakPasien = await prisma.kontakPasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KontakPasienFindUniqueOrThrowArgs>(args: SelectSubset<T, KontakPasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KontakPasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienFindFirstArgs} args - Arguments to find a KontakPasien
     * @example
     * // Get one KontakPasien
     * const kontakPasien = await prisma.kontakPasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KontakPasienFindFirstArgs>(args?: SelectSubset<T, KontakPasienFindFirstArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KontakPasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienFindFirstOrThrowArgs} args - Arguments to find a KontakPasien
     * @example
     * // Get one KontakPasien
     * const kontakPasien = await prisma.kontakPasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KontakPasienFindFirstOrThrowArgs>(args?: SelectSubset<T, KontakPasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KontakPasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KontakPasiens
     * const kontakPasiens = await prisma.kontakPasien.findMany()
     * 
     * // Get first 10 KontakPasiens
     * const kontakPasiens = await prisma.kontakPasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kontakPasienWithIdOnly = await prisma.kontakPasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KontakPasienFindManyArgs>(args?: SelectSubset<T, KontakPasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KontakPasien.
     * @param {KontakPasienCreateArgs} args - Arguments to create a KontakPasien.
     * @example
     * // Create one KontakPasien
     * const KontakPasien = await prisma.kontakPasien.create({
     *   data: {
     *     // ... data to create a KontakPasien
     *   }
     * })
     * 
     */
    create<T extends KontakPasienCreateArgs>(args: SelectSubset<T, KontakPasienCreateArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KontakPasiens.
     * @param {KontakPasienCreateManyArgs} args - Arguments to create many KontakPasiens.
     * @example
     * // Create many KontakPasiens
     * const kontakPasien = await prisma.kontakPasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KontakPasienCreateManyArgs>(args?: SelectSubset<T, KontakPasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KontakPasiens and returns the data saved in the database.
     * @param {KontakPasienCreateManyAndReturnArgs} args - Arguments to create many KontakPasiens.
     * @example
     * // Create many KontakPasiens
     * const kontakPasien = await prisma.kontakPasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KontakPasiens and only return the `id`
     * const kontakPasienWithIdOnly = await prisma.kontakPasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KontakPasienCreateManyAndReturnArgs>(args?: SelectSubset<T, KontakPasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KontakPasien.
     * @param {KontakPasienDeleteArgs} args - Arguments to delete one KontakPasien.
     * @example
     * // Delete one KontakPasien
     * const KontakPasien = await prisma.kontakPasien.delete({
     *   where: {
     *     // ... filter to delete one KontakPasien
     *   }
     * })
     * 
     */
    delete<T extends KontakPasienDeleteArgs>(args: SelectSubset<T, KontakPasienDeleteArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KontakPasien.
     * @param {KontakPasienUpdateArgs} args - Arguments to update one KontakPasien.
     * @example
     * // Update one KontakPasien
     * const kontakPasien = await prisma.kontakPasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KontakPasienUpdateArgs>(args: SelectSubset<T, KontakPasienUpdateArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KontakPasiens.
     * @param {KontakPasienDeleteManyArgs} args - Arguments to filter KontakPasiens to delete.
     * @example
     * // Delete a few KontakPasiens
     * const { count } = await prisma.kontakPasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KontakPasienDeleteManyArgs>(args?: SelectSubset<T, KontakPasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KontakPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KontakPasiens
     * const kontakPasien = await prisma.kontakPasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KontakPasienUpdateManyArgs>(args: SelectSubset<T, KontakPasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KontakPasiens and returns the data updated in the database.
     * @param {KontakPasienUpdateManyAndReturnArgs} args - Arguments to update many KontakPasiens.
     * @example
     * // Update many KontakPasiens
     * const kontakPasien = await prisma.kontakPasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KontakPasiens and only return the `id`
     * const kontakPasienWithIdOnly = await prisma.kontakPasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KontakPasienUpdateManyAndReturnArgs>(args: SelectSubset<T, KontakPasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KontakPasien.
     * @param {KontakPasienUpsertArgs} args - Arguments to update or create a KontakPasien.
     * @example
     * // Update or create a KontakPasien
     * const kontakPasien = await prisma.kontakPasien.upsert({
     *   create: {
     *     // ... data to create a KontakPasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KontakPasien we want to update
     *   }
     * })
     */
    upsert<T extends KontakPasienUpsertArgs>(args: SelectSubset<T, KontakPasienUpsertArgs<ExtArgs>>): Prisma__KontakPasienClient<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KontakPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienCountArgs} args - Arguments to filter KontakPasiens to count.
     * @example
     * // Count the number of KontakPasiens
     * const count = await prisma.kontakPasien.count({
     *   where: {
     *     // ... the filter for the KontakPasiens we want to count
     *   }
     * })
    **/
    count<T extends KontakPasienCountArgs>(
      args?: Subset<T, KontakPasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KontakPasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KontakPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KontakPasienAggregateArgs>(args: Subset<T, KontakPasienAggregateArgs>): Prisma.PrismaPromise<GetKontakPasienAggregateType<T>>

    /**
     * Group by KontakPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KontakPasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KontakPasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KontakPasienGroupByArgs['orderBy'] }
        : { orderBy?: KontakPasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KontakPasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKontakPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KontakPasien model
   */
  readonly fields: KontakPasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KontakPasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KontakPasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jenisKontak<T extends JenisKontakDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisKontakDefaultArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KontakPasien model
   */
  interface KontakPasienFieldRefs {
    readonly id: FieldRef<"KontakPasien", 'String'>
    readonly pasienId: FieldRef<"KontakPasien", 'String'>
    readonly jenisKontakId: FieldRef<"KontakPasien", 'String'>
    readonly nilaiKontak: FieldRef<"KontakPasien", 'String'>
    readonly use: FieldRef<"KontakPasien", 'Use'>
  }
    

  // Custom InputTypes
  /**
   * KontakPasien findUnique
   */
  export type KontakPasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter, which KontakPasien to fetch.
     */
    where: KontakPasienWhereUniqueInput
  }

  /**
   * KontakPasien findUniqueOrThrow
   */
  export type KontakPasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter, which KontakPasien to fetch.
     */
    where: KontakPasienWhereUniqueInput
  }

  /**
   * KontakPasien findFirst
   */
  export type KontakPasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter, which KontakPasien to fetch.
     */
    where?: KontakPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KontakPasiens to fetch.
     */
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KontakPasiens.
     */
    cursor?: KontakPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KontakPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KontakPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KontakPasiens.
     */
    distinct?: KontakPasienScalarFieldEnum | KontakPasienScalarFieldEnum[]
  }

  /**
   * KontakPasien findFirstOrThrow
   */
  export type KontakPasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter, which KontakPasien to fetch.
     */
    where?: KontakPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KontakPasiens to fetch.
     */
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KontakPasiens.
     */
    cursor?: KontakPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KontakPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KontakPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KontakPasiens.
     */
    distinct?: KontakPasienScalarFieldEnum | KontakPasienScalarFieldEnum[]
  }

  /**
   * KontakPasien findMany
   */
  export type KontakPasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter, which KontakPasiens to fetch.
     */
    where?: KontakPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KontakPasiens to fetch.
     */
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KontakPasiens.
     */
    cursor?: KontakPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KontakPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KontakPasiens.
     */
    skip?: number
    distinct?: KontakPasienScalarFieldEnum | KontakPasienScalarFieldEnum[]
  }

  /**
   * KontakPasien create
   */
  export type KontakPasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * The data needed to create a KontakPasien.
     */
    data: XOR<KontakPasienCreateInput, KontakPasienUncheckedCreateInput>
  }

  /**
   * KontakPasien createMany
   */
  export type KontakPasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KontakPasiens.
     */
    data: KontakPasienCreateManyInput | KontakPasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KontakPasien createManyAndReturn
   */
  export type KontakPasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * The data used to create many KontakPasiens.
     */
    data: KontakPasienCreateManyInput | KontakPasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KontakPasien update
   */
  export type KontakPasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * The data needed to update a KontakPasien.
     */
    data: XOR<KontakPasienUpdateInput, KontakPasienUncheckedUpdateInput>
    /**
     * Choose, which KontakPasien to update.
     */
    where: KontakPasienWhereUniqueInput
  }

  /**
   * KontakPasien updateMany
   */
  export type KontakPasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KontakPasiens.
     */
    data: XOR<KontakPasienUpdateManyMutationInput, KontakPasienUncheckedUpdateManyInput>
    /**
     * Filter which KontakPasiens to update
     */
    where?: KontakPasienWhereInput
    /**
     * Limit how many KontakPasiens to update.
     */
    limit?: number
  }

  /**
   * KontakPasien updateManyAndReturn
   */
  export type KontakPasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * The data used to update KontakPasiens.
     */
    data: XOR<KontakPasienUpdateManyMutationInput, KontakPasienUncheckedUpdateManyInput>
    /**
     * Filter which KontakPasiens to update
     */
    where?: KontakPasienWhereInput
    /**
     * Limit how many KontakPasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KontakPasien upsert
   */
  export type KontakPasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * The filter to search for the KontakPasien to update in case it exists.
     */
    where: KontakPasienWhereUniqueInput
    /**
     * In case the KontakPasien found by the `where` argument doesn't exist, create a new KontakPasien with this data.
     */
    create: XOR<KontakPasienCreateInput, KontakPasienUncheckedCreateInput>
    /**
     * In case the KontakPasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KontakPasienUpdateInput, KontakPasienUncheckedUpdateInput>
  }

  /**
   * KontakPasien delete
   */
  export type KontakPasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    /**
     * Filter which KontakPasien to delete.
     */
    where: KontakPasienWhereUniqueInput
  }

  /**
   * KontakPasien deleteMany
   */
  export type KontakPasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KontakPasiens to delete
     */
    where?: KontakPasienWhereInput
    /**
     * Limit how many KontakPasiens to delete.
     */
    limit?: number
  }

  /**
   * KontakPasien without action
   */
  export type KontakPasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
  }


  /**
   * Model JenisKontak
   */

  export type AggregateJenisKontak = {
    _count: JenisKontakCountAggregateOutputType | null
    _min: JenisKontakMinAggregateOutputType | null
    _max: JenisKontakMaxAggregateOutputType | null
  }

  export type JenisKontakMinAggregateOutputType = {
    id: string | null
    namaJenis: string | null
  }

  export type JenisKontakMaxAggregateOutputType = {
    id: string | null
    namaJenis: string | null
  }

  export type JenisKontakCountAggregateOutputType = {
    id: number
    namaJenis: number
    _all: number
  }


  export type JenisKontakMinAggregateInputType = {
    id?: true
    namaJenis?: true
  }

  export type JenisKontakMaxAggregateInputType = {
    id?: true
    namaJenis?: true
  }

  export type JenisKontakCountAggregateInputType = {
    id?: true
    namaJenis?: true
    _all?: true
  }

  export type JenisKontakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisKontak to aggregate.
     */
    where?: JenisKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisKontaks to fetch.
     */
    orderBy?: JenisKontakOrderByWithRelationInput | JenisKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisKontaks
    **/
    _count?: true | JenisKontakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisKontakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisKontakMaxAggregateInputType
  }

  export type GetJenisKontakAggregateType<T extends JenisKontakAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisKontak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisKontak[P]>
      : GetScalarType<T[P], AggregateJenisKontak[P]>
  }




  export type JenisKontakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisKontakWhereInput
    orderBy?: JenisKontakOrderByWithAggregationInput | JenisKontakOrderByWithAggregationInput[]
    by: JenisKontakScalarFieldEnum[] | JenisKontakScalarFieldEnum
    having?: JenisKontakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisKontakCountAggregateInputType | true
    _min?: JenisKontakMinAggregateInputType
    _max?: JenisKontakMaxAggregateInputType
  }

  export type JenisKontakGroupByOutputType = {
    id: string
    namaJenis: string
    _count: JenisKontakCountAggregateOutputType | null
    _min: JenisKontakMinAggregateOutputType | null
    _max: JenisKontakMaxAggregateOutputType | null
  }

  type GetJenisKontakGroupByPayload<T extends JenisKontakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisKontakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisKontakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisKontakGroupByOutputType[P]>
            : GetScalarType<T[P], JenisKontakGroupByOutputType[P]>
        }
      >
    >


  export type JenisKontakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
    kontakPasien?: boolean | JenisKontak$kontakPasienArgs<ExtArgs>
    _count?: boolean | JenisKontakCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisKontak"]>

  export type JenisKontakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
  }, ExtArgs["result"]["jenisKontak"]>

  export type JenisKontakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenis?: boolean
  }, ExtArgs["result"]["jenisKontak"]>

  export type JenisKontakSelectScalar = {
    id?: boolean
    namaJenis?: boolean
  }

  export type JenisKontakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaJenis", ExtArgs["result"]["jenisKontak"]>
  export type JenisKontakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kontakPasien?: boolean | JenisKontak$kontakPasienArgs<ExtArgs>
    _count?: boolean | JenisKontakCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JenisKontakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JenisKontakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JenisKontakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisKontak"
    objects: {
      kontakPasien: Prisma.$KontakPasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaJenis: string
    }, ExtArgs["result"]["jenisKontak"]>
    composites: {}
  }

  type JenisKontakGetPayload<S extends boolean | null | undefined | JenisKontakDefaultArgs> = $Result.GetResult<Prisma.$JenisKontakPayload, S>

  type JenisKontakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisKontakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisKontakCountAggregateInputType | true
    }

  export interface JenisKontakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisKontak'], meta: { name: 'JenisKontak' } }
    /**
     * Find zero or one JenisKontak that matches the filter.
     * @param {JenisKontakFindUniqueArgs} args - Arguments to find a JenisKontak
     * @example
     * // Get one JenisKontak
     * const jenisKontak = await prisma.jenisKontak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisKontakFindUniqueArgs>(args: SelectSubset<T, JenisKontakFindUniqueArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisKontak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisKontakFindUniqueOrThrowArgs} args - Arguments to find a JenisKontak
     * @example
     * // Get one JenisKontak
     * const jenisKontak = await prisma.jenisKontak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisKontakFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisKontakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisKontak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakFindFirstArgs} args - Arguments to find a JenisKontak
     * @example
     * // Get one JenisKontak
     * const jenisKontak = await prisma.jenisKontak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisKontakFindFirstArgs>(args?: SelectSubset<T, JenisKontakFindFirstArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisKontak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakFindFirstOrThrowArgs} args - Arguments to find a JenisKontak
     * @example
     * // Get one JenisKontak
     * const jenisKontak = await prisma.jenisKontak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisKontakFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisKontakFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisKontaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisKontaks
     * const jenisKontaks = await prisma.jenisKontak.findMany()
     * 
     * // Get first 10 JenisKontaks
     * const jenisKontaks = await prisma.jenisKontak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisKontakWithIdOnly = await prisma.jenisKontak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenisKontakFindManyArgs>(args?: SelectSubset<T, JenisKontakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisKontak.
     * @param {JenisKontakCreateArgs} args - Arguments to create a JenisKontak.
     * @example
     * // Create one JenisKontak
     * const JenisKontak = await prisma.jenisKontak.create({
     *   data: {
     *     // ... data to create a JenisKontak
     *   }
     * })
     * 
     */
    create<T extends JenisKontakCreateArgs>(args: SelectSubset<T, JenisKontakCreateArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisKontaks.
     * @param {JenisKontakCreateManyArgs} args - Arguments to create many JenisKontaks.
     * @example
     * // Create many JenisKontaks
     * const jenisKontak = await prisma.jenisKontak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisKontakCreateManyArgs>(args?: SelectSubset<T, JenisKontakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisKontaks and returns the data saved in the database.
     * @param {JenisKontakCreateManyAndReturnArgs} args - Arguments to create many JenisKontaks.
     * @example
     * // Create many JenisKontaks
     * const jenisKontak = await prisma.jenisKontak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisKontaks and only return the `id`
     * const jenisKontakWithIdOnly = await prisma.jenisKontak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisKontakCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisKontakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JenisKontak.
     * @param {JenisKontakDeleteArgs} args - Arguments to delete one JenisKontak.
     * @example
     * // Delete one JenisKontak
     * const JenisKontak = await prisma.jenisKontak.delete({
     *   where: {
     *     // ... filter to delete one JenisKontak
     *   }
     * })
     * 
     */
    delete<T extends JenisKontakDeleteArgs>(args: SelectSubset<T, JenisKontakDeleteArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisKontak.
     * @param {JenisKontakUpdateArgs} args - Arguments to update one JenisKontak.
     * @example
     * // Update one JenisKontak
     * const jenisKontak = await prisma.jenisKontak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisKontakUpdateArgs>(args: SelectSubset<T, JenisKontakUpdateArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisKontaks.
     * @param {JenisKontakDeleteManyArgs} args - Arguments to filter JenisKontaks to delete.
     * @example
     * // Delete a few JenisKontaks
     * const { count } = await prisma.jenisKontak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisKontakDeleteManyArgs>(args?: SelectSubset<T, JenisKontakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisKontaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisKontaks
     * const jenisKontak = await prisma.jenisKontak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisKontakUpdateManyArgs>(args: SelectSubset<T, JenisKontakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisKontaks and returns the data updated in the database.
     * @param {JenisKontakUpdateManyAndReturnArgs} args - Arguments to update many JenisKontaks.
     * @example
     * // Update many JenisKontaks
     * const jenisKontak = await prisma.jenisKontak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JenisKontaks and only return the `id`
     * const jenisKontakWithIdOnly = await prisma.jenisKontak.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JenisKontakUpdateManyAndReturnArgs>(args: SelectSubset<T, JenisKontakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JenisKontak.
     * @param {JenisKontakUpsertArgs} args - Arguments to update or create a JenisKontak.
     * @example
     * // Update or create a JenisKontak
     * const jenisKontak = await prisma.jenisKontak.upsert({
     *   create: {
     *     // ... data to create a JenisKontak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisKontak we want to update
     *   }
     * })
     */
    upsert<T extends JenisKontakUpsertArgs>(args: SelectSubset<T, JenisKontakUpsertArgs<ExtArgs>>): Prisma__JenisKontakClient<$Result.GetResult<Prisma.$JenisKontakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisKontaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakCountArgs} args - Arguments to filter JenisKontaks to count.
     * @example
     * // Count the number of JenisKontaks
     * const count = await prisma.jenisKontak.count({
     *   where: {
     *     // ... the filter for the JenisKontaks we want to count
     *   }
     * })
    **/
    count<T extends JenisKontakCountArgs>(
      args?: Subset<T, JenisKontakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisKontakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisKontak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisKontakAggregateArgs>(args: Subset<T, JenisKontakAggregateArgs>): Prisma.PrismaPromise<GetJenisKontakAggregateType<T>>

    /**
     * Group by JenisKontak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisKontakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisKontakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisKontakGroupByArgs['orderBy'] }
        : { orderBy?: JenisKontakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisKontakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisKontakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisKontak model
   */
  readonly fields: JenisKontakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisKontak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisKontakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kontakPasien<T extends JenisKontak$kontakPasienArgs<ExtArgs> = {}>(args?: Subset<T, JenisKontak$kontakPasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KontakPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisKontak model
   */
  interface JenisKontakFieldRefs {
    readonly id: FieldRef<"JenisKontak", 'String'>
    readonly namaJenis: FieldRef<"JenisKontak", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JenisKontak findUnique
   */
  export type JenisKontakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter, which JenisKontak to fetch.
     */
    where: JenisKontakWhereUniqueInput
  }

  /**
   * JenisKontak findUniqueOrThrow
   */
  export type JenisKontakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter, which JenisKontak to fetch.
     */
    where: JenisKontakWhereUniqueInput
  }

  /**
   * JenisKontak findFirst
   */
  export type JenisKontakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter, which JenisKontak to fetch.
     */
    where?: JenisKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisKontaks to fetch.
     */
    orderBy?: JenisKontakOrderByWithRelationInput | JenisKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisKontaks.
     */
    cursor?: JenisKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisKontaks.
     */
    distinct?: JenisKontakScalarFieldEnum | JenisKontakScalarFieldEnum[]
  }

  /**
   * JenisKontak findFirstOrThrow
   */
  export type JenisKontakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter, which JenisKontak to fetch.
     */
    where?: JenisKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisKontaks to fetch.
     */
    orderBy?: JenisKontakOrderByWithRelationInput | JenisKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisKontaks.
     */
    cursor?: JenisKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisKontaks.
     */
    distinct?: JenisKontakScalarFieldEnum | JenisKontakScalarFieldEnum[]
  }

  /**
   * JenisKontak findMany
   */
  export type JenisKontakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter, which JenisKontaks to fetch.
     */
    where?: JenisKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisKontaks to fetch.
     */
    orderBy?: JenisKontakOrderByWithRelationInput | JenisKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisKontaks.
     */
    cursor?: JenisKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisKontaks.
     */
    skip?: number
    distinct?: JenisKontakScalarFieldEnum | JenisKontakScalarFieldEnum[]
  }

  /**
   * JenisKontak create
   */
  export type JenisKontakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisKontak.
     */
    data: XOR<JenisKontakCreateInput, JenisKontakUncheckedCreateInput>
  }

  /**
   * JenisKontak createMany
   */
  export type JenisKontakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisKontaks.
     */
    data: JenisKontakCreateManyInput | JenisKontakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisKontak createManyAndReturn
   */
  export type JenisKontakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * The data used to create many JenisKontaks.
     */
    data: JenisKontakCreateManyInput | JenisKontakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisKontak update
   */
  export type JenisKontakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisKontak.
     */
    data: XOR<JenisKontakUpdateInput, JenisKontakUncheckedUpdateInput>
    /**
     * Choose, which JenisKontak to update.
     */
    where: JenisKontakWhereUniqueInput
  }

  /**
   * JenisKontak updateMany
   */
  export type JenisKontakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisKontaks.
     */
    data: XOR<JenisKontakUpdateManyMutationInput, JenisKontakUncheckedUpdateManyInput>
    /**
     * Filter which JenisKontaks to update
     */
    where?: JenisKontakWhereInput
    /**
     * Limit how many JenisKontaks to update.
     */
    limit?: number
  }

  /**
   * JenisKontak updateManyAndReturn
   */
  export type JenisKontakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * The data used to update JenisKontaks.
     */
    data: XOR<JenisKontakUpdateManyMutationInput, JenisKontakUncheckedUpdateManyInput>
    /**
     * Filter which JenisKontaks to update
     */
    where?: JenisKontakWhereInput
    /**
     * Limit how many JenisKontaks to update.
     */
    limit?: number
  }

  /**
   * JenisKontak upsert
   */
  export type JenisKontakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisKontak to update in case it exists.
     */
    where: JenisKontakWhereUniqueInput
    /**
     * In case the JenisKontak found by the `where` argument doesn't exist, create a new JenisKontak with this data.
     */
    create: XOR<JenisKontakCreateInput, JenisKontakUncheckedCreateInput>
    /**
     * In case the JenisKontak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisKontakUpdateInput, JenisKontakUncheckedUpdateInput>
  }

  /**
   * JenisKontak delete
   */
  export type JenisKontakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
    /**
     * Filter which JenisKontak to delete.
     */
    where: JenisKontakWhereUniqueInput
  }

  /**
   * JenisKontak deleteMany
   */
  export type JenisKontakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisKontaks to delete
     */
    where?: JenisKontakWhereInput
    /**
     * Limit how many JenisKontaks to delete.
     */
    limit?: number
  }

  /**
   * JenisKontak.kontakPasien
   */
  export type JenisKontak$kontakPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KontakPasien
     */
    select?: KontakPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KontakPasien
     */
    omit?: KontakPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KontakPasienInclude<ExtArgs> | null
    where?: KontakPasienWhereInput
    orderBy?: KontakPasienOrderByWithRelationInput | KontakPasienOrderByWithRelationInput[]
    cursor?: KontakPasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KontakPasienScalarFieldEnum | KontakPasienScalarFieldEnum[]
  }

  /**
   * JenisKontak without action
   */
  export type JenisKontakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisKontak
     */
    select?: JenisKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisKontak
     */
    omit?: JenisKontakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisKontakInclude<ExtArgs> | null
  }


  /**
   * Model AlamatPasien
   */

  export type AggregateAlamatPasien = {
    _count: AlamatPasienCountAggregateOutputType | null
    _min: AlamatPasienMinAggregateOutputType | null
    _max: AlamatPasienMaxAggregateOutputType | null
  }

  export type AlamatPasienMinAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jalan: string | null
    rtRw: string | null
    lingkungan: string | null
    kelurahanDesa: string | null
    kecamatan: string | null
    kabupatenKota: string | null
  }

  export type AlamatPasienMaxAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jalan: string | null
    rtRw: string | null
    lingkungan: string | null
    kelurahanDesa: string | null
    kecamatan: string | null
    kabupatenKota: string | null
  }

  export type AlamatPasienCountAggregateOutputType = {
    id: number
    pasienId: number
    jalan: number
    rtRw: number
    lingkungan: number
    kelurahanDesa: number
    kecamatan: number
    kabupatenKota: number
    _all: number
  }


  export type AlamatPasienMinAggregateInputType = {
    id?: true
    pasienId?: true
    jalan?: true
    rtRw?: true
    lingkungan?: true
    kelurahanDesa?: true
    kecamatan?: true
    kabupatenKota?: true
  }

  export type AlamatPasienMaxAggregateInputType = {
    id?: true
    pasienId?: true
    jalan?: true
    rtRw?: true
    lingkungan?: true
    kelurahanDesa?: true
    kecamatan?: true
    kabupatenKota?: true
  }

  export type AlamatPasienCountAggregateInputType = {
    id?: true
    pasienId?: true
    jalan?: true
    rtRw?: true
    lingkungan?: true
    kelurahanDesa?: true
    kecamatan?: true
    kabupatenKota?: true
    _all?: true
  }

  export type AlamatPasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlamatPasien to aggregate.
     */
    where?: AlamatPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlamatPasiens to fetch.
     */
    orderBy?: AlamatPasienOrderByWithRelationInput | AlamatPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlamatPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlamatPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlamatPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlamatPasiens
    **/
    _count?: true | AlamatPasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlamatPasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlamatPasienMaxAggregateInputType
  }

  export type GetAlamatPasienAggregateType<T extends AlamatPasienAggregateArgs> = {
        [P in keyof T & keyof AggregateAlamatPasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlamatPasien[P]>
      : GetScalarType<T[P], AggregateAlamatPasien[P]>
  }




  export type AlamatPasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlamatPasienWhereInput
    orderBy?: AlamatPasienOrderByWithAggregationInput | AlamatPasienOrderByWithAggregationInput[]
    by: AlamatPasienScalarFieldEnum[] | AlamatPasienScalarFieldEnum
    having?: AlamatPasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlamatPasienCountAggregateInputType | true
    _min?: AlamatPasienMinAggregateInputType
    _max?: AlamatPasienMaxAggregateInputType
  }

  export type AlamatPasienGroupByOutputType = {
    id: string
    pasienId: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
    _count: AlamatPasienCountAggregateOutputType | null
    _min: AlamatPasienMinAggregateOutputType | null
    _max: AlamatPasienMaxAggregateOutputType | null
  }

  type GetAlamatPasienGroupByPayload<T extends AlamatPasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlamatPasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlamatPasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlamatPasienGroupByOutputType[P]>
            : GetScalarType<T[P], AlamatPasienGroupByOutputType[P]>
        }
      >
    >


  export type AlamatPasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jalan?: boolean
    rtRw?: boolean
    lingkungan?: boolean
    kelurahanDesa?: boolean
    kecamatan?: boolean
    kabupatenKota?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamatPasien"]>

  export type AlamatPasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jalan?: boolean
    rtRw?: boolean
    lingkungan?: boolean
    kelurahanDesa?: boolean
    kecamatan?: boolean
    kabupatenKota?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamatPasien"]>

  export type AlamatPasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jalan?: boolean
    rtRw?: boolean
    lingkungan?: boolean
    kelurahanDesa?: boolean
    kecamatan?: boolean
    kabupatenKota?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamatPasien"]>

  export type AlamatPasienSelectScalar = {
    id?: boolean
    pasienId?: boolean
    jalan?: boolean
    rtRw?: boolean
    lingkungan?: boolean
    kelurahanDesa?: boolean
    kecamatan?: boolean
    kabupatenKota?: boolean
  }

  export type AlamatPasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "jalan" | "rtRw" | "lingkungan" | "kelurahanDesa" | "kecamatan" | "kabupatenKota", ExtArgs["result"]["alamatPasien"]>
  export type AlamatPasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type AlamatPasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type AlamatPasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $AlamatPasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlamatPasien"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasienId: string
      jalan: string
      rtRw: string
      lingkungan: string
      kelurahanDesa: string
      kecamatan: string
      kabupatenKota: string
    }, ExtArgs["result"]["alamatPasien"]>
    composites: {}
  }

  type AlamatPasienGetPayload<S extends boolean | null | undefined | AlamatPasienDefaultArgs> = $Result.GetResult<Prisma.$AlamatPasienPayload, S>

  type AlamatPasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlamatPasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlamatPasienCountAggregateInputType | true
    }

  export interface AlamatPasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlamatPasien'], meta: { name: 'AlamatPasien' } }
    /**
     * Find zero or one AlamatPasien that matches the filter.
     * @param {AlamatPasienFindUniqueArgs} args - Arguments to find a AlamatPasien
     * @example
     * // Get one AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlamatPasienFindUniqueArgs>(args: SelectSubset<T, AlamatPasienFindUniqueArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlamatPasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlamatPasienFindUniqueOrThrowArgs} args - Arguments to find a AlamatPasien
     * @example
     * // Get one AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlamatPasienFindUniqueOrThrowArgs>(args: SelectSubset<T, AlamatPasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlamatPasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienFindFirstArgs} args - Arguments to find a AlamatPasien
     * @example
     * // Get one AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlamatPasienFindFirstArgs>(args?: SelectSubset<T, AlamatPasienFindFirstArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlamatPasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienFindFirstOrThrowArgs} args - Arguments to find a AlamatPasien
     * @example
     * // Get one AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlamatPasienFindFirstOrThrowArgs>(args?: SelectSubset<T, AlamatPasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlamatPasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlamatPasiens
     * const alamatPasiens = await prisma.alamatPasien.findMany()
     * 
     * // Get first 10 AlamatPasiens
     * const alamatPasiens = await prisma.alamatPasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alamatPasienWithIdOnly = await prisma.alamatPasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlamatPasienFindManyArgs>(args?: SelectSubset<T, AlamatPasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlamatPasien.
     * @param {AlamatPasienCreateArgs} args - Arguments to create a AlamatPasien.
     * @example
     * // Create one AlamatPasien
     * const AlamatPasien = await prisma.alamatPasien.create({
     *   data: {
     *     // ... data to create a AlamatPasien
     *   }
     * })
     * 
     */
    create<T extends AlamatPasienCreateArgs>(args: SelectSubset<T, AlamatPasienCreateArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlamatPasiens.
     * @param {AlamatPasienCreateManyArgs} args - Arguments to create many AlamatPasiens.
     * @example
     * // Create many AlamatPasiens
     * const alamatPasien = await prisma.alamatPasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlamatPasienCreateManyArgs>(args?: SelectSubset<T, AlamatPasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlamatPasiens and returns the data saved in the database.
     * @param {AlamatPasienCreateManyAndReturnArgs} args - Arguments to create many AlamatPasiens.
     * @example
     * // Create many AlamatPasiens
     * const alamatPasien = await prisma.alamatPasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlamatPasiens and only return the `id`
     * const alamatPasienWithIdOnly = await prisma.alamatPasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlamatPasienCreateManyAndReturnArgs>(args?: SelectSubset<T, AlamatPasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlamatPasien.
     * @param {AlamatPasienDeleteArgs} args - Arguments to delete one AlamatPasien.
     * @example
     * // Delete one AlamatPasien
     * const AlamatPasien = await prisma.alamatPasien.delete({
     *   where: {
     *     // ... filter to delete one AlamatPasien
     *   }
     * })
     * 
     */
    delete<T extends AlamatPasienDeleteArgs>(args: SelectSubset<T, AlamatPasienDeleteArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlamatPasien.
     * @param {AlamatPasienUpdateArgs} args - Arguments to update one AlamatPasien.
     * @example
     * // Update one AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlamatPasienUpdateArgs>(args: SelectSubset<T, AlamatPasienUpdateArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlamatPasiens.
     * @param {AlamatPasienDeleteManyArgs} args - Arguments to filter AlamatPasiens to delete.
     * @example
     * // Delete a few AlamatPasiens
     * const { count } = await prisma.alamatPasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlamatPasienDeleteManyArgs>(args?: SelectSubset<T, AlamatPasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlamatPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlamatPasiens
     * const alamatPasien = await prisma.alamatPasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlamatPasienUpdateManyArgs>(args: SelectSubset<T, AlamatPasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlamatPasiens and returns the data updated in the database.
     * @param {AlamatPasienUpdateManyAndReturnArgs} args - Arguments to update many AlamatPasiens.
     * @example
     * // Update many AlamatPasiens
     * const alamatPasien = await prisma.alamatPasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlamatPasiens and only return the `id`
     * const alamatPasienWithIdOnly = await prisma.alamatPasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlamatPasienUpdateManyAndReturnArgs>(args: SelectSubset<T, AlamatPasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlamatPasien.
     * @param {AlamatPasienUpsertArgs} args - Arguments to update or create a AlamatPasien.
     * @example
     * // Update or create a AlamatPasien
     * const alamatPasien = await prisma.alamatPasien.upsert({
     *   create: {
     *     // ... data to create a AlamatPasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlamatPasien we want to update
     *   }
     * })
     */
    upsert<T extends AlamatPasienUpsertArgs>(args: SelectSubset<T, AlamatPasienUpsertArgs<ExtArgs>>): Prisma__AlamatPasienClient<$Result.GetResult<Prisma.$AlamatPasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlamatPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienCountArgs} args - Arguments to filter AlamatPasiens to count.
     * @example
     * // Count the number of AlamatPasiens
     * const count = await prisma.alamatPasien.count({
     *   where: {
     *     // ... the filter for the AlamatPasiens we want to count
     *   }
     * })
    **/
    count<T extends AlamatPasienCountArgs>(
      args?: Subset<T, AlamatPasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlamatPasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlamatPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlamatPasienAggregateArgs>(args: Subset<T, AlamatPasienAggregateArgs>): Prisma.PrismaPromise<GetAlamatPasienAggregateType<T>>

    /**
     * Group by AlamatPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatPasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlamatPasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlamatPasienGroupByArgs['orderBy'] }
        : { orderBy?: AlamatPasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlamatPasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlamatPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlamatPasien model
   */
  readonly fields: AlamatPasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlamatPasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlamatPasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlamatPasien model
   */
  interface AlamatPasienFieldRefs {
    readonly id: FieldRef<"AlamatPasien", 'String'>
    readonly pasienId: FieldRef<"AlamatPasien", 'String'>
    readonly jalan: FieldRef<"AlamatPasien", 'String'>
    readonly rtRw: FieldRef<"AlamatPasien", 'String'>
    readonly lingkungan: FieldRef<"AlamatPasien", 'String'>
    readonly kelurahanDesa: FieldRef<"AlamatPasien", 'String'>
    readonly kecamatan: FieldRef<"AlamatPasien", 'String'>
    readonly kabupatenKota: FieldRef<"AlamatPasien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlamatPasien findUnique
   */
  export type AlamatPasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter, which AlamatPasien to fetch.
     */
    where: AlamatPasienWhereUniqueInput
  }

  /**
   * AlamatPasien findUniqueOrThrow
   */
  export type AlamatPasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter, which AlamatPasien to fetch.
     */
    where: AlamatPasienWhereUniqueInput
  }

  /**
   * AlamatPasien findFirst
   */
  export type AlamatPasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter, which AlamatPasien to fetch.
     */
    where?: AlamatPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlamatPasiens to fetch.
     */
    orderBy?: AlamatPasienOrderByWithRelationInput | AlamatPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlamatPasiens.
     */
    cursor?: AlamatPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlamatPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlamatPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlamatPasiens.
     */
    distinct?: AlamatPasienScalarFieldEnum | AlamatPasienScalarFieldEnum[]
  }

  /**
   * AlamatPasien findFirstOrThrow
   */
  export type AlamatPasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter, which AlamatPasien to fetch.
     */
    where?: AlamatPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlamatPasiens to fetch.
     */
    orderBy?: AlamatPasienOrderByWithRelationInput | AlamatPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlamatPasiens.
     */
    cursor?: AlamatPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlamatPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlamatPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlamatPasiens.
     */
    distinct?: AlamatPasienScalarFieldEnum | AlamatPasienScalarFieldEnum[]
  }

  /**
   * AlamatPasien findMany
   */
  export type AlamatPasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter, which AlamatPasiens to fetch.
     */
    where?: AlamatPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlamatPasiens to fetch.
     */
    orderBy?: AlamatPasienOrderByWithRelationInput | AlamatPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlamatPasiens.
     */
    cursor?: AlamatPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlamatPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlamatPasiens.
     */
    skip?: number
    distinct?: AlamatPasienScalarFieldEnum | AlamatPasienScalarFieldEnum[]
  }

  /**
   * AlamatPasien create
   */
  export type AlamatPasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * The data needed to create a AlamatPasien.
     */
    data: XOR<AlamatPasienCreateInput, AlamatPasienUncheckedCreateInput>
  }

  /**
   * AlamatPasien createMany
   */
  export type AlamatPasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlamatPasiens.
     */
    data: AlamatPasienCreateManyInput | AlamatPasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlamatPasien createManyAndReturn
   */
  export type AlamatPasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * The data used to create many AlamatPasiens.
     */
    data: AlamatPasienCreateManyInput | AlamatPasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlamatPasien update
   */
  export type AlamatPasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * The data needed to update a AlamatPasien.
     */
    data: XOR<AlamatPasienUpdateInput, AlamatPasienUncheckedUpdateInput>
    /**
     * Choose, which AlamatPasien to update.
     */
    where: AlamatPasienWhereUniqueInput
  }

  /**
   * AlamatPasien updateMany
   */
  export type AlamatPasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlamatPasiens.
     */
    data: XOR<AlamatPasienUpdateManyMutationInput, AlamatPasienUncheckedUpdateManyInput>
    /**
     * Filter which AlamatPasiens to update
     */
    where?: AlamatPasienWhereInput
    /**
     * Limit how many AlamatPasiens to update.
     */
    limit?: number
  }

  /**
   * AlamatPasien updateManyAndReturn
   */
  export type AlamatPasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * The data used to update AlamatPasiens.
     */
    data: XOR<AlamatPasienUpdateManyMutationInput, AlamatPasienUncheckedUpdateManyInput>
    /**
     * Filter which AlamatPasiens to update
     */
    where?: AlamatPasienWhereInput
    /**
     * Limit how many AlamatPasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlamatPasien upsert
   */
  export type AlamatPasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * The filter to search for the AlamatPasien to update in case it exists.
     */
    where: AlamatPasienWhereUniqueInput
    /**
     * In case the AlamatPasien found by the `where` argument doesn't exist, create a new AlamatPasien with this data.
     */
    create: XOR<AlamatPasienCreateInput, AlamatPasienUncheckedCreateInput>
    /**
     * In case the AlamatPasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlamatPasienUpdateInput, AlamatPasienUncheckedUpdateInput>
  }

  /**
   * AlamatPasien delete
   */
  export type AlamatPasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
    /**
     * Filter which AlamatPasien to delete.
     */
    where: AlamatPasienWhereUniqueInput
  }

  /**
   * AlamatPasien deleteMany
   */
  export type AlamatPasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlamatPasiens to delete
     */
    where?: AlamatPasienWhereInput
    /**
     * Limit how many AlamatPasiens to delete.
     */
    limit?: number
  }

  /**
   * AlamatPasien without action
   */
  export type AlamatPasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlamatPasien
     */
    select?: AlamatPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlamatPasien
     */
    omit?: AlamatPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlamatPasienInclude<ExtArgs> | null
  }


  /**
   * Model DokumenPasien
   */

  export type AggregateDokumenPasien = {
    _count: DokumenPasienCountAggregateOutputType | null
    _min: DokumenPasienMinAggregateOutputType | null
    _max: DokumenPasienMaxAggregateOutputType | null
  }

  export type DokumenPasienMinAggregateOutputType = {
    id: string | null
    pasienId: string | null
    tipeDokumen: string | null
    fileUrl: string | null
  }

  export type DokumenPasienMaxAggregateOutputType = {
    id: string | null
    pasienId: string | null
    tipeDokumen: string | null
    fileUrl: string | null
  }

  export type DokumenPasienCountAggregateOutputType = {
    id: number
    pasienId: number
    tipeDokumen: number
    fileUrl: number
    _all: number
  }


  export type DokumenPasienMinAggregateInputType = {
    id?: true
    pasienId?: true
    tipeDokumen?: true
    fileUrl?: true
  }

  export type DokumenPasienMaxAggregateInputType = {
    id?: true
    pasienId?: true
    tipeDokumen?: true
    fileUrl?: true
  }

  export type DokumenPasienCountAggregateInputType = {
    id?: true
    pasienId?: true
    tipeDokumen?: true
    fileUrl?: true
    _all?: true
  }

  export type DokumenPasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DokumenPasien to aggregate.
     */
    where?: DokumenPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPasiens to fetch.
     */
    orderBy?: DokumenPasienOrderByWithRelationInput | DokumenPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokumenPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DokumenPasiens
    **/
    _count?: true | DokumenPasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumenPasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumenPasienMaxAggregateInputType
  }

  export type GetDokumenPasienAggregateType<T extends DokumenPasienAggregateArgs> = {
        [P in keyof T & keyof AggregateDokumenPasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokumenPasien[P]>
      : GetScalarType<T[P], AggregateDokumenPasien[P]>
  }




  export type DokumenPasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenPasienWhereInput
    orderBy?: DokumenPasienOrderByWithAggregationInput | DokumenPasienOrderByWithAggregationInput[]
    by: DokumenPasienScalarFieldEnum[] | DokumenPasienScalarFieldEnum
    having?: DokumenPasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumenPasienCountAggregateInputType | true
    _min?: DokumenPasienMinAggregateInputType
    _max?: DokumenPasienMaxAggregateInputType
  }

  export type DokumenPasienGroupByOutputType = {
    id: string
    pasienId: string
    tipeDokumen: string
    fileUrl: string
    _count: DokumenPasienCountAggregateOutputType | null
    _min: DokumenPasienMinAggregateOutputType | null
    _max: DokumenPasienMaxAggregateOutputType | null
  }

  type GetDokumenPasienGroupByPayload<T extends DokumenPasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumenPasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumenPasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumenPasienGroupByOutputType[P]>
            : GetScalarType<T[P], DokumenPasienGroupByOutputType[P]>
        }
      >
    >


  export type DokumenPasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    tipeDokumen?: boolean
    fileUrl?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumenPasien"]>

  export type DokumenPasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    tipeDokumen?: boolean
    fileUrl?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumenPasien"]>

  export type DokumenPasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    tipeDokumen?: boolean
    fileUrl?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumenPasien"]>

  export type DokumenPasienSelectScalar = {
    id?: boolean
    pasienId?: boolean
    tipeDokumen?: boolean
    fileUrl?: boolean
  }

  export type DokumenPasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "tipeDokumen" | "fileUrl", ExtArgs["result"]["dokumenPasien"]>
  export type DokumenPasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type DokumenPasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type DokumenPasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $DokumenPasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DokumenPasien"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasienId: string
      tipeDokumen: string
      fileUrl: string
    }, ExtArgs["result"]["dokumenPasien"]>
    composites: {}
  }

  type DokumenPasienGetPayload<S extends boolean | null | undefined | DokumenPasienDefaultArgs> = $Result.GetResult<Prisma.$DokumenPasienPayload, S>

  type DokumenPasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokumenPasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumenPasienCountAggregateInputType | true
    }

  export interface DokumenPasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DokumenPasien'], meta: { name: 'DokumenPasien' } }
    /**
     * Find zero or one DokumenPasien that matches the filter.
     * @param {DokumenPasienFindUniqueArgs} args - Arguments to find a DokumenPasien
     * @example
     * // Get one DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokumenPasienFindUniqueArgs>(args: SelectSubset<T, DokumenPasienFindUniqueArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DokumenPasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokumenPasienFindUniqueOrThrowArgs} args - Arguments to find a DokumenPasien
     * @example
     * // Get one DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokumenPasienFindUniqueOrThrowArgs>(args: SelectSubset<T, DokumenPasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DokumenPasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienFindFirstArgs} args - Arguments to find a DokumenPasien
     * @example
     * // Get one DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokumenPasienFindFirstArgs>(args?: SelectSubset<T, DokumenPasienFindFirstArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DokumenPasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienFindFirstOrThrowArgs} args - Arguments to find a DokumenPasien
     * @example
     * // Get one DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokumenPasienFindFirstOrThrowArgs>(args?: SelectSubset<T, DokumenPasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DokumenPasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DokumenPasiens
     * const dokumenPasiens = await prisma.dokumenPasien.findMany()
     * 
     * // Get first 10 DokumenPasiens
     * const dokumenPasiens = await prisma.dokumenPasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumenPasienWithIdOnly = await prisma.dokumenPasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokumenPasienFindManyArgs>(args?: SelectSubset<T, DokumenPasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DokumenPasien.
     * @param {DokumenPasienCreateArgs} args - Arguments to create a DokumenPasien.
     * @example
     * // Create one DokumenPasien
     * const DokumenPasien = await prisma.dokumenPasien.create({
     *   data: {
     *     // ... data to create a DokumenPasien
     *   }
     * })
     * 
     */
    create<T extends DokumenPasienCreateArgs>(args: SelectSubset<T, DokumenPasienCreateArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DokumenPasiens.
     * @param {DokumenPasienCreateManyArgs} args - Arguments to create many DokumenPasiens.
     * @example
     * // Create many DokumenPasiens
     * const dokumenPasien = await prisma.dokumenPasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokumenPasienCreateManyArgs>(args?: SelectSubset<T, DokumenPasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DokumenPasiens and returns the data saved in the database.
     * @param {DokumenPasienCreateManyAndReturnArgs} args - Arguments to create many DokumenPasiens.
     * @example
     * // Create many DokumenPasiens
     * const dokumenPasien = await prisma.dokumenPasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DokumenPasiens and only return the `id`
     * const dokumenPasienWithIdOnly = await prisma.dokumenPasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DokumenPasienCreateManyAndReturnArgs>(args?: SelectSubset<T, DokumenPasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DokumenPasien.
     * @param {DokumenPasienDeleteArgs} args - Arguments to delete one DokumenPasien.
     * @example
     * // Delete one DokumenPasien
     * const DokumenPasien = await prisma.dokumenPasien.delete({
     *   where: {
     *     // ... filter to delete one DokumenPasien
     *   }
     * })
     * 
     */
    delete<T extends DokumenPasienDeleteArgs>(args: SelectSubset<T, DokumenPasienDeleteArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DokumenPasien.
     * @param {DokumenPasienUpdateArgs} args - Arguments to update one DokumenPasien.
     * @example
     * // Update one DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokumenPasienUpdateArgs>(args: SelectSubset<T, DokumenPasienUpdateArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DokumenPasiens.
     * @param {DokumenPasienDeleteManyArgs} args - Arguments to filter DokumenPasiens to delete.
     * @example
     * // Delete a few DokumenPasiens
     * const { count } = await prisma.dokumenPasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokumenPasienDeleteManyArgs>(args?: SelectSubset<T, DokumenPasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DokumenPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DokumenPasiens
     * const dokumenPasien = await prisma.dokumenPasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokumenPasienUpdateManyArgs>(args: SelectSubset<T, DokumenPasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DokumenPasiens and returns the data updated in the database.
     * @param {DokumenPasienUpdateManyAndReturnArgs} args - Arguments to update many DokumenPasiens.
     * @example
     * // Update many DokumenPasiens
     * const dokumenPasien = await prisma.dokumenPasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DokumenPasiens and only return the `id`
     * const dokumenPasienWithIdOnly = await prisma.dokumenPasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DokumenPasienUpdateManyAndReturnArgs>(args: SelectSubset<T, DokumenPasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DokumenPasien.
     * @param {DokumenPasienUpsertArgs} args - Arguments to update or create a DokumenPasien.
     * @example
     * // Update or create a DokumenPasien
     * const dokumenPasien = await prisma.dokumenPasien.upsert({
     *   create: {
     *     // ... data to create a DokumenPasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DokumenPasien we want to update
     *   }
     * })
     */
    upsert<T extends DokumenPasienUpsertArgs>(args: SelectSubset<T, DokumenPasienUpsertArgs<ExtArgs>>): Prisma__DokumenPasienClient<$Result.GetResult<Prisma.$DokumenPasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DokumenPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienCountArgs} args - Arguments to filter DokumenPasiens to count.
     * @example
     * // Count the number of DokumenPasiens
     * const count = await prisma.dokumenPasien.count({
     *   where: {
     *     // ... the filter for the DokumenPasiens we want to count
     *   }
     * })
    **/
    count<T extends DokumenPasienCountArgs>(
      args?: Subset<T, DokumenPasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumenPasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DokumenPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DokumenPasienAggregateArgs>(args: Subset<T, DokumenPasienAggregateArgs>): Prisma.PrismaPromise<GetDokumenPasienAggregateType<T>>

    /**
     * Group by DokumenPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DokumenPasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokumenPasienGroupByArgs['orderBy'] }
        : { orderBy?: DokumenPasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DokumenPasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumenPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DokumenPasien model
   */
  readonly fields: DokumenPasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DokumenPasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokumenPasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DokumenPasien model
   */
  interface DokumenPasienFieldRefs {
    readonly id: FieldRef<"DokumenPasien", 'String'>
    readonly pasienId: FieldRef<"DokumenPasien", 'String'>
    readonly tipeDokumen: FieldRef<"DokumenPasien", 'String'>
    readonly fileUrl: FieldRef<"DokumenPasien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DokumenPasien findUnique
   */
  export type DokumenPasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPasien to fetch.
     */
    where: DokumenPasienWhereUniqueInput
  }

  /**
   * DokumenPasien findUniqueOrThrow
   */
  export type DokumenPasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPasien to fetch.
     */
    where: DokumenPasienWhereUniqueInput
  }

  /**
   * DokumenPasien findFirst
   */
  export type DokumenPasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPasien to fetch.
     */
    where?: DokumenPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPasiens to fetch.
     */
    orderBy?: DokumenPasienOrderByWithRelationInput | DokumenPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DokumenPasiens.
     */
    cursor?: DokumenPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DokumenPasiens.
     */
    distinct?: DokumenPasienScalarFieldEnum | DokumenPasienScalarFieldEnum[]
  }

  /**
   * DokumenPasien findFirstOrThrow
   */
  export type DokumenPasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPasien to fetch.
     */
    where?: DokumenPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPasiens to fetch.
     */
    orderBy?: DokumenPasienOrderByWithRelationInput | DokumenPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DokumenPasiens.
     */
    cursor?: DokumenPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DokumenPasiens.
     */
    distinct?: DokumenPasienScalarFieldEnum | DokumenPasienScalarFieldEnum[]
  }

  /**
   * DokumenPasien findMany
   */
  export type DokumenPasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPasiens to fetch.
     */
    where?: DokumenPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPasiens to fetch.
     */
    orderBy?: DokumenPasienOrderByWithRelationInput | DokumenPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DokumenPasiens.
     */
    cursor?: DokumenPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPasiens.
     */
    skip?: number
    distinct?: DokumenPasienScalarFieldEnum | DokumenPasienScalarFieldEnum[]
  }

  /**
   * DokumenPasien create
   */
  export type DokumenPasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * The data needed to create a DokumenPasien.
     */
    data: XOR<DokumenPasienCreateInput, DokumenPasienUncheckedCreateInput>
  }

  /**
   * DokumenPasien createMany
   */
  export type DokumenPasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DokumenPasiens.
     */
    data: DokumenPasienCreateManyInput | DokumenPasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DokumenPasien createManyAndReturn
   */
  export type DokumenPasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * The data used to create many DokumenPasiens.
     */
    data: DokumenPasienCreateManyInput | DokumenPasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DokumenPasien update
   */
  export type DokumenPasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * The data needed to update a DokumenPasien.
     */
    data: XOR<DokumenPasienUpdateInput, DokumenPasienUncheckedUpdateInput>
    /**
     * Choose, which DokumenPasien to update.
     */
    where: DokumenPasienWhereUniqueInput
  }

  /**
   * DokumenPasien updateMany
   */
  export type DokumenPasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DokumenPasiens.
     */
    data: XOR<DokumenPasienUpdateManyMutationInput, DokumenPasienUncheckedUpdateManyInput>
    /**
     * Filter which DokumenPasiens to update
     */
    where?: DokumenPasienWhereInput
    /**
     * Limit how many DokumenPasiens to update.
     */
    limit?: number
  }

  /**
   * DokumenPasien updateManyAndReturn
   */
  export type DokumenPasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * The data used to update DokumenPasiens.
     */
    data: XOR<DokumenPasienUpdateManyMutationInput, DokumenPasienUncheckedUpdateManyInput>
    /**
     * Filter which DokumenPasiens to update
     */
    where?: DokumenPasienWhereInput
    /**
     * Limit how many DokumenPasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DokumenPasien upsert
   */
  export type DokumenPasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * The filter to search for the DokumenPasien to update in case it exists.
     */
    where: DokumenPasienWhereUniqueInput
    /**
     * In case the DokumenPasien found by the `where` argument doesn't exist, create a new DokumenPasien with this data.
     */
    create: XOR<DokumenPasienCreateInput, DokumenPasienUncheckedCreateInput>
    /**
     * In case the DokumenPasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokumenPasienUpdateInput, DokumenPasienUncheckedUpdateInput>
  }

  /**
   * DokumenPasien delete
   */
  export type DokumenPasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
    /**
     * Filter which DokumenPasien to delete.
     */
    where: DokumenPasienWhereUniqueInput
  }

  /**
   * DokumenPasien deleteMany
   */
  export type DokumenPasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DokumenPasiens to delete
     */
    where?: DokumenPasienWhereInput
    /**
     * Limit how many DokumenPasiens to delete.
     */
    limit?: number
  }

  /**
   * DokumenPasien without action
   */
  export type DokumenPasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPasien
     */
    select?: DokumenPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPasien
     */
    omit?: DokumenPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPasienInclude<ExtArgs> | null
  }


  /**
   * Model IdentifierPasien
   */

  export type AggregateIdentifierPasien = {
    _count: IdentifierPasienCountAggregateOutputType | null
    _min: IdentifierPasienMinAggregateOutputType | null
    _max: IdentifierPasienMaxAggregateOutputType | null
  }

  export type IdentifierPasienMinAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jenisIdentifierId: string | null
    nilaiIdentifier: string | null
    use: string | null
  }

  export type IdentifierPasienMaxAggregateOutputType = {
    id: string | null
    pasienId: string | null
    jenisIdentifierId: string | null
    nilaiIdentifier: string | null
    use: string | null
  }

  export type IdentifierPasienCountAggregateOutputType = {
    id: number
    pasienId: number
    jenisIdentifierId: number
    nilaiIdentifier: number
    use: number
    _all: number
  }


  export type IdentifierPasienMinAggregateInputType = {
    id?: true
    pasienId?: true
    jenisIdentifierId?: true
    nilaiIdentifier?: true
    use?: true
  }

  export type IdentifierPasienMaxAggregateInputType = {
    id?: true
    pasienId?: true
    jenisIdentifierId?: true
    nilaiIdentifier?: true
    use?: true
  }

  export type IdentifierPasienCountAggregateInputType = {
    id?: true
    pasienId?: true
    jenisIdentifierId?: true
    nilaiIdentifier?: true
    use?: true
    _all?: true
  }

  export type IdentifierPasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentifierPasien to aggregate.
     */
    where?: IdentifierPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentifierPasiens to fetch.
     */
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentifierPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentifierPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentifierPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdentifierPasiens
    **/
    _count?: true | IdentifierPasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentifierPasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentifierPasienMaxAggregateInputType
  }

  export type GetIdentifierPasienAggregateType<T extends IdentifierPasienAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentifierPasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentifierPasien[P]>
      : GetScalarType<T[P], AggregateIdentifierPasien[P]>
  }




  export type IdentifierPasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentifierPasienWhereInput
    orderBy?: IdentifierPasienOrderByWithAggregationInput | IdentifierPasienOrderByWithAggregationInput[]
    by: IdentifierPasienScalarFieldEnum[] | IdentifierPasienScalarFieldEnum
    having?: IdentifierPasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentifierPasienCountAggregateInputType | true
    _min?: IdentifierPasienMinAggregateInputType
    _max?: IdentifierPasienMaxAggregateInputType
  }

  export type IdentifierPasienGroupByOutputType = {
    id: string
    pasienId: string
    jenisIdentifierId: string
    nilaiIdentifier: string
    use: string
    _count: IdentifierPasienCountAggregateOutputType | null
    _min: IdentifierPasienMinAggregateOutputType | null
    _max: IdentifierPasienMaxAggregateOutputType | null
  }

  type GetIdentifierPasienGroupByPayload<T extends IdentifierPasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentifierPasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentifierPasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentifierPasienGroupByOutputType[P]>
            : GetScalarType<T[P], IdentifierPasienGroupByOutputType[P]>
        }
      >
    >


  export type IdentifierPasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisIdentifierId?: boolean
    nilaiIdentifier?: boolean
    use?: boolean
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identifierPasien"]>

  export type IdentifierPasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisIdentifierId?: boolean
    nilaiIdentifier?: boolean
    use?: boolean
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identifierPasien"]>

  export type IdentifierPasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasienId?: boolean
    jenisIdentifierId?: boolean
    nilaiIdentifier?: boolean
    use?: boolean
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identifierPasien"]>

  export type IdentifierPasienSelectScalar = {
    id?: boolean
    pasienId?: boolean
    jenisIdentifierId?: boolean
    nilaiIdentifier?: boolean
    use?: boolean
  }

  export type IdentifierPasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasienId" | "jenisIdentifierId" | "nilaiIdentifier" | "use", ExtArgs["result"]["identifierPasien"]>
  export type IdentifierPasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type IdentifierPasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }
  export type IdentifierPasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenisIdentifier?: boolean | JenisIdentifierDefaultArgs<ExtArgs>
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
  }

  export type $IdentifierPasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdentifierPasien"
    objects: {
      jenisIdentifier: Prisma.$JenisIdentifierPayload<ExtArgs>
      pasien: Prisma.$PasienPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasienId: string
      jenisIdentifierId: string
      nilaiIdentifier: string
      use: string
    }, ExtArgs["result"]["identifierPasien"]>
    composites: {}
  }

  type IdentifierPasienGetPayload<S extends boolean | null | undefined | IdentifierPasienDefaultArgs> = $Result.GetResult<Prisma.$IdentifierPasienPayload, S>

  type IdentifierPasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentifierPasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentifierPasienCountAggregateInputType | true
    }

  export interface IdentifierPasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdentifierPasien'], meta: { name: 'IdentifierPasien' } }
    /**
     * Find zero or one IdentifierPasien that matches the filter.
     * @param {IdentifierPasienFindUniqueArgs} args - Arguments to find a IdentifierPasien
     * @example
     * // Get one IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentifierPasienFindUniqueArgs>(args: SelectSubset<T, IdentifierPasienFindUniqueArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentifierPasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentifierPasienFindUniqueOrThrowArgs} args - Arguments to find a IdentifierPasien
     * @example
     * // Get one IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentifierPasienFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentifierPasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentifierPasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienFindFirstArgs} args - Arguments to find a IdentifierPasien
     * @example
     * // Get one IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentifierPasienFindFirstArgs>(args?: SelectSubset<T, IdentifierPasienFindFirstArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentifierPasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienFindFirstOrThrowArgs} args - Arguments to find a IdentifierPasien
     * @example
     * // Get one IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentifierPasienFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentifierPasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentifierPasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentifierPasiens
     * const identifierPasiens = await prisma.identifierPasien.findMany()
     * 
     * // Get first 10 IdentifierPasiens
     * const identifierPasiens = await prisma.identifierPasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identifierPasienWithIdOnly = await prisma.identifierPasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentifierPasienFindManyArgs>(args?: SelectSubset<T, IdentifierPasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentifierPasien.
     * @param {IdentifierPasienCreateArgs} args - Arguments to create a IdentifierPasien.
     * @example
     * // Create one IdentifierPasien
     * const IdentifierPasien = await prisma.identifierPasien.create({
     *   data: {
     *     // ... data to create a IdentifierPasien
     *   }
     * })
     * 
     */
    create<T extends IdentifierPasienCreateArgs>(args: SelectSubset<T, IdentifierPasienCreateArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentifierPasiens.
     * @param {IdentifierPasienCreateManyArgs} args - Arguments to create many IdentifierPasiens.
     * @example
     * // Create many IdentifierPasiens
     * const identifierPasien = await prisma.identifierPasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentifierPasienCreateManyArgs>(args?: SelectSubset<T, IdentifierPasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdentifierPasiens and returns the data saved in the database.
     * @param {IdentifierPasienCreateManyAndReturnArgs} args - Arguments to create many IdentifierPasiens.
     * @example
     * // Create many IdentifierPasiens
     * const identifierPasien = await prisma.identifierPasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdentifierPasiens and only return the `id`
     * const identifierPasienWithIdOnly = await prisma.identifierPasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentifierPasienCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentifierPasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdentifierPasien.
     * @param {IdentifierPasienDeleteArgs} args - Arguments to delete one IdentifierPasien.
     * @example
     * // Delete one IdentifierPasien
     * const IdentifierPasien = await prisma.identifierPasien.delete({
     *   where: {
     *     // ... filter to delete one IdentifierPasien
     *   }
     * })
     * 
     */
    delete<T extends IdentifierPasienDeleteArgs>(args: SelectSubset<T, IdentifierPasienDeleteArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentifierPasien.
     * @param {IdentifierPasienUpdateArgs} args - Arguments to update one IdentifierPasien.
     * @example
     * // Update one IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentifierPasienUpdateArgs>(args: SelectSubset<T, IdentifierPasienUpdateArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentifierPasiens.
     * @param {IdentifierPasienDeleteManyArgs} args - Arguments to filter IdentifierPasiens to delete.
     * @example
     * // Delete a few IdentifierPasiens
     * const { count } = await prisma.identifierPasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentifierPasienDeleteManyArgs>(args?: SelectSubset<T, IdentifierPasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentifierPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentifierPasiens
     * const identifierPasien = await prisma.identifierPasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentifierPasienUpdateManyArgs>(args: SelectSubset<T, IdentifierPasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentifierPasiens and returns the data updated in the database.
     * @param {IdentifierPasienUpdateManyAndReturnArgs} args - Arguments to update many IdentifierPasiens.
     * @example
     * // Update many IdentifierPasiens
     * const identifierPasien = await prisma.identifierPasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdentifierPasiens and only return the `id`
     * const identifierPasienWithIdOnly = await prisma.identifierPasien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdentifierPasienUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentifierPasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdentifierPasien.
     * @param {IdentifierPasienUpsertArgs} args - Arguments to update or create a IdentifierPasien.
     * @example
     * // Update or create a IdentifierPasien
     * const identifierPasien = await prisma.identifierPasien.upsert({
     *   create: {
     *     // ... data to create a IdentifierPasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentifierPasien we want to update
     *   }
     * })
     */
    upsert<T extends IdentifierPasienUpsertArgs>(args: SelectSubset<T, IdentifierPasienUpsertArgs<ExtArgs>>): Prisma__IdentifierPasienClient<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentifierPasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienCountArgs} args - Arguments to filter IdentifierPasiens to count.
     * @example
     * // Count the number of IdentifierPasiens
     * const count = await prisma.identifierPasien.count({
     *   where: {
     *     // ... the filter for the IdentifierPasiens we want to count
     *   }
     * })
    **/
    count<T extends IdentifierPasienCountArgs>(
      args?: Subset<T, IdentifierPasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentifierPasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentifierPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdentifierPasienAggregateArgs>(args: Subset<T, IdentifierPasienAggregateArgs>): Prisma.PrismaPromise<GetIdentifierPasienAggregateType<T>>

    /**
     * Group by IdentifierPasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentifierPasienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdentifierPasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentifierPasienGroupByArgs['orderBy'] }
        : { orderBy?: IdentifierPasienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdentifierPasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentifierPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdentifierPasien model
   */
  readonly fields: IdentifierPasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdentifierPasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentifierPasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jenisIdentifier<T extends JenisIdentifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisIdentifierDefaultArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdentifierPasien model
   */
  interface IdentifierPasienFieldRefs {
    readonly id: FieldRef<"IdentifierPasien", 'String'>
    readonly pasienId: FieldRef<"IdentifierPasien", 'String'>
    readonly jenisIdentifierId: FieldRef<"IdentifierPasien", 'String'>
    readonly nilaiIdentifier: FieldRef<"IdentifierPasien", 'String'>
    readonly use: FieldRef<"IdentifierPasien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IdentifierPasien findUnique
   */
  export type IdentifierPasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter, which IdentifierPasien to fetch.
     */
    where: IdentifierPasienWhereUniqueInput
  }

  /**
   * IdentifierPasien findUniqueOrThrow
   */
  export type IdentifierPasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter, which IdentifierPasien to fetch.
     */
    where: IdentifierPasienWhereUniqueInput
  }

  /**
   * IdentifierPasien findFirst
   */
  export type IdentifierPasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter, which IdentifierPasien to fetch.
     */
    where?: IdentifierPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentifierPasiens to fetch.
     */
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentifierPasiens.
     */
    cursor?: IdentifierPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentifierPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentifierPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentifierPasiens.
     */
    distinct?: IdentifierPasienScalarFieldEnum | IdentifierPasienScalarFieldEnum[]
  }

  /**
   * IdentifierPasien findFirstOrThrow
   */
  export type IdentifierPasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter, which IdentifierPasien to fetch.
     */
    where?: IdentifierPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentifierPasiens to fetch.
     */
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentifierPasiens.
     */
    cursor?: IdentifierPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentifierPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentifierPasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentifierPasiens.
     */
    distinct?: IdentifierPasienScalarFieldEnum | IdentifierPasienScalarFieldEnum[]
  }

  /**
   * IdentifierPasien findMany
   */
  export type IdentifierPasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter, which IdentifierPasiens to fetch.
     */
    where?: IdentifierPasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentifierPasiens to fetch.
     */
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdentifierPasiens.
     */
    cursor?: IdentifierPasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentifierPasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentifierPasiens.
     */
    skip?: number
    distinct?: IdentifierPasienScalarFieldEnum | IdentifierPasienScalarFieldEnum[]
  }

  /**
   * IdentifierPasien create
   */
  export type IdentifierPasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * The data needed to create a IdentifierPasien.
     */
    data: XOR<IdentifierPasienCreateInput, IdentifierPasienUncheckedCreateInput>
  }

  /**
   * IdentifierPasien createMany
   */
  export type IdentifierPasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdentifierPasiens.
     */
    data: IdentifierPasienCreateManyInput | IdentifierPasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdentifierPasien createManyAndReturn
   */
  export type IdentifierPasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * The data used to create many IdentifierPasiens.
     */
    data: IdentifierPasienCreateManyInput | IdentifierPasienCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentifierPasien update
   */
  export type IdentifierPasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * The data needed to update a IdentifierPasien.
     */
    data: XOR<IdentifierPasienUpdateInput, IdentifierPasienUncheckedUpdateInput>
    /**
     * Choose, which IdentifierPasien to update.
     */
    where: IdentifierPasienWhereUniqueInput
  }

  /**
   * IdentifierPasien updateMany
   */
  export type IdentifierPasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdentifierPasiens.
     */
    data: XOR<IdentifierPasienUpdateManyMutationInput, IdentifierPasienUncheckedUpdateManyInput>
    /**
     * Filter which IdentifierPasiens to update
     */
    where?: IdentifierPasienWhereInput
    /**
     * Limit how many IdentifierPasiens to update.
     */
    limit?: number
  }

  /**
   * IdentifierPasien updateManyAndReturn
   */
  export type IdentifierPasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * The data used to update IdentifierPasiens.
     */
    data: XOR<IdentifierPasienUpdateManyMutationInput, IdentifierPasienUncheckedUpdateManyInput>
    /**
     * Filter which IdentifierPasiens to update
     */
    where?: IdentifierPasienWhereInput
    /**
     * Limit how many IdentifierPasiens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentifierPasien upsert
   */
  export type IdentifierPasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * The filter to search for the IdentifierPasien to update in case it exists.
     */
    where: IdentifierPasienWhereUniqueInput
    /**
     * In case the IdentifierPasien found by the `where` argument doesn't exist, create a new IdentifierPasien with this data.
     */
    create: XOR<IdentifierPasienCreateInput, IdentifierPasienUncheckedCreateInput>
    /**
     * In case the IdentifierPasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentifierPasienUpdateInput, IdentifierPasienUncheckedUpdateInput>
  }

  /**
   * IdentifierPasien delete
   */
  export type IdentifierPasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    /**
     * Filter which IdentifierPasien to delete.
     */
    where: IdentifierPasienWhereUniqueInput
  }

  /**
   * IdentifierPasien deleteMany
   */
  export type IdentifierPasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentifierPasiens to delete
     */
    where?: IdentifierPasienWhereInput
    /**
     * Limit how many IdentifierPasiens to delete.
     */
    limit?: number
  }

  /**
   * IdentifierPasien without action
   */
  export type IdentifierPasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
  }


  /**
   * Model JenisIdentifier
   */

  export type AggregateJenisIdentifier = {
    _count: JenisIdentifierCountAggregateOutputType | null
    _min: JenisIdentifierMinAggregateOutputType | null
    _max: JenisIdentifierMaxAggregateOutputType | null
  }

  export type JenisIdentifierMinAggregateOutputType = {
    id: string | null
    namaJenisIdentifier: string | null
  }

  export type JenisIdentifierMaxAggregateOutputType = {
    id: string | null
    namaJenisIdentifier: string | null
  }

  export type JenisIdentifierCountAggregateOutputType = {
    id: number
    namaJenisIdentifier: number
    _all: number
  }


  export type JenisIdentifierMinAggregateInputType = {
    id?: true
    namaJenisIdentifier?: true
  }

  export type JenisIdentifierMaxAggregateInputType = {
    id?: true
    namaJenisIdentifier?: true
  }

  export type JenisIdentifierCountAggregateInputType = {
    id?: true
    namaJenisIdentifier?: true
    _all?: true
  }

  export type JenisIdentifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisIdentifier to aggregate.
     */
    where?: JenisIdentifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisIdentifiers to fetch.
     */
    orderBy?: JenisIdentifierOrderByWithRelationInput | JenisIdentifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisIdentifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisIdentifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisIdentifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisIdentifiers
    **/
    _count?: true | JenisIdentifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisIdentifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisIdentifierMaxAggregateInputType
  }

  export type GetJenisIdentifierAggregateType<T extends JenisIdentifierAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisIdentifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisIdentifier[P]>
      : GetScalarType<T[P], AggregateJenisIdentifier[P]>
  }




  export type JenisIdentifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisIdentifierWhereInput
    orderBy?: JenisIdentifierOrderByWithAggregationInput | JenisIdentifierOrderByWithAggregationInput[]
    by: JenisIdentifierScalarFieldEnum[] | JenisIdentifierScalarFieldEnum
    having?: JenisIdentifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisIdentifierCountAggregateInputType | true
    _min?: JenisIdentifierMinAggregateInputType
    _max?: JenisIdentifierMaxAggregateInputType
  }

  export type JenisIdentifierGroupByOutputType = {
    id: string
    namaJenisIdentifier: string
    _count: JenisIdentifierCountAggregateOutputType | null
    _min: JenisIdentifierMinAggregateOutputType | null
    _max: JenisIdentifierMaxAggregateOutputType | null
  }

  type GetJenisIdentifierGroupByPayload<T extends JenisIdentifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisIdentifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisIdentifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisIdentifierGroupByOutputType[P]>
            : GetScalarType<T[P], JenisIdentifierGroupByOutputType[P]>
        }
      >
    >


  export type JenisIdentifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenisIdentifier?: boolean
    identifierPasien?: boolean | JenisIdentifier$identifierPasienArgs<ExtArgs>
    _count?: boolean | JenisIdentifierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisIdentifier"]>

  export type JenisIdentifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenisIdentifier?: boolean
  }, ExtArgs["result"]["jenisIdentifier"]>

  export type JenisIdentifierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaJenisIdentifier?: boolean
  }, ExtArgs["result"]["jenisIdentifier"]>

  export type JenisIdentifierSelectScalar = {
    id?: boolean
    namaJenisIdentifier?: boolean
  }

  export type JenisIdentifierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaJenisIdentifier", ExtArgs["result"]["jenisIdentifier"]>
  export type JenisIdentifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identifierPasien?: boolean | JenisIdentifier$identifierPasienArgs<ExtArgs>
    _count?: boolean | JenisIdentifierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JenisIdentifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JenisIdentifierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JenisIdentifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisIdentifier"
    objects: {
      identifierPasien: Prisma.$IdentifierPasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaJenisIdentifier: string
    }, ExtArgs["result"]["jenisIdentifier"]>
    composites: {}
  }

  type JenisIdentifierGetPayload<S extends boolean | null | undefined | JenisIdentifierDefaultArgs> = $Result.GetResult<Prisma.$JenisIdentifierPayload, S>

  type JenisIdentifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisIdentifierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisIdentifierCountAggregateInputType | true
    }

  export interface JenisIdentifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisIdentifier'], meta: { name: 'JenisIdentifier' } }
    /**
     * Find zero or one JenisIdentifier that matches the filter.
     * @param {JenisIdentifierFindUniqueArgs} args - Arguments to find a JenisIdentifier
     * @example
     * // Get one JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisIdentifierFindUniqueArgs>(args: SelectSubset<T, JenisIdentifierFindUniqueArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisIdentifier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisIdentifierFindUniqueOrThrowArgs} args - Arguments to find a JenisIdentifier
     * @example
     * // Get one JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisIdentifierFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisIdentifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisIdentifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierFindFirstArgs} args - Arguments to find a JenisIdentifier
     * @example
     * // Get one JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisIdentifierFindFirstArgs>(args?: SelectSubset<T, JenisIdentifierFindFirstArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisIdentifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierFindFirstOrThrowArgs} args - Arguments to find a JenisIdentifier
     * @example
     * // Get one JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisIdentifierFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisIdentifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisIdentifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisIdentifiers
     * const jenisIdentifiers = await prisma.jenisIdentifier.findMany()
     * 
     * // Get first 10 JenisIdentifiers
     * const jenisIdentifiers = await prisma.jenisIdentifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisIdentifierWithIdOnly = await prisma.jenisIdentifier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenisIdentifierFindManyArgs>(args?: SelectSubset<T, JenisIdentifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisIdentifier.
     * @param {JenisIdentifierCreateArgs} args - Arguments to create a JenisIdentifier.
     * @example
     * // Create one JenisIdentifier
     * const JenisIdentifier = await prisma.jenisIdentifier.create({
     *   data: {
     *     // ... data to create a JenisIdentifier
     *   }
     * })
     * 
     */
    create<T extends JenisIdentifierCreateArgs>(args: SelectSubset<T, JenisIdentifierCreateArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisIdentifiers.
     * @param {JenisIdentifierCreateManyArgs} args - Arguments to create many JenisIdentifiers.
     * @example
     * // Create many JenisIdentifiers
     * const jenisIdentifier = await prisma.jenisIdentifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisIdentifierCreateManyArgs>(args?: SelectSubset<T, JenisIdentifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisIdentifiers and returns the data saved in the database.
     * @param {JenisIdentifierCreateManyAndReturnArgs} args - Arguments to create many JenisIdentifiers.
     * @example
     * // Create many JenisIdentifiers
     * const jenisIdentifier = await prisma.jenisIdentifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisIdentifiers and only return the `id`
     * const jenisIdentifierWithIdOnly = await prisma.jenisIdentifier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisIdentifierCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisIdentifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JenisIdentifier.
     * @param {JenisIdentifierDeleteArgs} args - Arguments to delete one JenisIdentifier.
     * @example
     * // Delete one JenisIdentifier
     * const JenisIdentifier = await prisma.jenisIdentifier.delete({
     *   where: {
     *     // ... filter to delete one JenisIdentifier
     *   }
     * })
     * 
     */
    delete<T extends JenisIdentifierDeleteArgs>(args: SelectSubset<T, JenisIdentifierDeleteArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisIdentifier.
     * @param {JenisIdentifierUpdateArgs} args - Arguments to update one JenisIdentifier.
     * @example
     * // Update one JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisIdentifierUpdateArgs>(args: SelectSubset<T, JenisIdentifierUpdateArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisIdentifiers.
     * @param {JenisIdentifierDeleteManyArgs} args - Arguments to filter JenisIdentifiers to delete.
     * @example
     * // Delete a few JenisIdentifiers
     * const { count } = await prisma.jenisIdentifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisIdentifierDeleteManyArgs>(args?: SelectSubset<T, JenisIdentifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisIdentifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisIdentifiers
     * const jenisIdentifier = await prisma.jenisIdentifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisIdentifierUpdateManyArgs>(args: SelectSubset<T, JenisIdentifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisIdentifiers and returns the data updated in the database.
     * @param {JenisIdentifierUpdateManyAndReturnArgs} args - Arguments to update many JenisIdentifiers.
     * @example
     * // Update many JenisIdentifiers
     * const jenisIdentifier = await prisma.jenisIdentifier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JenisIdentifiers and only return the `id`
     * const jenisIdentifierWithIdOnly = await prisma.jenisIdentifier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JenisIdentifierUpdateManyAndReturnArgs>(args: SelectSubset<T, JenisIdentifierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JenisIdentifier.
     * @param {JenisIdentifierUpsertArgs} args - Arguments to update or create a JenisIdentifier.
     * @example
     * // Update or create a JenisIdentifier
     * const jenisIdentifier = await prisma.jenisIdentifier.upsert({
     *   create: {
     *     // ... data to create a JenisIdentifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisIdentifier we want to update
     *   }
     * })
     */
    upsert<T extends JenisIdentifierUpsertArgs>(args: SelectSubset<T, JenisIdentifierUpsertArgs<ExtArgs>>): Prisma__JenisIdentifierClient<$Result.GetResult<Prisma.$JenisIdentifierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisIdentifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierCountArgs} args - Arguments to filter JenisIdentifiers to count.
     * @example
     * // Count the number of JenisIdentifiers
     * const count = await prisma.jenisIdentifier.count({
     *   where: {
     *     // ... the filter for the JenisIdentifiers we want to count
     *   }
     * })
    **/
    count<T extends JenisIdentifierCountArgs>(
      args?: Subset<T, JenisIdentifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisIdentifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisIdentifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisIdentifierAggregateArgs>(args: Subset<T, JenisIdentifierAggregateArgs>): Prisma.PrismaPromise<GetJenisIdentifierAggregateType<T>>

    /**
     * Group by JenisIdentifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisIdentifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisIdentifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisIdentifierGroupByArgs['orderBy'] }
        : { orderBy?: JenisIdentifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisIdentifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisIdentifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisIdentifier model
   */
  readonly fields: JenisIdentifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisIdentifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisIdentifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    identifierPasien<T extends JenisIdentifier$identifierPasienArgs<ExtArgs> = {}>(args?: Subset<T, JenisIdentifier$identifierPasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentifierPasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisIdentifier model
   */
  interface JenisIdentifierFieldRefs {
    readonly id: FieldRef<"JenisIdentifier", 'String'>
    readonly namaJenisIdentifier: FieldRef<"JenisIdentifier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JenisIdentifier findUnique
   */
  export type JenisIdentifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter, which JenisIdentifier to fetch.
     */
    where: JenisIdentifierWhereUniqueInput
  }

  /**
   * JenisIdentifier findUniqueOrThrow
   */
  export type JenisIdentifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter, which JenisIdentifier to fetch.
     */
    where: JenisIdentifierWhereUniqueInput
  }

  /**
   * JenisIdentifier findFirst
   */
  export type JenisIdentifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter, which JenisIdentifier to fetch.
     */
    where?: JenisIdentifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisIdentifiers to fetch.
     */
    orderBy?: JenisIdentifierOrderByWithRelationInput | JenisIdentifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisIdentifiers.
     */
    cursor?: JenisIdentifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisIdentifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisIdentifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisIdentifiers.
     */
    distinct?: JenisIdentifierScalarFieldEnum | JenisIdentifierScalarFieldEnum[]
  }

  /**
   * JenisIdentifier findFirstOrThrow
   */
  export type JenisIdentifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter, which JenisIdentifier to fetch.
     */
    where?: JenisIdentifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisIdentifiers to fetch.
     */
    orderBy?: JenisIdentifierOrderByWithRelationInput | JenisIdentifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisIdentifiers.
     */
    cursor?: JenisIdentifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisIdentifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisIdentifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisIdentifiers.
     */
    distinct?: JenisIdentifierScalarFieldEnum | JenisIdentifierScalarFieldEnum[]
  }

  /**
   * JenisIdentifier findMany
   */
  export type JenisIdentifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter, which JenisIdentifiers to fetch.
     */
    where?: JenisIdentifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisIdentifiers to fetch.
     */
    orderBy?: JenisIdentifierOrderByWithRelationInput | JenisIdentifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisIdentifiers.
     */
    cursor?: JenisIdentifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisIdentifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisIdentifiers.
     */
    skip?: number
    distinct?: JenisIdentifierScalarFieldEnum | JenisIdentifierScalarFieldEnum[]
  }

  /**
   * JenisIdentifier create
   */
  export type JenisIdentifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisIdentifier.
     */
    data: XOR<JenisIdentifierCreateInput, JenisIdentifierUncheckedCreateInput>
  }

  /**
   * JenisIdentifier createMany
   */
  export type JenisIdentifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisIdentifiers.
     */
    data: JenisIdentifierCreateManyInput | JenisIdentifierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisIdentifier createManyAndReturn
   */
  export type JenisIdentifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * The data used to create many JenisIdentifiers.
     */
    data: JenisIdentifierCreateManyInput | JenisIdentifierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisIdentifier update
   */
  export type JenisIdentifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisIdentifier.
     */
    data: XOR<JenisIdentifierUpdateInput, JenisIdentifierUncheckedUpdateInput>
    /**
     * Choose, which JenisIdentifier to update.
     */
    where: JenisIdentifierWhereUniqueInput
  }

  /**
   * JenisIdentifier updateMany
   */
  export type JenisIdentifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisIdentifiers.
     */
    data: XOR<JenisIdentifierUpdateManyMutationInput, JenisIdentifierUncheckedUpdateManyInput>
    /**
     * Filter which JenisIdentifiers to update
     */
    where?: JenisIdentifierWhereInput
    /**
     * Limit how many JenisIdentifiers to update.
     */
    limit?: number
  }

  /**
   * JenisIdentifier updateManyAndReturn
   */
  export type JenisIdentifierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * The data used to update JenisIdentifiers.
     */
    data: XOR<JenisIdentifierUpdateManyMutationInput, JenisIdentifierUncheckedUpdateManyInput>
    /**
     * Filter which JenisIdentifiers to update
     */
    where?: JenisIdentifierWhereInput
    /**
     * Limit how many JenisIdentifiers to update.
     */
    limit?: number
  }

  /**
   * JenisIdentifier upsert
   */
  export type JenisIdentifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisIdentifier to update in case it exists.
     */
    where: JenisIdentifierWhereUniqueInput
    /**
     * In case the JenisIdentifier found by the `where` argument doesn't exist, create a new JenisIdentifier with this data.
     */
    create: XOR<JenisIdentifierCreateInput, JenisIdentifierUncheckedCreateInput>
    /**
     * In case the JenisIdentifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisIdentifierUpdateInput, JenisIdentifierUncheckedUpdateInput>
  }

  /**
   * JenisIdentifier delete
   */
  export type JenisIdentifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
    /**
     * Filter which JenisIdentifier to delete.
     */
    where: JenisIdentifierWhereUniqueInput
  }

  /**
   * JenisIdentifier deleteMany
   */
  export type JenisIdentifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisIdentifiers to delete
     */
    where?: JenisIdentifierWhereInput
    /**
     * Limit how many JenisIdentifiers to delete.
     */
    limit?: number
  }

  /**
   * JenisIdentifier.identifierPasien
   */
  export type JenisIdentifier$identifierPasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentifierPasien
     */
    select?: IdentifierPasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentifierPasien
     */
    omit?: IdentifierPasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentifierPasienInclude<ExtArgs> | null
    where?: IdentifierPasienWhereInput
    orderBy?: IdentifierPasienOrderByWithRelationInput | IdentifierPasienOrderByWithRelationInput[]
    cursor?: IdentifierPasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentifierPasienScalarFieldEnum | IdentifierPasienScalarFieldEnum[]
  }

  /**
   * JenisIdentifier without action
   */
  export type JenisIdentifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisIdentifier
     */
    select?: JenisIdentifierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisIdentifier
     */
    omit?: JenisIdentifierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisIdentifierInclude<ExtArgs> | null
  }


  /**
   * Model StatusPerkawinan
   */

  export type AggregateStatusPerkawinan = {
    _count: StatusPerkawinanCountAggregateOutputType | null
    _min: StatusPerkawinanMinAggregateOutputType | null
    _max: StatusPerkawinanMaxAggregateOutputType | null
  }

  export type StatusPerkawinanMinAggregateOutputType = {
    id: string | null
    namaStatusPerkawinan: string | null
  }

  export type StatusPerkawinanMaxAggregateOutputType = {
    id: string | null
    namaStatusPerkawinan: string | null
  }

  export type StatusPerkawinanCountAggregateOutputType = {
    id: number
    namaStatusPerkawinan: number
    _all: number
  }


  export type StatusPerkawinanMinAggregateInputType = {
    id?: true
    namaStatusPerkawinan?: true
  }

  export type StatusPerkawinanMaxAggregateInputType = {
    id?: true
    namaStatusPerkawinan?: true
  }

  export type StatusPerkawinanCountAggregateInputType = {
    id?: true
    namaStatusPerkawinan?: true
    _all?: true
  }

  export type StatusPerkawinanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusPerkawinan to aggregate.
     */
    where?: StatusPerkawinanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPerkawinans to fetch.
     */
    orderBy?: StatusPerkawinanOrderByWithRelationInput | StatusPerkawinanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusPerkawinanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPerkawinans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPerkawinans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusPerkawinans
    **/
    _count?: true | StatusPerkawinanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusPerkawinanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusPerkawinanMaxAggregateInputType
  }

  export type GetStatusPerkawinanAggregateType<T extends StatusPerkawinanAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusPerkawinan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusPerkawinan[P]>
      : GetScalarType<T[P], AggregateStatusPerkawinan[P]>
  }




  export type StatusPerkawinanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusPerkawinanWhereInput
    orderBy?: StatusPerkawinanOrderByWithAggregationInput | StatusPerkawinanOrderByWithAggregationInput[]
    by: StatusPerkawinanScalarFieldEnum[] | StatusPerkawinanScalarFieldEnum
    having?: StatusPerkawinanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusPerkawinanCountAggregateInputType | true
    _min?: StatusPerkawinanMinAggregateInputType
    _max?: StatusPerkawinanMaxAggregateInputType
  }

  export type StatusPerkawinanGroupByOutputType = {
    id: string
    namaStatusPerkawinan: string
    _count: StatusPerkawinanCountAggregateOutputType | null
    _min: StatusPerkawinanMinAggregateOutputType | null
    _max: StatusPerkawinanMaxAggregateOutputType | null
  }

  type GetStatusPerkawinanGroupByPayload<T extends StatusPerkawinanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusPerkawinanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusPerkawinanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusPerkawinanGroupByOutputType[P]>
            : GetScalarType<T[P], StatusPerkawinanGroupByOutputType[P]>
        }
      >
    >


  export type StatusPerkawinanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPerkawinan?: boolean
    pasien?: boolean | StatusPerkawinan$pasienArgs<ExtArgs>
    _count?: boolean | StatusPerkawinanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusPerkawinan"]>

  export type StatusPerkawinanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPerkawinan?: boolean
  }, ExtArgs["result"]["statusPerkawinan"]>

  export type StatusPerkawinanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPerkawinan?: boolean
  }, ExtArgs["result"]["statusPerkawinan"]>

  export type StatusPerkawinanSelectScalar = {
    id?: boolean
    namaStatusPerkawinan?: boolean
  }

  export type StatusPerkawinanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaStatusPerkawinan", ExtArgs["result"]["statusPerkawinan"]>
  export type StatusPerkawinanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | StatusPerkawinan$pasienArgs<ExtArgs>
    _count?: boolean | StatusPerkawinanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusPerkawinanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusPerkawinanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPerkawinanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusPerkawinan"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaStatusPerkawinan: string
    }, ExtArgs["result"]["statusPerkawinan"]>
    composites: {}
  }

  type StatusPerkawinanGetPayload<S extends boolean | null | undefined | StatusPerkawinanDefaultArgs> = $Result.GetResult<Prisma.$StatusPerkawinanPayload, S>

  type StatusPerkawinanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusPerkawinanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusPerkawinanCountAggregateInputType | true
    }

  export interface StatusPerkawinanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusPerkawinan'], meta: { name: 'StatusPerkawinan' } }
    /**
     * Find zero or one StatusPerkawinan that matches the filter.
     * @param {StatusPerkawinanFindUniqueArgs} args - Arguments to find a StatusPerkawinan
     * @example
     * // Get one StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusPerkawinanFindUniqueArgs>(args: SelectSubset<T, StatusPerkawinanFindUniqueArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusPerkawinan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusPerkawinanFindUniqueOrThrowArgs} args - Arguments to find a StatusPerkawinan
     * @example
     * // Get one StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusPerkawinanFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusPerkawinanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusPerkawinan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanFindFirstArgs} args - Arguments to find a StatusPerkawinan
     * @example
     * // Get one StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusPerkawinanFindFirstArgs>(args?: SelectSubset<T, StatusPerkawinanFindFirstArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusPerkawinan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanFindFirstOrThrowArgs} args - Arguments to find a StatusPerkawinan
     * @example
     * // Get one StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusPerkawinanFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusPerkawinanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusPerkawinans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusPerkawinans
     * const statusPerkawinans = await prisma.statusPerkawinan.findMany()
     * 
     * // Get first 10 StatusPerkawinans
     * const statusPerkawinans = await prisma.statusPerkawinan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusPerkawinanWithIdOnly = await prisma.statusPerkawinan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusPerkawinanFindManyArgs>(args?: SelectSubset<T, StatusPerkawinanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusPerkawinan.
     * @param {StatusPerkawinanCreateArgs} args - Arguments to create a StatusPerkawinan.
     * @example
     * // Create one StatusPerkawinan
     * const StatusPerkawinan = await prisma.statusPerkawinan.create({
     *   data: {
     *     // ... data to create a StatusPerkawinan
     *   }
     * })
     * 
     */
    create<T extends StatusPerkawinanCreateArgs>(args: SelectSubset<T, StatusPerkawinanCreateArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusPerkawinans.
     * @param {StatusPerkawinanCreateManyArgs} args - Arguments to create many StatusPerkawinans.
     * @example
     * // Create many StatusPerkawinans
     * const statusPerkawinan = await prisma.statusPerkawinan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusPerkawinanCreateManyArgs>(args?: SelectSubset<T, StatusPerkawinanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusPerkawinans and returns the data saved in the database.
     * @param {StatusPerkawinanCreateManyAndReturnArgs} args - Arguments to create many StatusPerkawinans.
     * @example
     * // Create many StatusPerkawinans
     * const statusPerkawinan = await prisma.statusPerkawinan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusPerkawinans and only return the `id`
     * const statusPerkawinanWithIdOnly = await prisma.statusPerkawinan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusPerkawinanCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusPerkawinanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusPerkawinan.
     * @param {StatusPerkawinanDeleteArgs} args - Arguments to delete one StatusPerkawinan.
     * @example
     * // Delete one StatusPerkawinan
     * const StatusPerkawinan = await prisma.statusPerkawinan.delete({
     *   where: {
     *     // ... filter to delete one StatusPerkawinan
     *   }
     * })
     * 
     */
    delete<T extends StatusPerkawinanDeleteArgs>(args: SelectSubset<T, StatusPerkawinanDeleteArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusPerkawinan.
     * @param {StatusPerkawinanUpdateArgs} args - Arguments to update one StatusPerkawinan.
     * @example
     * // Update one StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusPerkawinanUpdateArgs>(args: SelectSubset<T, StatusPerkawinanUpdateArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusPerkawinans.
     * @param {StatusPerkawinanDeleteManyArgs} args - Arguments to filter StatusPerkawinans to delete.
     * @example
     * // Delete a few StatusPerkawinans
     * const { count } = await prisma.statusPerkawinan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusPerkawinanDeleteManyArgs>(args?: SelectSubset<T, StatusPerkawinanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusPerkawinans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusPerkawinans
     * const statusPerkawinan = await prisma.statusPerkawinan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusPerkawinanUpdateManyArgs>(args: SelectSubset<T, StatusPerkawinanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusPerkawinans and returns the data updated in the database.
     * @param {StatusPerkawinanUpdateManyAndReturnArgs} args - Arguments to update many StatusPerkawinans.
     * @example
     * // Update many StatusPerkawinans
     * const statusPerkawinan = await prisma.statusPerkawinan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusPerkawinans and only return the `id`
     * const statusPerkawinanWithIdOnly = await prisma.statusPerkawinan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusPerkawinanUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusPerkawinanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusPerkawinan.
     * @param {StatusPerkawinanUpsertArgs} args - Arguments to update or create a StatusPerkawinan.
     * @example
     * // Update or create a StatusPerkawinan
     * const statusPerkawinan = await prisma.statusPerkawinan.upsert({
     *   create: {
     *     // ... data to create a StatusPerkawinan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusPerkawinan we want to update
     *   }
     * })
     */
    upsert<T extends StatusPerkawinanUpsertArgs>(args: SelectSubset<T, StatusPerkawinanUpsertArgs<ExtArgs>>): Prisma__StatusPerkawinanClient<$Result.GetResult<Prisma.$StatusPerkawinanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusPerkawinans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanCountArgs} args - Arguments to filter StatusPerkawinans to count.
     * @example
     * // Count the number of StatusPerkawinans
     * const count = await prisma.statusPerkawinan.count({
     *   where: {
     *     // ... the filter for the StatusPerkawinans we want to count
     *   }
     * })
    **/
    count<T extends StatusPerkawinanCountArgs>(
      args?: Subset<T, StatusPerkawinanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusPerkawinanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusPerkawinan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusPerkawinanAggregateArgs>(args: Subset<T, StatusPerkawinanAggregateArgs>): Prisma.PrismaPromise<GetStatusPerkawinanAggregateType<T>>

    /**
     * Group by StatusPerkawinan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPerkawinanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusPerkawinanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusPerkawinanGroupByArgs['orderBy'] }
        : { orderBy?: StatusPerkawinanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusPerkawinanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusPerkawinanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusPerkawinan model
   */
  readonly fields: StatusPerkawinanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusPerkawinan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusPerkawinanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends StatusPerkawinan$pasienArgs<ExtArgs> = {}>(args?: Subset<T, StatusPerkawinan$pasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusPerkawinan model
   */
  interface StatusPerkawinanFieldRefs {
    readonly id: FieldRef<"StatusPerkawinan", 'String'>
    readonly namaStatusPerkawinan: FieldRef<"StatusPerkawinan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusPerkawinan findUnique
   */
  export type StatusPerkawinanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPerkawinan to fetch.
     */
    where: StatusPerkawinanWhereUniqueInput
  }

  /**
   * StatusPerkawinan findUniqueOrThrow
   */
  export type StatusPerkawinanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPerkawinan to fetch.
     */
    where: StatusPerkawinanWhereUniqueInput
  }

  /**
   * StatusPerkawinan findFirst
   */
  export type StatusPerkawinanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPerkawinan to fetch.
     */
    where?: StatusPerkawinanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPerkawinans to fetch.
     */
    orderBy?: StatusPerkawinanOrderByWithRelationInput | StatusPerkawinanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusPerkawinans.
     */
    cursor?: StatusPerkawinanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPerkawinans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPerkawinans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusPerkawinans.
     */
    distinct?: StatusPerkawinanScalarFieldEnum | StatusPerkawinanScalarFieldEnum[]
  }

  /**
   * StatusPerkawinan findFirstOrThrow
   */
  export type StatusPerkawinanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPerkawinan to fetch.
     */
    where?: StatusPerkawinanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPerkawinans to fetch.
     */
    orderBy?: StatusPerkawinanOrderByWithRelationInput | StatusPerkawinanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusPerkawinans.
     */
    cursor?: StatusPerkawinanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPerkawinans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPerkawinans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusPerkawinans.
     */
    distinct?: StatusPerkawinanScalarFieldEnum | StatusPerkawinanScalarFieldEnum[]
  }

  /**
   * StatusPerkawinan findMany
   */
  export type StatusPerkawinanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPerkawinans to fetch.
     */
    where?: StatusPerkawinanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPerkawinans to fetch.
     */
    orderBy?: StatusPerkawinanOrderByWithRelationInput | StatusPerkawinanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusPerkawinans.
     */
    cursor?: StatusPerkawinanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPerkawinans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPerkawinans.
     */
    skip?: number
    distinct?: StatusPerkawinanScalarFieldEnum | StatusPerkawinanScalarFieldEnum[]
  }

  /**
   * StatusPerkawinan create
   */
  export type StatusPerkawinanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusPerkawinan.
     */
    data: XOR<StatusPerkawinanCreateInput, StatusPerkawinanUncheckedCreateInput>
  }

  /**
   * StatusPerkawinan createMany
   */
  export type StatusPerkawinanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusPerkawinans.
     */
    data: StatusPerkawinanCreateManyInput | StatusPerkawinanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusPerkawinan createManyAndReturn
   */
  export type StatusPerkawinanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * The data used to create many StatusPerkawinans.
     */
    data: StatusPerkawinanCreateManyInput | StatusPerkawinanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusPerkawinan update
   */
  export type StatusPerkawinanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusPerkawinan.
     */
    data: XOR<StatusPerkawinanUpdateInput, StatusPerkawinanUncheckedUpdateInput>
    /**
     * Choose, which StatusPerkawinan to update.
     */
    where: StatusPerkawinanWhereUniqueInput
  }

  /**
   * StatusPerkawinan updateMany
   */
  export type StatusPerkawinanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusPerkawinans.
     */
    data: XOR<StatusPerkawinanUpdateManyMutationInput, StatusPerkawinanUncheckedUpdateManyInput>
    /**
     * Filter which StatusPerkawinans to update
     */
    where?: StatusPerkawinanWhereInput
    /**
     * Limit how many StatusPerkawinans to update.
     */
    limit?: number
  }

  /**
   * StatusPerkawinan updateManyAndReturn
   */
  export type StatusPerkawinanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * The data used to update StatusPerkawinans.
     */
    data: XOR<StatusPerkawinanUpdateManyMutationInput, StatusPerkawinanUncheckedUpdateManyInput>
    /**
     * Filter which StatusPerkawinans to update
     */
    where?: StatusPerkawinanWhereInput
    /**
     * Limit how many StatusPerkawinans to update.
     */
    limit?: number
  }

  /**
   * StatusPerkawinan upsert
   */
  export type StatusPerkawinanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusPerkawinan to update in case it exists.
     */
    where: StatusPerkawinanWhereUniqueInput
    /**
     * In case the StatusPerkawinan found by the `where` argument doesn't exist, create a new StatusPerkawinan with this data.
     */
    create: XOR<StatusPerkawinanCreateInput, StatusPerkawinanUncheckedCreateInput>
    /**
     * In case the StatusPerkawinan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusPerkawinanUpdateInput, StatusPerkawinanUncheckedUpdateInput>
  }

  /**
   * StatusPerkawinan delete
   */
  export type StatusPerkawinanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
    /**
     * Filter which StatusPerkawinan to delete.
     */
    where: StatusPerkawinanWhereUniqueInput
  }

  /**
   * StatusPerkawinan deleteMany
   */
  export type StatusPerkawinanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusPerkawinans to delete
     */
    where?: StatusPerkawinanWhereInput
    /**
     * Limit how many StatusPerkawinans to delete.
     */
    limit?: number
  }

  /**
   * StatusPerkawinan.pasien
   */
  export type StatusPerkawinan$pasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    cursor?: PasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * StatusPerkawinan without action
   */
  export type StatusPerkawinanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPerkawinan
     */
    select?: StatusPerkawinanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPerkawinan
     */
    omit?: StatusPerkawinanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPerkawinanInclude<ExtArgs> | null
  }


  /**
   * Model StatusPembiayaan
   */

  export type AggregateStatusPembiayaan = {
    _count: StatusPembiayaanCountAggregateOutputType | null
    _min: StatusPembiayaanMinAggregateOutputType | null
    _max: StatusPembiayaanMaxAggregateOutputType | null
  }

  export type StatusPembiayaanMinAggregateOutputType = {
    id: string | null
    namaStatusPembiayaan: string | null
  }

  export type StatusPembiayaanMaxAggregateOutputType = {
    id: string | null
    namaStatusPembiayaan: string | null
  }

  export type StatusPembiayaanCountAggregateOutputType = {
    id: number
    namaStatusPembiayaan: number
    _all: number
  }


  export type StatusPembiayaanMinAggregateInputType = {
    id?: true
    namaStatusPembiayaan?: true
  }

  export type StatusPembiayaanMaxAggregateInputType = {
    id?: true
    namaStatusPembiayaan?: true
  }

  export type StatusPembiayaanCountAggregateInputType = {
    id?: true
    namaStatusPembiayaan?: true
    _all?: true
  }

  export type StatusPembiayaanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusPembiayaan to aggregate.
     */
    where?: StatusPembiayaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPembiayaans to fetch.
     */
    orderBy?: StatusPembiayaanOrderByWithRelationInput | StatusPembiayaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusPembiayaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPembiayaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPembiayaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusPembiayaans
    **/
    _count?: true | StatusPembiayaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusPembiayaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusPembiayaanMaxAggregateInputType
  }

  export type GetStatusPembiayaanAggregateType<T extends StatusPembiayaanAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusPembiayaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusPembiayaan[P]>
      : GetScalarType<T[P], AggregateStatusPembiayaan[P]>
  }




  export type StatusPembiayaanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusPembiayaanWhereInput
    orderBy?: StatusPembiayaanOrderByWithAggregationInput | StatusPembiayaanOrderByWithAggregationInput[]
    by: StatusPembiayaanScalarFieldEnum[] | StatusPembiayaanScalarFieldEnum
    having?: StatusPembiayaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusPembiayaanCountAggregateInputType | true
    _min?: StatusPembiayaanMinAggregateInputType
    _max?: StatusPembiayaanMaxAggregateInputType
  }

  export type StatusPembiayaanGroupByOutputType = {
    id: string
    namaStatusPembiayaan: string
    _count: StatusPembiayaanCountAggregateOutputType | null
    _min: StatusPembiayaanMinAggregateOutputType | null
    _max: StatusPembiayaanMaxAggregateOutputType | null
  }

  type GetStatusPembiayaanGroupByPayload<T extends StatusPembiayaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusPembiayaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusPembiayaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusPembiayaanGroupByOutputType[P]>
            : GetScalarType<T[P], StatusPembiayaanGroupByOutputType[P]>
        }
      >
    >


  export type StatusPembiayaanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPembiayaan?: boolean
    pasien?: boolean | StatusPembiayaan$pasienArgs<ExtArgs>
    _count?: boolean | StatusPembiayaanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusPembiayaan"]>

  export type StatusPembiayaanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPembiayaan?: boolean
  }, ExtArgs["result"]["statusPembiayaan"]>

  export type StatusPembiayaanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaStatusPembiayaan?: boolean
  }, ExtArgs["result"]["statusPembiayaan"]>

  export type StatusPembiayaanSelectScalar = {
    id?: boolean
    namaStatusPembiayaan?: boolean
  }

  export type StatusPembiayaanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaStatusPembiayaan", ExtArgs["result"]["statusPembiayaan"]>
  export type StatusPembiayaanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | StatusPembiayaan$pasienArgs<ExtArgs>
    _count?: boolean | StatusPembiayaanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusPembiayaanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusPembiayaanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPembiayaanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusPembiayaan"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaStatusPembiayaan: string
    }, ExtArgs["result"]["statusPembiayaan"]>
    composites: {}
  }

  type StatusPembiayaanGetPayload<S extends boolean | null | undefined | StatusPembiayaanDefaultArgs> = $Result.GetResult<Prisma.$StatusPembiayaanPayload, S>

  type StatusPembiayaanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusPembiayaanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusPembiayaanCountAggregateInputType | true
    }

  export interface StatusPembiayaanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusPembiayaan'], meta: { name: 'StatusPembiayaan' } }
    /**
     * Find zero or one StatusPembiayaan that matches the filter.
     * @param {StatusPembiayaanFindUniqueArgs} args - Arguments to find a StatusPembiayaan
     * @example
     * // Get one StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusPembiayaanFindUniqueArgs>(args: SelectSubset<T, StatusPembiayaanFindUniqueArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusPembiayaan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusPembiayaanFindUniqueOrThrowArgs} args - Arguments to find a StatusPembiayaan
     * @example
     * // Get one StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusPembiayaanFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusPembiayaanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusPembiayaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanFindFirstArgs} args - Arguments to find a StatusPembiayaan
     * @example
     * // Get one StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusPembiayaanFindFirstArgs>(args?: SelectSubset<T, StatusPembiayaanFindFirstArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusPembiayaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanFindFirstOrThrowArgs} args - Arguments to find a StatusPembiayaan
     * @example
     * // Get one StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusPembiayaanFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusPembiayaanFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusPembiayaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusPembiayaans
     * const statusPembiayaans = await prisma.statusPembiayaan.findMany()
     * 
     * // Get first 10 StatusPembiayaans
     * const statusPembiayaans = await prisma.statusPembiayaan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusPembiayaanWithIdOnly = await prisma.statusPembiayaan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusPembiayaanFindManyArgs>(args?: SelectSubset<T, StatusPembiayaanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusPembiayaan.
     * @param {StatusPembiayaanCreateArgs} args - Arguments to create a StatusPembiayaan.
     * @example
     * // Create one StatusPembiayaan
     * const StatusPembiayaan = await prisma.statusPembiayaan.create({
     *   data: {
     *     // ... data to create a StatusPembiayaan
     *   }
     * })
     * 
     */
    create<T extends StatusPembiayaanCreateArgs>(args: SelectSubset<T, StatusPembiayaanCreateArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusPembiayaans.
     * @param {StatusPembiayaanCreateManyArgs} args - Arguments to create many StatusPembiayaans.
     * @example
     * // Create many StatusPembiayaans
     * const statusPembiayaan = await prisma.statusPembiayaan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusPembiayaanCreateManyArgs>(args?: SelectSubset<T, StatusPembiayaanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusPembiayaans and returns the data saved in the database.
     * @param {StatusPembiayaanCreateManyAndReturnArgs} args - Arguments to create many StatusPembiayaans.
     * @example
     * // Create many StatusPembiayaans
     * const statusPembiayaan = await prisma.statusPembiayaan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusPembiayaans and only return the `id`
     * const statusPembiayaanWithIdOnly = await prisma.statusPembiayaan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusPembiayaanCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusPembiayaanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusPembiayaan.
     * @param {StatusPembiayaanDeleteArgs} args - Arguments to delete one StatusPembiayaan.
     * @example
     * // Delete one StatusPembiayaan
     * const StatusPembiayaan = await prisma.statusPembiayaan.delete({
     *   where: {
     *     // ... filter to delete one StatusPembiayaan
     *   }
     * })
     * 
     */
    delete<T extends StatusPembiayaanDeleteArgs>(args: SelectSubset<T, StatusPembiayaanDeleteArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusPembiayaan.
     * @param {StatusPembiayaanUpdateArgs} args - Arguments to update one StatusPembiayaan.
     * @example
     * // Update one StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusPembiayaanUpdateArgs>(args: SelectSubset<T, StatusPembiayaanUpdateArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusPembiayaans.
     * @param {StatusPembiayaanDeleteManyArgs} args - Arguments to filter StatusPembiayaans to delete.
     * @example
     * // Delete a few StatusPembiayaans
     * const { count } = await prisma.statusPembiayaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusPembiayaanDeleteManyArgs>(args?: SelectSubset<T, StatusPembiayaanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusPembiayaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusPembiayaans
     * const statusPembiayaan = await prisma.statusPembiayaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusPembiayaanUpdateManyArgs>(args: SelectSubset<T, StatusPembiayaanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusPembiayaans and returns the data updated in the database.
     * @param {StatusPembiayaanUpdateManyAndReturnArgs} args - Arguments to update many StatusPembiayaans.
     * @example
     * // Update many StatusPembiayaans
     * const statusPembiayaan = await prisma.statusPembiayaan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusPembiayaans and only return the `id`
     * const statusPembiayaanWithIdOnly = await prisma.statusPembiayaan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusPembiayaanUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusPembiayaanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusPembiayaan.
     * @param {StatusPembiayaanUpsertArgs} args - Arguments to update or create a StatusPembiayaan.
     * @example
     * // Update or create a StatusPembiayaan
     * const statusPembiayaan = await prisma.statusPembiayaan.upsert({
     *   create: {
     *     // ... data to create a StatusPembiayaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusPembiayaan we want to update
     *   }
     * })
     */
    upsert<T extends StatusPembiayaanUpsertArgs>(args: SelectSubset<T, StatusPembiayaanUpsertArgs<ExtArgs>>): Prisma__StatusPembiayaanClient<$Result.GetResult<Prisma.$StatusPembiayaanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusPembiayaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanCountArgs} args - Arguments to filter StatusPembiayaans to count.
     * @example
     * // Count the number of StatusPembiayaans
     * const count = await prisma.statusPembiayaan.count({
     *   where: {
     *     // ... the filter for the StatusPembiayaans we want to count
     *   }
     * })
    **/
    count<T extends StatusPembiayaanCountArgs>(
      args?: Subset<T, StatusPembiayaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusPembiayaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusPembiayaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusPembiayaanAggregateArgs>(args: Subset<T, StatusPembiayaanAggregateArgs>): Prisma.PrismaPromise<GetStatusPembiayaanAggregateType<T>>

    /**
     * Group by StatusPembiayaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusPembiayaanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusPembiayaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusPembiayaanGroupByArgs['orderBy'] }
        : { orderBy?: StatusPembiayaanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusPembiayaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusPembiayaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusPembiayaan model
   */
  readonly fields: StatusPembiayaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusPembiayaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusPembiayaanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends StatusPembiayaan$pasienArgs<ExtArgs> = {}>(args?: Subset<T, StatusPembiayaan$pasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusPembiayaan model
   */
  interface StatusPembiayaanFieldRefs {
    readonly id: FieldRef<"StatusPembiayaan", 'String'>
    readonly namaStatusPembiayaan: FieldRef<"StatusPembiayaan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusPembiayaan findUnique
   */
  export type StatusPembiayaanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPembiayaan to fetch.
     */
    where: StatusPembiayaanWhereUniqueInput
  }

  /**
   * StatusPembiayaan findUniqueOrThrow
   */
  export type StatusPembiayaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPembiayaan to fetch.
     */
    where: StatusPembiayaanWhereUniqueInput
  }

  /**
   * StatusPembiayaan findFirst
   */
  export type StatusPembiayaanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPembiayaan to fetch.
     */
    where?: StatusPembiayaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPembiayaans to fetch.
     */
    orderBy?: StatusPembiayaanOrderByWithRelationInput | StatusPembiayaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusPembiayaans.
     */
    cursor?: StatusPembiayaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPembiayaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPembiayaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusPembiayaans.
     */
    distinct?: StatusPembiayaanScalarFieldEnum | StatusPembiayaanScalarFieldEnum[]
  }

  /**
   * StatusPembiayaan findFirstOrThrow
   */
  export type StatusPembiayaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPembiayaan to fetch.
     */
    where?: StatusPembiayaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPembiayaans to fetch.
     */
    orderBy?: StatusPembiayaanOrderByWithRelationInput | StatusPembiayaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusPembiayaans.
     */
    cursor?: StatusPembiayaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPembiayaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPembiayaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusPembiayaans.
     */
    distinct?: StatusPembiayaanScalarFieldEnum | StatusPembiayaanScalarFieldEnum[]
  }

  /**
   * StatusPembiayaan findMany
   */
  export type StatusPembiayaanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter, which StatusPembiayaans to fetch.
     */
    where?: StatusPembiayaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusPembiayaans to fetch.
     */
    orderBy?: StatusPembiayaanOrderByWithRelationInput | StatusPembiayaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusPembiayaans.
     */
    cursor?: StatusPembiayaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusPembiayaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusPembiayaans.
     */
    skip?: number
    distinct?: StatusPembiayaanScalarFieldEnum | StatusPembiayaanScalarFieldEnum[]
  }

  /**
   * StatusPembiayaan create
   */
  export type StatusPembiayaanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusPembiayaan.
     */
    data: XOR<StatusPembiayaanCreateInput, StatusPembiayaanUncheckedCreateInput>
  }

  /**
   * StatusPembiayaan createMany
   */
  export type StatusPembiayaanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusPembiayaans.
     */
    data: StatusPembiayaanCreateManyInput | StatusPembiayaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusPembiayaan createManyAndReturn
   */
  export type StatusPembiayaanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * The data used to create many StatusPembiayaans.
     */
    data: StatusPembiayaanCreateManyInput | StatusPembiayaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusPembiayaan update
   */
  export type StatusPembiayaanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusPembiayaan.
     */
    data: XOR<StatusPembiayaanUpdateInput, StatusPembiayaanUncheckedUpdateInput>
    /**
     * Choose, which StatusPembiayaan to update.
     */
    where: StatusPembiayaanWhereUniqueInput
  }

  /**
   * StatusPembiayaan updateMany
   */
  export type StatusPembiayaanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusPembiayaans.
     */
    data: XOR<StatusPembiayaanUpdateManyMutationInput, StatusPembiayaanUncheckedUpdateManyInput>
    /**
     * Filter which StatusPembiayaans to update
     */
    where?: StatusPembiayaanWhereInput
    /**
     * Limit how many StatusPembiayaans to update.
     */
    limit?: number
  }

  /**
   * StatusPembiayaan updateManyAndReturn
   */
  export type StatusPembiayaanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * The data used to update StatusPembiayaans.
     */
    data: XOR<StatusPembiayaanUpdateManyMutationInput, StatusPembiayaanUncheckedUpdateManyInput>
    /**
     * Filter which StatusPembiayaans to update
     */
    where?: StatusPembiayaanWhereInput
    /**
     * Limit how many StatusPembiayaans to update.
     */
    limit?: number
  }

  /**
   * StatusPembiayaan upsert
   */
  export type StatusPembiayaanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusPembiayaan to update in case it exists.
     */
    where: StatusPembiayaanWhereUniqueInput
    /**
     * In case the StatusPembiayaan found by the `where` argument doesn't exist, create a new StatusPembiayaan with this data.
     */
    create: XOR<StatusPembiayaanCreateInput, StatusPembiayaanUncheckedCreateInput>
    /**
     * In case the StatusPembiayaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusPembiayaanUpdateInput, StatusPembiayaanUncheckedUpdateInput>
  }

  /**
   * StatusPembiayaan delete
   */
  export type StatusPembiayaanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
    /**
     * Filter which StatusPembiayaan to delete.
     */
    where: StatusPembiayaanWhereUniqueInput
  }

  /**
   * StatusPembiayaan deleteMany
   */
  export type StatusPembiayaanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusPembiayaans to delete
     */
    where?: StatusPembiayaanWhereInput
    /**
     * Limit how many StatusPembiayaans to delete.
     */
    limit?: number
  }

  /**
   * StatusPembiayaan.pasien
   */
  export type StatusPembiayaan$pasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    cursor?: PasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * StatusPembiayaan without action
   */
  export type StatusPembiayaanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusPembiayaan
     */
    select?: StatusPembiayaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusPembiayaan
     */
    omit?: StatusPembiayaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusPembiayaanInclude<ExtArgs> | null
  }


  /**
   * Model Pendidikan
   */

  export type AggregatePendidikan = {
    _count: PendidikanCountAggregateOutputType | null
    _min: PendidikanMinAggregateOutputType | null
    _max: PendidikanMaxAggregateOutputType | null
  }

  export type PendidikanMinAggregateOutputType = {
    id: string | null
    namaPendidikan: string | null
  }

  export type PendidikanMaxAggregateOutputType = {
    id: string | null
    namaPendidikan: string | null
  }

  export type PendidikanCountAggregateOutputType = {
    id: number
    namaPendidikan: number
    _all: number
  }


  export type PendidikanMinAggregateInputType = {
    id?: true
    namaPendidikan?: true
  }

  export type PendidikanMaxAggregateInputType = {
    id?: true
    namaPendidikan?: true
  }

  export type PendidikanCountAggregateInputType = {
    id?: true
    namaPendidikan?: true
    _all?: true
  }

  export type PendidikanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pendidikan to aggregate.
     */
    where?: PendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendidikans to fetch.
     */
    orderBy?: PendidikanOrderByWithRelationInput | PendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pendidikans
    **/
    _count?: true | PendidikanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendidikanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendidikanMaxAggregateInputType
  }

  export type GetPendidikanAggregateType<T extends PendidikanAggregateArgs> = {
        [P in keyof T & keyof AggregatePendidikan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendidikan[P]>
      : GetScalarType<T[P], AggregatePendidikan[P]>
  }




  export type PendidikanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendidikanWhereInput
    orderBy?: PendidikanOrderByWithAggregationInput | PendidikanOrderByWithAggregationInput[]
    by: PendidikanScalarFieldEnum[] | PendidikanScalarFieldEnum
    having?: PendidikanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendidikanCountAggregateInputType | true
    _min?: PendidikanMinAggregateInputType
    _max?: PendidikanMaxAggregateInputType
  }

  export type PendidikanGroupByOutputType = {
    id: string
    namaPendidikan: string
    _count: PendidikanCountAggregateOutputType | null
    _min: PendidikanMinAggregateOutputType | null
    _max: PendidikanMaxAggregateOutputType | null
  }

  type GetPendidikanGroupByPayload<T extends PendidikanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendidikanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendidikanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendidikanGroupByOutputType[P]>
            : GetScalarType<T[P], PendidikanGroupByOutputType[P]>
        }
      >
    >


  export type PendidikanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPendidikan?: boolean
    pasien?: boolean | Pendidikan$pasienArgs<ExtArgs>
    _count?: boolean | PendidikanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendidikan"]>

  export type PendidikanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPendidikan?: boolean
  }, ExtArgs["result"]["pendidikan"]>

  export type PendidikanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPendidikan?: boolean
  }, ExtArgs["result"]["pendidikan"]>

  export type PendidikanSelectScalar = {
    id?: boolean
    namaPendidikan?: boolean
  }

  export type PendidikanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaPendidikan", ExtArgs["result"]["pendidikan"]>
  export type PendidikanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | Pendidikan$pasienArgs<ExtArgs>
    _count?: boolean | PendidikanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PendidikanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PendidikanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PendidikanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pendidikan"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaPendidikan: string
    }, ExtArgs["result"]["pendidikan"]>
    composites: {}
  }

  type PendidikanGetPayload<S extends boolean | null | undefined | PendidikanDefaultArgs> = $Result.GetResult<Prisma.$PendidikanPayload, S>

  type PendidikanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendidikanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendidikanCountAggregateInputType | true
    }

  export interface PendidikanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pendidikan'], meta: { name: 'Pendidikan' } }
    /**
     * Find zero or one Pendidikan that matches the filter.
     * @param {PendidikanFindUniqueArgs} args - Arguments to find a Pendidikan
     * @example
     * // Get one Pendidikan
     * const pendidikan = await prisma.pendidikan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendidikanFindUniqueArgs>(args: SelectSubset<T, PendidikanFindUniqueArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendidikan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendidikanFindUniqueOrThrowArgs} args - Arguments to find a Pendidikan
     * @example
     * // Get one Pendidikan
     * const pendidikan = await prisma.pendidikan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendidikanFindUniqueOrThrowArgs>(args: SelectSubset<T, PendidikanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendidikan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanFindFirstArgs} args - Arguments to find a Pendidikan
     * @example
     * // Get one Pendidikan
     * const pendidikan = await prisma.pendidikan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendidikanFindFirstArgs>(args?: SelectSubset<T, PendidikanFindFirstArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendidikan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanFindFirstOrThrowArgs} args - Arguments to find a Pendidikan
     * @example
     * // Get one Pendidikan
     * const pendidikan = await prisma.pendidikan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendidikanFindFirstOrThrowArgs>(args?: SelectSubset<T, PendidikanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendidikans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendidikans
     * const pendidikans = await prisma.pendidikan.findMany()
     * 
     * // Get first 10 Pendidikans
     * const pendidikans = await prisma.pendidikan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendidikanWithIdOnly = await prisma.pendidikan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendidikanFindManyArgs>(args?: SelectSubset<T, PendidikanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendidikan.
     * @param {PendidikanCreateArgs} args - Arguments to create a Pendidikan.
     * @example
     * // Create one Pendidikan
     * const Pendidikan = await prisma.pendidikan.create({
     *   data: {
     *     // ... data to create a Pendidikan
     *   }
     * })
     * 
     */
    create<T extends PendidikanCreateArgs>(args: SelectSubset<T, PendidikanCreateArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendidikans.
     * @param {PendidikanCreateManyArgs} args - Arguments to create many Pendidikans.
     * @example
     * // Create many Pendidikans
     * const pendidikan = await prisma.pendidikan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendidikanCreateManyArgs>(args?: SelectSubset<T, PendidikanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendidikans and returns the data saved in the database.
     * @param {PendidikanCreateManyAndReturnArgs} args - Arguments to create many Pendidikans.
     * @example
     * // Create many Pendidikans
     * const pendidikan = await prisma.pendidikan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendidikans and only return the `id`
     * const pendidikanWithIdOnly = await prisma.pendidikan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendidikanCreateManyAndReturnArgs>(args?: SelectSubset<T, PendidikanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendidikan.
     * @param {PendidikanDeleteArgs} args - Arguments to delete one Pendidikan.
     * @example
     * // Delete one Pendidikan
     * const Pendidikan = await prisma.pendidikan.delete({
     *   where: {
     *     // ... filter to delete one Pendidikan
     *   }
     * })
     * 
     */
    delete<T extends PendidikanDeleteArgs>(args: SelectSubset<T, PendidikanDeleteArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendidikan.
     * @param {PendidikanUpdateArgs} args - Arguments to update one Pendidikan.
     * @example
     * // Update one Pendidikan
     * const pendidikan = await prisma.pendidikan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendidikanUpdateArgs>(args: SelectSubset<T, PendidikanUpdateArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendidikans.
     * @param {PendidikanDeleteManyArgs} args - Arguments to filter Pendidikans to delete.
     * @example
     * // Delete a few Pendidikans
     * const { count } = await prisma.pendidikan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendidikanDeleteManyArgs>(args?: SelectSubset<T, PendidikanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendidikans
     * const pendidikan = await prisma.pendidikan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendidikanUpdateManyArgs>(args: SelectSubset<T, PendidikanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendidikans and returns the data updated in the database.
     * @param {PendidikanUpdateManyAndReturnArgs} args - Arguments to update many Pendidikans.
     * @example
     * // Update many Pendidikans
     * const pendidikan = await prisma.pendidikan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendidikans and only return the `id`
     * const pendidikanWithIdOnly = await prisma.pendidikan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendidikanUpdateManyAndReturnArgs>(args: SelectSubset<T, PendidikanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendidikan.
     * @param {PendidikanUpsertArgs} args - Arguments to update or create a Pendidikan.
     * @example
     * // Update or create a Pendidikan
     * const pendidikan = await prisma.pendidikan.upsert({
     *   create: {
     *     // ... data to create a Pendidikan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendidikan we want to update
     *   }
     * })
     */
    upsert<T extends PendidikanUpsertArgs>(args: SelectSubset<T, PendidikanUpsertArgs<ExtArgs>>): Prisma__PendidikanClient<$Result.GetResult<Prisma.$PendidikanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanCountArgs} args - Arguments to filter Pendidikans to count.
     * @example
     * // Count the number of Pendidikans
     * const count = await prisma.pendidikan.count({
     *   where: {
     *     // ... the filter for the Pendidikans we want to count
     *   }
     * })
    **/
    count<T extends PendidikanCountArgs>(
      args?: Subset<T, PendidikanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendidikanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendidikanAggregateArgs>(args: Subset<T, PendidikanAggregateArgs>): Prisma.PrismaPromise<GetPendidikanAggregateType<T>>

    /**
     * Group by Pendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendidikanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendidikanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendidikanGroupByArgs['orderBy'] }
        : { orderBy?: PendidikanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendidikanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendidikanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pendidikan model
   */
  readonly fields: PendidikanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pendidikan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendidikanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends Pendidikan$pasienArgs<ExtArgs> = {}>(args?: Subset<T, Pendidikan$pasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pendidikan model
   */
  interface PendidikanFieldRefs {
    readonly id: FieldRef<"Pendidikan", 'String'>
    readonly namaPendidikan: FieldRef<"Pendidikan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pendidikan findUnique
   */
  export type PendidikanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter, which Pendidikan to fetch.
     */
    where: PendidikanWhereUniqueInput
  }

  /**
   * Pendidikan findUniqueOrThrow
   */
  export type PendidikanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter, which Pendidikan to fetch.
     */
    where: PendidikanWhereUniqueInput
  }

  /**
   * Pendidikan findFirst
   */
  export type PendidikanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter, which Pendidikan to fetch.
     */
    where?: PendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendidikans to fetch.
     */
    orderBy?: PendidikanOrderByWithRelationInput | PendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendidikans.
     */
    cursor?: PendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendidikans.
     */
    distinct?: PendidikanScalarFieldEnum | PendidikanScalarFieldEnum[]
  }

  /**
   * Pendidikan findFirstOrThrow
   */
  export type PendidikanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter, which Pendidikan to fetch.
     */
    where?: PendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendidikans to fetch.
     */
    orderBy?: PendidikanOrderByWithRelationInput | PendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendidikans.
     */
    cursor?: PendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendidikans.
     */
    distinct?: PendidikanScalarFieldEnum | PendidikanScalarFieldEnum[]
  }

  /**
   * Pendidikan findMany
   */
  export type PendidikanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter, which Pendidikans to fetch.
     */
    where?: PendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendidikans to fetch.
     */
    orderBy?: PendidikanOrderByWithRelationInput | PendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pendidikans.
     */
    cursor?: PendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendidikans.
     */
    skip?: number
    distinct?: PendidikanScalarFieldEnum | PendidikanScalarFieldEnum[]
  }

  /**
   * Pendidikan create
   */
  export type PendidikanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pendidikan.
     */
    data: XOR<PendidikanCreateInput, PendidikanUncheckedCreateInput>
  }

  /**
   * Pendidikan createMany
   */
  export type PendidikanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pendidikans.
     */
    data: PendidikanCreateManyInput | PendidikanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pendidikan createManyAndReturn
   */
  export type PendidikanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * The data used to create many Pendidikans.
     */
    data: PendidikanCreateManyInput | PendidikanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pendidikan update
   */
  export type PendidikanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pendidikan.
     */
    data: XOR<PendidikanUpdateInput, PendidikanUncheckedUpdateInput>
    /**
     * Choose, which Pendidikan to update.
     */
    where: PendidikanWhereUniqueInput
  }

  /**
   * Pendidikan updateMany
   */
  export type PendidikanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pendidikans.
     */
    data: XOR<PendidikanUpdateManyMutationInput, PendidikanUncheckedUpdateManyInput>
    /**
     * Filter which Pendidikans to update
     */
    where?: PendidikanWhereInput
    /**
     * Limit how many Pendidikans to update.
     */
    limit?: number
  }

  /**
   * Pendidikan updateManyAndReturn
   */
  export type PendidikanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * The data used to update Pendidikans.
     */
    data: XOR<PendidikanUpdateManyMutationInput, PendidikanUncheckedUpdateManyInput>
    /**
     * Filter which Pendidikans to update
     */
    where?: PendidikanWhereInput
    /**
     * Limit how many Pendidikans to update.
     */
    limit?: number
  }

  /**
   * Pendidikan upsert
   */
  export type PendidikanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pendidikan to update in case it exists.
     */
    where: PendidikanWhereUniqueInput
    /**
     * In case the Pendidikan found by the `where` argument doesn't exist, create a new Pendidikan with this data.
     */
    create: XOR<PendidikanCreateInput, PendidikanUncheckedCreateInput>
    /**
     * In case the Pendidikan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendidikanUpdateInput, PendidikanUncheckedUpdateInput>
  }

  /**
   * Pendidikan delete
   */
  export type PendidikanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
    /**
     * Filter which Pendidikan to delete.
     */
    where: PendidikanWhereUniqueInput
  }

  /**
   * Pendidikan deleteMany
   */
  export type PendidikanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pendidikans to delete
     */
    where?: PendidikanWhereInput
    /**
     * Limit how many Pendidikans to delete.
     */
    limit?: number
  }

  /**
   * Pendidikan.pasien
   */
  export type Pendidikan$pasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    cursor?: PasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pendidikan without action
   */
  export type PendidikanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendidikan
     */
    select?: PendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendidikan
     */
    omit?: PendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendidikanInclude<ExtArgs> | null
  }


  /**
   * Model Agama
   */

  export type AggregateAgama = {
    _count: AgamaCountAggregateOutputType | null
    _min: AgamaMinAggregateOutputType | null
    _max: AgamaMaxAggregateOutputType | null
  }

  export type AgamaMinAggregateOutputType = {
    id: string | null
    namaAgama: string | null
  }

  export type AgamaMaxAggregateOutputType = {
    id: string | null
    namaAgama: string | null
  }

  export type AgamaCountAggregateOutputType = {
    id: number
    namaAgama: number
    _all: number
  }


  export type AgamaMinAggregateInputType = {
    id?: true
    namaAgama?: true
  }

  export type AgamaMaxAggregateInputType = {
    id?: true
    namaAgama?: true
  }

  export type AgamaCountAggregateInputType = {
    id?: true
    namaAgama?: true
    _all?: true
  }

  export type AgamaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agama to aggregate.
     */
    where?: AgamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agamas to fetch.
     */
    orderBy?: AgamaOrderByWithRelationInput | AgamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agamas
    **/
    _count?: true | AgamaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgamaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgamaMaxAggregateInputType
  }

  export type GetAgamaAggregateType<T extends AgamaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgama]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgama[P]>
      : GetScalarType<T[P], AggregateAgama[P]>
  }




  export type AgamaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgamaWhereInput
    orderBy?: AgamaOrderByWithAggregationInput | AgamaOrderByWithAggregationInput[]
    by: AgamaScalarFieldEnum[] | AgamaScalarFieldEnum
    having?: AgamaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgamaCountAggregateInputType | true
    _min?: AgamaMinAggregateInputType
    _max?: AgamaMaxAggregateInputType
  }

  export type AgamaGroupByOutputType = {
    id: string
    namaAgama: string
    _count: AgamaCountAggregateOutputType | null
    _min: AgamaMinAggregateOutputType | null
    _max: AgamaMaxAggregateOutputType | null
  }

  type GetAgamaGroupByPayload<T extends AgamaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgamaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgamaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgamaGroupByOutputType[P]>
            : GetScalarType<T[P], AgamaGroupByOutputType[P]>
        }
      >
    >


  export type AgamaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaAgama?: boolean
    pasien?: boolean | Agama$pasienArgs<ExtArgs>
    _count?: boolean | AgamaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agama"]>

  export type AgamaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaAgama?: boolean
  }, ExtArgs["result"]["agama"]>

  export type AgamaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaAgama?: boolean
  }, ExtArgs["result"]["agama"]>

  export type AgamaSelectScalar = {
    id?: boolean
    namaAgama?: boolean
  }

  export type AgamaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaAgama", ExtArgs["result"]["agama"]>
  export type AgamaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | Agama$pasienArgs<ExtArgs>
    _count?: boolean | AgamaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgamaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgamaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgamaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agama"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaAgama: string
    }, ExtArgs["result"]["agama"]>
    composites: {}
  }

  type AgamaGetPayload<S extends boolean | null | undefined | AgamaDefaultArgs> = $Result.GetResult<Prisma.$AgamaPayload, S>

  type AgamaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgamaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgamaCountAggregateInputType | true
    }

  export interface AgamaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agama'], meta: { name: 'Agama' } }
    /**
     * Find zero or one Agama that matches the filter.
     * @param {AgamaFindUniqueArgs} args - Arguments to find a Agama
     * @example
     * // Get one Agama
     * const agama = await prisma.agama.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgamaFindUniqueArgs>(args: SelectSubset<T, AgamaFindUniqueArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agama that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgamaFindUniqueOrThrowArgs} args - Arguments to find a Agama
     * @example
     * // Get one Agama
     * const agama = await prisma.agama.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgamaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgamaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agama that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaFindFirstArgs} args - Arguments to find a Agama
     * @example
     * // Get one Agama
     * const agama = await prisma.agama.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgamaFindFirstArgs>(args?: SelectSubset<T, AgamaFindFirstArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agama that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaFindFirstOrThrowArgs} args - Arguments to find a Agama
     * @example
     * // Get one Agama
     * const agama = await prisma.agama.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgamaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgamaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agamas
     * const agamas = await prisma.agama.findMany()
     * 
     * // Get first 10 Agamas
     * const agamas = await prisma.agama.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agamaWithIdOnly = await prisma.agama.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgamaFindManyArgs>(args?: SelectSubset<T, AgamaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agama.
     * @param {AgamaCreateArgs} args - Arguments to create a Agama.
     * @example
     * // Create one Agama
     * const Agama = await prisma.agama.create({
     *   data: {
     *     // ... data to create a Agama
     *   }
     * })
     * 
     */
    create<T extends AgamaCreateArgs>(args: SelectSubset<T, AgamaCreateArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agamas.
     * @param {AgamaCreateManyArgs} args - Arguments to create many Agamas.
     * @example
     * // Create many Agamas
     * const agama = await prisma.agama.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgamaCreateManyArgs>(args?: SelectSubset<T, AgamaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agamas and returns the data saved in the database.
     * @param {AgamaCreateManyAndReturnArgs} args - Arguments to create many Agamas.
     * @example
     * // Create many Agamas
     * const agama = await prisma.agama.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agamas and only return the `id`
     * const agamaWithIdOnly = await prisma.agama.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgamaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgamaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agama.
     * @param {AgamaDeleteArgs} args - Arguments to delete one Agama.
     * @example
     * // Delete one Agama
     * const Agama = await prisma.agama.delete({
     *   where: {
     *     // ... filter to delete one Agama
     *   }
     * })
     * 
     */
    delete<T extends AgamaDeleteArgs>(args: SelectSubset<T, AgamaDeleteArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agama.
     * @param {AgamaUpdateArgs} args - Arguments to update one Agama.
     * @example
     * // Update one Agama
     * const agama = await prisma.agama.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgamaUpdateArgs>(args: SelectSubset<T, AgamaUpdateArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agamas.
     * @param {AgamaDeleteManyArgs} args - Arguments to filter Agamas to delete.
     * @example
     * // Delete a few Agamas
     * const { count } = await prisma.agama.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgamaDeleteManyArgs>(args?: SelectSubset<T, AgamaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agamas
     * const agama = await prisma.agama.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgamaUpdateManyArgs>(args: SelectSubset<T, AgamaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agamas and returns the data updated in the database.
     * @param {AgamaUpdateManyAndReturnArgs} args - Arguments to update many Agamas.
     * @example
     * // Update many Agamas
     * const agama = await prisma.agama.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agamas and only return the `id`
     * const agamaWithIdOnly = await prisma.agama.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgamaUpdateManyAndReturnArgs>(args: SelectSubset<T, AgamaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agama.
     * @param {AgamaUpsertArgs} args - Arguments to update or create a Agama.
     * @example
     * // Update or create a Agama
     * const agama = await prisma.agama.upsert({
     *   create: {
     *     // ... data to create a Agama
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agama we want to update
     *   }
     * })
     */
    upsert<T extends AgamaUpsertArgs>(args: SelectSubset<T, AgamaUpsertArgs<ExtArgs>>): Prisma__AgamaClient<$Result.GetResult<Prisma.$AgamaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaCountArgs} args - Arguments to filter Agamas to count.
     * @example
     * // Count the number of Agamas
     * const count = await prisma.agama.count({
     *   where: {
     *     // ... the filter for the Agamas we want to count
     *   }
     * })
    **/
    count<T extends AgamaCountArgs>(
      args?: Subset<T, AgamaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgamaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgamaAggregateArgs>(args: Subset<T, AgamaAggregateArgs>): Prisma.PrismaPromise<GetAgamaAggregateType<T>>

    /**
     * Group by Agama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgamaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgamaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgamaGroupByArgs['orderBy'] }
        : { orderBy?: AgamaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgamaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgamaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agama model
   */
  readonly fields: AgamaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agama.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgamaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends Agama$pasienArgs<ExtArgs> = {}>(args?: Subset<T, Agama$pasienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agama model
   */
  interface AgamaFieldRefs {
    readonly id: FieldRef<"Agama", 'String'>
    readonly namaAgama: FieldRef<"Agama", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agama findUnique
   */
  export type AgamaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter, which Agama to fetch.
     */
    where: AgamaWhereUniqueInput
  }

  /**
   * Agama findUniqueOrThrow
   */
  export type AgamaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter, which Agama to fetch.
     */
    where: AgamaWhereUniqueInput
  }

  /**
   * Agama findFirst
   */
  export type AgamaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter, which Agama to fetch.
     */
    where?: AgamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agamas to fetch.
     */
    orderBy?: AgamaOrderByWithRelationInput | AgamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agamas.
     */
    cursor?: AgamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agamas.
     */
    distinct?: AgamaScalarFieldEnum | AgamaScalarFieldEnum[]
  }

  /**
   * Agama findFirstOrThrow
   */
  export type AgamaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter, which Agama to fetch.
     */
    where?: AgamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agamas to fetch.
     */
    orderBy?: AgamaOrderByWithRelationInput | AgamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agamas.
     */
    cursor?: AgamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agamas.
     */
    distinct?: AgamaScalarFieldEnum | AgamaScalarFieldEnum[]
  }

  /**
   * Agama findMany
   */
  export type AgamaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter, which Agamas to fetch.
     */
    where?: AgamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agamas to fetch.
     */
    orderBy?: AgamaOrderByWithRelationInput | AgamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agamas.
     */
    cursor?: AgamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agamas.
     */
    skip?: number
    distinct?: AgamaScalarFieldEnum | AgamaScalarFieldEnum[]
  }

  /**
   * Agama create
   */
  export type AgamaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agama.
     */
    data: XOR<AgamaCreateInput, AgamaUncheckedCreateInput>
  }

  /**
   * Agama createMany
   */
  export type AgamaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agamas.
     */
    data: AgamaCreateManyInput | AgamaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agama createManyAndReturn
   */
  export type AgamaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * The data used to create many Agamas.
     */
    data: AgamaCreateManyInput | AgamaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agama update
   */
  export type AgamaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agama.
     */
    data: XOR<AgamaUpdateInput, AgamaUncheckedUpdateInput>
    /**
     * Choose, which Agama to update.
     */
    where: AgamaWhereUniqueInput
  }

  /**
   * Agama updateMany
   */
  export type AgamaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agamas.
     */
    data: XOR<AgamaUpdateManyMutationInput, AgamaUncheckedUpdateManyInput>
    /**
     * Filter which Agamas to update
     */
    where?: AgamaWhereInput
    /**
     * Limit how many Agamas to update.
     */
    limit?: number
  }

  /**
   * Agama updateManyAndReturn
   */
  export type AgamaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * The data used to update Agamas.
     */
    data: XOR<AgamaUpdateManyMutationInput, AgamaUncheckedUpdateManyInput>
    /**
     * Filter which Agamas to update
     */
    where?: AgamaWhereInput
    /**
     * Limit how many Agamas to update.
     */
    limit?: number
  }

  /**
   * Agama upsert
   */
  export type AgamaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agama to update in case it exists.
     */
    where: AgamaWhereUniqueInput
    /**
     * In case the Agama found by the `where` argument doesn't exist, create a new Agama with this data.
     */
    create: XOR<AgamaCreateInput, AgamaUncheckedCreateInput>
    /**
     * In case the Agama was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgamaUpdateInput, AgamaUncheckedUpdateInput>
  }

  /**
   * Agama delete
   */
  export type AgamaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
    /**
     * Filter which Agama to delete.
     */
    where: AgamaWhereUniqueInput
  }

  /**
   * Agama deleteMany
   */
  export type AgamaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agamas to delete
     */
    where?: AgamaWhereInput
    /**
     * Limit how many Agamas to delete.
     */
    limit?: number
  }

  /**
   * Agama.pasien
   */
  export type Agama$pasienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    cursor?: PasienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Agama without action
   */
  export type AgamaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agama
     */
    select?: AgamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agama
     */
    omit?: AgamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgamaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasienScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    ihsNumber: 'ihsNumber',
    medicalRecordNumber: 'medicalRecordNumber',
    tanggalLahir: 'tanggalLahir',
    statusPerkawinanId: 'statusPerkawinanId',
    statusPembiayaanId: 'statusPembiayaanId',
    pendidikanId: 'pendidikanId',
    agamaId: 'agamaId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type PasienScalarFieldEnum = (typeof PasienScalarFieldEnum)[keyof typeof PasienScalarFieldEnum]


  export const NamaPasienScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    namaDepan: 'namaDepan',
    namaTengah: 'namaTengah',
    namaBelakang: 'namaBelakang',
    namaLengkap: 'namaLengkap',
    use: 'use'
  };

  export type NamaPasienScalarFieldEnum = (typeof NamaPasienScalarFieldEnum)[keyof typeof NamaPasienScalarFieldEnum]


  export const KontakPasienScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    jenisKontakId: 'jenisKontakId',
    nilaiKontak: 'nilaiKontak',
    use: 'use'
  };

  export type KontakPasienScalarFieldEnum = (typeof KontakPasienScalarFieldEnum)[keyof typeof KontakPasienScalarFieldEnum]


  export const JenisKontakScalarFieldEnum: {
    id: 'id',
    namaJenis: 'namaJenis'
  };

  export type JenisKontakScalarFieldEnum = (typeof JenisKontakScalarFieldEnum)[keyof typeof JenisKontakScalarFieldEnum]


  export const AlamatPasienScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    jalan: 'jalan',
    rtRw: 'rtRw',
    lingkungan: 'lingkungan',
    kelurahanDesa: 'kelurahanDesa',
    kecamatan: 'kecamatan',
    kabupatenKota: 'kabupatenKota'
  };

  export type AlamatPasienScalarFieldEnum = (typeof AlamatPasienScalarFieldEnum)[keyof typeof AlamatPasienScalarFieldEnum]


  export const DokumenPasienScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    tipeDokumen: 'tipeDokumen',
    fileUrl: 'fileUrl'
  };

  export type DokumenPasienScalarFieldEnum = (typeof DokumenPasienScalarFieldEnum)[keyof typeof DokumenPasienScalarFieldEnum]


  export const IdentifierPasienScalarFieldEnum: {
    id: 'id',
    pasienId: 'pasienId',
    jenisIdentifierId: 'jenisIdentifierId',
    nilaiIdentifier: 'nilaiIdentifier',
    use: 'use'
  };

  export type IdentifierPasienScalarFieldEnum = (typeof IdentifierPasienScalarFieldEnum)[keyof typeof IdentifierPasienScalarFieldEnum]


  export const JenisIdentifierScalarFieldEnum: {
    id: 'id',
    namaJenisIdentifier: 'namaJenisIdentifier'
  };

  export type JenisIdentifierScalarFieldEnum = (typeof JenisIdentifierScalarFieldEnum)[keyof typeof JenisIdentifierScalarFieldEnum]


  export const StatusPerkawinanScalarFieldEnum: {
    id: 'id',
    namaStatusPerkawinan: 'namaStatusPerkawinan'
  };

  export type StatusPerkawinanScalarFieldEnum = (typeof StatusPerkawinanScalarFieldEnum)[keyof typeof StatusPerkawinanScalarFieldEnum]


  export const StatusPembiayaanScalarFieldEnum: {
    id: 'id',
    namaStatusPembiayaan: 'namaStatusPembiayaan'
  };

  export type StatusPembiayaanScalarFieldEnum = (typeof StatusPembiayaanScalarFieldEnum)[keyof typeof StatusPembiayaanScalarFieldEnum]


  export const PendidikanScalarFieldEnum: {
    id: 'id',
    namaPendidikan: 'namaPendidikan'
  };

  export type PendidikanScalarFieldEnum = (typeof PendidikanScalarFieldEnum)[keyof typeof PendidikanScalarFieldEnum]


  export const AgamaScalarFieldEnum: {
    id: 'id',
    namaAgama: 'namaAgama'
  };

  export type AgamaScalarFieldEnum = (typeof AgamaScalarFieldEnum)[keyof typeof AgamaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Use'
   */
  export type EnumUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Use'>
    


  /**
   * Reference to a field of type 'Use[]'
   */
  export type ListEnumUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Use[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    pasien?: XOR<PasienNullableScalarRelationFilter, PasienWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    pasien?: PasienOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    pasien?: XOR<PasienNullableScalarRelationFilter, PasienWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PasienWhereInput = {
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    id?: StringFilter<"Pasien"> | string
    userId?: StringFilter<"Pasien"> | string
    gender?: EnumGenderFilter<"Pasien"> | $Enums.Gender
    ihsNumber?: StringFilter<"Pasien"> | string
    medicalRecordNumber?: StringFilter<"Pasien"> | string
    tanggalLahir?: DateTimeFilter<"Pasien"> | Date | string
    statusPerkawinanId?: StringFilter<"Pasien"> | string
    statusPembiayaanId?: StringFilter<"Pasien"> | string
    pendidikanId?: StringFilter<"Pasien"> | string
    agamaId?: StringFilter<"Pasien"> | string
    updatedAt?: DateTimeFilter<"Pasien"> | Date | string
    createdAt?: DateTimeFilter<"Pasien"> | Date | string
    alamat?: XOR<AlamatPasienNullableScalarRelationFilter, AlamatPasienWhereInput> | null
    dokumen?: DokumenPasienListRelationFilter
    identifiers?: IdentifierPasienListRelationFilter
    kontak?: KontakPasienListRelationFilter
    nama?: XOR<NamaPasienNullableScalarRelationFilter, NamaPasienWhereInput> | null
    agama?: XOR<AgamaScalarRelationFilter, AgamaWhereInput>
    pendidikan?: XOR<PendidikanScalarRelationFilter, PendidikanWhereInput>
    statusPembiayaan?: XOR<StatusPembiayaanScalarRelationFilter, StatusPembiayaanWhereInput>
    statusPerkawinan?: XOR<StatusPerkawinanScalarRelationFilter, StatusPerkawinanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasienOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    ihsNumber?: SortOrder
    medicalRecordNumber?: SortOrder
    tanggalLahir?: SortOrder
    statusPerkawinanId?: SortOrder
    statusPembiayaanId?: SortOrder
    pendidikanId?: SortOrder
    agamaId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    alamat?: AlamatPasienOrderByWithRelationInput
    dokumen?: DokumenPasienOrderByRelationAggregateInput
    identifiers?: IdentifierPasienOrderByRelationAggregateInput
    kontak?: KontakPasienOrderByRelationAggregateInput
    nama?: NamaPasienOrderByWithRelationInput
    agama?: AgamaOrderByWithRelationInput
    pendidikan?: PendidikanOrderByWithRelationInput
    statusPembiayaan?: StatusPembiayaanOrderByWithRelationInput
    statusPerkawinan?: StatusPerkawinanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    gender?: EnumGenderFilter<"Pasien"> | $Enums.Gender
    ihsNumber?: StringFilter<"Pasien"> | string
    medicalRecordNumber?: StringFilter<"Pasien"> | string
    tanggalLahir?: DateTimeFilter<"Pasien"> | Date | string
    statusPerkawinanId?: StringFilter<"Pasien"> | string
    statusPembiayaanId?: StringFilter<"Pasien"> | string
    pendidikanId?: StringFilter<"Pasien"> | string
    agamaId?: StringFilter<"Pasien"> | string
    updatedAt?: DateTimeFilter<"Pasien"> | Date | string
    createdAt?: DateTimeFilter<"Pasien"> | Date | string
    alamat?: XOR<AlamatPasienNullableScalarRelationFilter, AlamatPasienWhereInput> | null
    dokumen?: DokumenPasienListRelationFilter
    identifiers?: IdentifierPasienListRelationFilter
    kontak?: KontakPasienListRelationFilter
    nama?: XOR<NamaPasienNullableScalarRelationFilter, NamaPasienWhereInput> | null
    agama?: XOR<AgamaScalarRelationFilter, AgamaWhereInput>
    pendidikan?: XOR<PendidikanScalarRelationFilter, PendidikanWhereInput>
    statusPembiayaan?: XOR<StatusPembiayaanScalarRelationFilter, StatusPembiayaanWhereInput>
    statusPerkawinan?: XOR<StatusPerkawinanScalarRelationFilter, StatusPerkawinanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PasienOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    ihsNumber?: SortOrder
    medicalRecordNumber?: SortOrder
    tanggalLahir?: SortOrder
    statusPerkawinanId?: SortOrder
    statusPembiayaanId?: SortOrder
    pendidikanId?: SortOrder
    agamaId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasienCountOrderByAggregateInput
    _max?: PasienMaxOrderByAggregateInput
    _min?: PasienMinOrderByAggregateInput
  }

  export type PasienScalarWhereWithAggregatesInput = {
    AND?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    OR?: PasienScalarWhereWithAggregatesInput[]
    NOT?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pasien"> | string
    userId?: StringWithAggregatesFilter<"Pasien"> | string
    gender?: EnumGenderWithAggregatesFilter<"Pasien"> | $Enums.Gender
    ihsNumber?: StringWithAggregatesFilter<"Pasien"> | string
    medicalRecordNumber?: StringWithAggregatesFilter<"Pasien"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
    statusPerkawinanId?: StringWithAggregatesFilter<"Pasien"> | string
    statusPembiayaanId?: StringWithAggregatesFilter<"Pasien"> | string
    pendidikanId?: StringWithAggregatesFilter<"Pasien"> | string
    agamaId?: StringWithAggregatesFilter<"Pasien"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
  }

  export type NamaPasienWhereInput = {
    AND?: NamaPasienWhereInput | NamaPasienWhereInput[]
    OR?: NamaPasienWhereInput[]
    NOT?: NamaPasienWhereInput | NamaPasienWhereInput[]
    id?: StringFilter<"NamaPasien"> | string
    pasienId?: StringFilter<"NamaPasien"> | string
    namaDepan?: StringFilter<"NamaPasien"> | string
    namaTengah?: StringFilter<"NamaPasien"> | string
    namaBelakang?: StringFilter<"NamaPasien"> | string
    namaLengkap?: StringFilter<"NamaPasien"> | string
    use?: EnumUseFilter<"NamaPasien"> | $Enums.Use
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }

  export type NamaPasienOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    namaDepan?: SortOrder
    namaTengah?: SortOrder
    namaBelakang?: SortOrder
    namaLengkap?: SortOrder
    use?: SortOrder
    pasien?: PasienOrderByWithRelationInput
  }

  export type NamaPasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pasienId?: string
    AND?: NamaPasienWhereInput | NamaPasienWhereInput[]
    OR?: NamaPasienWhereInput[]
    NOT?: NamaPasienWhereInput | NamaPasienWhereInput[]
    namaDepan?: StringFilter<"NamaPasien"> | string
    namaTengah?: StringFilter<"NamaPasien"> | string
    namaBelakang?: StringFilter<"NamaPasien"> | string
    namaLengkap?: StringFilter<"NamaPasien"> | string
    use?: EnumUseFilter<"NamaPasien"> | $Enums.Use
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }, "id" | "pasienId">

  export type NamaPasienOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    namaDepan?: SortOrder
    namaTengah?: SortOrder
    namaBelakang?: SortOrder
    namaLengkap?: SortOrder
    use?: SortOrder
    _count?: NamaPasienCountOrderByAggregateInput
    _max?: NamaPasienMaxOrderByAggregateInput
    _min?: NamaPasienMinOrderByAggregateInput
  }

  export type NamaPasienScalarWhereWithAggregatesInput = {
    AND?: NamaPasienScalarWhereWithAggregatesInput | NamaPasienScalarWhereWithAggregatesInput[]
    OR?: NamaPasienScalarWhereWithAggregatesInput[]
    NOT?: NamaPasienScalarWhereWithAggregatesInput | NamaPasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NamaPasien"> | string
    pasienId?: StringWithAggregatesFilter<"NamaPasien"> | string
    namaDepan?: StringWithAggregatesFilter<"NamaPasien"> | string
    namaTengah?: StringWithAggregatesFilter<"NamaPasien"> | string
    namaBelakang?: StringWithAggregatesFilter<"NamaPasien"> | string
    namaLengkap?: StringWithAggregatesFilter<"NamaPasien"> | string
    use?: EnumUseWithAggregatesFilter<"NamaPasien"> | $Enums.Use
  }

  export type KontakPasienWhereInput = {
    AND?: KontakPasienWhereInput | KontakPasienWhereInput[]
    OR?: KontakPasienWhereInput[]
    NOT?: KontakPasienWhereInput | KontakPasienWhereInput[]
    id?: StringFilter<"KontakPasien"> | string
    pasienId?: StringFilter<"KontakPasien"> | string
    jenisKontakId?: StringFilter<"KontakPasien"> | string
    nilaiKontak?: StringFilter<"KontakPasien"> | string
    use?: EnumUseFilter<"KontakPasien"> | $Enums.Use
    jenisKontak?: XOR<JenisKontakScalarRelationFilter, JenisKontakWhereInput>
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }

  export type KontakPasienOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisKontakId?: SortOrder
    nilaiKontak?: SortOrder
    use?: SortOrder
    jenisKontak?: JenisKontakOrderByWithRelationInput
    pasien?: PasienOrderByWithRelationInput
  }

  export type KontakPasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KontakPasienWhereInput | KontakPasienWhereInput[]
    OR?: KontakPasienWhereInput[]
    NOT?: KontakPasienWhereInput | KontakPasienWhereInput[]
    pasienId?: StringFilter<"KontakPasien"> | string
    jenisKontakId?: StringFilter<"KontakPasien"> | string
    nilaiKontak?: StringFilter<"KontakPasien"> | string
    use?: EnumUseFilter<"KontakPasien"> | $Enums.Use
    jenisKontak?: XOR<JenisKontakScalarRelationFilter, JenisKontakWhereInput>
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }, "id">

  export type KontakPasienOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisKontakId?: SortOrder
    nilaiKontak?: SortOrder
    use?: SortOrder
    _count?: KontakPasienCountOrderByAggregateInput
    _max?: KontakPasienMaxOrderByAggregateInput
    _min?: KontakPasienMinOrderByAggregateInput
  }

  export type KontakPasienScalarWhereWithAggregatesInput = {
    AND?: KontakPasienScalarWhereWithAggregatesInput | KontakPasienScalarWhereWithAggregatesInput[]
    OR?: KontakPasienScalarWhereWithAggregatesInput[]
    NOT?: KontakPasienScalarWhereWithAggregatesInput | KontakPasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KontakPasien"> | string
    pasienId?: StringWithAggregatesFilter<"KontakPasien"> | string
    jenisKontakId?: StringWithAggregatesFilter<"KontakPasien"> | string
    nilaiKontak?: StringWithAggregatesFilter<"KontakPasien"> | string
    use?: EnumUseWithAggregatesFilter<"KontakPasien"> | $Enums.Use
  }

  export type JenisKontakWhereInput = {
    AND?: JenisKontakWhereInput | JenisKontakWhereInput[]
    OR?: JenisKontakWhereInput[]
    NOT?: JenisKontakWhereInput | JenisKontakWhereInput[]
    id?: StringFilter<"JenisKontak"> | string
    namaJenis?: StringFilter<"JenisKontak"> | string
    kontakPasien?: KontakPasienListRelationFilter
  }

  export type JenisKontakOrderByWithRelationInput = {
    id?: SortOrder
    namaJenis?: SortOrder
    kontakPasien?: KontakPasienOrderByRelationAggregateInput
  }

  export type JenisKontakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JenisKontakWhereInput | JenisKontakWhereInput[]
    OR?: JenisKontakWhereInput[]
    NOT?: JenisKontakWhereInput | JenisKontakWhereInput[]
    namaJenis?: StringFilter<"JenisKontak"> | string
    kontakPasien?: KontakPasienListRelationFilter
  }, "id">

  export type JenisKontakOrderByWithAggregationInput = {
    id?: SortOrder
    namaJenis?: SortOrder
    _count?: JenisKontakCountOrderByAggregateInput
    _max?: JenisKontakMaxOrderByAggregateInput
    _min?: JenisKontakMinOrderByAggregateInput
  }

  export type JenisKontakScalarWhereWithAggregatesInput = {
    AND?: JenisKontakScalarWhereWithAggregatesInput | JenisKontakScalarWhereWithAggregatesInput[]
    OR?: JenisKontakScalarWhereWithAggregatesInput[]
    NOT?: JenisKontakScalarWhereWithAggregatesInput | JenisKontakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JenisKontak"> | string
    namaJenis?: StringWithAggregatesFilter<"JenisKontak"> | string
  }

  export type AlamatPasienWhereInput = {
    AND?: AlamatPasienWhereInput | AlamatPasienWhereInput[]
    OR?: AlamatPasienWhereInput[]
    NOT?: AlamatPasienWhereInput | AlamatPasienWhereInput[]
    id?: StringFilter<"AlamatPasien"> | string
    pasienId?: StringFilter<"AlamatPasien"> | string
    jalan?: StringFilter<"AlamatPasien"> | string
    rtRw?: StringFilter<"AlamatPasien"> | string
    lingkungan?: StringFilter<"AlamatPasien"> | string
    kelurahanDesa?: StringFilter<"AlamatPasien"> | string
    kecamatan?: StringFilter<"AlamatPasien"> | string
    kabupatenKota?: StringFilter<"AlamatPasien"> | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }

  export type AlamatPasienOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jalan?: SortOrder
    rtRw?: SortOrder
    lingkungan?: SortOrder
    kelurahanDesa?: SortOrder
    kecamatan?: SortOrder
    kabupatenKota?: SortOrder
    pasien?: PasienOrderByWithRelationInput
  }

  export type AlamatPasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pasienId?: string
    AND?: AlamatPasienWhereInput | AlamatPasienWhereInput[]
    OR?: AlamatPasienWhereInput[]
    NOT?: AlamatPasienWhereInput | AlamatPasienWhereInput[]
    jalan?: StringFilter<"AlamatPasien"> | string
    rtRw?: StringFilter<"AlamatPasien"> | string
    lingkungan?: StringFilter<"AlamatPasien"> | string
    kelurahanDesa?: StringFilter<"AlamatPasien"> | string
    kecamatan?: StringFilter<"AlamatPasien"> | string
    kabupatenKota?: StringFilter<"AlamatPasien"> | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }, "id" | "pasienId">

  export type AlamatPasienOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jalan?: SortOrder
    rtRw?: SortOrder
    lingkungan?: SortOrder
    kelurahanDesa?: SortOrder
    kecamatan?: SortOrder
    kabupatenKota?: SortOrder
    _count?: AlamatPasienCountOrderByAggregateInput
    _max?: AlamatPasienMaxOrderByAggregateInput
    _min?: AlamatPasienMinOrderByAggregateInput
  }

  export type AlamatPasienScalarWhereWithAggregatesInput = {
    AND?: AlamatPasienScalarWhereWithAggregatesInput | AlamatPasienScalarWhereWithAggregatesInput[]
    OR?: AlamatPasienScalarWhereWithAggregatesInput[]
    NOT?: AlamatPasienScalarWhereWithAggregatesInput | AlamatPasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlamatPasien"> | string
    pasienId?: StringWithAggregatesFilter<"AlamatPasien"> | string
    jalan?: StringWithAggregatesFilter<"AlamatPasien"> | string
    rtRw?: StringWithAggregatesFilter<"AlamatPasien"> | string
    lingkungan?: StringWithAggregatesFilter<"AlamatPasien"> | string
    kelurahanDesa?: StringWithAggregatesFilter<"AlamatPasien"> | string
    kecamatan?: StringWithAggregatesFilter<"AlamatPasien"> | string
    kabupatenKota?: StringWithAggregatesFilter<"AlamatPasien"> | string
  }

  export type DokumenPasienWhereInput = {
    AND?: DokumenPasienWhereInput | DokumenPasienWhereInput[]
    OR?: DokumenPasienWhereInput[]
    NOT?: DokumenPasienWhereInput | DokumenPasienWhereInput[]
    id?: StringFilter<"DokumenPasien"> | string
    pasienId?: StringFilter<"DokumenPasien"> | string
    tipeDokumen?: StringFilter<"DokumenPasien"> | string
    fileUrl?: StringFilter<"DokumenPasien"> | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }

  export type DokumenPasienOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    tipeDokumen?: SortOrder
    fileUrl?: SortOrder
    pasien?: PasienOrderByWithRelationInput
  }

  export type DokumenPasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DokumenPasienWhereInput | DokumenPasienWhereInput[]
    OR?: DokumenPasienWhereInput[]
    NOT?: DokumenPasienWhereInput | DokumenPasienWhereInput[]
    pasienId?: StringFilter<"DokumenPasien"> | string
    tipeDokumen?: StringFilter<"DokumenPasien"> | string
    fileUrl?: StringFilter<"DokumenPasien"> | string
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }, "id">

  export type DokumenPasienOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    tipeDokumen?: SortOrder
    fileUrl?: SortOrder
    _count?: DokumenPasienCountOrderByAggregateInput
    _max?: DokumenPasienMaxOrderByAggregateInput
    _min?: DokumenPasienMinOrderByAggregateInput
  }

  export type DokumenPasienScalarWhereWithAggregatesInput = {
    AND?: DokumenPasienScalarWhereWithAggregatesInput | DokumenPasienScalarWhereWithAggregatesInput[]
    OR?: DokumenPasienScalarWhereWithAggregatesInput[]
    NOT?: DokumenPasienScalarWhereWithAggregatesInput | DokumenPasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DokumenPasien"> | string
    pasienId?: StringWithAggregatesFilter<"DokumenPasien"> | string
    tipeDokumen?: StringWithAggregatesFilter<"DokumenPasien"> | string
    fileUrl?: StringWithAggregatesFilter<"DokumenPasien"> | string
  }

  export type IdentifierPasienWhereInput = {
    AND?: IdentifierPasienWhereInput | IdentifierPasienWhereInput[]
    OR?: IdentifierPasienWhereInput[]
    NOT?: IdentifierPasienWhereInput | IdentifierPasienWhereInput[]
    id?: StringFilter<"IdentifierPasien"> | string
    pasienId?: StringFilter<"IdentifierPasien"> | string
    jenisIdentifierId?: StringFilter<"IdentifierPasien"> | string
    nilaiIdentifier?: StringFilter<"IdentifierPasien"> | string
    use?: StringFilter<"IdentifierPasien"> | string
    jenisIdentifier?: XOR<JenisIdentifierScalarRelationFilter, JenisIdentifierWhereInput>
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }

  export type IdentifierPasienOrderByWithRelationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisIdentifierId?: SortOrder
    nilaiIdentifier?: SortOrder
    use?: SortOrder
    jenisIdentifier?: JenisIdentifierOrderByWithRelationInput
    pasien?: PasienOrderByWithRelationInput
  }

  export type IdentifierPasienWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IdentifierPasienWhereInput | IdentifierPasienWhereInput[]
    OR?: IdentifierPasienWhereInput[]
    NOT?: IdentifierPasienWhereInput | IdentifierPasienWhereInput[]
    pasienId?: StringFilter<"IdentifierPasien"> | string
    jenisIdentifierId?: StringFilter<"IdentifierPasien"> | string
    nilaiIdentifier?: StringFilter<"IdentifierPasien"> | string
    use?: StringFilter<"IdentifierPasien"> | string
    jenisIdentifier?: XOR<JenisIdentifierScalarRelationFilter, JenisIdentifierWhereInput>
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
  }, "id">

  export type IdentifierPasienOrderByWithAggregationInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisIdentifierId?: SortOrder
    nilaiIdentifier?: SortOrder
    use?: SortOrder
    _count?: IdentifierPasienCountOrderByAggregateInput
    _max?: IdentifierPasienMaxOrderByAggregateInput
    _min?: IdentifierPasienMinOrderByAggregateInput
  }

  export type IdentifierPasienScalarWhereWithAggregatesInput = {
    AND?: IdentifierPasienScalarWhereWithAggregatesInput | IdentifierPasienScalarWhereWithAggregatesInput[]
    OR?: IdentifierPasienScalarWhereWithAggregatesInput[]
    NOT?: IdentifierPasienScalarWhereWithAggregatesInput | IdentifierPasienScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdentifierPasien"> | string
    pasienId?: StringWithAggregatesFilter<"IdentifierPasien"> | string
    jenisIdentifierId?: StringWithAggregatesFilter<"IdentifierPasien"> | string
    nilaiIdentifier?: StringWithAggregatesFilter<"IdentifierPasien"> | string
    use?: StringWithAggregatesFilter<"IdentifierPasien"> | string
  }

  export type JenisIdentifierWhereInput = {
    AND?: JenisIdentifierWhereInput | JenisIdentifierWhereInput[]
    OR?: JenisIdentifierWhereInput[]
    NOT?: JenisIdentifierWhereInput | JenisIdentifierWhereInput[]
    id?: StringFilter<"JenisIdentifier"> | string
    namaJenisIdentifier?: StringFilter<"JenisIdentifier"> | string
    identifierPasien?: IdentifierPasienListRelationFilter
  }

  export type JenisIdentifierOrderByWithRelationInput = {
    id?: SortOrder
    namaJenisIdentifier?: SortOrder
    identifierPasien?: IdentifierPasienOrderByRelationAggregateInput
  }

  export type JenisIdentifierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JenisIdentifierWhereInput | JenisIdentifierWhereInput[]
    OR?: JenisIdentifierWhereInput[]
    NOT?: JenisIdentifierWhereInput | JenisIdentifierWhereInput[]
    namaJenisIdentifier?: StringFilter<"JenisIdentifier"> | string
    identifierPasien?: IdentifierPasienListRelationFilter
  }, "id">

  export type JenisIdentifierOrderByWithAggregationInput = {
    id?: SortOrder
    namaJenisIdentifier?: SortOrder
    _count?: JenisIdentifierCountOrderByAggregateInput
    _max?: JenisIdentifierMaxOrderByAggregateInput
    _min?: JenisIdentifierMinOrderByAggregateInput
  }

  export type JenisIdentifierScalarWhereWithAggregatesInput = {
    AND?: JenisIdentifierScalarWhereWithAggregatesInput | JenisIdentifierScalarWhereWithAggregatesInput[]
    OR?: JenisIdentifierScalarWhereWithAggregatesInput[]
    NOT?: JenisIdentifierScalarWhereWithAggregatesInput | JenisIdentifierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JenisIdentifier"> | string
    namaJenisIdentifier?: StringWithAggregatesFilter<"JenisIdentifier"> | string
  }

  export type StatusPerkawinanWhereInput = {
    AND?: StatusPerkawinanWhereInput | StatusPerkawinanWhereInput[]
    OR?: StatusPerkawinanWhereInput[]
    NOT?: StatusPerkawinanWhereInput | StatusPerkawinanWhereInput[]
    id?: StringFilter<"StatusPerkawinan"> | string
    namaStatusPerkawinan?: StringFilter<"StatusPerkawinan"> | string
    pasien?: PasienListRelationFilter
  }

  export type StatusPerkawinanOrderByWithRelationInput = {
    id?: SortOrder
    namaStatusPerkawinan?: SortOrder
    pasien?: PasienOrderByRelationAggregateInput
  }

  export type StatusPerkawinanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusPerkawinanWhereInput | StatusPerkawinanWhereInput[]
    OR?: StatusPerkawinanWhereInput[]
    NOT?: StatusPerkawinanWhereInput | StatusPerkawinanWhereInput[]
    namaStatusPerkawinan?: StringFilter<"StatusPerkawinan"> | string
    pasien?: PasienListRelationFilter
  }, "id">

  export type StatusPerkawinanOrderByWithAggregationInput = {
    id?: SortOrder
    namaStatusPerkawinan?: SortOrder
    _count?: StatusPerkawinanCountOrderByAggregateInput
    _max?: StatusPerkawinanMaxOrderByAggregateInput
    _min?: StatusPerkawinanMinOrderByAggregateInput
  }

  export type StatusPerkawinanScalarWhereWithAggregatesInput = {
    AND?: StatusPerkawinanScalarWhereWithAggregatesInput | StatusPerkawinanScalarWhereWithAggregatesInput[]
    OR?: StatusPerkawinanScalarWhereWithAggregatesInput[]
    NOT?: StatusPerkawinanScalarWhereWithAggregatesInput | StatusPerkawinanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusPerkawinan"> | string
    namaStatusPerkawinan?: StringWithAggregatesFilter<"StatusPerkawinan"> | string
  }

  export type StatusPembiayaanWhereInput = {
    AND?: StatusPembiayaanWhereInput | StatusPembiayaanWhereInput[]
    OR?: StatusPembiayaanWhereInput[]
    NOT?: StatusPembiayaanWhereInput | StatusPembiayaanWhereInput[]
    id?: StringFilter<"StatusPembiayaan"> | string
    namaStatusPembiayaan?: StringFilter<"StatusPembiayaan"> | string
    pasien?: PasienListRelationFilter
  }

  export type StatusPembiayaanOrderByWithRelationInput = {
    id?: SortOrder
    namaStatusPembiayaan?: SortOrder
    pasien?: PasienOrderByRelationAggregateInput
  }

  export type StatusPembiayaanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusPembiayaanWhereInput | StatusPembiayaanWhereInput[]
    OR?: StatusPembiayaanWhereInput[]
    NOT?: StatusPembiayaanWhereInput | StatusPembiayaanWhereInput[]
    namaStatusPembiayaan?: StringFilter<"StatusPembiayaan"> | string
    pasien?: PasienListRelationFilter
  }, "id">

  export type StatusPembiayaanOrderByWithAggregationInput = {
    id?: SortOrder
    namaStatusPembiayaan?: SortOrder
    _count?: StatusPembiayaanCountOrderByAggregateInput
    _max?: StatusPembiayaanMaxOrderByAggregateInput
    _min?: StatusPembiayaanMinOrderByAggregateInput
  }

  export type StatusPembiayaanScalarWhereWithAggregatesInput = {
    AND?: StatusPembiayaanScalarWhereWithAggregatesInput | StatusPembiayaanScalarWhereWithAggregatesInput[]
    OR?: StatusPembiayaanScalarWhereWithAggregatesInput[]
    NOT?: StatusPembiayaanScalarWhereWithAggregatesInput | StatusPembiayaanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusPembiayaan"> | string
    namaStatusPembiayaan?: StringWithAggregatesFilter<"StatusPembiayaan"> | string
  }

  export type PendidikanWhereInput = {
    AND?: PendidikanWhereInput | PendidikanWhereInput[]
    OR?: PendidikanWhereInput[]
    NOT?: PendidikanWhereInput | PendidikanWhereInput[]
    id?: StringFilter<"Pendidikan"> | string
    namaPendidikan?: StringFilter<"Pendidikan"> | string
    pasien?: PasienListRelationFilter
  }

  export type PendidikanOrderByWithRelationInput = {
    id?: SortOrder
    namaPendidikan?: SortOrder
    pasien?: PasienOrderByRelationAggregateInput
  }

  export type PendidikanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendidikanWhereInput | PendidikanWhereInput[]
    OR?: PendidikanWhereInput[]
    NOT?: PendidikanWhereInput | PendidikanWhereInput[]
    namaPendidikan?: StringFilter<"Pendidikan"> | string
    pasien?: PasienListRelationFilter
  }, "id">

  export type PendidikanOrderByWithAggregationInput = {
    id?: SortOrder
    namaPendidikan?: SortOrder
    _count?: PendidikanCountOrderByAggregateInput
    _max?: PendidikanMaxOrderByAggregateInput
    _min?: PendidikanMinOrderByAggregateInput
  }

  export type PendidikanScalarWhereWithAggregatesInput = {
    AND?: PendidikanScalarWhereWithAggregatesInput | PendidikanScalarWhereWithAggregatesInput[]
    OR?: PendidikanScalarWhereWithAggregatesInput[]
    NOT?: PendidikanScalarWhereWithAggregatesInput | PendidikanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pendidikan"> | string
    namaPendidikan?: StringWithAggregatesFilter<"Pendidikan"> | string
  }

  export type AgamaWhereInput = {
    AND?: AgamaWhereInput | AgamaWhereInput[]
    OR?: AgamaWhereInput[]
    NOT?: AgamaWhereInput | AgamaWhereInput[]
    id?: StringFilter<"Agama"> | string
    namaAgama?: StringFilter<"Agama"> | string
    pasien?: PasienListRelationFilter
  }

  export type AgamaOrderByWithRelationInput = {
    id?: SortOrder
    namaAgama?: SortOrder
    pasien?: PasienOrderByRelationAggregateInput
  }

  export type AgamaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgamaWhereInput | AgamaWhereInput[]
    OR?: AgamaWhereInput[]
    NOT?: AgamaWhereInput | AgamaWhereInput[]
    namaAgama?: StringFilter<"Agama"> | string
    pasien?: PasienListRelationFilter
  }, "id">

  export type AgamaOrderByWithAggregationInput = {
    id?: SortOrder
    namaAgama?: SortOrder
    _count?: AgamaCountOrderByAggregateInput
    _max?: AgamaMaxOrderByAggregateInput
    _min?: AgamaMinOrderByAggregateInput
  }

  export type AgamaScalarWhereWithAggregatesInput = {
    AND?: AgamaScalarWhereWithAggregatesInput | AgamaScalarWhereWithAggregatesInput[]
    OR?: AgamaScalarWhereWithAggregatesInput[]
    NOT?: AgamaScalarWhereWithAggregatesInput | AgamaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agama"> | string
    namaAgama?: StringWithAggregatesFilter<"Agama"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    pasien?: PasienCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    pasien?: PasienUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasien?: PasienUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasien?: PasienUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienCreateManyInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamaPasienCreateInput = {
    id?: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
    pasien: PasienCreateNestedOneWithoutNamaInput
  }

  export type NamaPasienUncheckedCreateInput = {
    id?: string
    pasienId: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
  }

  export type NamaPasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
    pasien?: PasienUpdateOneRequiredWithoutNamaNestedInput
  }

  export type NamaPasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type NamaPasienCreateManyInput = {
    id?: string
    pasienId: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
  }

  export type NamaPasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type NamaPasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienCreateInput = {
    id?: string
    nilaiKontak: string
    use: $Enums.Use
    jenisKontak: JenisKontakCreateNestedOneWithoutKontakPasienInput
    pasien: PasienCreateNestedOneWithoutKontakInput
  }

  export type KontakPasienUncheckedCreateInput = {
    id?: string
    pasienId: string
    jenisKontakId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type KontakPasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
    jenisKontak?: JenisKontakUpdateOneRequiredWithoutKontakPasienNestedInput
    pasien?: PasienUpdateOneRequiredWithoutKontakNestedInput
  }

  export type KontakPasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jenisKontakId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienCreateManyInput = {
    id?: string
    pasienId: string
    jenisKontakId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type KontakPasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jenisKontakId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type JenisKontakCreateInput = {
    id?: string
    namaJenis: string
    kontakPasien?: KontakPasienCreateNestedManyWithoutJenisKontakInput
  }

  export type JenisKontakUncheckedCreateInput = {
    id?: string
    namaJenis: string
    kontakPasien?: KontakPasienUncheckedCreateNestedManyWithoutJenisKontakInput
  }

  export type JenisKontakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
    kontakPasien?: KontakPasienUpdateManyWithoutJenisKontakNestedInput
  }

  export type JenisKontakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
    kontakPasien?: KontakPasienUncheckedUpdateManyWithoutJenisKontakNestedInput
  }

  export type JenisKontakCreateManyInput = {
    id?: string
    namaJenis: string
  }

  export type JenisKontakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type JenisKontakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatPasienCreateInput = {
    id?: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
    pasien: PasienCreateNestedOneWithoutAlamatInput
  }

  export type AlamatPasienUncheckedCreateInput = {
    id?: string
    pasienId: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
  }

  export type AlamatPasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type AlamatPasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatPasienCreateManyInput = {
    id?: string
    pasienId: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
  }

  export type AlamatPasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatPasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienCreateInput = {
    id?: string
    tipeDokumen: string
    fileUrl: string
    pasien: PasienCreateNestedOneWithoutDokumenInput
  }

  export type DokumenPasienUncheckedCreateInput = {
    id?: string
    pasienId: string
    tipeDokumen: string
    fileUrl: string
  }

  export type DokumenPasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateOneRequiredWithoutDokumenNestedInput
  }

  export type DokumenPasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienCreateManyInput = {
    id?: string
    pasienId: string
    tipeDokumen: string
    fileUrl: string
  }

  export type DokumenPasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienCreateInput = {
    id?: string
    nilaiIdentifier: string
    use: string
    jenisIdentifier: JenisIdentifierCreateNestedOneWithoutIdentifierPasienInput
    pasien: PasienCreateNestedOneWithoutIdentifiersInput
  }

  export type IdentifierPasienUncheckedCreateInput = {
    id?: string
    pasienId: string
    jenisIdentifierId: string
    nilaiIdentifier: string
    use: string
  }

  export type IdentifierPasienUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
    jenisIdentifier?: JenisIdentifierUpdateOneRequiredWithoutIdentifierPasienNestedInput
    pasien?: PasienUpdateOneRequiredWithoutIdentifiersNestedInput
  }

  export type IdentifierPasienUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jenisIdentifierId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienCreateManyInput = {
    id?: string
    pasienId: string
    jenisIdentifierId: string
    nilaiIdentifier: string
    use: string
  }

  export type IdentifierPasienUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    jenisIdentifierId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type JenisIdentifierCreateInput = {
    id?: string
    namaJenisIdentifier: string
    identifierPasien?: IdentifierPasienCreateNestedManyWithoutJenisIdentifierInput
  }

  export type JenisIdentifierUncheckedCreateInput = {
    id?: string
    namaJenisIdentifier: string
    identifierPasien?: IdentifierPasienUncheckedCreateNestedManyWithoutJenisIdentifierInput
  }

  export type JenisIdentifierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
    identifierPasien?: IdentifierPasienUpdateManyWithoutJenisIdentifierNestedInput
  }

  export type JenisIdentifierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
    identifierPasien?: IdentifierPasienUncheckedUpdateManyWithoutJenisIdentifierNestedInput
  }

  export type JenisIdentifierCreateManyInput = {
    id?: string
    namaJenisIdentifier: string
  }

  export type JenisIdentifierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
  }

  export type JenisIdentifierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPerkawinanCreateInput = {
    id?: string
    namaStatusPerkawinan: string
    pasien?: PasienCreateNestedManyWithoutStatusPerkawinanInput
  }

  export type StatusPerkawinanUncheckedCreateInput = {
    id?: string
    namaStatusPerkawinan: string
    pasien?: PasienUncheckedCreateNestedManyWithoutStatusPerkawinanInput
  }

  export type StatusPerkawinanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateManyWithoutStatusPerkawinanNestedInput
  }

  export type StatusPerkawinanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUncheckedUpdateManyWithoutStatusPerkawinanNestedInput
  }

  export type StatusPerkawinanCreateManyInput = {
    id?: string
    namaStatusPerkawinan: string
  }

  export type StatusPerkawinanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPerkawinanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPembiayaanCreateInput = {
    id?: string
    namaStatusPembiayaan: string
    pasien?: PasienCreateNestedManyWithoutStatusPembiayaanInput
  }

  export type StatusPembiayaanUncheckedCreateInput = {
    id?: string
    namaStatusPembiayaan: string
    pasien?: PasienUncheckedCreateNestedManyWithoutStatusPembiayaanInput
  }

  export type StatusPembiayaanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateManyWithoutStatusPembiayaanNestedInput
  }

  export type StatusPembiayaanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUncheckedUpdateManyWithoutStatusPembiayaanNestedInput
  }

  export type StatusPembiayaanCreateManyInput = {
    id?: string
    namaStatusPembiayaan: string
  }

  export type StatusPembiayaanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPembiayaanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
  }

  export type PendidikanCreateInput = {
    id?: string
    namaPendidikan: string
    pasien?: PasienCreateNestedManyWithoutPendidikanInput
  }

  export type PendidikanUncheckedCreateInput = {
    id?: string
    namaPendidikan: string
    pasien?: PasienUncheckedCreateNestedManyWithoutPendidikanInput
  }

  export type PendidikanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateManyWithoutPendidikanNestedInput
  }

  export type PendidikanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUncheckedUpdateManyWithoutPendidikanNestedInput
  }

  export type PendidikanCreateManyInput = {
    id?: string
    namaPendidikan: string
  }

  export type PendidikanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
  }

  export type PendidikanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
  }

  export type AgamaCreateInput = {
    id?: string
    namaAgama: string
    pasien?: PasienCreateNestedManyWithoutAgamaInput
  }

  export type AgamaUncheckedCreateInput = {
    id?: string
    namaAgama: string
    pasien?: PasienUncheckedCreateNestedManyWithoutAgamaInput
  }

  export type AgamaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateManyWithoutAgamaNestedInput
  }

  export type AgamaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUncheckedUpdateManyWithoutAgamaNestedInput
  }

  export type AgamaCreateManyInput = {
    id?: string
    namaAgama: string
  }

  export type AgamaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
  }

  export type AgamaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PasienNullableScalarRelationFilter = {
    is?: PasienWhereInput | null
    isNot?: PasienWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type AlamatPasienNullableScalarRelationFilter = {
    is?: AlamatPasienWhereInput | null
    isNot?: AlamatPasienWhereInput | null
  }

  export type DokumenPasienListRelationFilter = {
    every?: DokumenPasienWhereInput
    some?: DokumenPasienWhereInput
    none?: DokumenPasienWhereInput
  }

  export type IdentifierPasienListRelationFilter = {
    every?: IdentifierPasienWhereInput
    some?: IdentifierPasienWhereInput
    none?: IdentifierPasienWhereInput
  }

  export type KontakPasienListRelationFilter = {
    every?: KontakPasienWhereInput
    some?: KontakPasienWhereInput
    none?: KontakPasienWhereInput
  }

  export type NamaPasienNullableScalarRelationFilter = {
    is?: NamaPasienWhereInput | null
    isNot?: NamaPasienWhereInput | null
  }

  export type AgamaScalarRelationFilter = {
    is?: AgamaWhereInput
    isNot?: AgamaWhereInput
  }

  export type PendidikanScalarRelationFilter = {
    is?: PendidikanWhereInput
    isNot?: PendidikanWhereInput
  }

  export type StatusPembiayaanScalarRelationFilter = {
    is?: StatusPembiayaanWhereInput
    isNot?: StatusPembiayaanWhereInput
  }

  export type StatusPerkawinanScalarRelationFilter = {
    is?: StatusPerkawinanWhereInput
    isNot?: StatusPerkawinanWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DokumenPasienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdentifierPasienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KontakPasienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasienCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    ihsNumber?: SortOrder
    medicalRecordNumber?: SortOrder
    tanggalLahir?: SortOrder
    statusPerkawinanId?: SortOrder
    statusPembiayaanId?: SortOrder
    pendidikanId?: SortOrder
    agamaId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasienMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    ihsNumber?: SortOrder
    medicalRecordNumber?: SortOrder
    tanggalLahir?: SortOrder
    statusPerkawinanId?: SortOrder
    statusPembiayaanId?: SortOrder
    pendidikanId?: SortOrder
    agamaId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasienMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    ihsNumber?: SortOrder
    medicalRecordNumber?: SortOrder
    tanggalLahir?: SortOrder
    statusPerkawinanId?: SortOrder
    statusPembiayaanId?: SortOrder
    pendidikanId?: SortOrder
    agamaId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumUseFilter<$PrismaModel = never> = {
    equals?: $Enums.Use | EnumUseFieldRefInput<$PrismaModel>
    in?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    not?: NestedEnumUseFilter<$PrismaModel> | $Enums.Use
  }

  export type PasienScalarRelationFilter = {
    is?: PasienWhereInput
    isNot?: PasienWhereInput
  }

  export type NamaPasienCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    namaDepan?: SortOrder
    namaTengah?: SortOrder
    namaBelakang?: SortOrder
    namaLengkap?: SortOrder
    use?: SortOrder
  }

  export type NamaPasienMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    namaDepan?: SortOrder
    namaTengah?: SortOrder
    namaBelakang?: SortOrder
    namaLengkap?: SortOrder
    use?: SortOrder
  }

  export type NamaPasienMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    namaDepan?: SortOrder
    namaTengah?: SortOrder
    namaBelakang?: SortOrder
    namaLengkap?: SortOrder
    use?: SortOrder
  }

  export type EnumUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Use | EnumUseFieldRefInput<$PrismaModel>
    in?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    not?: NestedEnumUseWithAggregatesFilter<$PrismaModel> | $Enums.Use
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUseFilter<$PrismaModel>
    _max?: NestedEnumUseFilter<$PrismaModel>
  }

  export type JenisKontakScalarRelationFilter = {
    is?: JenisKontakWhereInput
    isNot?: JenisKontakWhereInput
  }

  export type KontakPasienCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisKontakId?: SortOrder
    nilaiKontak?: SortOrder
    use?: SortOrder
  }

  export type KontakPasienMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisKontakId?: SortOrder
    nilaiKontak?: SortOrder
    use?: SortOrder
  }

  export type KontakPasienMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisKontakId?: SortOrder
    nilaiKontak?: SortOrder
    use?: SortOrder
  }

  export type JenisKontakCountOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type JenisKontakMaxOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type JenisKontakMinOrderByAggregateInput = {
    id?: SortOrder
    namaJenis?: SortOrder
  }

  export type AlamatPasienCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jalan?: SortOrder
    rtRw?: SortOrder
    lingkungan?: SortOrder
    kelurahanDesa?: SortOrder
    kecamatan?: SortOrder
    kabupatenKota?: SortOrder
  }

  export type AlamatPasienMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jalan?: SortOrder
    rtRw?: SortOrder
    lingkungan?: SortOrder
    kelurahanDesa?: SortOrder
    kecamatan?: SortOrder
    kabupatenKota?: SortOrder
  }

  export type AlamatPasienMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jalan?: SortOrder
    rtRw?: SortOrder
    lingkungan?: SortOrder
    kelurahanDesa?: SortOrder
    kecamatan?: SortOrder
    kabupatenKota?: SortOrder
  }

  export type DokumenPasienCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    tipeDokumen?: SortOrder
    fileUrl?: SortOrder
  }

  export type DokumenPasienMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    tipeDokumen?: SortOrder
    fileUrl?: SortOrder
  }

  export type DokumenPasienMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    tipeDokumen?: SortOrder
    fileUrl?: SortOrder
  }

  export type JenisIdentifierScalarRelationFilter = {
    is?: JenisIdentifierWhereInput
    isNot?: JenisIdentifierWhereInput
  }

  export type IdentifierPasienCountOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisIdentifierId?: SortOrder
    nilaiIdentifier?: SortOrder
    use?: SortOrder
  }

  export type IdentifierPasienMaxOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisIdentifierId?: SortOrder
    nilaiIdentifier?: SortOrder
    use?: SortOrder
  }

  export type IdentifierPasienMinOrderByAggregateInput = {
    id?: SortOrder
    pasienId?: SortOrder
    jenisIdentifierId?: SortOrder
    nilaiIdentifier?: SortOrder
    use?: SortOrder
  }

  export type JenisIdentifierCountOrderByAggregateInput = {
    id?: SortOrder
    namaJenisIdentifier?: SortOrder
  }

  export type JenisIdentifierMaxOrderByAggregateInput = {
    id?: SortOrder
    namaJenisIdentifier?: SortOrder
  }

  export type JenisIdentifierMinOrderByAggregateInput = {
    id?: SortOrder
    namaJenisIdentifier?: SortOrder
  }

  export type PasienListRelationFilter = {
    every?: PasienWhereInput
    some?: PasienWhereInput
    none?: PasienWhereInput
  }

  export type PasienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusPerkawinanCountOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPerkawinan?: SortOrder
  }

  export type StatusPerkawinanMaxOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPerkawinan?: SortOrder
  }

  export type StatusPerkawinanMinOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPerkawinan?: SortOrder
  }

  export type StatusPembiayaanCountOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPembiayaan?: SortOrder
  }

  export type StatusPembiayaanMaxOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPembiayaan?: SortOrder
  }

  export type StatusPembiayaanMinOrderByAggregateInput = {
    id?: SortOrder
    namaStatusPembiayaan?: SortOrder
  }

  export type PendidikanCountOrderByAggregateInput = {
    id?: SortOrder
    namaPendidikan?: SortOrder
  }

  export type PendidikanMaxOrderByAggregateInput = {
    id?: SortOrder
    namaPendidikan?: SortOrder
  }

  export type PendidikanMinOrderByAggregateInput = {
    id?: SortOrder
    namaPendidikan?: SortOrder
  }

  export type AgamaCountOrderByAggregateInput = {
    id?: SortOrder
    namaAgama?: SortOrder
  }

  export type AgamaMaxOrderByAggregateInput = {
    id?: SortOrder
    namaAgama?: SortOrder
  }

  export type AgamaMinOrderByAggregateInput = {
    id?: SortOrder
    namaAgama?: SortOrder
  }

  export type PasienCreateNestedOneWithoutUserInput = {
    create?: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasienCreateOrConnectWithoutUserInput
    connect?: PasienWhereUniqueInput
  }

  export type PasienUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasienCreateOrConnectWithoutUserInput
    connect?: PasienWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PasienUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasienCreateOrConnectWithoutUserInput
    upsert?: PasienUpsertWithoutUserInput
    disconnect?: PasienWhereInput | boolean
    delete?: PasienWhereInput | boolean
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutUserInput, PasienUpdateWithoutUserInput>, PasienUncheckedUpdateWithoutUserInput>
  }

  export type PasienUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasienCreateOrConnectWithoutUserInput
    upsert?: PasienUpsertWithoutUserInput
    disconnect?: PasienWhereInput | boolean
    delete?: PasienWhereInput | boolean
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutUserInput, PasienUpdateWithoutUserInput>, PasienUncheckedUpdateWithoutUserInput>
  }

  export type AlamatPasienCreateNestedOneWithoutPasienInput = {
    create?: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AlamatPasienCreateOrConnectWithoutPasienInput
    connect?: AlamatPasienWhereUniqueInput
  }

  export type DokumenPasienCreateNestedManyWithoutPasienInput = {
    create?: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput> | DokumenPasienCreateWithoutPasienInput[] | DokumenPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: DokumenPasienCreateOrConnectWithoutPasienInput | DokumenPasienCreateOrConnectWithoutPasienInput[]
    createMany?: DokumenPasienCreateManyPasienInputEnvelope
    connect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
  }

  export type IdentifierPasienCreateNestedManyWithoutPasienInput = {
    create?: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput> | IdentifierPasienCreateWithoutPasienInput[] | IdentifierPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutPasienInput | IdentifierPasienCreateOrConnectWithoutPasienInput[]
    createMany?: IdentifierPasienCreateManyPasienInputEnvelope
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
  }

  export type KontakPasienCreateNestedManyWithoutPasienInput = {
    create?: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput> | KontakPasienCreateWithoutPasienInput[] | KontakPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutPasienInput | KontakPasienCreateOrConnectWithoutPasienInput[]
    createMany?: KontakPasienCreateManyPasienInputEnvelope
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
  }

  export type NamaPasienCreateNestedOneWithoutPasienInput = {
    create?: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: NamaPasienCreateOrConnectWithoutPasienInput
    connect?: NamaPasienWhereUniqueInput
  }

  export type AgamaCreateNestedOneWithoutPasienInput = {
    create?: XOR<AgamaCreateWithoutPasienInput, AgamaUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AgamaCreateOrConnectWithoutPasienInput
    connect?: AgamaWhereUniqueInput
  }

  export type PendidikanCreateNestedOneWithoutPasienInput = {
    create?: XOR<PendidikanCreateWithoutPasienInput, PendidikanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: PendidikanCreateOrConnectWithoutPasienInput
    connect?: PendidikanWhereUniqueInput
  }

  export type StatusPembiayaanCreateNestedOneWithoutPasienInput = {
    create?: XOR<StatusPembiayaanCreateWithoutPasienInput, StatusPembiayaanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: StatusPembiayaanCreateOrConnectWithoutPasienInput
    connect?: StatusPembiayaanWhereUniqueInput
  }

  export type StatusPerkawinanCreateNestedOneWithoutPasienInput = {
    create?: XOR<StatusPerkawinanCreateWithoutPasienInput, StatusPerkawinanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: StatusPerkawinanCreateOrConnectWithoutPasienInput
    connect?: StatusPerkawinanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPasienInput = {
    create?: XOR<UserCreateWithoutPasienInput, UserUncheckedCreateWithoutPasienInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasienInput
    connect?: UserWhereUniqueInput
  }

  export type AlamatPasienUncheckedCreateNestedOneWithoutPasienInput = {
    create?: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AlamatPasienCreateOrConnectWithoutPasienInput
    connect?: AlamatPasienWhereUniqueInput
  }

  export type DokumenPasienUncheckedCreateNestedManyWithoutPasienInput = {
    create?: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput> | DokumenPasienCreateWithoutPasienInput[] | DokumenPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: DokumenPasienCreateOrConnectWithoutPasienInput | DokumenPasienCreateOrConnectWithoutPasienInput[]
    createMany?: DokumenPasienCreateManyPasienInputEnvelope
    connect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
  }

  export type IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput = {
    create?: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput> | IdentifierPasienCreateWithoutPasienInput[] | IdentifierPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutPasienInput | IdentifierPasienCreateOrConnectWithoutPasienInput[]
    createMany?: IdentifierPasienCreateManyPasienInputEnvelope
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
  }

  export type KontakPasienUncheckedCreateNestedManyWithoutPasienInput = {
    create?: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput> | KontakPasienCreateWithoutPasienInput[] | KontakPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutPasienInput | KontakPasienCreateOrConnectWithoutPasienInput[]
    createMany?: KontakPasienCreateManyPasienInputEnvelope
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
  }

  export type NamaPasienUncheckedCreateNestedOneWithoutPasienInput = {
    create?: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: NamaPasienCreateOrConnectWithoutPasienInput
    connect?: NamaPasienWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type AlamatPasienUpdateOneWithoutPasienNestedInput = {
    create?: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AlamatPasienCreateOrConnectWithoutPasienInput
    upsert?: AlamatPasienUpsertWithoutPasienInput
    disconnect?: AlamatPasienWhereInput | boolean
    delete?: AlamatPasienWhereInput | boolean
    connect?: AlamatPasienWhereUniqueInput
    update?: XOR<XOR<AlamatPasienUpdateToOneWithWhereWithoutPasienInput, AlamatPasienUpdateWithoutPasienInput>, AlamatPasienUncheckedUpdateWithoutPasienInput>
  }

  export type DokumenPasienUpdateManyWithoutPasienNestedInput = {
    create?: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput> | DokumenPasienCreateWithoutPasienInput[] | DokumenPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: DokumenPasienCreateOrConnectWithoutPasienInput | DokumenPasienCreateOrConnectWithoutPasienInput[]
    upsert?: DokumenPasienUpsertWithWhereUniqueWithoutPasienInput | DokumenPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: DokumenPasienCreateManyPasienInputEnvelope
    set?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    disconnect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    delete?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    connect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    update?: DokumenPasienUpdateWithWhereUniqueWithoutPasienInput | DokumenPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: DokumenPasienUpdateManyWithWhereWithoutPasienInput | DokumenPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: DokumenPasienScalarWhereInput | DokumenPasienScalarWhereInput[]
  }

  export type IdentifierPasienUpdateManyWithoutPasienNestedInput = {
    create?: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput> | IdentifierPasienCreateWithoutPasienInput[] | IdentifierPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutPasienInput | IdentifierPasienCreateOrConnectWithoutPasienInput[]
    upsert?: IdentifierPasienUpsertWithWhereUniqueWithoutPasienInput | IdentifierPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: IdentifierPasienCreateManyPasienInputEnvelope
    set?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    disconnect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    delete?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    update?: IdentifierPasienUpdateWithWhereUniqueWithoutPasienInput | IdentifierPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: IdentifierPasienUpdateManyWithWhereWithoutPasienInput | IdentifierPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
  }

  export type KontakPasienUpdateManyWithoutPasienNestedInput = {
    create?: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput> | KontakPasienCreateWithoutPasienInput[] | KontakPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutPasienInput | KontakPasienCreateOrConnectWithoutPasienInput[]
    upsert?: KontakPasienUpsertWithWhereUniqueWithoutPasienInput | KontakPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: KontakPasienCreateManyPasienInputEnvelope
    set?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    disconnect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    delete?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    update?: KontakPasienUpdateWithWhereUniqueWithoutPasienInput | KontakPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: KontakPasienUpdateManyWithWhereWithoutPasienInput | KontakPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
  }

  export type NamaPasienUpdateOneWithoutPasienNestedInput = {
    create?: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: NamaPasienCreateOrConnectWithoutPasienInput
    upsert?: NamaPasienUpsertWithoutPasienInput
    disconnect?: NamaPasienWhereInput | boolean
    delete?: NamaPasienWhereInput | boolean
    connect?: NamaPasienWhereUniqueInput
    update?: XOR<XOR<NamaPasienUpdateToOneWithWhereWithoutPasienInput, NamaPasienUpdateWithoutPasienInput>, NamaPasienUncheckedUpdateWithoutPasienInput>
  }

  export type AgamaUpdateOneRequiredWithoutPasienNestedInput = {
    create?: XOR<AgamaCreateWithoutPasienInput, AgamaUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AgamaCreateOrConnectWithoutPasienInput
    upsert?: AgamaUpsertWithoutPasienInput
    connect?: AgamaWhereUniqueInput
    update?: XOR<XOR<AgamaUpdateToOneWithWhereWithoutPasienInput, AgamaUpdateWithoutPasienInput>, AgamaUncheckedUpdateWithoutPasienInput>
  }

  export type PendidikanUpdateOneRequiredWithoutPasienNestedInput = {
    create?: XOR<PendidikanCreateWithoutPasienInput, PendidikanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: PendidikanCreateOrConnectWithoutPasienInput
    upsert?: PendidikanUpsertWithoutPasienInput
    connect?: PendidikanWhereUniqueInput
    update?: XOR<XOR<PendidikanUpdateToOneWithWhereWithoutPasienInput, PendidikanUpdateWithoutPasienInput>, PendidikanUncheckedUpdateWithoutPasienInput>
  }

  export type StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput = {
    create?: XOR<StatusPembiayaanCreateWithoutPasienInput, StatusPembiayaanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: StatusPembiayaanCreateOrConnectWithoutPasienInput
    upsert?: StatusPembiayaanUpsertWithoutPasienInput
    connect?: StatusPembiayaanWhereUniqueInput
    update?: XOR<XOR<StatusPembiayaanUpdateToOneWithWhereWithoutPasienInput, StatusPembiayaanUpdateWithoutPasienInput>, StatusPembiayaanUncheckedUpdateWithoutPasienInput>
  }

  export type StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput = {
    create?: XOR<StatusPerkawinanCreateWithoutPasienInput, StatusPerkawinanUncheckedCreateWithoutPasienInput>
    connectOrCreate?: StatusPerkawinanCreateOrConnectWithoutPasienInput
    upsert?: StatusPerkawinanUpsertWithoutPasienInput
    connect?: StatusPerkawinanWhereUniqueInput
    update?: XOR<XOR<StatusPerkawinanUpdateToOneWithWhereWithoutPasienInput, StatusPerkawinanUpdateWithoutPasienInput>, StatusPerkawinanUncheckedUpdateWithoutPasienInput>
  }

  export type UserUpdateOneRequiredWithoutPasienNestedInput = {
    create?: XOR<UserCreateWithoutPasienInput, UserUncheckedCreateWithoutPasienInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasienInput
    upsert?: UserUpsertWithoutPasienInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasienInput, UserUpdateWithoutPasienInput>, UserUncheckedUpdateWithoutPasienInput>
  }

  export type AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput = {
    create?: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: AlamatPasienCreateOrConnectWithoutPasienInput
    upsert?: AlamatPasienUpsertWithoutPasienInput
    disconnect?: AlamatPasienWhereInput | boolean
    delete?: AlamatPasienWhereInput | boolean
    connect?: AlamatPasienWhereUniqueInput
    update?: XOR<XOR<AlamatPasienUpdateToOneWithWhereWithoutPasienInput, AlamatPasienUpdateWithoutPasienInput>, AlamatPasienUncheckedUpdateWithoutPasienInput>
  }

  export type DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput = {
    create?: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput> | DokumenPasienCreateWithoutPasienInput[] | DokumenPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: DokumenPasienCreateOrConnectWithoutPasienInput | DokumenPasienCreateOrConnectWithoutPasienInput[]
    upsert?: DokumenPasienUpsertWithWhereUniqueWithoutPasienInput | DokumenPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: DokumenPasienCreateManyPasienInputEnvelope
    set?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    disconnect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    delete?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    connect?: DokumenPasienWhereUniqueInput | DokumenPasienWhereUniqueInput[]
    update?: DokumenPasienUpdateWithWhereUniqueWithoutPasienInput | DokumenPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: DokumenPasienUpdateManyWithWhereWithoutPasienInput | DokumenPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: DokumenPasienScalarWhereInput | DokumenPasienScalarWhereInput[]
  }

  export type IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput = {
    create?: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput> | IdentifierPasienCreateWithoutPasienInput[] | IdentifierPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutPasienInput | IdentifierPasienCreateOrConnectWithoutPasienInput[]
    upsert?: IdentifierPasienUpsertWithWhereUniqueWithoutPasienInput | IdentifierPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: IdentifierPasienCreateManyPasienInputEnvelope
    set?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    disconnect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    delete?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    update?: IdentifierPasienUpdateWithWhereUniqueWithoutPasienInput | IdentifierPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: IdentifierPasienUpdateManyWithWhereWithoutPasienInput | IdentifierPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
  }

  export type KontakPasienUncheckedUpdateManyWithoutPasienNestedInput = {
    create?: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput> | KontakPasienCreateWithoutPasienInput[] | KontakPasienUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutPasienInput | KontakPasienCreateOrConnectWithoutPasienInput[]
    upsert?: KontakPasienUpsertWithWhereUniqueWithoutPasienInput | KontakPasienUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: KontakPasienCreateManyPasienInputEnvelope
    set?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    disconnect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    delete?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    update?: KontakPasienUpdateWithWhereUniqueWithoutPasienInput | KontakPasienUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: KontakPasienUpdateManyWithWhereWithoutPasienInput | KontakPasienUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
  }

  export type NamaPasienUncheckedUpdateOneWithoutPasienNestedInput = {
    create?: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
    connectOrCreate?: NamaPasienCreateOrConnectWithoutPasienInput
    upsert?: NamaPasienUpsertWithoutPasienInput
    disconnect?: NamaPasienWhereInput | boolean
    delete?: NamaPasienWhereInput | boolean
    connect?: NamaPasienWhereUniqueInput
    update?: XOR<XOR<NamaPasienUpdateToOneWithWhereWithoutPasienInput, NamaPasienUpdateWithoutPasienInput>, NamaPasienUncheckedUpdateWithoutPasienInput>
  }

  export type PasienCreateNestedOneWithoutNamaInput = {
    create?: XOR<PasienCreateWithoutNamaInput, PasienUncheckedCreateWithoutNamaInput>
    connectOrCreate?: PasienCreateOrConnectWithoutNamaInput
    connect?: PasienWhereUniqueInput
  }

  export type EnumUseFieldUpdateOperationsInput = {
    set?: $Enums.Use
  }

  export type PasienUpdateOneRequiredWithoutNamaNestedInput = {
    create?: XOR<PasienCreateWithoutNamaInput, PasienUncheckedCreateWithoutNamaInput>
    connectOrCreate?: PasienCreateOrConnectWithoutNamaInput
    upsert?: PasienUpsertWithoutNamaInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutNamaInput, PasienUpdateWithoutNamaInput>, PasienUncheckedUpdateWithoutNamaInput>
  }

  export type JenisKontakCreateNestedOneWithoutKontakPasienInput = {
    create?: XOR<JenisKontakCreateWithoutKontakPasienInput, JenisKontakUncheckedCreateWithoutKontakPasienInput>
    connectOrCreate?: JenisKontakCreateOrConnectWithoutKontakPasienInput
    connect?: JenisKontakWhereUniqueInput
  }

  export type PasienCreateNestedOneWithoutKontakInput = {
    create?: XOR<PasienCreateWithoutKontakInput, PasienUncheckedCreateWithoutKontakInput>
    connectOrCreate?: PasienCreateOrConnectWithoutKontakInput
    connect?: PasienWhereUniqueInput
  }

  export type JenisKontakUpdateOneRequiredWithoutKontakPasienNestedInput = {
    create?: XOR<JenisKontakCreateWithoutKontakPasienInput, JenisKontakUncheckedCreateWithoutKontakPasienInput>
    connectOrCreate?: JenisKontakCreateOrConnectWithoutKontakPasienInput
    upsert?: JenisKontakUpsertWithoutKontakPasienInput
    connect?: JenisKontakWhereUniqueInput
    update?: XOR<XOR<JenisKontakUpdateToOneWithWhereWithoutKontakPasienInput, JenisKontakUpdateWithoutKontakPasienInput>, JenisKontakUncheckedUpdateWithoutKontakPasienInput>
  }

  export type PasienUpdateOneRequiredWithoutKontakNestedInput = {
    create?: XOR<PasienCreateWithoutKontakInput, PasienUncheckedCreateWithoutKontakInput>
    connectOrCreate?: PasienCreateOrConnectWithoutKontakInput
    upsert?: PasienUpsertWithoutKontakInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutKontakInput, PasienUpdateWithoutKontakInput>, PasienUncheckedUpdateWithoutKontakInput>
  }

  export type KontakPasienCreateNestedManyWithoutJenisKontakInput = {
    create?: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput> | KontakPasienCreateWithoutJenisKontakInput[] | KontakPasienUncheckedCreateWithoutJenisKontakInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutJenisKontakInput | KontakPasienCreateOrConnectWithoutJenisKontakInput[]
    createMany?: KontakPasienCreateManyJenisKontakInputEnvelope
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
  }

  export type KontakPasienUncheckedCreateNestedManyWithoutJenisKontakInput = {
    create?: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput> | KontakPasienCreateWithoutJenisKontakInput[] | KontakPasienUncheckedCreateWithoutJenisKontakInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutJenisKontakInput | KontakPasienCreateOrConnectWithoutJenisKontakInput[]
    createMany?: KontakPasienCreateManyJenisKontakInputEnvelope
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
  }

  export type KontakPasienUpdateManyWithoutJenisKontakNestedInput = {
    create?: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput> | KontakPasienCreateWithoutJenisKontakInput[] | KontakPasienUncheckedCreateWithoutJenisKontakInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutJenisKontakInput | KontakPasienCreateOrConnectWithoutJenisKontakInput[]
    upsert?: KontakPasienUpsertWithWhereUniqueWithoutJenisKontakInput | KontakPasienUpsertWithWhereUniqueWithoutJenisKontakInput[]
    createMany?: KontakPasienCreateManyJenisKontakInputEnvelope
    set?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    disconnect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    delete?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    update?: KontakPasienUpdateWithWhereUniqueWithoutJenisKontakInput | KontakPasienUpdateWithWhereUniqueWithoutJenisKontakInput[]
    updateMany?: KontakPasienUpdateManyWithWhereWithoutJenisKontakInput | KontakPasienUpdateManyWithWhereWithoutJenisKontakInput[]
    deleteMany?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
  }

  export type KontakPasienUncheckedUpdateManyWithoutJenisKontakNestedInput = {
    create?: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput> | KontakPasienCreateWithoutJenisKontakInput[] | KontakPasienUncheckedCreateWithoutJenisKontakInput[]
    connectOrCreate?: KontakPasienCreateOrConnectWithoutJenisKontakInput | KontakPasienCreateOrConnectWithoutJenisKontakInput[]
    upsert?: KontakPasienUpsertWithWhereUniqueWithoutJenisKontakInput | KontakPasienUpsertWithWhereUniqueWithoutJenisKontakInput[]
    createMany?: KontakPasienCreateManyJenisKontakInputEnvelope
    set?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    disconnect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    delete?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    connect?: KontakPasienWhereUniqueInput | KontakPasienWhereUniqueInput[]
    update?: KontakPasienUpdateWithWhereUniqueWithoutJenisKontakInput | KontakPasienUpdateWithWhereUniqueWithoutJenisKontakInput[]
    updateMany?: KontakPasienUpdateManyWithWhereWithoutJenisKontakInput | KontakPasienUpdateManyWithWhereWithoutJenisKontakInput[]
    deleteMany?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
  }

  export type PasienCreateNestedOneWithoutAlamatInput = {
    create?: XOR<PasienCreateWithoutAlamatInput, PasienUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: PasienCreateOrConnectWithoutAlamatInput
    connect?: PasienWhereUniqueInput
  }

  export type PasienUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<PasienCreateWithoutAlamatInput, PasienUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: PasienCreateOrConnectWithoutAlamatInput
    upsert?: PasienUpsertWithoutAlamatInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutAlamatInput, PasienUpdateWithoutAlamatInput>, PasienUncheckedUpdateWithoutAlamatInput>
  }

  export type PasienCreateNestedOneWithoutDokumenInput = {
    create?: XOR<PasienCreateWithoutDokumenInput, PasienUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: PasienCreateOrConnectWithoutDokumenInput
    connect?: PasienWhereUniqueInput
  }

  export type PasienUpdateOneRequiredWithoutDokumenNestedInput = {
    create?: XOR<PasienCreateWithoutDokumenInput, PasienUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: PasienCreateOrConnectWithoutDokumenInput
    upsert?: PasienUpsertWithoutDokumenInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutDokumenInput, PasienUpdateWithoutDokumenInput>, PasienUncheckedUpdateWithoutDokumenInput>
  }

  export type JenisIdentifierCreateNestedOneWithoutIdentifierPasienInput = {
    create?: XOR<JenisIdentifierCreateWithoutIdentifierPasienInput, JenisIdentifierUncheckedCreateWithoutIdentifierPasienInput>
    connectOrCreate?: JenisIdentifierCreateOrConnectWithoutIdentifierPasienInput
    connect?: JenisIdentifierWhereUniqueInput
  }

  export type PasienCreateNestedOneWithoutIdentifiersInput = {
    create?: XOR<PasienCreateWithoutIdentifiersInput, PasienUncheckedCreateWithoutIdentifiersInput>
    connectOrCreate?: PasienCreateOrConnectWithoutIdentifiersInput
    connect?: PasienWhereUniqueInput
  }

  export type JenisIdentifierUpdateOneRequiredWithoutIdentifierPasienNestedInput = {
    create?: XOR<JenisIdentifierCreateWithoutIdentifierPasienInput, JenisIdentifierUncheckedCreateWithoutIdentifierPasienInput>
    connectOrCreate?: JenisIdentifierCreateOrConnectWithoutIdentifierPasienInput
    upsert?: JenisIdentifierUpsertWithoutIdentifierPasienInput
    connect?: JenisIdentifierWhereUniqueInput
    update?: XOR<XOR<JenisIdentifierUpdateToOneWithWhereWithoutIdentifierPasienInput, JenisIdentifierUpdateWithoutIdentifierPasienInput>, JenisIdentifierUncheckedUpdateWithoutIdentifierPasienInput>
  }

  export type PasienUpdateOneRequiredWithoutIdentifiersNestedInput = {
    create?: XOR<PasienCreateWithoutIdentifiersInput, PasienUncheckedCreateWithoutIdentifiersInput>
    connectOrCreate?: PasienCreateOrConnectWithoutIdentifiersInput
    upsert?: PasienUpsertWithoutIdentifiersInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutIdentifiersInput, PasienUpdateWithoutIdentifiersInput>, PasienUncheckedUpdateWithoutIdentifiersInput>
  }

  export type IdentifierPasienCreateNestedManyWithoutJenisIdentifierInput = {
    create?: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput> | IdentifierPasienCreateWithoutJenisIdentifierInput[] | IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput | IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput[]
    createMany?: IdentifierPasienCreateManyJenisIdentifierInputEnvelope
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
  }

  export type IdentifierPasienUncheckedCreateNestedManyWithoutJenisIdentifierInput = {
    create?: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput> | IdentifierPasienCreateWithoutJenisIdentifierInput[] | IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput | IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput[]
    createMany?: IdentifierPasienCreateManyJenisIdentifierInputEnvelope
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
  }

  export type IdentifierPasienUpdateManyWithoutJenisIdentifierNestedInput = {
    create?: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput> | IdentifierPasienCreateWithoutJenisIdentifierInput[] | IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput | IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput[]
    upsert?: IdentifierPasienUpsertWithWhereUniqueWithoutJenisIdentifierInput | IdentifierPasienUpsertWithWhereUniqueWithoutJenisIdentifierInput[]
    createMany?: IdentifierPasienCreateManyJenisIdentifierInputEnvelope
    set?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    disconnect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    delete?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    update?: IdentifierPasienUpdateWithWhereUniqueWithoutJenisIdentifierInput | IdentifierPasienUpdateWithWhereUniqueWithoutJenisIdentifierInput[]
    updateMany?: IdentifierPasienUpdateManyWithWhereWithoutJenisIdentifierInput | IdentifierPasienUpdateManyWithWhereWithoutJenisIdentifierInput[]
    deleteMany?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
  }

  export type IdentifierPasienUncheckedUpdateManyWithoutJenisIdentifierNestedInput = {
    create?: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput> | IdentifierPasienCreateWithoutJenisIdentifierInput[] | IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput[]
    connectOrCreate?: IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput | IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput[]
    upsert?: IdentifierPasienUpsertWithWhereUniqueWithoutJenisIdentifierInput | IdentifierPasienUpsertWithWhereUniqueWithoutJenisIdentifierInput[]
    createMany?: IdentifierPasienCreateManyJenisIdentifierInputEnvelope
    set?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    disconnect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    delete?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    connect?: IdentifierPasienWhereUniqueInput | IdentifierPasienWhereUniqueInput[]
    update?: IdentifierPasienUpdateWithWhereUniqueWithoutJenisIdentifierInput | IdentifierPasienUpdateWithWhereUniqueWithoutJenisIdentifierInput[]
    updateMany?: IdentifierPasienUpdateManyWithWhereWithoutJenisIdentifierInput | IdentifierPasienUpdateManyWithWhereWithoutJenisIdentifierInput[]
    deleteMany?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
  }

  export type PasienCreateNestedManyWithoutStatusPerkawinanInput = {
    create?: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput> | PasienCreateWithoutStatusPerkawinanInput[] | PasienUncheckedCreateWithoutStatusPerkawinanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPerkawinanInput | PasienCreateOrConnectWithoutStatusPerkawinanInput[]
    createMany?: PasienCreateManyStatusPerkawinanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUncheckedCreateNestedManyWithoutStatusPerkawinanInput = {
    create?: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput> | PasienCreateWithoutStatusPerkawinanInput[] | PasienUncheckedCreateWithoutStatusPerkawinanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPerkawinanInput | PasienCreateOrConnectWithoutStatusPerkawinanInput[]
    createMany?: PasienCreateManyStatusPerkawinanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUpdateManyWithoutStatusPerkawinanNestedInput = {
    create?: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput> | PasienCreateWithoutStatusPerkawinanInput[] | PasienUncheckedCreateWithoutStatusPerkawinanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPerkawinanInput | PasienCreateOrConnectWithoutStatusPerkawinanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutStatusPerkawinanInput | PasienUpsertWithWhereUniqueWithoutStatusPerkawinanInput[]
    createMany?: PasienCreateManyStatusPerkawinanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutStatusPerkawinanInput | PasienUpdateWithWhereUniqueWithoutStatusPerkawinanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutStatusPerkawinanInput | PasienUpdateManyWithWhereWithoutStatusPerkawinanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienUncheckedUpdateManyWithoutStatusPerkawinanNestedInput = {
    create?: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput> | PasienCreateWithoutStatusPerkawinanInput[] | PasienUncheckedCreateWithoutStatusPerkawinanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPerkawinanInput | PasienCreateOrConnectWithoutStatusPerkawinanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutStatusPerkawinanInput | PasienUpsertWithWhereUniqueWithoutStatusPerkawinanInput[]
    createMany?: PasienCreateManyStatusPerkawinanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutStatusPerkawinanInput | PasienUpdateWithWhereUniqueWithoutStatusPerkawinanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutStatusPerkawinanInput | PasienUpdateManyWithWhereWithoutStatusPerkawinanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienCreateNestedManyWithoutStatusPembiayaanInput = {
    create?: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput> | PasienCreateWithoutStatusPembiayaanInput[] | PasienUncheckedCreateWithoutStatusPembiayaanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPembiayaanInput | PasienCreateOrConnectWithoutStatusPembiayaanInput[]
    createMany?: PasienCreateManyStatusPembiayaanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUncheckedCreateNestedManyWithoutStatusPembiayaanInput = {
    create?: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput> | PasienCreateWithoutStatusPembiayaanInput[] | PasienUncheckedCreateWithoutStatusPembiayaanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPembiayaanInput | PasienCreateOrConnectWithoutStatusPembiayaanInput[]
    createMany?: PasienCreateManyStatusPembiayaanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUpdateManyWithoutStatusPembiayaanNestedInput = {
    create?: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput> | PasienCreateWithoutStatusPembiayaanInput[] | PasienUncheckedCreateWithoutStatusPembiayaanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPembiayaanInput | PasienCreateOrConnectWithoutStatusPembiayaanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutStatusPembiayaanInput | PasienUpsertWithWhereUniqueWithoutStatusPembiayaanInput[]
    createMany?: PasienCreateManyStatusPembiayaanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutStatusPembiayaanInput | PasienUpdateWithWhereUniqueWithoutStatusPembiayaanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutStatusPembiayaanInput | PasienUpdateManyWithWhereWithoutStatusPembiayaanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienUncheckedUpdateManyWithoutStatusPembiayaanNestedInput = {
    create?: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput> | PasienCreateWithoutStatusPembiayaanInput[] | PasienUncheckedCreateWithoutStatusPembiayaanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutStatusPembiayaanInput | PasienCreateOrConnectWithoutStatusPembiayaanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutStatusPembiayaanInput | PasienUpsertWithWhereUniqueWithoutStatusPembiayaanInput[]
    createMany?: PasienCreateManyStatusPembiayaanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutStatusPembiayaanInput | PasienUpdateWithWhereUniqueWithoutStatusPembiayaanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutStatusPembiayaanInput | PasienUpdateManyWithWhereWithoutStatusPembiayaanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienCreateNestedManyWithoutPendidikanInput = {
    create?: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput> | PasienCreateWithoutPendidikanInput[] | PasienUncheckedCreateWithoutPendidikanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutPendidikanInput | PasienCreateOrConnectWithoutPendidikanInput[]
    createMany?: PasienCreateManyPendidikanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUncheckedCreateNestedManyWithoutPendidikanInput = {
    create?: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput> | PasienCreateWithoutPendidikanInput[] | PasienUncheckedCreateWithoutPendidikanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutPendidikanInput | PasienCreateOrConnectWithoutPendidikanInput[]
    createMany?: PasienCreateManyPendidikanInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUpdateManyWithoutPendidikanNestedInput = {
    create?: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput> | PasienCreateWithoutPendidikanInput[] | PasienUncheckedCreateWithoutPendidikanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutPendidikanInput | PasienCreateOrConnectWithoutPendidikanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutPendidikanInput | PasienUpsertWithWhereUniqueWithoutPendidikanInput[]
    createMany?: PasienCreateManyPendidikanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutPendidikanInput | PasienUpdateWithWhereUniqueWithoutPendidikanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutPendidikanInput | PasienUpdateManyWithWhereWithoutPendidikanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienUncheckedUpdateManyWithoutPendidikanNestedInput = {
    create?: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput> | PasienCreateWithoutPendidikanInput[] | PasienUncheckedCreateWithoutPendidikanInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutPendidikanInput | PasienCreateOrConnectWithoutPendidikanInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutPendidikanInput | PasienUpsertWithWhereUniqueWithoutPendidikanInput[]
    createMany?: PasienCreateManyPendidikanInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutPendidikanInput | PasienUpdateWithWhereUniqueWithoutPendidikanInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutPendidikanInput | PasienUpdateManyWithWhereWithoutPendidikanInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienCreateNestedManyWithoutAgamaInput = {
    create?: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput> | PasienCreateWithoutAgamaInput[] | PasienUncheckedCreateWithoutAgamaInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutAgamaInput | PasienCreateOrConnectWithoutAgamaInput[]
    createMany?: PasienCreateManyAgamaInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUncheckedCreateNestedManyWithoutAgamaInput = {
    create?: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput> | PasienCreateWithoutAgamaInput[] | PasienUncheckedCreateWithoutAgamaInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutAgamaInput | PasienCreateOrConnectWithoutAgamaInput[]
    createMany?: PasienCreateManyAgamaInputEnvelope
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
  }

  export type PasienUpdateManyWithoutAgamaNestedInput = {
    create?: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput> | PasienCreateWithoutAgamaInput[] | PasienUncheckedCreateWithoutAgamaInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutAgamaInput | PasienCreateOrConnectWithoutAgamaInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutAgamaInput | PasienUpsertWithWhereUniqueWithoutAgamaInput[]
    createMany?: PasienCreateManyAgamaInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutAgamaInput | PasienUpdateWithWhereUniqueWithoutAgamaInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutAgamaInput | PasienUpdateManyWithWhereWithoutAgamaInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type PasienUncheckedUpdateManyWithoutAgamaNestedInput = {
    create?: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput> | PasienCreateWithoutAgamaInput[] | PasienUncheckedCreateWithoutAgamaInput[]
    connectOrCreate?: PasienCreateOrConnectWithoutAgamaInput | PasienCreateOrConnectWithoutAgamaInput[]
    upsert?: PasienUpsertWithWhereUniqueWithoutAgamaInput | PasienUpsertWithWhereUniqueWithoutAgamaInput[]
    createMany?: PasienCreateManyAgamaInputEnvelope
    set?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    disconnect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    delete?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    connect?: PasienWhereUniqueInput | PasienWhereUniqueInput[]
    update?: PasienUpdateWithWhereUniqueWithoutAgamaInput | PasienUpdateWithWhereUniqueWithoutAgamaInput[]
    updateMany?: PasienUpdateManyWithWhereWithoutAgamaInput | PasienUpdateManyWithWhereWithoutAgamaInput[]
    deleteMany?: PasienScalarWhereInput | PasienScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumUseFilter<$PrismaModel = never> = {
    equals?: $Enums.Use | EnumUseFieldRefInput<$PrismaModel>
    in?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    not?: NestedEnumUseFilter<$PrismaModel> | $Enums.Use
  }

  export type NestedEnumUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Use | EnumUseFieldRefInput<$PrismaModel>
    in?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Use[] | ListEnumUseFieldRefInput<$PrismaModel>
    not?: NestedEnumUseWithAggregatesFilter<$PrismaModel> | $Enums.Use
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUseFilter<$PrismaModel>
    _max?: NestedEnumUseFilter<$PrismaModel>
  }

  export type PasienCreateWithoutUserInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutUserInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutUserInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
  }

  export type PasienUpsertWithoutUserInput = {
    update: XOR<PasienUpdateWithoutUserInput, PasienUncheckedUpdateWithoutUserInput>
    create: XOR<PasienCreateWithoutUserInput, PasienUncheckedCreateWithoutUserInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutUserInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutUserInput, PasienUncheckedUpdateWithoutUserInput>
  }

  export type PasienUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type AlamatPasienCreateWithoutPasienInput = {
    id?: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
  }

  export type AlamatPasienUncheckedCreateWithoutPasienInput = {
    id?: string
    jalan: string
    rtRw: string
    lingkungan: string
    kelurahanDesa: string
    kecamatan: string
    kabupatenKota: string
  }

  export type AlamatPasienCreateOrConnectWithoutPasienInput = {
    where: AlamatPasienWhereUniqueInput
    create: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
  }

  export type DokumenPasienCreateWithoutPasienInput = {
    id?: string
    tipeDokumen: string
    fileUrl: string
  }

  export type DokumenPasienUncheckedCreateWithoutPasienInput = {
    id?: string
    tipeDokumen: string
    fileUrl: string
  }

  export type DokumenPasienCreateOrConnectWithoutPasienInput = {
    where: DokumenPasienWhereUniqueInput
    create: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput>
  }

  export type DokumenPasienCreateManyPasienInputEnvelope = {
    data: DokumenPasienCreateManyPasienInput | DokumenPasienCreateManyPasienInput[]
    skipDuplicates?: boolean
  }

  export type IdentifierPasienCreateWithoutPasienInput = {
    id?: string
    nilaiIdentifier: string
    use: string
    jenisIdentifier: JenisIdentifierCreateNestedOneWithoutIdentifierPasienInput
  }

  export type IdentifierPasienUncheckedCreateWithoutPasienInput = {
    id?: string
    jenisIdentifierId: string
    nilaiIdentifier: string
    use: string
  }

  export type IdentifierPasienCreateOrConnectWithoutPasienInput = {
    where: IdentifierPasienWhereUniqueInput
    create: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput>
  }

  export type IdentifierPasienCreateManyPasienInputEnvelope = {
    data: IdentifierPasienCreateManyPasienInput | IdentifierPasienCreateManyPasienInput[]
    skipDuplicates?: boolean
  }

  export type KontakPasienCreateWithoutPasienInput = {
    id?: string
    nilaiKontak: string
    use: $Enums.Use
    jenisKontak: JenisKontakCreateNestedOneWithoutKontakPasienInput
  }

  export type KontakPasienUncheckedCreateWithoutPasienInput = {
    id?: string
    jenisKontakId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type KontakPasienCreateOrConnectWithoutPasienInput = {
    where: KontakPasienWhereUniqueInput
    create: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput>
  }

  export type KontakPasienCreateManyPasienInputEnvelope = {
    data: KontakPasienCreateManyPasienInput | KontakPasienCreateManyPasienInput[]
    skipDuplicates?: boolean
  }

  export type NamaPasienCreateWithoutPasienInput = {
    id?: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
  }

  export type NamaPasienUncheckedCreateWithoutPasienInput = {
    id?: string
    namaDepan: string
    namaTengah: string
    namaBelakang: string
    namaLengkap: string
    use: $Enums.Use
  }

  export type NamaPasienCreateOrConnectWithoutPasienInput = {
    where: NamaPasienWhereUniqueInput
    create: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
  }

  export type AgamaCreateWithoutPasienInput = {
    id?: string
    namaAgama: string
  }

  export type AgamaUncheckedCreateWithoutPasienInput = {
    id?: string
    namaAgama: string
  }

  export type AgamaCreateOrConnectWithoutPasienInput = {
    where: AgamaWhereUniqueInput
    create: XOR<AgamaCreateWithoutPasienInput, AgamaUncheckedCreateWithoutPasienInput>
  }

  export type PendidikanCreateWithoutPasienInput = {
    id?: string
    namaPendidikan: string
  }

  export type PendidikanUncheckedCreateWithoutPasienInput = {
    id?: string
    namaPendidikan: string
  }

  export type PendidikanCreateOrConnectWithoutPasienInput = {
    where: PendidikanWhereUniqueInput
    create: XOR<PendidikanCreateWithoutPasienInput, PendidikanUncheckedCreateWithoutPasienInput>
  }

  export type StatusPembiayaanCreateWithoutPasienInput = {
    id?: string
    namaStatusPembiayaan: string
  }

  export type StatusPembiayaanUncheckedCreateWithoutPasienInput = {
    id?: string
    namaStatusPembiayaan: string
  }

  export type StatusPembiayaanCreateOrConnectWithoutPasienInput = {
    where: StatusPembiayaanWhereUniqueInput
    create: XOR<StatusPembiayaanCreateWithoutPasienInput, StatusPembiayaanUncheckedCreateWithoutPasienInput>
  }

  export type StatusPerkawinanCreateWithoutPasienInput = {
    id?: string
    namaStatusPerkawinan: string
  }

  export type StatusPerkawinanUncheckedCreateWithoutPasienInput = {
    id?: string
    namaStatusPerkawinan: string
  }

  export type StatusPerkawinanCreateOrConnectWithoutPasienInput = {
    where: StatusPerkawinanWhereUniqueInput
    create: XOR<StatusPerkawinanCreateWithoutPasienInput, StatusPerkawinanUncheckedCreateWithoutPasienInput>
  }

  export type UserCreateWithoutPasienInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPasienInput = {
    id?: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPasienInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasienInput, UserUncheckedCreateWithoutPasienInput>
  }

  export type AlamatPasienUpsertWithoutPasienInput = {
    update: XOR<AlamatPasienUpdateWithoutPasienInput, AlamatPasienUncheckedUpdateWithoutPasienInput>
    create: XOR<AlamatPasienCreateWithoutPasienInput, AlamatPasienUncheckedCreateWithoutPasienInput>
    where?: AlamatPasienWhereInput
  }

  export type AlamatPasienUpdateToOneWithWhereWithoutPasienInput = {
    where?: AlamatPasienWhereInput
    data: XOR<AlamatPasienUpdateWithoutPasienInput, AlamatPasienUncheckedUpdateWithoutPasienInput>
  }

  export type AlamatPasienUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatPasienUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jalan?: StringFieldUpdateOperationsInput | string
    rtRw?: StringFieldUpdateOperationsInput | string
    lingkungan?: StringFieldUpdateOperationsInput | string
    kelurahanDesa?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupatenKota?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienUpsertWithWhereUniqueWithoutPasienInput = {
    where: DokumenPasienWhereUniqueInput
    update: XOR<DokumenPasienUpdateWithoutPasienInput, DokumenPasienUncheckedUpdateWithoutPasienInput>
    create: XOR<DokumenPasienCreateWithoutPasienInput, DokumenPasienUncheckedCreateWithoutPasienInput>
  }

  export type DokumenPasienUpdateWithWhereUniqueWithoutPasienInput = {
    where: DokumenPasienWhereUniqueInput
    data: XOR<DokumenPasienUpdateWithoutPasienInput, DokumenPasienUncheckedUpdateWithoutPasienInput>
  }

  export type DokumenPasienUpdateManyWithWhereWithoutPasienInput = {
    where: DokumenPasienScalarWhereInput
    data: XOR<DokumenPasienUpdateManyMutationInput, DokumenPasienUncheckedUpdateManyWithoutPasienInput>
  }

  export type DokumenPasienScalarWhereInput = {
    AND?: DokumenPasienScalarWhereInput | DokumenPasienScalarWhereInput[]
    OR?: DokumenPasienScalarWhereInput[]
    NOT?: DokumenPasienScalarWhereInput | DokumenPasienScalarWhereInput[]
    id?: StringFilter<"DokumenPasien"> | string
    pasienId?: StringFilter<"DokumenPasien"> | string
    tipeDokumen?: StringFilter<"DokumenPasien"> | string
    fileUrl?: StringFilter<"DokumenPasien"> | string
  }

  export type IdentifierPasienUpsertWithWhereUniqueWithoutPasienInput = {
    where: IdentifierPasienWhereUniqueInput
    update: XOR<IdentifierPasienUpdateWithoutPasienInput, IdentifierPasienUncheckedUpdateWithoutPasienInput>
    create: XOR<IdentifierPasienCreateWithoutPasienInput, IdentifierPasienUncheckedCreateWithoutPasienInput>
  }

  export type IdentifierPasienUpdateWithWhereUniqueWithoutPasienInput = {
    where: IdentifierPasienWhereUniqueInput
    data: XOR<IdentifierPasienUpdateWithoutPasienInput, IdentifierPasienUncheckedUpdateWithoutPasienInput>
  }

  export type IdentifierPasienUpdateManyWithWhereWithoutPasienInput = {
    where: IdentifierPasienScalarWhereInput
    data: XOR<IdentifierPasienUpdateManyMutationInput, IdentifierPasienUncheckedUpdateManyWithoutPasienInput>
  }

  export type IdentifierPasienScalarWhereInput = {
    AND?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
    OR?: IdentifierPasienScalarWhereInput[]
    NOT?: IdentifierPasienScalarWhereInput | IdentifierPasienScalarWhereInput[]
    id?: StringFilter<"IdentifierPasien"> | string
    pasienId?: StringFilter<"IdentifierPasien"> | string
    jenisIdentifierId?: StringFilter<"IdentifierPasien"> | string
    nilaiIdentifier?: StringFilter<"IdentifierPasien"> | string
    use?: StringFilter<"IdentifierPasien"> | string
  }

  export type KontakPasienUpsertWithWhereUniqueWithoutPasienInput = {
    where: KontakPasienWhereUniqueInput
    update: XOR<KontakPasienUpdateWithoutPasienInput, KontakPasienUncheckedUpdateWithoutPasienInput>
    create: XOR<KontakPasienCreateWithoutPasienInput, KontakPasienUncheckedCreateWithoutPasienInput>
  }

  export type KontakPasienUpdateWithWhereUniqueWithoutPasienInput = {
    where: KontakPasienWhereUniqueInput
    data: XOR<KontakPasienUpdateWithoutPasienInput, KontakPasienUncheckedUpdateWithoutPasienInput>
  }

  export type KontakPasienUpdateManyWithWhereWithoutPasienInput = {
    where: KontakPasienScalarWhereInput
    data: XOR<KontakPasienUpdateManyMutationInput, KontakPasienUncheckedUpdateManyWithoutPasienInput>
  }

  export type KontakPasienScalarWhereInput = {
    AND?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
    OR?: KontakPasienScalarWhereInput[]
    NOT?: KontakPasienScalarWhereInput | KontakPasienScalarWhereInput[]
    id?: StringFilter<"KontakPasien"> | string
    pasienId?: StringFilter<"KontakPasien"> | string
    jenisKontakId?: StringFilter<"KontakPasien"> | string
    nilaiKontak?: StringFilter<"KontakPasien"> | string
    use?: EnumUseFilter<"KontakPasien"> | $Enums.Use
  }

  export type NamaPasienUpsertWithoutPasienInput = {
    update: XOR<NamaPasienUpdateWithoutPasienInput, NamaPasienUncheckedUpdateWithoutPasienInput>
    create: XOR<NamaPasienCreateWithoutPasienInput, NamaPasienUncheckedCreateWithoutPasienInput>
    where?: NamaPasienWhereInput
  }

  export type NamaPasienUpdateToOneWithWhereWithoutPasienInput = {
    where?: NamaPasienWhereInput
    data: XOR<NamaPasienUpdateWithoutPasienInput, NamaPasienUncheckedUpdateWithoutPasienInput>
  }

  export type NamaPasienUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type NamaPasienUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaDepan?: StringFieldUpdateOperationsInput | string
    namaTengah?: StringFieldUpdateOperationsInput | string
    namaBelakang?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type AgamaUpsertWithoutPasienInput = {
    update: XOR<AgamaUpdateWithoutPasienInput, AgamaUncheckedUpdateWithoutPasienInput>
    create: XOR<AgamaCreateWithoutPasienInput, AgamaUncheckedCreateWithoutPasienInput>
    where?: AgamaWhereInput
  }

  export type AgamaUpdateToOneWithWhereWithoutPasienInput = {
    where?: AgamaWhereInput
    data: XOR<AgamaUpdateWithoutPasienInput, AgamaUncheckedUpdateWithoutPasienInput>
  }

  export type AgamaUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
  }

  export type AgamaUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAgama?: StringFieldUpdateOperationsInput | string
  }

  export type PendidikanUpsertWithoutPasienInput = {
    update: XOR<PendidikanUpdateWithoutPasienInput, PendidikanUncheckedUpdateWithoutPasienInput>
    create: XOR<PendidikanCreateWithoutPasienInput, PendidikanUncheckedCreateWithoutPasienInput>
    where?: PendidikanWhereInput
  }

  export type PendidikanUpdateToOneWithWhereWithoutPasienInput = {
    where?: PendidikanWhereInput
    data: XOR<PendidikanUpdateWithoutPasienInput, PendidikanUncheckedUpdateWithoutPasienInput>
  }

  export type PendidikanUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
  }

  export type PendidikanUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPendidikan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPembiayaanUpsertWithoutPasienInput = {
    update: XOR<StatusPembiayaanUpdateWithoutPasienInput, StatusPembiayaanUncheckedUpdateWithoutPasienInput>
    create: XOR<StatusPembiayaanCreateWithoutPasienInput, StatusPembiayaanUncheckedCreateWithoutPasienInput>
    where?: StatusPembiayaanWhereInput
  }

  export type StatusPembiayaanUpdateToOneWithWhereWithoutPasienInput = {
    where?: StatusPembiayaanWhereInput
    data: XOR<StatusPembiayaanUpdateWithoutPasienInput, StatusPembiayaanUncheckedUpdateWithoutPasienInput>
  }

  export type StatusPembiayaanUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPembiayaanUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPembiayaan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPerkawinanUpsertWithoutPasienInput = {
    update: XOR<StatusPerkawinanUpdateWithoutPasienInput, StatusPerkawinanUncheckedUpdateWithoutPasienInput>
    create: XOR<StatusPerkawinanCreateWithoutPasienInput, StatusPerkawinanUncheckedCreateWithoutPasienInput>
    where?: StatusPerkawinanWhereInput
  }

  export type StatusPerkawinanUpdateToOneWithWhereWithoutPasienInput = {
    where?: StatusPerkawinanWhereInput
    data: XOR<StatusPerkawinanUpdateWithoutPasienInput, StatusPerkawinanUncheckedUpdateWithoutPasienInput>
  }

  export type StatusPerkawinanUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
  }

  export type StatusPerkawinanUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaStatusPerkawinan?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPasienInput = {
    update: XOR<UserUpdateWithoutPasienInput, UserUncheckedUpdateWithoutPasienInput>
    create: XOR<UserCreateWithoutPasienInput, UserUncheckedCreateWithoutPasienInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasienInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasienInput, UserUncheckedUpdateWithoutPasienInput>
  }

  export type UserUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateWithoutNamaInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutNamaInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutNamaInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutNamaInput, PasienUncheckedCreateWithoutNamaInput>
  }

  export type PasienUpsertWithoutNamaInput = {
    update: XOR<PasienUpdateWithoutNamaInput, PasienUncheckedUpdateWithoutNamaInput>
    create: XOR<PasienCreateWithoutNamaInput, PasienUncheckedCreateWithoutNamaInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutNamaInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutNamaInput, PasienUncheckedUpdateWithoutNamaInput>
  }

  export type PasienUpdateWithoutNamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutNamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
  }

  export type JenisKontakCreateWithoutKontakPasienInput = {
    id?: string
    namaJenis: string
  }

  export type JenisKontakUncheckedCreateWithoutKontakPasienInput = {
    id?: string
    namaJenis: string
  }

  export type JenisKontakCreateOrConnectWithoutKontakPasienInput = {
    where: JenisKontakWhereUniqueInput
    create: XOR<JenisKontakCreateWithoutKontakPasienInput, JenisKontakUncheckedCreateWithoutKontakPasienInput>
  }

  export type PasienCreateWithoutKontakInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutKontakInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutKontakInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutKontakInput, PasienUncheckedCreateWithoutKontakInput>
  }

  export type JenisKontakUpsertWithoutKontakPasienInput = {
    update: XOR<JenisKontakUpdateWithoutKontakPasienInput, JenisKontakUncheckedUpdateWithoutKontakPasienInput>
    create: XOR<JenisKontakCreateWithoutKontakPasienInput, JenisKontakUncheckedCreateWithoutKontakPasienInput>
    where?: JenisKontakWhereInput
  }

  export type JenisKontakUpdateToOneWithWhereWithoutKontakPasienInput = {
    where?: JenisKontakWhereInput
    data: XOR<JenisKontakUpdateWithoutKontakPasienInput, JenisKontakUncheckedUpdateWithoutKontakPasienInput>
  }

  export type JenisKontakUpdateWithoutKontakPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type JenisKontakUncheckedUpdateWithoutKontakPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenis?: StringFieldUpdateOperationsInput | string
  }

  export type PasienUpsertWithoutKontakInput = {
    update: XOR<PasienUpdateWithoutKontakInput, PasienUncheckedUpdateWithoutKontakInput>
    create: XOR<PasienCreateWithoutKontakInput, PasienUncheckedCreateWithoutKontakInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutKontakInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutKontakInput, PasienUncheckedUpdateWithoutKontakInput>
  }

  export type PasienUpdateWithoutKontakInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutKontakInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type KontakPasienCreateWithoutJenisKontakInput = {
    id?: string
    nilaiKontak: string
    use: $Enums.Use
    pasien: PasienCreateNestedOneWithoutKontakInput
  }

  export type KontakPasienUncheckedCreateWithoutJenisKontakInput = {
    id?: string
    pasienId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type KontakPasienCreateOrConnectWithoutJenisKontakInput = {
    where: KontakPasienWhereUniqueInput
    create: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput>
  }

  export type KontakPasienCreateManyJenisKontakInputEnvelope = {
    data: KontakPasienCreateManyJenisKontakInput | KontakPasienCreateManyJenisKontakInput[]
    skipDuplicates?: boolean
  }

  export type KontakPasienUpsertWithWhereUniqueWithoutJenisKontakInput = {
    where: KontakPasienWhereUniqueInput
    update: XOR<KontakPasienUpdateWithoutJenisKontakInput, KontakPasienUncheckedUpdateWithoutJenisKontakInput>
    create: XOR<KontakPasienCreateWithoutJenisKontakInput, KontakPasienUncheckedCreateWithoutJenisKontakInput>
  }

  export type KontakPasienUpdateWithWhereUniqueWithoutJenisKontakInput = {
    where: KontakPasienWhereUniqueInput
    data: XOR<KontakPasienUpdateWithoutJenisKontakInput, KontakPasienUncheckedUpdateWithoutJenisKontakInput>
  }

  export type KontakPasienUpdateManyWithWhereWithoutJenisKontakInput = {
    where: KontakPasienScalarWhereInput
    data: XOR<KontakPasienUpdateManyMutationInput, KontakPasienUncheckedUpdateManyWithoutJenisKontakInput>
  }

  export type PasienCreateWithoutAlamatInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutAlamatInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutAlamatInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutAlamatInput, PasienUncheckedCreateWithoutAlamatInput>
  }

  export type PasienUpsertWithoutAlamatInput = {
    update: XOR<PasienUpdateWithoutAlamatInput, PasienUncheckedUpdateWithoutAlamatInput>
    create: XOR<PasienCreateWithoutAlamatInput, PasienUncheckedCreateWithoutAlamatInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutAlamatInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutAlamatInput, PasienUncheckedUpdateWithoutAlamatInput>
  }

  export type PasienUpdateWithoutAlamatInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutAlamatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienCreateWithoutDokumenInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutDokumenInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutDokumenInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutDokumenInput, PasienUncheckedCreateWithoutDokumenInput>
  }

  export type PasienUpsertWithoutDokumenInput = {
    update: XOR<PasienUpdateWithoutDokumenInput, PasienUncheckedUpdateWithoutDokumenInput>
    create: XOR<PasienCreateWithoutDokumenInput, PasienUncheckedCreateWithoutDokumenInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutDokumenInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutDokumenInput, PasienUncheckedUpdateWithoutDokumenInput>
  }

  export type PasienUpdateWithoutDokumenInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutDokumenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type JenisIdentifierCreateWithoutIdentifierPasienInput = {
    id?: string
    namaJenisIdentifier: string
  }

  export type JenisIdentifierUncheckedCreateWithoutIdentifierPasienInput = {
    id?: string
    namaJenisIdentifier: string
  }

  export type JenisIdentifierCreateOrConnectWithoutIdentifierPasienInput = {
    where: JenisIdentifierWhereUniqueInput
    create: XOR<JenisIdentifierCreateWithoutIdentifierPasienInput, JenisIdentifierUncheckedCreateWithoutIdentifierPasienInput>
  }

  export type PasienCreateWithoutIdentifiersInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutIdentifiersInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutIdentifiersInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutIdentifiersInput, PasienUncheckedCreateWithoutIdentifiersInput>
  }

  export type JenisIdentifierUpsertWithoutIdentifierPasienInput = {
    update: XOR<JenisIdentifierUpdateWithoutIdentifierPasienInput, JenisIdentifierUncheckedUpdateWithoutIdentifierPasienInput>
    create: XOR<JenisIdentifierCreateWithoutIdentifierPasienInput, JenisIdentifierUncheckedCreateWithoutIdentifierPasienInput>
    where?: JenisIdentifierWhereInput
  }

  export type JenisIdentifierUpdateToOneWithWhereWithoutIdentifierPasienInput = {
    where?: JenisIdentifierWhereInput
    data: XOR<JenisIdentifierUpdateWithoutIdentifierPasienInput, JenisIdentifierUncheckedUpdateWithoutIdentifierPasienInput>
  }

  export type JenisIdentifierUpdateWithoutIdentifierPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
  }

  export type JenisIdentifierUncheckedUpdateWithoutIdentifierPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaJenisIdentifier?: StringFieldUpdateOperationsInput | string
  }

  export type PasienUpsertWithoutIdentifiersInput = {
    update: XOR<PasienUpdateWithoutIdentifiersInput, PasienUncheckedUpdateWithoutIdentifiersInput>
    create: XOR<PasienCreateWithoutIdentifiersInput, PasienUncheckedCreateWithoutIdentifiersInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutIdentifiersInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutIdentifiersInput, PasienUncheckedUpdateWithoutIdentifiersInput>
  }

  export type PasienUpdateWithoutIdentifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutIdentifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type IdentifierPasienCreateWithoutJenisIdentifierInput = {
    id?: string
    nilaiIdentifier: string
    use: string
    pasien: PasienCreateNestedOneWithoutIdentifiersInput
  }

  export type IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput = {
    id?: string
    pasienId: string
    nilaiIdentifier: string
    use: string
  }

  export type IdentifierPasienCreateOrConnectWithoutJenisIdentifierInput = {
    where: IdentifierPasienWhereUniqueInput
    create: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput>
  }

  export type IdentifierPasienCreateManyJenisIdentifierInputEnvelope = {
    data: IdentifierPasienCreateManyJenisIdentifierInput | IdentifierPasienCreateManyJenisIdentifierInput[]
    skipDuplicates?: boolean
  }

  export type IdentifierPasienUpsertWithWhereUniqueWithoutJenisIdentifierInput = {
    where: IdentifierPasienWhereUniqueInput
    update: XOR<IdentifierPasienUpdateWithoutJenisIdentifierInput, IdentifierPasienUncheckedUpdateWithoutJenisIdentifierInput>
    create: XOR<IdentifierPasienCreateWithoutJenisIdentifierInput, IdentifierPasienUncheckedCreateWithoutJenisIdentifierInput>
  }

  export type IdentifierPasienUpdateWithWhereUniqueWithoutJenisIdentifierInput = {
    where: IdentifierPasienWhereUniqueInput
    data: XOR<IdentifierPasienUpdateWithoutJenisIdentifierInput, IdentifierPasienUncheckedUpdateWithoutJenisIdentifierInput>
  }

  export type IdentifierPasienUpdateManyWithWhereWithoutJenisIdentifierInput = {
    where: IdentifierPasienScalarWhereInput
    data: XOR<IdentifierPasienUpdateManyMutationInput, IdentifierPasienUncheckedUpdateManyWithoutJenisIdentifierInput>
  }

  export type PasienCreateWithoutStatusPerkawinanInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutStatusPerkawinanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutStatusPerkawinanInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput>
  }

  export type PasienCreateManyStatusPerkawinanInputEnvelope = {
    data: PasienCreateManyStatusPerkawinanInput | PasienCreateManyStatusPerkawinanInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithWhereUniqueWithoutStatusPerkawinanInput = {
    where: PasienWhereUniqueInput
    update: XOR<PasienUpdateWithoutStatusPerkawinanInput, PasienUncheckedUpdateWithoutStatusPerkawinanInput>
    create: XOR<PasienCreateWithoutStatusPerkawinanInput, PasienUncheckedCreateWithoutStatusPerkawinanInput>
  }

  export type PasienUpdateWithWhereUniqueWithoutStatusPerkawinanInput = {
    where: PasienWhereUniqueInput
    data: XOR<PasienUpdateWithoutStatusPerkawinanInput, PasienUncheckedUpdateWithoutStatusPerkawinanInput>
  }

  export type PasienUpdateManyWithWhereWithoutStatusPerkawinanInput = {
    where: PasienScalarWhereInput
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyWithoutStatusPerkawinanInput>
  }

  export type PasienScalarWhereInput = {
    AND?: PasienScalarWhereInput | PasienScalarWhereInput[]
    OR?: PasienScalarWhereInput[]
    NOT?: PasienScalarWhereInput | PasienScalarWhereInput[]
    id?: StringFilter<"Pasien"> | string
    userId?: StringFilter<"Pasien"> | string
    gender?: EnumGenderFilter<"Pasien"> | $Enums.Gender
    ihsNumber?: StringFilter<"Pasien"> | string
    medicalRecordNumber?: StringFilter<"Pasien"> | string
    tanggalLahir?: DateTimeFilter<"Pasien"> | Date | string
    statusPerkawinanId?: StringFilter<"Pasien"> | string
    statusPembiayaanId?: StringFilter<"Pasien"> | string
    pendidikanId?: StringFilter<"Pasien"> | string
    agamaId?: StringFilter<"Pasien"> | string
    updatedAt?: DateTimeFilter<"Pasien"> | Date | string
    createdAt?: DateTimeFilter<"Pasien"> | Date | string
  }

  export type PasienCreateWithoutStatusPembiayaanInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutStatusPembiayaanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutStatusPembiayaanInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput>
  }

  export type PasienCreateManyStatusPembiayaanInputEnvelope = {
    data: PasienCreateManyStatusPembiayaanInput | PasienCreateManyStatusPembiayaanInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithWhereUniqueWithoutStatusPembiayaanInput = {
    where: PasienWhereUniqueInput
    update: XOR<PasienUpdateWithoutStatusPembiayaanInput, PasienUncheckedUpdateWithoutStatusPembiayaanInput>
    create: XOR<PasienCreateWithoutStatusPembiayaanInput, PasienUncheckedCreateWithoutStatusPembiayaanInput>
  }

  export type PasienUpdateWithWhereUniqueWithoutStatusPembiayaanInput = {
    where: PasienWhereUniqueInput
    data: XOR<PasienUpdateWithoutStatusPembiayaanInput, PasienUncheckedUpdateWithoutStatusPembiayaanInput>
  }

  export type PasienUpdateManyWithWhereWithoutStatusPembiayaanInput = {
    where: PasienScalarWhereInput
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyWithoutStatusPembiayaanInput>
  }

  export type PasienCreateWithoutPendidikanInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    agama: AgamaCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutPendidikanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutPendidikanInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput>
  }

  export type PasienCreateManyPendidikanInputEnvelope = {
    data: PasienCreateManyPendidikanInput | PasienCreateManyPendidikanInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithWhereUniqueWithoutPendidikanInput = {
    where: PasienWhereUniqueInput
    update: XOR<PasienUpdateWithoutPendidikanInput, PasienUncheckedUpdateWithoutPendidikanInput>
    create: XOR<PasienCreateWithoutPendidikanInput, PasienUncheckedCreateWithoutPendidikanInput>
  }

  export type PasienUpdateWithWhereUniqueWithoutPendidikanInput = {
    where: PasienWhereUniqueInput
    data: XOR<PasienUpdateWithoutPendidikanInput, PasienUncheckedUpdateWithoutPendidikanInput>
  }

  export type PasienUpdateManyWithWhereWithoutPendidikanInput = {
    where: PasienScalarWhereInput
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyWithoutPendidikanInput>
  }

  export type PasienCreateWithoutAgamaInput = {
    id?: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienCreateNestedManyWithoutPasienInput
    nama?: NamaPasienCreateNestedOneWithoutPasienInput
    pendidikan: PendidikanCreateNestedOneWithoutPasienInput
    statusPembiayaan: StatusPembiayaanCreateNestedOneWithoutPasienInput
    statusPerkawinan: StatusPerkawinanCreateNestedOneWithoutPasienInput
    user: UserCreateNestedOneWithoutPasienInput
  }

  export type PasienUncheckedCreateWithoutAgamaInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    alamat?: AlamatPasienUncheckedCreateNestedOneWithoutPasienInput
    dokumen?: DokumenPasienUncheckedCreateNestedManyWithoutPasienInput
    identifiers?: IdentifierPasienUncheckedCreateNestedManyWithoutPasienInput
    kontak?: KontakPasienUncheckedCreateNestedManyWithoutPasienInput
    nama?: NamaPasienUncheckedCreateNestedOneWithoutPasienInput
  }

  export type PasienCreateOrConnectWithoutAgamaInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput>
  }

  export type PasienCreateManyAgamaInputEnvelope = {
    data: PasienCreateManyAgamaInput | PasienCreateManyAgamaInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithWhereUniqueWithoutAgamaInput = {
    where: PasienWhereUniqueInput
    update: XOR<PasienUpdateWithoutAgamaInput, PasienUncheckedUpdateWithoutAgamaInput>
    create: XOR<PasienCreateWithoutAgamaInput, PasienUncheckedCreateWithoutAgamaInput>
  }

  export type PasienUpdateWithWhereUniqueWithoutAgamaInput = {
    where: PasienWhereUniqueInput
    data: XOR<PasienUpdateWithoutAgamaInput, PasienUncheckedUpdateWithoutAgamaInput>
  }

  export type PasienUpdateManyWithWhereWithoutAgamaInput = {
    where: PasienScalarWhereInput
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyWithoutAgamaInput>
  }

  export type DokumenPasienCreateManyPasienInput = {
    id?: string
    tipeDokumen: string
    fileUrl: string
  }

  export type IdentifierPasienCreateManyPasienInput = {
    id?: string
    jenisIdentifierId: string
    nilaiIdentifier: string
    use: string
  }

  export type KontakPasienCreateManyPasienInput = {
    id?: string
    jenisKontakId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type DokumenPasienUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenPasienUncheckedUpdateManyWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipeDokumen?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
    jenisIdentifier?: JenisIdentifierUpdateOneRequiredWithoutIdentifierPasienNestedInput
  }

  export type IdentifierPasienUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisIdentifierId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienUncheckedUpdateManyWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisIdentifierId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type KontakPasienUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
    jenisKontak?: JenisKontakUpdateOneRequiredWithoutKontakPasienNestedInput
  }

  export type KontakPasienUncheckedUpdateWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisKontakId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienUncheckedUpdateManyWithoutPasienInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisKontakId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienCreateManyJenisKontakInput = {
    id?: string
    pasienId: string
    nilaiKontak: string
    use: $Enums.Use
  }

  export type KontakPasienUpdateWithoutJenisKontakInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
    pasien?: PasienUpdateOneRequiredWithoutKontakNestedInput
  }

  export type KontakPasienUncheckedUpdateWithoutJenisKontakInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type KontakPasienUncheckedUpdateManyWithoutJenisKontakInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    nilaiKontak?: StringFieldUpdateOperationsInput | string
    use?: EnumUseFieldUpdateOperationsInput | $Enums.Use
  }

  export type IdentifierPasienCreateManyJenisIdentifierInput = {
    id?: string
    pasienId: string
    nilaiIdentifier: string
    use: string
  }

  export type IdentifierPasienUpdateWithoutJenisIdentifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
    pasien?: PasienUpdateOneRequiredWithoutIdentifiersNestedInput
  }

  export type IdentifierPasienUncheckedUpdateWithoutJenisIdentifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type IdentifierPasienUncheckedUpdateManyWithoutJenisIdentifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasienId?: StringFieldUpdateOperationsInput | string
    nilaiIdentifier?: StringFieldUpdateOperationsInput | string
    use?: StringFieldUpdateOperationsInput | string
  }

  export type PasienCreateManyStatusPerkawinanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPembiayaanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PasienUpdateWithoutStatusPerkawinanInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutStatusPerkawinanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateManyWithoutStatusPerkawinanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateManyStatusPembiayaanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    pendidikanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PasienUpdateWithoutStatusPembiayaanInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutStatusPembiayaanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateManyWithoutStatusPembiayaanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateManyPendidikanInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    agamaId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PasienUpdateWithoutPendidikanInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    agama?: AgamaUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutPendidikanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateManyWithoutPendidikanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    agamaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasienCreateManyAgamaInput = {
    id?: string
    userId: string
    gender: $Enums.Gender
    ihsNumber: string
    medicalRecordNumber: string
    tanggalLahir: Date | string
    statusPerkawinanId: string
    statusPembiayaanId: string
    pendidikanId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PasienUpdateWithoutAgamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUpdateOneWithoutPasienNestedInput
    pendidikan?: PendidikanUpdateOneRequiredWithoutPasienNestedInput
    statusPembiayaan?: StatusPembiayaanUpdateOneRequiredWithoutPasienNestedInput
    statusPerkawinan?: StatusPerkawinanUpdateOneRequiredWithoutPasienNestedInput
    user?: UserUpdateOneRequiredWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateWithoutAgamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: AlamatPasienUncheckedUpdateOneWithoutPasienNestedInput
    dokumen?: DokumenPasienUncheckedUpdateManyWithoutPasienNestedInput
    identifiers?: IdentifierPasienUncheckedUpdateManyWithoutPasienNestedInput
    kontak?: KontakPasienUncheckedUpdateManyWithoutPasienNestedInput
    nama?: NamaPasienUncheckedUpdateOneWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateManyWithoutAgamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    ihsNumber?: StringFieldUpdateOperationsInput | string
    medicalRecordNumber?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPerkawinanId?: StringFieldUpdateOperationsInput | string
    statusPembiayaanId?: StringFieldUpdateOperationsInput | string
    pendidikanId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}