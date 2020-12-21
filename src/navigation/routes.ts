import { AUTH_ROUTES } from "@features/auth/navigation";
import { onboardingRoutes } from "@features/onboarding/navigation";
import { APP_ROUTES } from "./app";

const routes = {
  onBoarding: onboardingRoutes,
  auth: AUTH_ROUTES,
  app: APP_ROUTES,
} as const;

export default routes;
