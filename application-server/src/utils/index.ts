import * as jwt from 'jsonwebtoken'
import { authorize } from './permissions'
import { Prisma } from './../generated/prisma'

export const database = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: true,
})

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

export const permissions = {
  Query: {
    me: authorize(getUserId),
  },
}
