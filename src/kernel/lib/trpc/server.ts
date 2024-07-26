import { SharedSession } from "@/kernel/domain/user";
import { getAppSessionServer } from "../next-auth/server";
import { AnyRouter, TRPCError, initTRPC } from "@trpc/server";
import { z, ZodTypeAny } from "zod";
import { createServerSideHelpers } from "./../../../../node_modules/@trpc/react-query/src/server/ssgProxy";

export const createContext = async () => {
  const session = await getAppSessionServer();

  return {
    session,
  };
};

export const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const authorizedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      session: ctx.session,
    },
  });
});

export const checkAbilityProcedure = <Ability>({
  check,
  create,
}: {
  check?: (ability: Ability) => boolean;
  create: (session: SharedSession) => Ability;
}) =>
  authorizedProcedure.use(async ({ ctx, next }) => {
    const ability = create(ctx.session);

    if (check && !check(ability)) {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    return next({
      ctx: {
        session: ctx.session,
        ability,
      },
    });
  });

export const checkAbilityInputProcedure = <Ability, Input extends ZodTypeAny>({
  input,
  check,
  create,
}: {
  check?: (ability: Ability, input: z.infer<Input>) => boolean;
  create: (session: SharedSession) => Ability;
  input: Input;
}) =>
  authorizedProcedure.input(input).use(async ({ ctx, next, input: params }) => {
    const ability = create(ctx.session);

    if (!check?.(ability, params)) {
      throw new TRPCError({ code: "FORBIDDEN" });
    }
    return next({
      ctx: {
        session: ctx.session,
        ability,
      },
    });
  });

export const sharedRouter = router({});
export type SharedRouter = typeof sharedRouter;

export const createPublicServerApi = <T extends AnyRouter>(router: T) =>
  createServerSideHelpers<T>({
    router: router,
    ctx: () => ({}),
  } as any);
