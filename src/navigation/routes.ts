import { AUTH_ROUTES } from "@features/auth/navigation";
import { onboardingRoutes } from "@features/onboarding/navigation";

const routes = {
  onBoarding: onboardingRoutes,
  auth: AUTH_ROUTES,
} as const;

export default routes;
